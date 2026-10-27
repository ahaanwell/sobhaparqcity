import { notFound } from "next/navigation";
import { DEFAULT_IMAGE_ALT, IMAGES, JsonLd, SITE_NAME, breadcrumbNode, pageUrl, webPageNode } from "@/lib/seo";
import BlogDetailsPage from "./BlogDetailsPage";


async function fetchBlogDetails(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/slug/${slug}`, {
      headers: { "x-api-key": process.env.NEXT_PUBLIC_API_KEY },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    const blogData = await res.json();
    return blogData || null;
  } catch (err) {
    console.error("Fetch blog error:", err?.message);
    return null;
  }
}

function blogSeo(blog, blogData) {
  const title = blogData?.metaTitle || blogData?.title;
  const description = blogData?.metaDescription || "";
  const image = blogData?.featuredImage?.url || IMAGES.banner.url;
  return { path: `/${blog}`, title, description, image };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { blog } = resolvedParams;
  const blogData = await fetchBlogDetails(blog);
  if (!blogData) notFound();

  const { path, title, description, image } = blogSeo(blog, blogData);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode({ path, name: title, description, image, about: false }),
      breadcrumbNode(path, blogData?.title || title),
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl(path)}#article`,
        headline: blogData?.title || title,
        description,
        image,
        url: pageUrl(path),
        mainEntityOfPage: { "@id": `${pageUrl(path)}#webpage` },
        ...(blogData?.createdAt ? { datePublished: blogData.createdAt } : {}),
        ...(blogData?.updatedAt || blogData?.createdAt
          ? { dateModified: blogData.updatedAt || blogData.createdAt }
          : {}),
        author: { "@type": "Organization", name: SITE_NAME, url: pageUrl("/") },
        publisher: { "@id": `${pageUrl("/")}#organization` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <BlogDetailsPage blogData={blogData} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { blog } = resolvedParams;

  const blogData = await fetchBlogDetails(blog)
  if (!blogData) return {};

  const { path, title, description, image } = blogSeo(blog, blogData);
  const url = pageUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "article",
      ...(blogData?.createdAt ? { publishedTime: blogData.createdAt } : {}),
      ...(blogData?.updatedAt ? { modifiedTime: blogData.updatedAt } : {}),
      images: [
        blogData?.featuredImage
          ? { url: image, width: 1200, height: 630, alt: blogData?.title }
          : { ...IMAGES.banner, alt: DEFAULT_IMAGE_ALT },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
