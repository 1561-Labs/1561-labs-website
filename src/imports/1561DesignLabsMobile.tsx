import svgPaths from "./svg-cjg3lj0i0m";
import imgAvatarImage from "figma:asset/641af694e6ad40e0dc4bcdbca6f078020de60fa0.png";
import imgImage17 from "figma:asset/496439e3221a21f24442aee050cdda20851840fb.png";
import imgImage20 from "figma:asset/34e4920b88fac3d5e4ddc16f501256642bb9804c.png";
import imgImage18 from "figma:asset/2d636a95ad89cba8b5224bf9e7203682eb252d10.png";
import imgImage21 from "figma:asset/18d4fc4593a34b7c7b9b5ab056fa3f28f684d362.png";
import imgPlaceholderLogo from "figma:asset/79f4e914ef775cfbdd1077909eb58f355334e6f5.png";

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[40px] ml-0 mt-0 relative w-[72.413px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.4125 40">
        <g id="Group">
          <path d={svgPaths.p1788f600} fill="var(--fill-0, #A2FAA3)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p24828f00} fill="var(--fill-0, #231F20)" id="Vector_2" />
            <path d={svgPaths.p1677280} fill="var(--fill-0, #231F20)" id="Vector_3" />
            <path d={svgPaths.pacf30f0} fill="var(--fill-0, #231F20)" id="Vector_4" />
            <path d={svgPaths.p15be5280} fill="var(--fill-0, #231F20)" id="Vector_5" />
            <path d={svgPaths.p13c40b00} fill="var(--fill-0, #231F20)" id="Vector_6" />
            <path d={svgPaths.p91fd180} fill="var(--fill-0, #231F20)" id="Vector_7" />
            <path d={svgPaths.p3400ed80} fill="var(--fill-0, #231F20)" id="Vector_8" />
            <path d={svgPaths.p23ddd80} fill="var(--fill-0, #231F20)" id="Vector_9" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] h-[29.572px] ml-[4.14%] mt-[11.82%] relative w-[146.828px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146.828 29.5721">
        <g id="Group">
          <path d={svgPaths.p14534680} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p229a7c00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p32513580} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p7d6ebf0} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.pf270f00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1cbd2100} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p208c7700} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p155846a0} fill="var(--fill-0, black)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <Group1 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Group4 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Contact</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="Actions">
      <Button />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p837bc40} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[48px]" data-name="Icon">
      <Close />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Column">
      <Actions />
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center pl-[20px] pr-[12px] py-0 relative size-full">
          <Content />
          <Column />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Navbar / 2 /">
      <Container />
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Design</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Product experiences that matter</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">
        Turn confused users into power users.
        <br aria-hidden="true" />
        Lower churn. Fix onboarding. Clear the chaos
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Explore</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Work</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Component">
      <SectionTitle />
      <Actions1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header / 62 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Philosophy</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Every product experience is a competitive weapon</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We don't design interfaces. We architect moments where your brand becomes unmistakable. Each interaction, each transition, each detail serves a single purpose: moving markets.`}</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle1 />
    </div>
  );
}

function Group9() {
  return (
    <div className="relative shrink-0 size-[335px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
        <g id="Group 810">
          <path d={svgPaths.p1bd48300} fill="var(--fill-0, #F6EFE5)" id="Vector" />
          <g id="Line Art">
            <path d={svgPaths.p14446400} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.p274da580} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p203eac00} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p3b4c1600} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p7b4a400} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p36255970} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.pd31e300} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p3f458a80} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p2fea15f0} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p1ecb4a80} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p3894f700} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.pdd7df80} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p3514b740} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.pc0d800} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p2cdce080} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.p37f9f300} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.pbedf600} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.pb10b100} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.p34a254c0} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.pd78c200} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.p944b980} fill="var(--fill-0, black)" id="Vector_22" />
            <path d={svgPaths.p18756a80} fill="var(--fill-0, black)" id="Vector_23" />
            <path d={svgPaths.p2930b600} fill="var(--fill-0, black)" id="Vector_24" />
            <path d={svgPaths.p318b5f22} fill="var(--fill-0, black)" id="Vector_25" />
            <path d={svgPaths.pa81e600} fill="var(--fill-0, black)" id="Vector_26" />
            <path d={svgPaths.p16f5f1f0} fill="var(--fill-0, black)" id="Vector_27" />
            <path d={svgPaths.p3becba00} fill="var(--fill-0, black)" id="Vector_28" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Component">
      <Content2 />
      <Group9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 192 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Capabilities</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Three disciplines that drive market differentiation</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We combine strategic thinking with relentless execution. Each discipline builds on the last, creating products that don't just work they win.`}</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content4 />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[59px]">
      <div className="absolute inset-[-3.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
          <g id="Group 827">
            <path d={svgPaths.p1eb58700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p1a930600} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p12333680} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.67%] mt-[30%] place-items-start relative">
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[150px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
          <circle cx="75" cy="75" fill="var(--fill-0, #A2FAA3)" fillOpacity="0.5" id="Ellipse 2" r="75" />
        </svg>
      </div>
      <Group11 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-[335px]" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.24px] w-full">Product strategy that shapes markets</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">We map the competitive landscape and architect your unfair advantage through deliberate design decisions.</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <Group12 />
      <Content5 />
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[150px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g id="Group 829">
          <circle cx="75" cy="75" fill="var(--fill-0, #A2FAA3)" fillOpacity="0.5" id="Ellipse 2" r="75" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] h-[59px] ml-[28%] mt-[30%] relative w-[65.555px]">
      <div className="absolute inset-[-3.39%_-3.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.5566 63">
          <g id="Group 830">
            <path d={svgPaths.p13398f00} id="Vector" stroke="var(--stroke-0, #141B34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d="M34.7788 21.6667V36.4167" id="Vector_2" stroke="var(--stroke-0, #141B34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d="M34.7788 47.8634V47.8961" id="Vector_3" stroke="var(--stroke-0, #141B34)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group13 />
      <Group16 />
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group14 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-[335px]" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.24px] w-full">UX/UI design that converts attention</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Every pixel serves purpose. We craft interfaces that feel inevitable and interactions that drive measurable outcomes.</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <Group15 />
      <Content6 />
    </div>
  );
}

function Group20() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[150px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g id="Group 829">
          <circle cx="75" cy="75" fill="var(--fill-0, #A2FAA3)" fillOpacity="0.5" id="Ellipse 2" r="75" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group20 />
    </div>
  );
}

function Group18() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="[grid-area:1_/_1] ml-[30%] mt-[30.67%] relative size-[59px]">
      <div className="absolute inset-[-3.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
          <g id="Group 833">
            <path d={svgPaths.p2bdda00} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="4" />
            <path d="M10.85 55.1L52.15 10.85" id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="4" />
            <path d={svgPaths.p1bb7a000} id="Vector_3" stroke="var(--stroke-0, black)" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group18 />
      <Group21 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-[335px]" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.24px] w-full">Interactive prototyping that proves concepts</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">We build working models that let you test, iterate, and refine before full execution.</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <Group17 />
      <Content7 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Row">
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Explore</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">More</p>
      <ChevronRight />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle2 />
      <Row />
      <Actions2 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 239 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Process</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">How we build winning products</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">We move through deliberate stages, each one sharpening the work. Discovery feeds strategy. Strategy informs design. Design gets tested, refined, and executed with precision.</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper3 />
      <Content9 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <SectionTitle3 />
    </div>
  );
}

function TabOne() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab one">
      <div aria-hidden="true" className="absolute border-[#0c0a04] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Research phase</p>
    </div>
  );
}

function TabTwo() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab two">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Design phase</p>
    </div>
  );
}

function TabThree() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab three">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Execution phase</p>
    </div>
  );
}

function TabsMenu() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Tabs Menu">
      <TabOne />
      <TabTwo />
      <TabThree />
    </div>
  );
}

function TaglineWrapper4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Research</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">We map your market and your users</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">We dig into competitive landscapes and user behavior. The insights we uncover become the foundation for everything that follows.</p>
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper4 />
      <Content11 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle4 />
    </div>
  );
}

function TabPane() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tab Pane 1">
      <Content10 />
    </div>
  );
}

function TabsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[707px] items-start relative shrink-0 w-full" data-name="Tabs Content">
      <TabPane />
    </div>
  );
}

function TabContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Tab container">
      <TabsMenu />
      <TabsContent />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[781px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content8 />
      <TabContainer />
    </div>
  );
}

function Layout2() {
  return (
    <div className="bg-white h-[781px] relative shrink-0 w-full" data-name="Layout / 501 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[768px] not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Section Title">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Real voices</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full">What brands say about working with us</p>
    </div>
  );
}

function Stars() {
  return (
    <div className="h-[18.889px] relative shrink-0 w-[116px]" data-name="Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 18.8889">
        <g clipPath="url(#clip0_4_6272)" id="Stars">
          <path d={svgPaths.p23629f00} fill="var(--fill-0, #0C0A04)" id="Vector" />
          <path d={svgPaths.p84d7480} fill="var(--fill-0, #0C0A04)" id="Vector_2" />
          <path d={svgPaths.p24418170} fill="var(--fill-0, #0C0A04)" id="Vector_3" />
          <path d={svgPaths.p28ff5800} fill="var(--fill-0, #0C0A04)" id="Vector_4" />
          <path d={svgPaths.p32177b30} fill="var(--fill-0, #0C0A04)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_4_6272">
            <rect fill="white" height="18.8889" width="116" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AvatarContent() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-[300px]" data-name="Avatar Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Shailendra Shaymsukha</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 tracking-[-0.16px] w-full">{`Head of Brand & Communication`}</p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="block max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent />
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <Avatar1 />
      <div className="h-[40px] relative shrink-0 w-[117px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Stars />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#0c0a04] text-[16px] tracking-[-0.32px] w-[min-content]">The design team was skilled with a great eye for detail and user experience. Creative, reliable, and easy to work with an asset to any team.</p>
      <Avatar />
    </div>
  );
}

function Stars1() {
  return (
    <div className="h-[18.889px] relative shrink-0 w-[116px]" data-name="Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 18.8889">
        <g clipPath="url(#clip0_4_6272)" id="Stars">
          <path d={svgPaths.p23629f00} fill="var(--fill-0, #0C0A04)" id="Vector" />
          <path d={svgPaths.p84d7480} fill="var(--fill-0, #0C0A04)" id="Vector_2" />
          <path d={svgPaths.p24418170} fill="var(--fill-0, #0C0A04)" id="Vector_3" />
          <path d={svgPaths.p28ff5800} fill="var(--fill-0, #0C0A04)" id="Vector_4" />
          <path d={svgPaths.p32177b30} fill="var(--fill-0, #0C0A04)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_4_6272">
            <rect fill="white" height="18.8889" width="116" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AvatarContent1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-[300px]" data-name="Avatar Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Srikanth ND</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 tracking-[-0.16px] w-full">{`Podcaster & KPMG India COO Tax`}</p>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative rounded-[100px] shrink-0 size-[56px]" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImage20} />
      </div>
      <AvatarContent1 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <Avatar3 />
      <div className="h-[40px] relative shrink-0 w-[105px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage18} />
      </div>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Stars1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#0c0a04] text-[16px] tracking-[-0.32px] w-[min-content]">We came with a vision. They came with a system. The execution was relentless. The results were undeniable.</p>
      <Avatar2 />
    </div>
  );
}

function Stars2() {
  return (
    <div className="h-[18.889px] relative shrink-0 w-[116px]" data-name="Stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 18.8889">
        <g clipPath="url(#clip0_4_6272)" id="Stars">
          <path d={svgPaths.p23629f00} fill="var(--fill-0, #0C0A04)" id="Vector" />
          <path d={svgPaths.p84d7480} fill="var(--fill-0, #0C0A04)" id="Vector_2" />
          <path d={svgPaths.p24418170} fill="var(--fill-0, #0C0A04)" id="Vector_3" />
          <path d={svgPaths.p28ff5800} fill="var(--fill-0, #0C0A04)" id="Vector_4" />
          <path d={svgPaths.p32177b30} fill="var(--fill-0, #0C0A04)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_4_6272">
            <rect fill="white" height="18.8889" width="116" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AvatarContent2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-[300px]" data-name="Avatar Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Amit Kumar</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 tracking-[-0.16px] w-full">Development Manager</p>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative rounded-[100px] shrink-0 size-[56px]" data-name="image 21">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage21} />
        </div>
      </div>
      <AvatarContent2 />
    </div>
  );
}

function PlaceholderLogo() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-[93px]" data-name="Placeholder Logo">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderLogo} />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <Avatar5 />
      <PlaceholderLogo />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Stars2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#0c0a04] text-[16px] tracking-[-0.32px] w-[min-content]">Great and smooth experience working with them. Over 3 year long association, they have delivered thoughtful and great UX/UI Designs</p>
      <Avatar4 />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Column6 />
      <Column7 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <Column4 />
      <Column5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle5 />
      <Content12 />
    </div>
  );
}

function Testimonial() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Testimonial / 6 /">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Build something that sticks</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`Let's architect the product experience that defines your market position`}</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Start</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Explore</p>
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content14 />
      <Actions3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] h-[158.74px] ml-0 mt-0 relative w-[222.984px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.984 158.74">
        <g id="Group 793">
          <g id="Group">
            <path d={svgPaths.p3b5c6980} fill="var(--fill-0, #C1DDD6)" id="Vector" />
            <path d={svgPaths.p967fcc0} fill="var(--fill-0, black)" id="Vector_2" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p1cf94190} fill="var(--fill-0, #E4E3D7)" id="Vector_3" />
            <path d={svgPaths.p2362f540} fill="var(--fill-0, black)" id="Vector_4" />
          </g>
          <path d={svgPaths.p19e1a600} fill="var(--fill-0, black)" id="Vector_5" />
          <g id="Group_3">
            <path d={svgPaths.pa28b200} fill="var(--fill-0, #E4E3D7)" id="Vector_6" />
            <path d={svgPaths.pf911e00} fill="var(--fill-0, black)" id="Vector_7" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p167577f0} fill="var(--fill-0, #E4E3D7)" id="Vector_8" />
            <path d={svgPaths.p567900} fill="var(--fill-0, black)" id="Vector_9" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p3768cb80} fill="var(--fill-0, #E4E3D7)" id="Vector_10" />
            <path d={svgPaths.p35fe580} fill="var(--fill-0, black)" id="Vector_11" />
          </g>
          <g id="Group_6">
            <path d={svgPaths.p26e6780} fill="var(--fill-0, #E4E3D7)" id="Vector_12" />
            <path d={svgPaths.p29709700} fill="var(--fill-0, black)" id="Vector_13" />
          </g>
          <g id="Group_7">
            <path d={svgPaths.p38ed5260} fill="var(--fill-0, #E4E3D7)" id="Vector_14" />
            <path d={svgPaths.p18b0bb00} fill="var(--fill-0, black)" id="Vector_15" />
          </g>
          <g id="Group_8">
            <path d={svgPaths.pf979c80} fill="var(--fill-0, #E4E3D7)" id="Vector_16" />
            <path d={svgPaths.p1e36ed80} fill="var(--fill-0, black)" id="Vector_17" />
          </g>
          <g id="Group_9">
            <path d={svgPaths.p26852680} fill="var(--fill-0, #E4E3D7)" id="Vector_18" />
            <path d={svgPaths.pebc5d00} fill="var(--fill-0, black)" id="Vector_19" />
          </g>
          <g id="Group_10">
            <path d={svgPaths.p25eb6900} fill="var(--fill-0, #E4E3D7)" id="Vector_20" />
            <path d={svgPaths.p3f77d580} fill="var(--fill-0, black)" id="Vector_21" />
          </g>
          <g id="Group_11">
            <path d={svgPaths.p5caf220} fill="var(--fill-0, #E4E3D7)" id="Vector_22" />
            <path d={svgPaths.pe293a00} fill="var(--fill-0, black)" id="Vector_23" />
          </g>
          <g id="Group_12">
            <path d={svgPaths.p15c8700} fill="var(--fill-0, #E4E3D7)" id="Vector_24" />
            <path d={svgPaths.p39e35c80} fill="var(--fill-0, black)" id="Vector_25" />
          </g>
          <g id="Group_13">
            <path d={svgPaths.peaefe00} fill="var(--fill-0, #C1DDD6)" id="Vector_26" />
            <path d={svgPaths.p199c0900} fill="var(--fill-0, black)" id="Vector_27" />
          </g>
          <path d={svgPaths.p1f4f5900} fill="var(--fill-0, black)" id="Vector_28" />
          <path d={svgPaths.p23760300} fill="var(--fill-0, black)" id="Vector_29" />
          <g id="Group_14">
            <path d={svgPaths.pb7639f2} fill="var(--fill-0, #A2FAA3)" id="Vector_30" />
            <path d={svgPaths.p3988c5f2} fill="var(--fill-0, black)" id="Vector_31" />
          </g>
          <g id="Group_15">
            <path d={svgPaths.p2a7e6380} fill="var(--fill-0, #A2FAA3)" id="Vector_32" />
            <path d={svgPaths.p1f006c00} fill="var(--fill-0, black)" id="Vector_33" />
          </g>
          <g id="Group_16">
            <path d={svgPaths.p3ef44e00} fill="var(--fill-0, #E4E3D7)" id="Vector_34" />
            <path d={svgPaths.p1ced9c00} fill="var(--fill-0, black)" id="Vector_35" />
          </g>
          <g id="Group_17">
            <path d={svgPaths.p3908fd80} fill="var(--fill-0, #A2FAA3)" id="Vector_36" />
            <path d={svgPaths.p4eea380} fill="var(--fill-0, black)" id="Vector_37" />
          </g>
          <g id="Group_18">
            <path d={svgPaths.p15cf8a00} fill="var(--fill-0, black)" id="Vector_38" />
            <path d={svgPaths.p14ddb380} fill="var(--fill-0, black)" id="Vector_39" />
          </g>
          <g id="Group_19">
            <path d={svgPaths.p4e07e00} fill="var(--fill-0, #C1DDD6)" id="Vector_40" />
            <path d={svgPaths.p1af9d600} fill="var(--fill-0, black)" id="Vector_41" />
          </g>
          <g id="Group_20">
            <path d={svgPaths.p117e6a00} fill="var(--fill-0, #E4E3D7)" id="Vector_42" />
            <path d={svgPaths.p1e5f8a00} fill="var(--fill-0, black)" id="Vector_43" />
          </g>
          <g id="Group_21">
            <path d={svgPaths.pae8f480} fill="var(--fill-0, black)" id="Vector_44" />
            <path d={svgPaths.p290f7600} fill="var(--fill-0, black)" id="Vector_45" />
          </g>
          <g id="Group_22">
            <path d={svgPaths.p33a59200} fill="var(--fill-0, black)" id="Vector_46" />
            <path d={svgPaths.pe8b9400} fill="var(--fill-0, black)" id="Vector_47" />
          </g>
          <g id="Group_23">
            <path d={svgPaths.p2576b300} fill="var(--fill-0, black)" id="Vector_48" />
            <path d={svgPaths.p13531d00} fill="var(--fill-0, black)" id="Vector_49" />
          </g>
          <g id="Group_24">
            <path d={svgPaths.p238b0a00} fill="var(--fill-0, black)" id="Vector_50" />
            <path d={svgPaths.p19185570} fill="var(--fill-0, black)" id="Vector_51" />
          </g>
          <g id="Group_25">
            <path d={svgPaths.peecdd00} fill="var(--fill-0, black)" id="Vector_52" />
            <path d={svgPaths.p18e57e00} fill="var(--fill-0, black)" id="Vector_53" />
          </g>
          <g id="Group_26">
            <path d={svgPaths.p16c25980} fill="var(--fill-0, black)" id="Vector_54" />
            <path d={svgPaths.pe3db300} fill="var(--fill-0, black)" id="Vector_55" />
          </g>
          <g id="Group_27">
            <path d={svgPaths.p4254cb0} fill="var(--fill-0, black)" id="Vector_56" />
            <path d={svgPaths.p18947230} fill="var(--fill-0, black)" id="Vector_57" />
          </g>
          <g id="Group_28">
            <path d={svgPaths.p15cb200} fill="var(--fill-0, #E4E3D7)" id="Vector_58" />
            <path d={svgPaths.p19f48000} fill="var(--fill-0, black)" id="Vector_59" />
          </g>
          <g id="Group_29">
            <path d={svgPaths.p1ab38e00} fill="var(--fill-0, #E4E3D7)" id="Vector_60" />
            <path d={svgPaths.p2035b400} fill="var(--fill-0, black)" id="Vector_61" />
          </g>
          <g id="Group_30">
            <path d={svgPaths.p3da7f8a0} fill="var(--fill-0, #E4E3D7)" id="Vector_62" />
            <path d={svgPaths.p2efd2200} fill="var(--fill-0, black)" id="Vector_63" />
          </g>
          <g id="Group_31">
            <path d={svgPaths.p3ec6c000} fill="var(--fill-0, #A2FAA3)" id="Vector_64" />
            <path d={svgPaths.p12836080} fill="var(--fill-0, black)" id="Vector_65" />
          </g>
          <path d={svgPaths.p7644980} fill="var(--fill-0, black)" id="Vector_66" />
          <g id="Group_32">
            <g id="Vector_67" />
            <path d={svgPaths.p1e8db1f0} fill="var(--fill-0, black)" id="Vector_68" />
          </g>
          <g id="Group_33">
            <g id="Vector_69" />
            <path d={svgPaths.p30e28b80} fill="var(--fill-0, black)" id="Vector_70" />
          </g>
          <g id="Group_34">
            <path d={svgPaths.p11a3e300} fill="var(--fill-0, #A2FAA3)" id="Vector_71" />
            <path d={svgPaths.p3a8a2280} fill="var(--fill-0, black)" id="Vector_72" />
          </g>
          <path d={svgPaths.p19b07900} fill="var(--fill-0, black)" id="Vector_73" />
          <g id="Group_35">
            <g id="Vector_74" />
            <path d={svgPaths.pc44e100} fill="var(--fill-0, black)" id="Vector_75" />
          </g>
          <g id="Group_36">
            <g id="Vector_76" />
            <path d={svgPaths.p3473a900} fill="var(--fill-0, black)" id="Vector_77" />
          </g>
          <path d={svgPaths.p3df57500} fill="var(--fill-0, #A2FAA3)" id="Vector_78" />
          <g id="Group_37">
            <path d={svgPaths.p355ec480} fill="var(--fill-0, #E4E3D7)" id="Vector_79" />
            <path d={svgPaths.p1b235a60} fill="var(--fill-0, black)" id="Vector_80" />
          </g>
          <g id="Group_38">
            <path d={svgPaths.p174e1a80} fill="var(--fill-0, #A2FAA3)" id="Vector_81" />
            <path d={svgPaths.p3df9b100} fill="var(--fill-0, black)" id="Vector_82" />
          </g>
          <g id="Group_39">
            <path d={svgPaths.p39aa300} fill="var(--fill-0, black)" id="Vector_83" />
            <path d={svgPaths.p32a8eb80} fill="var(--fill-0, black)" id="Vector_84" />
          </g>
          <g id="Group_40">
            <path d={svgPaths.p37958180} fill="var(--fill-0, #E4E3D7)" id="Vector_85" />
            <path d={svgPaths.p23b69c00} fill="var(--fill-0, black)" id="Vector_86" />
          </g>
          <g id="Group_41">
            <path d={svgPaths.p22c33500} fill="var(--fill-0, black)" id="Vector_87" />
            <path d={svgPaths.p3303f740} fill="var(--fill-0, black)" id="Vector_88" />
          </g>
          <g id="Group_42">
            <path d={svgPaths.p26a51600} fill="var(--fill-0, #E4E3D7)" id="Vector_89" />
            <path d={svgPaths.p2049c170} fill="var(--fill-0, black)" id="Vector_90" />
          </g>
          <g id="Group_43">
            <path d={svgPaths.p391e1580} fill="var(--fill-0, black)" id="Vector_91" />
            <path d={svgPaths.p3cc7bb00} fill="var(--fill-0, black)" id="Vector_92" />
          </g>
          <g id="Group_44">
            <path d={svgPaths.p2183d580} fill="var(--fill-0, #A2FAA3)" id="Vector_93" />
            <path d={svgPaths.p2155fd00} fill="var(--fill-0, black)" id="Vector_94" />
          </g>
          <g id="Group_45">
            <path d={svgPaths.p9ac0c00} fill="var(--fill-0, black)" id="Vector_95" />
            <path d={svgPaths.p21bbdd00} fill="var(--fill-0, black)" id="Vector_96" />
          </g>
          <path d={svgPaths.p2f06dd00} fill="var(--fill-0, black)" id="Vector_97" />
          <g id="Group_46">
            <path d={svgPaths.p1bf1280} fill="var(--fill-0, #E4E3D7)" id="Vector_98" />
            <path d={svgPaths.p19535d70} fill="var(--fill-0, black)" id="Vector_99" />
          </g>
          <g id="Group_47">
            <path d={svgPaths.p8e40630} fill="var(--fill-0, #C1DDD6)" id="Vector_100" />
            <path d={svgPaths.p1c7c4100} fill="var(--fill-0, black)" id="Vector_101" />
          </g>
          <g id="Group_48">
            <path d={svgPaths.p240c1700} fill="var(--fill-0, #E4E3D7)" id="Vector_102" />
            <path d={svgPaths.pf871300} fill="var(--fill-0, black)" id="Vector_103" />
          </g>
          <path d={svgPaths.p1b60b780} fill="var(--fill-0, black)" id="Vector_104" />
          <path d={svgPaths.p13af1000} fill="var(--fill-0, black)" id="Vector_105" />
          <g id="Group_49">
            <path d={svgPaths.p3e35b700} fill="var(--fill-0, #C1DDD6)" id="Vector_106" />
            <path d={svgPaths.p3ef957c0} fill="var(--fill-0, black)" id="Vector_107" />
          </g>
          <g id="Group_50">
            <path d={svgPaths.pdb6eb80} fill="var(--fill-0, #E4E3D7)" id="Vector_108" />
            <path d={svgPaths.p2b989280} fill="var(--fill-0, black)" id="Vector_109" />
          </g>
          <path d={svgPaths.p15323900} fill="var(--fill-0, black)" id="Vector_110" />
          <path d={svgPaths.p1fa3ca00} fill="var(--fill-0, black)" id="Vector_111" />
          <g id="Group_51">
            <path d={svgPaths.p10e3b870} fill="var(--fill-0, #C1DDD6)" id="Vector_112" />
            <path d={svgPaths.p1e8b8c00} fill="var(--fill-0, black)" id="Vector_113" />
          </g>
          <g id="Group_52">
            <path d={svgPaths.pd538700} fill="var(--fill-0, #E4E3D7)" id="Vector_114" />
            <path d={svgPaths.p268bf980} fill="var(--fill-0, black)" id="Vector_115" />
          </g>
          <path d={svgPaths.p1ce91a70} fill="var(--fill-0, black)" id="Vector_116" />
          <path d={svgPaths.pc4d9700} fill="var(--fill-0, black)" id="Vector_117" />
          <g id="Group_53">
            <path d={svgPaths.pf073580} fill="var(--fill-0, #E4E3D7)" id="Vector_118" />
            <path d={svgPaths.p19e6ae80} fill="var(--fill-0, black)" id="Vector_119" />
          </g>
          <g id="Group_54">
            <path d={svgPaths.p30048b00} fill="var(--fill-0, #A2FAA3)" id="Vector_120" />
            <path d={svgPaths.p231d7c00} fill="var(--fill-0, black)" id="Vector_121" />
          </g>
          <g id="Group_55">
            <path d={svgPaths.p1f079980} fill="var(--fill-0, black)" id="Vector_122" />
            <path d={svgPaths.p8075e00} fill="var(--fill-0, black)" id="Vector_123" />
          </g>
          <g id="Group_56">
            <path d={svgPaths.p6f1fe00} fill="var(--fill-0, #C1DDD6)" id="Vector_124" />
            <path d={svgPaths.pebd6600} fill="var(--fill-0, black)" id="Vector_125" />
          </g>
          <path d={svgPaths.p38828b80} fill="var(--fill-0, black)" id="Vector_126" />
          <path d={svgPaths.p76c400} fill="var(--fill-0, black)" id="Vector_127" />
          <path d={svgPaths.p3e56f000} fill="var(--fill-0, black)" id="Vector_128" />
          <path d={svgPaths.p3b072600} fill="var(--fill-0, black)" id="Vector_129" />
          <path d={svgPaths.p1e017400} fill="var(--fill-0, black)" id="Vector_130" />
          <path d={svgPaths.p3c89e830} fill="var(--fill-0, black)" id="Vector_131" />
          <path d={svgPaths.p2a153900} fill="var(--fill-0, black)" id="Vector_132" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.72%] mt-[17.75%] place-items-start relative">
      <Group5 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[rgba(162,250,163,0.1)] h-[193.148px] ml-0 mt-0 rounded-[40px] w-[335px]" />
      <Group6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content13 />
      <Group8 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CTA / 31 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[40px] ml-0 mt-0 relative w-[72.413px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.4125 40">
        <g id="Group">
          <g id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p24828f00} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p1677280} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.pacf30f0} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p15be5280} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p13c40b00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p91fd180} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p3400ed80} fill="var(--fill-0, white)" id="Vector_8" />
            <path d={svgPaths.p23ddd80} fill="var(--fill-0, white)" id="Vector_9" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] h-[29.572px] ml-[4.14%] mt-[11.82%] relative w-[146.828px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146.828 29.5721">
        <g id="Group">
          <path d={svgPaths.p14534680} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p229a7c00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p32513580} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p7d6ebf0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pf270f00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1cbd2100} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p208c7700} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p155846a0} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Group7 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">About us</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Our labs</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Growth log</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Careers</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Contact Us</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white w-full">Explore</p>
      <FooterLinks />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">LinkedIn</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Twitter/X</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Instagram</p>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white w-full">Socials</p>
      <FooterLinks1 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Links">
      <Column8 />
      <Column9 />
      <Column10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic relative shrink-0 text-white w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full">Updates</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] w-full">Get insights on design, strategy, and building at the edge.</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.7)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.55)]">Your email</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Subscribe</p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput />
      <Button7 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[12px] text-white w-full">We respect your inbox. Unsubscribe anytime.</p>
    </div>
  );
}

function Newslatter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Newslatter">
      <Frame />
      <Actions4 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#0c0a04] relative rounded-[40px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex flex-col gap-[48px] items-start p-[32px] relative w-full">
        <Links />
        <Newslatter />
      </div>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Facebook">
          <path d={svgPaths.p2ed8fe00} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Instagram">
          <path clipRule="evenodd" d={svgPaths.p3f3f55f0} fill="var(--fill-0, #0C0A04)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p214d7500} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="LinkedIn">
          <path clipRule="evenodd" d={svgPaths.p2b170900} fill="var(--fill-0, #0C0A04)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Youtube">
          <path d={svgPaths.p35f23f00} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social Links">
      <Facebook />
      <Instagram />
      <X />
      <LinkedIn />
      <Youtube />
    </div>
  );
}

function FooterLinks2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 underline" data-name="Footer Links">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Terms of service</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Cookie settings</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0">Privacy settings</p>
    </div>
  );
}

function Credits1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap" data-name="Credits">
      <FooterLinks2 />
      <p className="relative shrink-0">Privacy policy</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <SocialLinks />
      <Credits1 />
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Credits">
      <Row1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Component">
      <Card />
      <Credits />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer / 10 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[48px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

export default function Component1561DesignLabsMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="1561 Design Labs • Mobile">
      {/* <Navbar /> */}
      <Header />
      <Layout />
      <Layout1 />
      <Layout2 />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}
