import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="pt-28 pb-10 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-700">Privacy Policy</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10 space-y-10">

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <p className="text-blue-900 text-sm leading-relaxed">
                At <strong>RemoteWorkHub</strong> ("we," "us," or "our"), we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
              </p>
            </div>

            {[
              {
                title: "1. Information We Collect",
                content: [
                  "We may collect personal information that you voluntarily provide when you contact us or subscribe to our newsletter, including your name and email address.",
                  "We also automatically collect certain information when you visit our site, including your IP address, browser type, operating system, referring URLs, and pages visited. This data is collected via cookies and analytics tools.",
                  "We use Google Analytics to understand how visitors interact with our content. Google Analytics collects data anonymously and reports trends without identifying individual visitors.",
                ],
              },
              {
                title: "2. How We Use Your Information",
                content: [
                  "To send you newsletters and updates you have subscribed to.",
                  "To respond to your inquiries and provide customer support.",
                  "To analyze website traffic and improve our content.",
                  "To display relevant advertisements through Google AdSense and similar ad networks.",
                  "We do not sell, rent, or trade your personal information to third parties.",
                ],
              },
              {
                title: "3. Cookies",
                content: [
                  "Our website uses cookies — small text files stored on your device — to improve your experience and analyze traffic.",
                  "Essential cookies: Required for the website to function properly.",
                  "Analytics cookies: Help us understand how visitors use our site (e.g., Google Analytics).",
                  "Advertising cookies: Used by Google AdSense to display relevant ads.",
                  "You can control or disable cookies through your browser settings. Note that disabling cookies may affect the functionality of some parts of our site.",
                ],
              },
              {
                title: "4. Google AdSense & Third-Party Advertising",
                content: [
                  "We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website and other websites on the internet.",
                  "Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.",
                  "You may opt out of personalized advertising by visiting Google's Ads Settings at www.google.com/settings/ads.",
                ],
              },
              {
                title: "5. Affiliate Links",
                content: [
                  "Some links on our website may be affiliate links. This means we may earn a small commission if you click the link and make a purchase, at no additional cost to you.",
                  "We only recommend products and services we believe are genuinely useful. Our affiliate partnerships do not influence the content of our guides.",
                ],
              },
              {
                title: "6. Email Newsletter (Brevo)",
                content: [
                  "We use Brevo (formerly Sendinblue) to manage our email newsletter. When you subscribe, your email address is stored with Brevo and used to send you relevant content.",
                  "You can unsubscribe at any time by clicking the 'Unsubscribe' link in any of our emails. We will not share your email address with third parties for marketing purposes.",
                ],
              },
              {
                title: "7. Data Security",
                content: [
                  "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, or loss.",
                  "However, no internet transmission or electronic storage method is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.",
                ],
              },
              {
                title: "8. Children's Privacy",
                content: [
                  "Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.",
                ],
              },
              {
                title: "9. Changes to This Policy",
                content: [
                  "We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the 'Last updated' date at the top of this page.",
                  "We encourage you to review this policy periodically.",
                ],
              },
              {
                title: "10. Contact Us",
                content: [
                  "If you have any questions or concerns about this Privacy Policy, please contact us:",
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-3">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-sm">
                      {section.title === "2. How We Use Your Information" && i > 0 && i < section.content.length - 1
                        ? `• ${para}`
                        : section.title === "3. Cookies" && i > 0 && i < section.content.length - 1
                        ? `• ${para}`
                        : para}
                    </p>
                  ))}
                </div>
                {section.title === "10. Contact Us" && (
                  <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-600">
                    <strong className="block text-gray-900">RemoteWorkHub</strong>
                    Email: <a href="mailto:hello@remoteworkhub.com" className="text-blue-600 hover:underline">hello@remoteworkhub.com</a><br />
                    <Link to="/contact" className="text-blue-600 hover:underline">Contact Form</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
