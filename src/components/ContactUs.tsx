import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-semibold uppercase tracking-wider mb-3">
          Get in Touch
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
          Contact Global Pulse News
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
          Have a news tip, press release, community welfare story, or feedback? Reach out to our regional editorial bureau.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-gray-900 mb-1">Bureau Location</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Main Bazaar Alpuri,<br />
              Near District Administration Complex,<br />
              District Shangla, Khyber Pakhtunkhwa,<br />
              Pakistan
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-gray-900 mb-1">Editorial Email</h3>
            <p className="text-sm text-gray-600 mb-2">
              General inquiries & tips:
            </p>
            <a href="mailto:contact@globalpulsenews.com" className="text-sm font-semibold text-blue-600 hover:underline break-all">
              contact@globalpulsenews.com
            </a>
            <div className="mt-2 text-xs text-gray-500">
              Newsroom: <span className="text-gray-700 font-medium">editor@globalpulsenews.com</span>
            </div>
          </div>
        </div>


        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Send a Message or News Tip</h2>
            <p className="text-sm text-gray-600 mb-6">
              Our reporting desk reviews all verified community submissions and citizen journalism tips.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-serif font-bold text-xl mb-1">Message Received</h3>
                <p className="text-sm text-emerald-700 mb-4">
                  Thank you for contacting Global Pulse News. Our editorial team will review your dispatch shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">
                    Topic / Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="News Tip / Shangla Community Story / Correction"
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please include relevant dates, locations, eyewitness details, or press releases..."
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" /> Send Dispatch to Newsroom
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
