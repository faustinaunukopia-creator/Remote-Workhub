export default function NewsletterSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Free Newsletter
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get New Online Job Guides
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto">
            Receive step-by-step guides, platform tutorials, and beginner online job opportunities directly in your inbox.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-2 sm:p-4 overflow-hidden">
          <div className="w-full overflow-hidden rounded-xl">
            <iframe
              width="540"
              height="305"
              src="https://acb86947.sibforms.com/serve/MUIFACVkrFS0wDqjsIw64K0q0Bqak2MlGmCcKe9BaGY2sa-swfAcJd11mO1KFfaeFxgYR2F_17aot4is4cLW8cUO98i2psf2HHaTy5xtXgOVWlYw1ufQWy6hKYW_QxlTR_TW6kk7KsjS3sHpse33G-i6nqm3sHB1PGnqDpuzD8ANhrQ9gMivBjU0zUH-gVyS6QrdKBBItncM6N1XMg=="
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              title="Newsletter Subscription Form"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
                width: "100%",
                minHeight: "305px",
                border: "none",
              }}
            />
          </div>
        </div>

        {/* Privacy Note */}
        <div className="text-center mt-5 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p className="text-blue-200 text-sm">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
