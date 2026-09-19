import { ShieldCheck, Compass, Users, Award, MapPin } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 mb-10 shadow-sm border border-slate-800 relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
            Independent Journalism
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About Global Pulse News
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            We are an independent news network dedicated to bringing verified, authentic, and timely news coverage from District Shangla, Khyber Pakhtunkhwa, and across Pakistan.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-10 text-gray-700 leading-relaxed">
        {/* Mission */}
        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Compass className="w-6 h-6 text-red-600" /> Our Core Mission
          </h2>
          <p className="mb-4">
            Founded with the belief that grassroots communities deserve an authoritative journalistic voice, <strong>Global Pulse News</strong> bridges regional events in northern Pakistan with national and global discourse. Our primary editorial desk is rooted in <strong>District Shangla, Khyber Pakhtunkhwa</strong>, spotlighting the socio-economic, educational, cultural, and environmental challenges of mountainous communities that frequently escape mainstream headlines.
          </p>
          <p>
            From extreme weather alerts and regional development initiatives to national economic policies, sports achievements, and social welfare efforts, we report without fear, bias, or sensationalism.
          </p>
        </section>

        {/* Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Factual Integrity</h3>
            <p className="text-sm text-gray-600">
              Every report undergoes multi-source verification. We uphold rigorous journalistic ethics and fact-checking protocols before publication.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Regional Focus</h3>
            <p className="text-sm text-gray-600">
              Unmatched on-ground reporting from Alpuri, Besham, Puran, Chakesar, Martung, and across northern valleys.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">Community Voice</h3>
            <p className="text-sm text-gray-600">
              Highlighting philanthropic initiatives, education access, youth sports, and local heroes driving positive transformation.
            </p>
          </div>
        </section>

        {/* Editorial Standards */}
        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-red-600" /> Editorial Freedom & Independence
          </h2>
          <p className="mb-4">
            Global Pulse News operates as a wholly independent editorial board. We receive no directives from political factions, commercial lobbies, or state entities. Our primary accountability is to the public and the readers we serve.
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-slate-700">
            <strong>Correction Policy:</strong> If an error of fact is brought to our attention, it is promptly corrected with an explicit editorial transparency note.
          </div>
        </section>
      </div>
    </div>
  );
}
