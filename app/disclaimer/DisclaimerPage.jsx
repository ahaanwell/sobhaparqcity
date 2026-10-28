/* eslint-disable react/no-unescaped-entities */
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";

const LAST_UPDATED = "27 October 2026";

const cell = "border border-gray-300 px-4 py-3 align-top";
const headCell = "border border-gray-300 px-4 py-3 font-semibold";

const keyPoints = [
  "This independent information website is not operated by Sobha Limited or Sobha Group.",
  "Details about the proposed Hennur Main Road project are preliminary and may change.",
  "Images and plans are illustrative; rely on approved plans and written specifications.",
  "Website content is not an offer, contract, legal advice or investment advice.",
];

const changeable = [
  [<IntLink key="p" href="/price">Prices</IntLink>, "The currently supplied starting price is ₹1.1 crore for a 1 BHK apartment. It is indicative; taxes, registration and other charges may apply. Request a current written cost sheet."],
  ["Project scale", "The proposed development is described as approximately 50 acres, 12 blocks, 24 wings and around 4,463 apartments. Its supplied floor structure is 3 basements + ground + 42 floors. Confirm these details against approved documents."],
  ["Possession", "Possession is currently planned for 2031. This is not a confirmed commitment unless reflected in the applicable official project documents."],
  [<IntLink key="f" href="/floor-plan">Floor plans</IntLink>, "Layouts and apartment details are preliminary; the approved plans and written specifications take precedence."],
  [<IntLink key="m" href="/master-plan">Master plan</IntLink>, "The proposed site area and layout may change. Refer to the latest approved master plan."],
  [<IntLink key="a" href="/amenities">Amenities</IntLink>, "The final official amenities list has not been confirmed in the information available to this website."],
  ["Availability", "Availability information can change. Confirm the selected unit directly with the developer or its authorised sales team."],
];

const faqs = [
  ["Is the Sobha Parqcity price shown here final?", "No. The currently supplied starting price of ₹1.1 crore for a 1 BHK apartment is indicative and may not include taxes or other charges. Request the latest written cost sheet and confirm the price for the specific apartment."],
  ["Are the Hennur project images and plans final?", "No. Images and plans on this website are illustrative or preliminary and may not represent the final approved project. Check the latest approved documents and written specifications."],
  ["Can I book a Sobha Parqcity apartment through this website?", "No. This website provides project information and an enquiry channel; it does not accept or confirm bookings. Follow the developer's official booking process and review its application and agreement documents."],
  ["Is this Sobha Group's official website?", <>No. This is an independent project information website and is not operated by Sobha Group or Sobha Limited. The developer's official website is <ExtLink href="https://www.sobha.com/">sobha.com</ExtLink>.</>],
];

function DisclaimerPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Disclaimer"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Parqcity Information Disclaimer
          </h1>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Last updated: {LAST_UPDATED}
          </p>
          <div className="mt-6 space-y-8 text-gray-800">
            <p>
              This disclaimer explains how to interpret information published on <IntLink href="/"><strong>www.sobhaparqcity.in</strong></IntLink>, an independent website about the proposed Sobha Parqcity residential township on Hennur Main Road in North Bangalore. Read it alongside our <IntLink href="/privacy-policy">Privacy Policy</IntLink>. Do not rely on website content as a substitute for current documents from the developer or relevant authorities.
            </p>

            <div className="border-l-4 border-primary bg-gray-50 px-5 py-4">
              <p className="font-semibold">The key points in brief:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                {keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Who Runs This Website</h2>
              <p className="mt-4">
                This is an <strong>independent project information website</strong>, not the official website of Sobha Group or Sobha Limited, and is not operated by the developer. It provides general information about <strong>Sobha Parqcity</strong>, currently described as a proposed township on <strong>Hennur Main Road in North Bangalore</strong>, and allows visitors to submit enquiries. Project information on this site is based on details available to us and should be independently verified.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Information That May Change</h2>
              <p className="mt-4">
                We review the content periodically, but project plans, commercial terms and regulatory details can change. Information about Sobha Parqcity—including the proposed 50-acre site, 12 blocks, 24 wings, approximately 4,463 apartments, a floor structure of 3 basements + ground + 42 floors, prices and 2031 possession timeline—is <strong>preliminary and subject to confirmation</strong>. The currently supplied starting price is ₹1.1 crore; it is not a final offer. In particular:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr>
                      <th className={headCell}>Detail</th>
                      <th className={headCell}>What You Should Know</th>
                    </tr>
                  </thead>
                  <tbody>
                    {changeable.map(([item, note], i) => (
                      <tr key={i}>
                        <td className={`${cell} font-medium w-1/4`}>{item}</td>
                        <td className={cell}>{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">About the Pictures, Plans and Maps</h2>
              <p className="mt-4">
                All images, renderings, floor plans, master plans and maps are <strong>representational only</strong>. Many are artistic impressions prepared before construction, not photographs of the finished project, and the final layouts, finishes, landscaping and specifications may differ. The only specifications that apply to your home are those in the developer's <strong>agreement for sale</strong> and approved plans.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">This Website Is Not an Offer</h2>
              <p className="mt-4">
                Nothing published here is an <strong>offer, an invitation to offer or a contract</strong>. Visiting the site or sending an enquiry does not create any legal relationship between you, this website and the developer. A booking is confirmed only through the developer's official application and documents.
              </p>
              <p className="mt-4 font-semibold">Before you pay anything:</p>
              <ol className="mt-2 list-decimal space-y-2 pl-6">
                <li>Check the project's registration and approved details on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink>, as provided for under the <ExtLink href="https://en.wikipedia.org/wiki/Real_Estate_(Regulation_and_Development)_Act,_2016">Real Estate (Regulation and Development) Act, 2016</ExtLink>.</li>
                <li>Take independent legal and financial advice.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Not Investment Advice</h2>
              <p className="mt-4">
                What we publish about Hennur, <IntLink href="/bangalore">Bengaluru</IntLink>, local infrastructure or the property market is general information, not financial, legal or investment advice. Property prices and rents can rise or fall, and no return or appreciation is guaranteed. Evaluate the property against your own needs and seek independent professional advice before making a decision.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Limits on Our Liability</h2>
              <p className="mt-4">
                As far as the law allows, the people who run this website are <strong>not liable for any direct or indirect loss or damage</strong> that comes from using or relying on information published here. This includes errors, omissions and changes made by the developer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Names and Logos</h2>
              <p className="mt-4">
                "Sobha", "Sobha Limited", "Sobha Parqcity" and related names and logos belong to their respective owners. We use them only to identify the project we describe. Their use does not suggest ownership, endorsement or any official link beyond our role as an authorised agent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Links to Outside Websites</h2>
              <p className="mt-4">
                We link to other websites, such as Wikipedia, government portals and the developer's official site. We have no control over them and cannot be held responsible for their content, accuracy or availability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Details You Share With Us</h2>
              <p className="mt-4">
                Information you send through our enquiry forms may be passed to the developer or its authorised sales team so they can respond to you. Our <IntLink href="/privacy-policy">Privacy Policy</IntLink> explains how this information is handled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Quick Answers</h2>
              <div className="mt-4 space-y-4">
                {faqs.map(([q, a]) => (
                  <div key={q} className="border-l-4 border-primary pl-4">
                    <p><strong>Q: {q}</strong></p>
                    <p className="mt-1">A: {a}</p>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Want the current price list, cost sheet or availability, or need to arrange a site visit? Contact our team through the <IntLink href="/contact">contact page</IntLink>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default DisclaimerPage;
