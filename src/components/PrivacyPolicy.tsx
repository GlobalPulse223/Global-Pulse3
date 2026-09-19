import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold uppercase tracking-wider mb-3">
          Compliance & Ethics
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Last Updated: 19 September 2026 • Global Pulse News Editorial Board
        </p>
      </div>

      <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm space-y-8 text-gray-700 leading-relaxed">
        {/* Intro */}
        <section>
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-600" /> 1. Commitment to Reader Privacy
          </h2>
          <p>
            At <strong>Global Pulse News</strong>, we respect the privacy of our readers, subscribers, and community contributors. This Privacy Policy outlines how we handle information gathered across our digital website, mobile previews, RSS feeds, and newsletters.
          </p>
        </section>

        {/* Journalistic Source Protection */}
        <section className="bg-amber-50/70 border border-amber-200 p-5 rounded-lg">
          <h3 className="font-serif font-bold text-amber-900 mb-2 flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-700" /> Journalistic Privilege & Source Confidentiality
          </h3>
          <p className="text-sm text-amber-900 leading-relaxed">
            In accordance with universally recognized codes of journalistic ethics, Global Pulse News rigorously protects the anonymity of confidential whistleblowers, community sources, and citizen journalists who provide reports in good faith from District Shangla and northern Pakistan.
          </p>
        </section>

        {/* Information Collected */}
        <section>
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600" /> 2. Information We Collect
          </h2>
          <ul className="space-y-2 text-sm list-disc pl-5">
            <li>
              <strong>Non-Personal Technical Data:</strong> Standard server logs, browser type, referral URLs, and reading device parameters utilized exclusively for system stability and cache optimization.
            </li>
            <li>
              <strong>Direct Correspondence:</strong> Name and email addresses voluntarily submitted when contacting our newsroom desk or submitting editorial news tips.
            </li>
            <li>
              <strong>Cookies & Local State:</strong> Essential cookies or browser storage utilized to remember your category filters, reading preferences, and view modes.
            </li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section>
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" /> 3. How We Use Your Data
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Delivering up-to-date verified news reports without paywalls or unsolicited tracking.</span>
            </div>
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Investigating and publishing critical public-interest news and weather advisories.</span>
            </div>
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Maintaining security against distributed denial-of-service or malicious tampering.</span>
            </div>
            <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Responding directly to official press releases and verified news tips.</span>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section>
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-3">4. Third-Party Integrations</h2>
          <p className="text-sm">
            Our platform utilizes trusted cloud services including Google Firebase for secure data persistence. These services process infrastructure data according to strict international data protection standards and do not sell user data to advertising brokers.
          </p>
        </section>

        {/* Contact info for privacy */}
        <section className="pt-4 border-t border-gray-100">
          <h2 className="font-serif text-lg font-bold text-gray-900 mb-2">5. Privacy Inquiries</h2>
          <p className="text-sm">
            If you have questions regarding this Privacy Policy or wish to request data removal, contact our compliance desk at{' '}
            <a href="mailto:privacy@globalpulsenews.com" className="text-blue-600 font-medium hover:underline">
              privacy@globalpulsenews.com
            </a>{' '}
            or write to our Alpuri Bureau, District Shangla, KP, Pakistan.
          </p>
        </section>
      </div>
    </div>
  );
}
