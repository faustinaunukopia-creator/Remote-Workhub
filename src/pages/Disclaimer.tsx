import { Link } from "react-router-dom";

export default function Disclaimer() {
  return (
    <main>
      <section className="pt-28 pb-10 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700">Disclaimer</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10 space-y-10">

            {/* Important Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.192-.833-2.964 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <p className="text-amber-900 text-sm leading-relaxed">
                  <strong>Important:</strong> The information provided on RemoteWorkHub is for general informational and educational purposes only. Nothing on this website constitutes financial, legal, or employment advice.
                </p>
              </div>
            </div>

            {[
              {
                title: "General Disclaimer",
                paragraphs: [
                  "RemoteWorkHub ('we,' 'us,' 'our') provides content about online jobs, remote work, and freelance platforms for informational purposes only. The guides, tutorials, and reviews published on this site are based on publicly available information, personal research, and general knowledge.",
                  "We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information provided on this website for any purpose.",
                ],
              },
              {
                title: "No Income or Earnings Guarantee",
                paragraphs: [
                  "We do not guarantee that you will earn any specific amount of money by using the information, guides, or recommendations on this website. Any earnings examples mentioned in our content are illustrative only and are not guarantees of results.",
                  "Income from online work, freelancing, and remote jobs varies widely depending on individual skills, effort, experience, market conditions, platform policies, and many other factors outside our control.",
                  "Online earning requires real work, real skill, and consistent effort. Anyone who suggests otherwise is not being honest with you.",
                ],
              },
              {
                title: "No Employment Agency Services",
                paragraphs: [
                  "RemoteWorkHub is a content and information website only. We are not an employment agency, staffing agency, or job placement service. We do not recruit, hire, or place individuals in employment positions.",
                  "We do not have any formal relationship with the platforms, companies, or employers mentioned in our content. We do not guarantee job placement or acceptance on any platform.",
                ],
              },
              {
                title: "Affiliate Disclosure",
                paragraphs: [
                  "RemoteWorkHub participates in affiliate marketing programs. Some links on this website may be affiliate links, meaning we may earn a commission if you click the link and complete a purchase or sign-up, at no additional cost to you.",
                  "We only recommend platforms and services we believe to be legitimate and potentially useful to our readers. Our affiliate relationships do not influence our honest assessments.",
                  "All affiliate relationships are disclosed in compliance with the FTC guidelines on endorsements and testimonials.",
                ],
              },
              {
                title: "Third-Party Platforms & External Links",
                paragraphs: [
                  "Our website contains links to third-party websites including Fiverr, Upwork, Freelancer, and other platforms. These links are provided for convenience and informational purposes only.",
                  "We have no control over the content, policies, or practices of third-party websites. We are not responsible for the content, accuracy, or availability of external websites. Visiting external links is at your own risk.",
                  "Platform policies, fees, and features change over time. Always verify current information directly on the official platform website before making any decisions.",
                ],
              },
              {
                title: "Content Accuracy",
                paragraphs: [
                  "While we make every effort to ensure the accuracy of our content, the online work landscape changes frequently. Platform policies, rates, and requirements may change after publication of our guides.",
                  "We are not responsible for any outdated information on our site. We encourage you to verify any critical information directly with the relevant platform or employer.",
                ],
              },
              {
                title: "Limitation of Liability",
                paragraphs: [
                  "In no event shall RemoteWorkHub, its authors, editors, or contributors be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.",
                  "Your use of this website and reliance on any information provided is solely at your own risk.",
                ],
              },
              {
                title: "Questions",
                paragraphs: [
                  "If you have any questions about this Disclaimer, please contact us.",
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-sm">{para}</p>
                  ))}
                  {section.title === "Questions" && (
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-600">
                      <strong className="block text-gray-900 mb-1">RemoteWorkHub</strong>
                      Email: <a href="mailto:hello@remoteworkhub.com" className="text-blue-600 hover:underline">hello@remoteworkhub.com</a><br />
                      <Link to="/contact" className="text-blue-600 hover:underline">Contact Form</Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
