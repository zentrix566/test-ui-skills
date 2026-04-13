'use client';

import { MapPin, Compass, Utensils, Camera, Star, Check, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 text-[#d4af37]" />
              <span className="text-xl font-semibold tracking-tight">JourneyPro</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <button className="px-4 py-2 bg-[#d4af37] text-[#0f172a] rounded-md text-sm font-medium hover:bg-[#c5a028] transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 text-[#d4af37] text-sm mb-8">
            <Star className="w-4 h-4" />
            <span>Premium Personal Tour Guiding</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 leading-tight">
            Explore the World<br />
            <span className="text-[#d4af37]">with a Personal Guide</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover hidden gems, local secrets, and unforgettable experiences with a professional personal tour guide. Tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#d4af37] text-[#0f172a] rounded-md font-semibold text-base hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-2">
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-white/10 rounded-md font-semibold text-base hover:bg-white/5 transition-colors">
              View Itineraries
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="max-w-4xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
              ))}
            </div>
            <span className="text-sm">500+ Happy Travelers</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm">12+ Countries Covered</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm">100% Custom Itineraries</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              My Services
            </h2>
            <p className="text-slate-400 text-lg">
              Comprehensive tour experiences designed around your interests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="p-6 rounded-xl border border-[#d4af37]/20 bg-[#1e293b]/50 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">City Walking Tours</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Explore historic neighborhoods, iconic landmarks, and local hotspots with a knowledgeable guide who knows every corner.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Historic storytelling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Photo stops at best viewpoints</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Local culture insights</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="p-6 rounded-xl border border-[#d4af37]/20 bg-[#1e293b]/50 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-5">
                <Utensils className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Food & Culture Tours</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Taste authentic local cuisine at hidden eateries, markets, and family-run restaurants that only locals know.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Multiple tasting stops</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Market visits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Culinary history context</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="p-6 rounded-xl border border-[#d4af37]/20 bg-[#1e293b]/50 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-5">
                <Camera className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Photography Tours</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Capture stunning photos at the best locations with perfect lighting guidance and composition tips.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Golden hour shoots</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Secret viewpoint access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Basic photography tips</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0c1424]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Simple Transparent Pricing
            </h2>
            <p className="text-slate-400 text-lg">
              Choose the perfect package for your adventure
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1e293b]">
                  <th className="py-5 px-6 text-left text-lg font-semibold border-b border-white/10">Package</th>
                  <th className="py-5 px-6 text-left text-lg font-semibold border-b border-white/10">Duration</th>
                  <th className="py-5 px-6 text-left text-lg font-semibold border-b border-white/10">Price</th>
                  <th className="py-5 px-6 text-left text-lg font-semibold border-b border-white/10">Includes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10 bg-[#0f172a] hover:bg-[#1e293b]/50 transition-colors">
                  <td className="py-4 px-6 font-medium">Essential Stroll</td>
                  <td className="py-4 px-6 text-slate-300">2-3 hours</td>
                  <td className="py-4 px-6 text-[#d4af37] font-semibold">$50</td>
                  <td className="py-4 px-6 text-slate-300">Guided walking, local stories</td>
                </tr>
                <tr className="border-b border-white/10 bg-[#0f172a] hover:bg-[#1e293b]/50 transition-colors">
                  <td className="py-4 px-6 font-medium">Half-Day Explorer</td>
                  <td className="py-4 px-6 text-slate-300">4-6 hours</td>
                  <td className="py-4 px-6 text-[#d4af37] font-semibold">$95</td>
                  <td className="py-4 px-6 text-slate-300">Multiple attractions, transport</td>
                </tr>
                <tr className="border-b border-white/10 bg-[#0f172a] hover:bg-[#1e293b]/50 transition-colors">
                  <td className="py-4 px-6 font-medium">Full-Day Experience</td>
                  <td className="py-4 px-6 text-slate-300">7-10 hours</td>
                  <td className="py-4 px-6 text-[#d4af37] font-semibold">$160</td>
                  <td className="py-4 px-6 text-slate-300">Lunch included, all entrance fees</td>
                </tr>
                <tr className="bg-[#0f172a] hover:bg-[#1e293b]/50 transition-colors">
                  <td className="py-4 px-6 font-medium">Multi-Day Journey</td>
                  <td className="py-4 px-6 text-slate-300">2-5 days</td>
                  <td className="py-4 px-6 text-[#d4af37] font-semibold">Custom</td>
                  <td className="py-4 px-6 text-slate-300">Complete itinerary planning</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/5 text-center">
            <p className="text-[#d4af37] text-sm">
              All prices are per group (up to 4 people). Special discounts for solo travelers and longer bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#d4af37]" />
            <span className="font-semibold">JourneyPro</span>
          </div>
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} JourneyPro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
