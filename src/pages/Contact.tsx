import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email.";
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <main>
      {/* Header */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info Column */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We're a small team dedicated to providing the best beginner-friendly online job guides. We read every message and try to respond within 1-3 business days.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: "Email",
                    value: "hello@remoteworkhub.com",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Response Time",
                    value: "1–3 business days",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    ),
                    title: "Languages",
                    value: "English",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{item.title}</p>
                      <p className="text-gray-900 text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to ask */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 text-sm mb-3">We're happy to help with:</h3>
                <ul className="space-y-1.5">
                  {[
                    "Guide recommendations for beginners",
                    "Questions about specific platforms",
                    "Content corrections or updates",
                    "Collaboration or guest post inquiries",
                    "Advertising and sponsorship",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h2>
                  <p className="text-gray-500 max-w-sm">
                    Thank you for reaching out. We'll get back to you within 1–3 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm ${errors.name ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@email.com"
                          className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm ${errors.email ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className={`w-full px-4 py-3 border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm ${errors.subject ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"}`}
                      >
                        <option value="">Select a subject...</option>
                        <option value="general">General Question</option>
                        <option value="guide">Guide Recommendation</option>
                        <option value="correction">Content Correction</option>
                        <option value="collaboration">Collaboration / Guest Post</option>
                        <option value="advertising">Advertising / Sponsorship</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us what you need help with..."
                        className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm resize-none ${errors.message ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50"}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-sm"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
