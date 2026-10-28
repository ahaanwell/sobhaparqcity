/* eslint-disable react/no-unescaped-entities */
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const PHONE = "+918317452005";
const PHONE_DISPLAY = "+91 83174 52005";
const WHATSAPP_LINK =
  "https://wa.me/918317452005?text=Hi!%20I%27m%20Interested%20In%20Sobha%20Parq%20City%20Please%20Share%20Details.";
const MAP_EMBED_URL = "https://www.google.com/maps?q=Hennur+Main+Road,+Bengaluru,+Karnataka&output=embed";

const contactCards = [
  {
    icon: FaWhatsapp,
    title: "Message on WhatsApp",
    text: "Send us a quick note",
    href: WHATSAPP_LINK,
    external: true,
  },
  {
    icon: FaPhoneAlt,
    title: "Speak to an Advisor",
    text: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Project Site",
    text: "Hennur Main Road, North Bangalore, Karnataka",
    href: "/location",
  },
];

const steps = [
  ["Share your details", "Fill in the form, call us or drop a WhatsApp message with your name and number."],
  ["Tell us what you need", "Let us know your preferred apartment size, budget and the documents you would like."],
  ["Receive the information", "We send across the price sheet, brochure or floor plans you asked for."],
  ["Visit the site", "If you wish, we can help arrange a site visit near Hennur Main Road on a day that works for you. Confirm the exact project address before travelling."],
];

const requests = [
  [<IntLink key="p" href="/price">Price sheet</IntLink>, "Base price and a breakdown of extra charges for 2, 3 and 4 BHK homes"],
  [<IntLink key="f" href="/floor-plan">Floor plans</IntLink>, "Unit layouts for each apartment type"],
  [<IntLink key="m" href="/master-plan">Master plan</IntLink>, "How the proposed towers, open areas and roads are planned across the approximately 50-acre site"],
  [<IntLink key="a" href="/amenities">Amenities list</IntLink>, "Planned clubhouse, sports and leisure facilities"],
  ["Brochure", "The project brochure with key highlights"],
  ["Loan and payment help", "Booking steps, payment schedules and home loan options"],
];

function ContactPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Contact"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Get in Touch About Sobha Parqcity – Prices, Brochure & Site Visits
          </h1>

          <p className="mt-6 text-gray-800 text-center max-w-3xl mx-auto">
            Have a question about <IntLink href="/"><strong>Sobha Parqcity</strong></IntLink>, the proposed <ExtLink href="https://www.sobha.com/"><strong>Sobha Group</strong></ExtLink> project on <IntLink href="/location"><strong>Hennur Main Road in North Bangalore</strong></IntLink>? Message us on WhatsApp, give us a call, or leave your details in the form below, whichever is easiest for you.
          </p>

          {/* Contact cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactCards.map(({ icon: Icon, title, text, href, external }) => (
              <a
                key={title}
                href={href}
                {...(external ? { target: "_blank", rel: "nofollow noopener noreferrer" } : {})}
                className="flex flex-col items-center text-center gap-2 p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:shadow-md transition"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white text-xl">
                  <Icon />
                </span>
                <span className="font-semibold text-gray-800">{title}</span>
                <span className="text-sm text-gray-600">{text}</span>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              How It Works
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-800">
              {steps.map(([title, text]) => (
                <li key={title}>
                  <strong>{title}:</strong> {text}
                </li>
              ))}
            </ol>
          </div>

          {/* Form + map */}
          <div className="mt-10 flex flex-col lg:flex-row gap-6 items-stretch">
            <LeadForm />
            <div className="flex-1 min-h-95 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Hennur Main Road, North Bangalore – Sobha Parqcity project area"
              />
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                What You Can Request
              </h2>
              <p className="mt-4 text-gray-800">
                Sobha Parqcity is proposed across approximately 50 acres, with 12 blocks, 24 wings, around 4,463 apartments and a floor structure of 3 basements + ground + 42 floors. Planned configurations include 1, 2, 3 and 4 BHK homes, with the supplied starting price at ₹1.1 crore and possession planned for 2031. Ask us for any of the following:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-left text-gray-800">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 font-semibold">Request</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold">What You Receive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map(([request, detail], i) => (
                      <tr key={i}>
                        <td className="border border-gray-300 px-4 py-3 font-medium">{request}</td>
                        <td className="border border-gray-300 px-4 py-3">{detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Planning Your Site Visit
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-800">
                <li>Try to visit on a weekday as well as a weekend, so you see the area at different times.</li>
                <li>Drive the route to your office or your children's school during peak hours.</li>
                <li>Bring a list of questions on carpet area, parking, maintenance and payment terms.</li>
                <li>Look around the neighbourhood for hospitals, schools and shops that are already open.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                One Last Check
              </h2>
              <p className="mt-4 text-gray-800">
                The details we share are indicative and may change. Before paying any booking amount, look up the project on the <ExtLink href="https://rera.karnataka.gov.in/">Karnataka RERA portal</ExtLink> and get the final price, specifications and payment terms in writing from the developer. Still comparing options? See how Sobha Parqcity stacks up against other <IntLink href="/bangalore">Sobha projects in Bangalore</IntLink>.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                This site is run by a RERA-authorised real estate agent and is not Sobha Limited's official website.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactPage;
