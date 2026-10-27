export const SITE_URL = "https://www.sobhaparqcity.in";

export function IntLink({ href, children }) {
  return <a href={`${SITE_URL}${href}`}>{children}</a>;
}

export function ExtLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer">
      {children}
    </a>
  );
}
