/* eslint-disable react/no-unescaped-entities */
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const LAST_UPDATED = "27 October 2026";

const cell = "border border-gray-300 px-4 py-3 align-top";
const headCell = "border border-gray-300 px-4 py-3 font-semibold";

const atAGlance = [
  ["What do you collect?", "Your name, mobile number and email when you fill in a form, plus anything you tell us on a call or WhatsApp."],
  ["Why?", "To send you the Sobha Parq City details you asked for and to help with your home search."],
  ["Do you sell my data?", "No, never."],
  ["Who else sees it?", "The developer's sales team, the service providers that run this site, and authorities only when the law requires it."],
  ["Can I stop hearing from you?", "Yes, at any time. Just ask."],
];

const dataTypes = [
  ["Contact details", "Name, mobile number (with country code), email address", "When you fill in an enquiry, site visit, brochure or cost sheet form"],
  ["Conversations", "The number you use and what you write or say to us", "When you call us or message us on WhatsApp"],
  ["Technical data", "Browser type, device type, IP address", "Recorded automatically by our hosting provider to keep the site secure and running"],
];

const faqs = [
  ["Why do you need my phone number and email?", "So we can send the price list, brochure or floor plans you requested and help you book a site visit."],
  ["Will my number be passed on to other companies?", "No. We do not sell it. It is only shared with the developer or sales team handling your enquiry."],
  ["How do I stop the calls and messages?", <>Reply to any of our messages or contact us through the <IntLink href="/contact">contact page</IntLink>, and we will take you off our follow-up list.</>],
  ["Can my details be deleted?", "Yes. Ask us and we will delete them, unless the law requires us to keep them."],
];

function PrivacyPolicyPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Privacy Policy"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Parq City Website Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Last updated: {LAST_UPDATED}
          </p>
          <div className="mt-6 space-y-8 text-gray-800">
            <p>
              This policy explains how <IntLink href="/"><strong>www.sobhaparqcity.in</strong></IntLink> handles personal information submitted through enquiries about Sobha Parq City, the proposed residential township on <strong>Hennur Main Road in North Bangalore</strong>. This is an independent project information website, not the official website of Sobha Group or Sobha Limited. It describes the information collected, how enquiry details are used and shared, and how you can request access, correction or deletion.
            </p>

            <div>
              <h2 className="text-2xl font-semibold">Privacy at a Glance</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    {atAGlance.map(([q, a]) => (
                      <tr key={q}>
                        <td className={`${cell} font-semibold w-1/3`}>{q}</td>
                        <td className={cell}>{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-gray-600">The sections below explain each point in full.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">What We Collect</h2>
              <p className="mt-4">When you use an enquiry form or contact us directly, we receive the details you choose to provide so we can respond to your Sobha Parq City enquiry:</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-140 border-collapse text-left">
                  <thead>
                    <tr>
                      <th className={headCell}>Type</th>
                      <th className={headCell}>Examples</th>
                      <th className={headCell}>When We Get It</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTypes.map(([type, examples, when]) => (
                      <tr key={type}>
                        <td className={`${cell} font-medium`}>{type}</td>
                        <td className={cell}>{examples}</td>
                        <td className={cell}>{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Our enquiry forms ask for your name, mobile number and email address. Do not send sensitive information such as bank details, identity documents or passwords through this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Why We Use It</h2>
              <p className="mt-4">Your information is used only to help with your property search, for example to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>send the Sobha Parq City <IntLink href="/price">price list</IntLink>, <IntLink href="/floor-plan">floor plans</IntLink>, brochure or cost sheet you asked for;</li>
                <li>respond to requests for information or help arrange a <strong>site visit near Hennur Main Road</strong>;</li>
                <li>answer questions on booking, payment plans and availability; and</li>
                <li>let you know about launch updates, offers or similar <IntLink href="/bangalore">Sobha projects in Bangalore</IntLink> that suit your needs.</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">Permission to Contact You</h3>
              <p className="mt-4">
                When you submit an enquiry, we use the contact details you provide to respond about that request, including by phone, SMS, email or WhatsApp where appropriate. You can ask us to stop follow-up messages at any time using the <IntLink href="/contact">contact page</IntLink>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Who We Share It With</h2>
              <p className="mt-4">
                <strong>We never sell or rent your personal information</strong> to advertisers or data brokers. It is shared only when needed to help you, with:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li><strong>Enquiry handling and sales teams</strong>: form details are sent to the lead-handling service at m2nserver.online and may be shared with the relevant project sales team so they can respond to your enquiry.</li>
                <li><strong>Website and communications providers</strong>: providers that host the site or help deliver enquiry messages, limited to what is needed to provide those services.</li>
                <li><strong>Authorities</strong>: when the law, a regulation or a valid government request requires us to disclose it.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Cookies, Maps and WhatsApp</h2>
              <p className="mt-4">
                We do not place advertising or tracking cookies of our own. A few features come from third parties, which may set their own cookies or collect usage data under their own policies:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li><strong>Google Maps</strong> powers the embedded maps. Read the <ExtLink href="https://policies.google.com/privacy">Google Privacy Policy</ExtLink>.</li>
                <li><strong>WhatsApp</strong> handles any chat you start with us. Read the <ExtLink href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp Privacy Policy</ExtLink>.</li>
              </ul>
              <p className="mt-4">
                You can block or clear cookies in your browser settings. The site still works without them, though embedded maps may not load.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Your Rights Under Indian Law</h2>
              <p className="mt-4">
                Under India's <ExtLink href="https://www.meity.gov.in/data-protection-framework">Digital Personal Data Protection Act, 2023</ExtLink>, your data remains yours. You can ask us to:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-6">
                <li><strong>Show you</strong> the personal information we hold about you.</li>
                <li><strong>Fix</strong> any details that are wrong or outdated.</li>
                <li><strong>Stop</strong> contacting you by call, message or email.</li>
                <li><strong>Erase</strong> your information once it is no longer needed.</li>
              </ol>
              <p className="mt-4">
                Send your request through the <IntLink href="/contact">contact page</IntLink> and we will deal with it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Keeping Your Data Safe</h2>
              <p className="mt-4">
                We protect your information with <strong>reasonable technical and organisational safeguards</strong>, including encrypted (HTTPS) connections, against unauthorised access, loss or misuse. Only the people who need your details to help you can see them. No online system can be entirely risk-free, but we work to keep the risk low.
              </p>
              <h3 className="mt-6 text-xl font-semibold">How Long We Keep It</h3>
              <p className="mt-4">
                We hold your details only while they are needed to answer your enquiry and follow up on your home search, or for as long as the law requires. After that, they are deleted or anonymised.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Links to Other Sites</h2>
              <p className="mt-4">
                Some pages link to outside websites, including Wikipedia, government portals and the developer's official site. Their content and privacy practices are their own responsibility, so please check their policies when you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Updates to This Policy</h2>
              <p className="mt-4">
                We may revise this policy when our practices or the law change. The current version will always be on this page, with the "Last updated" date at the top.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Common Privacy Questions</h2>
              <div className="mt-4 space-y-4">
                {faqs.map(([q, a]) => (
                  <div key={q} className="border-l-4 border-primary pl-4">
                    <p><strong>Q: {q}</strong></p>
                    <p className="mt-1">A: {a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Questions About Your Privacy?</h2>
              <p className="mt-4">
                If anything in this policy is unclear, or you want to know how your information is being used, write to us through the <IntLink href="/contact">contact page</IntLink>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PrivacyPolicyPage;
