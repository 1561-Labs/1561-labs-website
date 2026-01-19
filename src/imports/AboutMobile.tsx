import { Link } from 'react-router-dom';
import meditationImg from '../assets/meditation.png';
import birdhouseImg from '../assets/birdhouse.png';
import sailboatImg from '../assets/sailboat.png';
import svgPaths from "./svg-r9833dz4kb";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-1.5">
      <div className="h-[30px] relative w-[54.3px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.4125 40">
          <path d={svgPaths.p1788f600} fill="#A2FAA3" />
          <path d={svgPaths.p24828f00} fill="#231F20" />
          <path d={svgPaths.p1677280} fill="#231F20" />
          <path d={svgPaths.pacf30f0} fill="#231F20" />
          <path d={svgPaths.p15be5280} fill="#231F20" />
          <path d={svgPaths.p13c40b00} fill="#231F20" />
          <path d={svgPaths.p91fd180} fill="#231F20" />
          <path d={svgPaths.p3400ed80} fill="#231F20" />
          <path d={svgPaths.p23ddd80} fill="#231F20" />
        </svg>
      </div>
      <span className="text-xl font-light tracking-tight text-[#231F20]">Labs</span>
    </Link>
  );
}

function Snowman() {
  return (
    <svg viewBox="0 0 400 500" className="w-[280px] h-auto mx-auto mt-12">
      <line x1="50" y1="460" x2="350" y2="460" stroke="black" strokeWidth="4" />
      <rect x="155" y="30" width="70" height="60" fill="#140D2F" rx="2" />
      <rect x="135" y="85" width="110" height="10" fill="#140D2F" rx="5" />
      <circle cx="190" cy="160" r="55" fill="white" stroke="black" strokeWidth="3" />
      <circle cx="170" cy="145" r="5" fill="#FF7F32" />
      <circle cx="210" cy="145" r="5" fill="#FF7F32" />
      <path d="M 185 155 L 245 165 L 185 175 Z" fill="#FF7F32" />
      <path d="M 175 185 Q 190 195 205 185" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <rect x="160" y="210" width="60" height="20" fill="#FF7F32" rx="4" stroke="black" strokeWidth="1" />
      <path d="M 165 220 L 140 380 L 175 380 L 185 220 Z" fill="#FF7F32" stroke="black" strokeWidth="1" />
      <circle cx="190" cy="330" r="110" fill="white" stroke="black" strokeWidth="3" />
      <circle cx="210" cy="280" r="8" fill="#140D2F" />
      <circle cx="210" cy="325" r="8" fill="#140D2F" />
      <circle cx="210" cy="375" r="8" fill="#140D2F" />
    </svg>
  );
}

export default function AboutMobile() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="px-6 pt-20 pb-24 text-center">
        <p className="text-[12px] font-semibold text-black uppercase tracking-wider mb-6">Experimental</p>
        <h1 className="text-[42px] font-light leading-[1.1] text-black mb-8 tracking-tight">
          Ideas transformed deliberately
        </h1>
        <p className="text-[16px] text-gray-600 leading-relaxed font-normal">
          We operate at the intersection where creativity meets commerce, turning raw concepts into
          measurable outcomes through relentless iteration and honest experimentation.
        </p>
      </section>

      {/* Foundation Section */}
      <section className="px-6 py-20 border-t border-gray-100">
        <p className="text-[12px] font-semibold text-black mb-4 uppercase tracking-wider text-center">Foundation</p>
        <h2 className="text-[36px] font-light leading-[1.2] text-black mb-6 tracking-tight text-center">
          Built on deliberate transformation and disciplined curiosity
        </h2>
        <p className="text-[16px] text-gray-600 mb-8 leading-relaxed text-center">
          We're a collective of builders and thinkers based in India, mixing and molding ideas until
          they transcend convention.
        </p>

        <ul className="space-y-4 mb-12">
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            <span className="text-[15px] text-gray-800 font-medium">Design-driven product experiences</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            <span className="text-[15px] text-gray-800 font-medium">Marketing narratives that convert attention</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
            <span className="text-[15px] text-gray-800 font-medium">Proprietary ventures solving real problems</span>
          </li>
        </ul>

        <Snowman />
      </section>

      {/* Impact Section */}
      <section className="px-6 py-20 bg-white">
        <p className="text-[12px] font-semibold text-black mb-4 uppercase tracking-wider text-center">Impact</p>
        <h2 className="text-[36px] font-light leading-[1.2] text-black mb-6 tracking-tight text-center">
          Numbers that speak to our work and reach
        </h2>

        <div className="grid grid-cols-2 mt-12 border border-gray-100">
          <div className="p-8 border-b border-r border-gray-100 text-center">
            <div className="text-[48px] font-light text-black mb-2 tracking-tighter leading-none">111+</div>
            <p className="text-[13px] text-gray-500 uppercase tracking-widest">Projects</p>
          </div>
          <div className="p-8 border-b border-gray-100 text-center">
            <div className="text-[48px] font-light text-black mb-2 tracking-tighter leading-none">2</div>
            <p className="text-[13px] text-gray-500 uppercase tracking-widest">Verticals</p>
          </div>
          <div className="p-8 border-r border-gray-100 text-center">
            <div className="text-[48px] font-light text-black mb-2 tracking-tighter leading-none">100%</div>
            <p className="text-[13px] text-gray-500 uppercase tracking-widest">Outcome</p>
          </div>
          <div className="p-8 text-center">
            <div className="text-[48px] font-light text-black mb-2 tracking-tighter leading-none">2</div>
            <p className="text-[13px] text-gray-500 uppercase tracking-widest">Ventures</p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-6 py-20 bg-white border-t border-gray-100">
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold text-black uppercase tracking-wider mb-4">Journey</p>
          <h2 className="text-[36px] font-light mb-6 text-black tracking-tight">
            Our evolution through deliberate experimentation
          </h2>
        </div>

        <div className="space-y-6 mb-16">
          <div className="bg-[#F3EFE9] rounded-[32px] p-6 aspect-square flex items-center justify-center">
            <img src={meditationImg} alt="Founding" className="w-full h-full object-contain" />
          </div>
          <div className="bg-[#F3EFE9] rounded-[32px] p-6 aspect-square flex items-center justify-center">
            <img src={birdhouseImg} alt="Evolution" className="w-full h-full object-contain" />
          </div>
          <div className="bg-[#F3EFE9] rounded-[32px] p-6 aspect-square flex items-center justify-center">
            <img src={sailboatImg} alt="Expansion" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="relative pl-8 border-l border-black space-y-16">
          <div className="relative">
            <div className="absolute left-[-37px] top-0 w-4 h-4 bg-[#A2FAA3] border-2 border-black rounded-full"></div>
            <h3 className="text-[18px] font-semibold text-black mb-2 uppercase tracking-wide">December 2024</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              1561 Labs founded as an experimental space for design and strategic thinking from our small room in Delhi.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[-37px] top-0 w-4 h-4 bg-[#A2FAA3] border-2 border-black rounded-full"></div>
            <h3 className="text-[18px] font-semibold text-black mb-2 uppercase tracking-wide">March 2025</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Launched 1561 Design Labs and 1561 Marketing Labs.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[-37px] top-0 w-4 h-4 bg-[#A2FAA3] border-2 border-black rounded-full"></div>
            <h3 className="text-[18px] font-semibold text-black mb-2 uppercase tracking-wide">November 2025</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Completed idea and research stage of our SaaS Product.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-12 text-center">
        <Logo />
        <p className="mt-8 text-gray-500 text-xs">© 2026 1561 Labs</p>
      </footer>
    </div>
  );
}
