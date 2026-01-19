import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import meditationImg from '../assets/meditation.png';
import birdhouseImg from '../assets/birdhouse.png';
import sailboatImg from '../assets/sailboat.png';
import svgPaths from "./svg-r9833dz4kb";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="h-[40px] relative w-[72.413px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.4125 40">
          <path d={svgPaths.p1788f600} fill="#A2FAA3" />
          <g>
            <path d={svgPaths.p24828f00} fill="#231F20" />
            <path d={svgPaths.p1677280} fill="#231F20" />
            <path d={svgPaths.pacf30f0} fill="#231F20" />
            <path d={svgPaths.p15be5280} fill="#231F20" />
            <path d={svgPaths.p13c40b00} fill="#231F20" />
            <path d={svgPaths.p91fd180} fill="#231F20" />
            <path d={svgPaths.p3400ed80} fill="#231F20" />
            <path d={svgPaths.p23ddd80} fill="#231F20" />
          </g>
        </svg>
      </div>
      <span className="text-2xl font-light tracking-tight text-[#231F20]">Labs</span>
    </Link>
  );
}

function Snowman() {
  return (
    <svg viewBox="0 0 400 500" className="w-[350px] h-auto">
      {/* Ground Line */}
      <line x1="50" y1="460" x2="350" y2="460" stroke="black" strokeWidth="4" />

      {/* Hat */}
      <rect x="155" y="30" width="70" height="60" fill="#140D2F" rx="2" />
      <rect x="135" y="85" width="110" height="10" fill="#140D2F" rx="5" />

      {/* Head */}
      <circle cx="190" cy="160" r="55" fill="white" stroke="black" strokeWidth="3" />

      {/* Eyes */}
      <circle cx="170" cy="145" r="5" fill="#FF7F32" />
      <circle cx="210" cy="145" r="5" fill="#FF7F32" />

      {/* Nose */}
      <path d="M 185 155 L 245 165 L 185 175 Z" fill="#FF7F32" />

      {/* Mouth */}
      <path d="M 175 185 Q 190 195 205 185" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />

      {/* Scarf */}
      <rect x="160" y="210" width="60" height="20" fill="#FF7F32" rx="4" stroke="black" strokeWidth="1" />
      <path d="M 165 220 L 140 380 L 175 380 L 185 220 Z" fill="#FF7F32" stroke="black" strokeWidth="1" />

      {/* Body */}
      <circle cx="190" cy="330" r="110" fill="white" stroke="black" strokeWidth="3" />

      {/* Buttons */}
      <circle cx="210" cy="280" r="8" fill="#140D2F" />
      <circle cx="210" cy="325" r="8" fill="#140D2F" />
      <circle cx="210" cy="375" r="8" fill="#140D2F" />
    </svg>
  );
}

export default function AboutDesktop() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="px-16 pt-32 pb-40 text-center max-w-5xl mx-auto">
        <p className="text-[14px] font-semibold text-black uppercase tracking-wider mb-8">Experimental</p>
        <h1 className="text-[64px] font-light leading-[1.1] text-black mb-10 tracking-tight">
          Ideas transformed deliberately
        </h1>
        <p className="text-[18px] text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
          We operate at the intersection where creativity meets commerce, turning raw concepts into
          measurable outcomes through relentless iteration and honest experimentation.
        </p>
      </section>

      {/* Foundation Section */}
      <section className="px-16 py-32 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 gap-24 items-center">
          <div className="pl-8">
            <p className="text-[14px] font-semibold text-black mb-6 uppercase tracking-wider">Foundation</p>
            <h2 className="text-[52px] font-light leading-[1.2] text-black mb-8 tracking-tight">
              Built on deliberate transformation and disciplined curiosity
            </h2>
            <p className="text-[18px] text-gray-600 mb-10 leading-relaxed max-w-xl">
              We're a collective of builders and thinkers based in India, mixing and molding ideas until
              they transcend convention. Our work emerges from honest experimentation, relentless iteration,
              and an unwavering commitment to outcomes over optics.
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="text-[17px] text-gray-800 font-medium">Design-driven product experiences</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="text-[17px] text-gray-800 font-medium">Marketing narratives that convert attention</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="text-[17px] text-gray-800 font-medium">Proprietary ventures solving real problems</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Snowman />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-16 py-32 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-[1fr_1.2fr] gap-20">
          <div className="pl-8">
            <p className="text-[14px] font-semibold text-black mb-6 uppercase tracking-wider">Impact</p>
            <h2 className="text-[48px] font-light leading-[1.2] text-black mb-8 tracking-tight">
              Numbers that speak to our work and reach
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed max-w-md">
              We measure success through the brands we've partnered with, the ventures we've launched,
              and the outcomes we've delivered across design and media.
            </p>
          </div>

          <div className="relative">
            {/* Grid with custom borders */}
            <div className="grid grid-cols-2 border-l border-gray-200">
              {/* Vertical line through center */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />

              <div className="p-12 border-b border-gray-200">
                <div className="text-[84px] font-light text-black mb-4 tracking-tighter leading-none">111+</div>
                <p className="text-[18px] text-gray-600">Projects completed</p>
              </div>

              <div className="p-12 border-b border-gray-200">
                <div className="text-[84px] font-light text-black mb-4 tracking-tighter leading-none">2</div>
                <p className="text-[18px] text-gray-600">Active verticals</p>
              </div>

              <div className="p-12">
                <div className="text-[84px] font-light text-black mb-4 tracking-tighter leading-none">100%</div>
                <p className="text-[18px] text-gray-600">Outcome focused</p>
              </div>

              <div className="p-12">
                <div className="text-[84px] font-light text-black mb-4 tracking-tighter leading-none">2</div>
                <p className="text-[18px] text-gray-600">Ventures in motion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-16 py-32 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1440px] mx-auto text-center mb-24">
          <p className="text-[14px] font-semibold text-black uppercase tracking-wider mb-6">Journey</p>
          <h2 className="text-[52px] font-light mb-8 text-black tracking-tight">
            Our evolution through deliberate experimentation
          </h2>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            From our founding to today, we've built a lab where ideas don't just exist they get refined,
            tested, and transformed into work that matters.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto relative group">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex gap-8">
              <div className="embla__slide flex-[0_0_31%]">
                <div className="bg-[#F3EFE9] rounded-[48px] p-2 aspect-square flex items-center justify-center overflow-hidden">
                  <img src={meditationImg} alt="Founding" className="w-full h-full object-contain p-8" />
                </div>
              </div>
              <div className="embla__slide flex-[0_0_31%]">
                <div className="bg-[#F3EFE9] rounded-[48px] p-2 aspect-square flex items-center justify-center overflow-hidden">
                  <img src={birdhouseImg} alt="Evolution" className="w-full h-full object-contain p-8" />
                </div>
              </div>
              <div className="embla__slide flex-[0_0_31%]">
                <div className="bg-[#F3EFE9] rounded-[48px] p-2 aspect-square flex items-center justify-center overflow-hidden">
                  <img src={sailboatImg} alt="Expansion" className="w-full h-full object-contain p-8" />
                </div>
              </div>
              {/* Duplicate or more slides if needed */}
              <div className="embla__slide flex-[0_0_31%]">
                <div className="bg-[#F3EFE9] rounded-[48px] p-2 aspect-square flex items-center justify-center overflow-hidden">
                  <img src={meditationImg} alt="Founding" className="w-full h-full object-contain p-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={scrollPrev} className="absolute left-[-60px] top-[40%] text-gray-400 hover:text-black transition-colors">
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button onClick={scrollNext} className="absolute right-[-60px] top-[40%] text-gray-400 hover:text-black transition-colors">
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>

        {/* Timeline Line & Content */}
        <div className="max-w-[1100px] mx-auto mt-20 relative">
          <div className="h-0.5 bg-black w-full absolute top-[7px] left-0"></div>
          <div className="grid grid-cols-3 relative">
            <div className="flex flex-col items-center">
              <div className="w-3.5 h-3.5 bg-[#A2FAA3] border-2 border-black rounded-full relative z-10 mb-10"></div>
              <h3 className="text-[20px] font-medium text-black mb-4">December 2024</h3>
              <p className="text-[15px] text-gray-600 px-8 text-center leading-relaxed">
                1561 Labs founded as an experimental space for design and strategic thinking from our small room in Delhi.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3.5 h-3.5 bg-[#A2FAA3] border-2 border-black rounded-full relative z-10 mb-10"></div>
              <h3 className="text-[20px] font-medium text-black mb-4">March 2025</h3>
              <p className="text-[15px] text-gray-600 px-8 text-center leading-relaxed">
                Launched 1561 Design Labs, architecting product experiences and 1561 Marketing Labs, engineering marketing narratives.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3.5 h-3.5 bg-[#A2FAA3] border-2 border-black rounded-full relative z-10 mb-10"></div>
              <h3 className="text-[20px] font-medium text-black mb-4">November 2025</h3>
              <p className="text-[15px] text-gray-600 px-8 text-center leading-relaxed">
                Completed idea and research stage of our SaaS Product. Began with designing and building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-16 py-20 mt-20">
        <div className="max-w-[1440px] mx-auto text-center">
          <Logo />
          <p className="mt-10 text-gray-500 text-sm">© 2026 1561 Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
