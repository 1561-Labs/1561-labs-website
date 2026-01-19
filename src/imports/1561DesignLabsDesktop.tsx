import svgPaths from "./svg-o6t8s29bsi";
import imgImage19 from "figma:asset/27c9e37fd6cc72ea00f345d55aaf6fe493743a36.png";
import imgImage17 from "figma:asset/496439e3221a21f24442aee050cdda20851840fb.png";
import imgAvatarImage from "figma:asset/305b5be810df12d69c0e6cbf88928e0100536c03.png";
import imgImage18 from "figma:asset/2d636a95ad89cba8b5224bf9e7203682eb252d10.png";
import imgImage21 from "figma:asset/18d4fc4593a34b7c7b9b5ab056fa3f28f684d362.png";
import imgImage13 from "figma:asset/79f4e914ef775cfbdd1077909eb58f355334e6f5.png";

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

function Group6() {
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
      <Group6 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">About</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Labs</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Growth</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Down">
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, #0C0A04)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLinkDropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Nav Link Dropdown">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">More</p>
      <ChevronDown />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Link">
      <NavLinkDropdown />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Column">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Contact</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Actions">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Content />
      <Column />
      <Actions />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white h-[57px] relative shrink-0 w-full max-w-[1440px] mx-auto" data-name="Navbar / 2 /">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-0 relative size-full gap-0">
          <Container />
        </div>
      </div>
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
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Product experiences that matter</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">
        Turn confused users into power users.
        <br aria-hidden="true" />
        Lower churn. Fix onboarding. Clear the chaos
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Explore</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
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
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Component">
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
    <div className="bg-white h-[394px] relative shrink-0 w-full" data-name="Header / 62 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-0 pt-[112px] px-[64px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="relative shrink-0 size-[600px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 600">
        <g id="Group 810">
          <path d={svgPaths.p431f700} fill="var(--fill-0, #F6EFE5)" id="Vector" />
          <g id="Line Art">
            <path d={svgPaths.p3c49c400} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.p1f852780} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.pe64a80} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p1ff11d00} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p2e2c1280} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p16e80400} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p3136c000} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p144eb380} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p998b100} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p3fd7db00} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p2eed6f80} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p346f7200} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p17d3d980} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p19fd3f00} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p29ad5480} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.p20155900} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p13d20e00} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p38a80000} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.p2ca05b80} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.p1c61f00} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.p1f32e300} fill="var(--fill-0, black)" id="Vector_22" />
            <path d={svgPaths.p3eb3b280} fill="var(--fill-0, black)" id="Vector_23" />
            <path d={svgPaths.p2e612900} fill="var(--fill-0, black)" id="Vector_24" />
            <path d={svgPaths.p3cb1ed70} fill="var(--fill-0, black)" id="Vector_25" />
            <path d={svgPaths.p110bc180} fill="var(--fill-0, black)" id="Vector_26" />
            <path d={svgPaths.p13ad1800} fill="var(--fill-0, black)" id="Vector_27" />
            <path d={svgPaths.p25f83100} fill="var(--fill-0, black)" id="Vector_28" />
          </g>
        </g>
      </svg>
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
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Every product experience is a competitive weapon</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`We don't design interfaces. We architect moments where your brand becomes unmistakable. Each interaction, each transition, each detail serves a single purpose: moving markets.`}</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <SectionTitle1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Component">
      <Group10 />
      <Content2 />
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
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
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
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Three disciplines that drive market differentiation</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`We combine strategic thinking with relentless execution. Each discipline builds on the last, creating products that don't just work they win.`}</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content4 />
    </div>
  );
}

function Group11() {
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

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.67%] mt-[30%] place-items-start relative">
      <Group11 />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[150px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
          <circle cx="75" cy="75" fill="var(--fill-0, #A2FAA3)" fillOpacity="0.5" id="Ellipse 2" r="75" />
        </svg>
      </div>
      <Group12 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Product strategy that shapes markets</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">We map the competitive landscape and architect your unfair advantage through deliberate design decisions.</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[394.667px]" data-name="Column">
      <Group13 />
      <Content6 />
    </div>
  );
}

function Group14() {
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

function Group17() {
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

function Group15() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group14 />
      <Group17 />
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group15 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">UX/UI design that converts attention</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Every pixel serves purpose. We craft interfaces that feel inevitable and interactions that drive measurable outcomes.</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[394.667px]" data-name="Column">
      <Group16 />
      <Content7 />
    </div>
  );
}

function Group21() {
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

function Group20() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group21 />
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

function Group22() {
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

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group19 />
      <Group22 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Interactive prototyping that proves concepts</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">We build working models that let you test, iterate, and refine before full execution.</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[394.667px]" data-name="Column">
      <Group18 />
      <Content8 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
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
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle2 />
      <Content5 />
      <Actions2 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 239 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
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

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">How we build winning products</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">We move through deliberate stages, each one sharpening the work. Discovery feeds strategy. Strategy informs design. Design gets tested, refined, and executed with precision.</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper3 />
      <Content10 />
    </div>
  );
}

function Content9() {
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

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">We map your market and your users</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">We dig into competitive landscapes and user behavior. The insights we uncover become the foundation for everything that follows.</p>
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TabOne />
      <Content12 />
    </div>
  );
}

function Actions3() {
  return <div className="h-[46px] shrink-0 w-[188px]" data-name="Actions" />;
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <SectionTitle4 />
      <Actions3 />
    </div>
  );
}

function TabPane() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center relative shrink-0" data-name="Tab Pane 1">
      <Content11 />
    </div>
  );
}

function TabOne1() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab one">
      <div aria-hidden="true" className="absolute border-[#0c0a04] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Design phase</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">We visualize the ideas, thoughts and the users</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Based on the research, and analysis after following numerous design process. We start designing the UX/UI.</p>
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TabOne1 />
      <Content14 />
    </div>
  );
}

function Actions4() {
  return <div className="h-[46px] shrink-0 w-[188px]" data-name="Actions" />;
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <SectionTitle5 />
      <Actions4 />
    </div>
  );
}

function TabPane1() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex items-center relative shrink-0" data-name="Tab Pane 4">
      <Content13 />
    </div>
  );
}

function TabOne2() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab one">
      <div aria-hidden="true" className="absolute border-[#0c0a04] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Execution phase</p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">We test, and analyze the design with users</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Post the design, we start with various types of the testing of the design to make sure the it fulfills the users, and meets the business goal.</p>
    </div>
  );
}

function SectionTitle6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TabOne2 />
      <Content16 />
    </div>
  );
}

function Actions5() {
  return <div className="h-[46px] shrink-0 w-[188px]" data-name="Actions" />;
}

function Content15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <SectionTitle6 />
      <Actions5 />
    </div>
  );
}

function TabPane2() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex items-center relative shrink-0" data-name="Tab Pane 5">
      <Content15 />
    </div>
  );
}

function TabsContent() {
  return (
    <div className="gap-[64px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full" data-name="Tabs Content">
      <TabPane />
      <TabPane1 />
      <TabPane2 />
    </div>
  );
}

function TabContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Tab container">
      <TabsContent />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] h-[720px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content9 />
      <TabContainer />
    </div>
  );
}

function Layout2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 501 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-px pt-[112px] px-[64px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Section Title">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Real voices</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">What brands say about working with us</p>
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
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-nowrap" data-name="Avatar Content">
      <p className="font-['Inter_Display:Medium',sans-serif] relative shrink-0 text-[18px]">Shailendra Shyamsukha</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">{`Head of Brand & Communications`}</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative rounded-[100px] shrink-0 size-[56px]" data-name="image 19">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImage19} />
      </div>
      <AvatarContent />
      <div className="h-[50px] relative shrink-0 w-[147px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
      <Stars />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#0c0a04] text-[18px] tracking-[-0.36px] w-[min-content]">The design team was skilled with a great eye for detail and user experience. Creative, reliable, and easy to work with an asset to any team.</p>
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
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-nowrap" data-name="Avatar Content">
      <p className="font-['Inter_Display:Medium',sans-serif] relative shrink-0 text-[18px]">Srikanth ND</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] tracking-[-0.16px]">{`Podcaster & KPMG, India COO-TAX`}</p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="block max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent1 />
      <div className="h-[50px] relative shrink-0 w-[132px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage18} />
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
      <Stars1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#0c0a04] text-[18px] tracking-[-0.36px] w-[min-content]">We came with a vision. They came with a system. The execution was relentless. The results were undeniable.</p>
      <Avatar1 />
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
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-nowrap" data-name="Avatar Content">
      <p className="font-['Inter_Display:Medium',sans-serif] relative shrink-0 text-[18px]">Amit Kumar</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px]">Development Manager</p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Avatar">
      <div className="relative rounded-[100px] shrink-0 size-[56px]" data-name="image 21">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage21} />
        </div>
      </div>
      <AvatarContent2 />
      <div className="h-[50px] relative shrink-0 w-[97px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Column6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
      <Stars2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#0c0a04] text-[18px] tracking-[-0.36px] w-[min-content]">Great and smooth experience working with them. Over 3 year long association, they have delivered thoughtful and great UX/UI Designs</p>
      <Avatar2 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Column4 />
      <Column5 />
      <Column6 />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle7 />
      <Content17 />
    </div>
  );
}

function Testimonial() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Testimonial / 6 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Build something that sticks</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`Your product isn't failing because it lacks features. It's failing because users can't figure it out.`}</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Start</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Explore</p>
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content19 />
      <Actions6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] h-[606.529px] ml-0 mt-0 relative w-[852px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 852 606.529">
        <g id="Group 793">
          <g id="Group">
            <path d={svgPaths.p4f14a70} fill="var(--fill-0, #C1DDD6)" id="Vector" />
            <path d={svgPaths.p2966bd00} fill="var(--fill-0, black)" id="Vector_2" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p11708540} fill="var(--fill-0, #E4E3D7)" id="Vector_3" />
            <path d={svgPaths.p6431080} fill="var(--fill-0, black)" id="Vector_4" />
          </g>
          <path d={svgPaths.p26651d00} fill="var(--fill-0, black)" id="Vector_5" />
          <g id="Group_3">
            <path d={svgPaths.p36156c00} fill="var(--fill-0, #E4E3D7)" id="Vector_6" />
            <path d={svgPaths.p27ba8100} fill="var(--fill-0, black)" id="Vector_7" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p3eb02300} fill="var(--fill-0, #E4E3D7)" id="Vector_8" />
            <path d={svgPaths.p2db6d300} fill="var(--fill-0, black)" id="Vector_9" />
          </g>
          <g id="Group_5">
            <path d={svgPaths.p249ab5c0} fill="var(--fill-0, #E4E3D7)" id="Vector_10" />
            <path d={svgPaths.p23dd2100} fill="var(--fill-0, black)" id="Vector_11" />
          </g>
          <g id="Group_6">
            <path d={svgPaths.p1fc3f480} fill="var(--fill-0, #E4E3D7)" id="Vector_12" />
            <path d={svgPaths.p526f500} fill="var(--fill-0, black)" id="Vector_13" />
          </g>
          <g id="Group_7">
            <path d={svgPaths.p36662c80} fill="var(--fill-0, #E4E3D7)" id="Vector_14" />
            <path d={svgPaths.p323fd800} fill="var(--fill-0, black)" id="Vector_15" />
          </g>
          <g id="Group_8">
            <path d={svgPaths.pdfcae70} fill="var(--fill-0, #E4E3D7)" id="Vector_16" />
            <path d={svgPaths.p32322640} fill="var(--fill-0, black)" id="Vector_17" />
          </g>
          <g id="Group_9">
            <path d={svgPaths.p2dccc200} fill="var(--fill-0, #E4E3D7)" id="Vector_18" />
            <path d={svgPaths.p380b840} fill="var(--fill-0, black)" id="Vector_19" />
          </g>
          <g id="Group_10">
            <path d={svgPaths.p102c6a80} fill="var(--fill-0, #E4E3D7)" id="Vector_20" />
            <path d={svgPaths.p1593c400} fill="var(--fill-0, black)" id="Vector_21" />
          </g>
          <g id="Group_11">
            <path d={svgPaths.p1c4faec0} fill="var(--fill-0, #E4E3D7)" id="Vector_22" />
            <path d={svgPaths.p5616b00} fill="var(--fill-0, black)" id="Vector_23" />
          </g>
          <g id="Group_12">
            <path d={svgPaths.p1e81ca00} fill="var(--fill-0, #E4E3D7)" id="Vector_24" />
            <path d={svgPaths.p1f7c6180} fill="var(--fill-0, black)" id="Vector_25" />
          </g>
          <g id="Group_13">
            <path d={svgPaths.p79ae80} fill="var(--fill-0, #C1DDD6)" id="Vector_26" />
            <path d={svgPaths.pb7c6d00} fill="var(--fill-0, black)" id="Vector_27" />
          </g>
          <path d={svgPaths.p24e7da00} fill="var(--fill-0, black)" id="Vector_28" />
          <path d={svgPaths.p15810f00} fill="var(--fill-0, black)" id="Vector_29" />
          <g id="Group_14">
            <path d={svgPaths.p3a289280} fill="var(--fill-0, #A2FAA3)" id="Vector_30" />
            <path d={svgPaths.p1ed53600} fill="var(--fill-0, black)" id="Vector_31" />
          </g>
          <g id="Group_15">
            <path d={svgPaths.p2636c200} fill="var(--fill-0, #A2FAA3)" id="Vector_32" />
            <path d={svgPaths.p300b4a00} fill="var(--fill-0, black)" id="Vector_33" />
          </g>
          <g id="Group_16">
            <path d={svgPaths.pb7a1680} fill="var(--fill-0, #E4E3D7)" id="Vector_34" />
            <path d={svgPaths.p6ec6080} fill="var(--fill-0, black)" id="Vector_35" />
          </g>
          <g id="Group_17">
            <path d={svgPaths.pd6ad500} fill="var(--fill-0, #A2FAA3)" id="Vector_36" />
            <path d={svgPaths.p38ef6c00} fill="var(--fill-0, black)" id="Vector_37" />
          </g>
          <g id="Group_18">
            <path d={svgPaths.p1bbd6300} fill="var(--fill-0, black)" id="Vector_38" />
            <path d={svgPaths.pca70c31} fill="var(--fill-0, black)" id="Vector_39" />
          </g>
          <g id="Group_19">
            <path d={svgPaths.p38897f00} fill="var(--fill-0, #C1DDD6)" id="Vector_40" />
            <path d={svgPaths.p2f943480} fill="var(--fill-0, black)" id="Vector_41" />
          </g>
          <g id="Group_20">
            <path d={svgPaths.p36ad9a70} fill="var(--fill-0, #E4E3D7)" id="Vector_42" />
            <path d={svgPaths.p21341280} fill="var(--fill-0, black)" id="Vector_43" />
          </g>
          <g id="Group_21">
            <path d={svgPaths.p266df40} fill="var(--fill-0, black)" id="Vector_44" />
            <path d={svgPaths.p2c5e2780} fill="var(--fill-0, black)" id="Vector_45" />
          </g>
          <g id="Group_22">
            <path d={svgPaths.p368761f0} fill="var(--fill-0, black)" id="Vector_46" />
            <path d={svgPaths.pe697980} fill="var(--fill-0, black)" id="Vector_47" />
          </g>
          <g id="Group_23">
            <path d={svgPaths.p35a56e80} fill="var(--fill-0, black)" id="Vector_48" />
            <path d={svgPaths.p13ea6f2} fill="var(--fill-0, black)" id="Vector_49" />
          </g>
          <g id="Group_24">
            <path d={svgPaths.p1fd6dc40} fill="var(--fill-0, black)" id="Vector_50" />
            <path d={svgPaths.p122faf00} fill="var(--fill-0, black)" id="Vector_51" />
          </g>
          <g id="Group_25">
            <path d={svgPaths.pdf4d000} fill="var(--fill-0, black)" id="Vector_52" />
            <path d={svgPaths.p3dd5a900} fill="var(--fill-0, black)" id="Vector_53" />
          </g>
          <g id="Group_26">
            <path d={svgPaths.p1bdce100} fill="var(--fill-0, black)" id="Vector_54" />
            <path d={svgPaths.p36048e00} fill="var(--fill-0, black)" id="Vector_55" />
          </g>
          <g id="Group_27">
            <path d={svgPaths.p31078380} fill="var(--fill-0, black)" id="Vector_56" />
            <path d={svgPaths.p237f1cf0} fill="var(--fill-0, black)" id="Vector_57" />
          </g>
          <g id="Group_28">
            <path d={svgPaths.p3071ab00} fill="var(--fill-0, #E4E3D7)" id="Vector_58" />
            <path d={svgPaths.pf662580} fill="var(--fill-0, black)" id="Vector_59" />
          </g>
          <g id="Group_29">
            <path d={svgPaths.p123d9080} fill="var(--fill-0, #E4E3D7)" id="Vector_60" />
            <path d={svgPaths.p31375800} fill="var(--fill-0, black)" id="Vector_61" />
          </g>
          <g id="Group_30">
            <path d={svgPaths.pd48fa00} fill="var(--fill-0, #E4E3D7)" id="Vector_62" />
            <path d={svgPaths.p2bf4ab00} fill="var(--fill-0, black)" id="Vector_63" />
          </g>
          <g id="Group_31">
            <path d={svgPaths.p45de000} fill="var(--fill-0, #A2FAA3)" id="Vector_64" />
            <path d={svgPaths.p215aff00} fill="var(--fill-0, black)" id="Vector_65" />
          </g>
          <path d={svgPaths.p24fbe680} fill="var(--fill-0, black)" id="Vector_66" />
          <g id="Group_32">
            <g id="Vector_67" />
            <path d={svgPaths.p2fd80480} fill="var(--fill-0, black)" id="Vector_68" />
          </g>
          <g id="Group_33">
            <g id="Vector_69" />
            <path d={svgPaths.p2a62f800} fill="var(--fill-0, black)" id="Vector_70" />
          </g>
          <g id="Group_34">
            <path d={svgPaths.pff42b00} fill="var(--fill-0, #A2FAA3)" id="Vector_71" />
            <path d={svgPaths.p2b8c4b00} fill="var(--fill-0, black)" id="Vector_72" />
          </g>
          <path d={svgPaths.p73ef480} fill="var(--fill-0, black)" id="Vector_73" />
          <g id="Group_35">
            <g id="Vector_74" />
            <path d={svgPaths.p38441180} fill="var(--fill-0, black)" id="Vector_75" />
          </g>
          <g id="Group_36">
            <g id="Vector_76" />
            <path d={svgPaths.pb2f0c00} fill="var(--fill-0, black)" id="Vector_77" />
          </g>
          <path d={svgPaths.p2ceff00} fill="var(--fill-0, #A2FAA3)" id="Vector_78" />
          <g id="Group_37">
            <path d={svgPaths.p38c5d80} fill="var(--fill-0, #E4E3D7)" id="Vector_79" />
            <path d={svgPaths.p2c7f6600} fill="var(--fill-0, black)" id="Vector_80" />
          </g>
          <g id="Group_38">
            <path d={svgPaths.p16acd480} fill="var(--fill-0, #A2FAA3)" id="Vector_81" />
            <path d={svgPaths.p22e7ad00} fill="var(--fill-0, black)" id="Vector_82" />
          </g>
          <g id="Group_39">
            <path d={svgPaths.p3c35d00} fill="var(--fill-0, black)" id="Vector_83" />
            <path d={svgPaths.p1a394680} fill="var(--fill-0, black)" id="Vector_84" />
          </g>
          <g id="Group_40">
            <path d={svgPaths.p1a659480} fill="var(--fill-0, #E4E3D7)" id="Vector_85" />
            <path d={svgPaths.pced8100} fill="var(--fill-0, black)" id="Vector_86" />
          </g>
          <g id="Group_41">
            <path d={svgPaths.p33181f00} fill="var(--fill-0, black)" id="Vector_87" />
            <path d={svgPaths.p2c741280} fill="var(--fill-0, black)" id="Vector_88" />
          </g>
          <g id="Group_42">
            <path d={svgPaths.p2b3a700} fill="var(--fill-0, #E4E3D7)" id="Vector_89" />
            <path d={svgPaths.p209cd300} fill="var(--fill-0, black)" id="Vector_90" />
          </g>
          <g id="Group_43">
            <path d={svgPaths.p1ed18200} fill="var(--fill-0, black)" id="Vector_91" />
            <path d={svgPaths.p134f3d00} fill="var(--fill-0, black)" id="Vector_92" />
          </g>
          <g id="Group_44">
            <path d={svgPaths.p21c75c20} fill="var(--fill-0, #A2FAA3)" id="Vector_93" />
            <path d={svgPaths.p29d97480} fill="var(--fill-0, black)" id="Vector_94" />
          </g>
          <g id="Group_45">
            <path d={svgPaths.p1835ab00} fill="var(--fill-0, black)" id="Vector_95" />
            <path d={svgPaths.p206c1900} fill="var(--fill-0, black)" id="Vector_96" />
          </g>
          <path d={svgPaths.pfbe2200} fill="var(--fill-0, black)" id="Vector_97" />
          <g id="Group_46">
            <path d={svgPaths.pedda80} fill="var(--fill-0, #E4E3D7)" id="Vector_98" />
            <path d={svgPaths.p3291f900} fill="var(--fill-0, black)" id="Vector_99" />
          </g>
          <g id="Group_47">
            <path d={svgPaths.p3b91c400} fill="var(--fill-0, #C1DDD6)" id="Vector_100" />
            <path d={svgPaths.p20b58e00} fill="var(--fill-0, black)" id="Vector_101" />
          </g>
          <g id="Group_48">
            <path d={svgPaths.pf68a870} fill="var(--fill-0, #E4E3D7)" id="Vector_102" />
            <path d={svgPaths.p11a95680} fill="var(--fill-0, black)" id="Vector_103" />
          </g>
          <path d={svgPaths.p103312f0} fill="var(--fill-0, black)" id="Vector_104" />
          <path d={svgPaths.p2fa3cb80} fill="var(--fill-0, black)" id="Vector_105" />
          <g id="Group_49">
            <path d={svgPaths.p17ee200} fill="var(--fill-0, #C1DDD6)" id="Vector_106" />
            <path d={svgPaths.p16afc700} fill="var(--fill-0, black)" id="Vector_107" />
          </g>
          <g id="Group_50">
            <path d={svgPaths.p85b2300} fill="var(--fill-0, #E4E3D7)" id="Vector_108" />
            <path d={svgPaths.p3fd11a00} fill="var(--fill-0, black)" id="Vector_109" />
          </g>
          <path d={svgPaths.p30949680} fill="var(--fill-0, black)" id="Vector_110" />
          <path d={svgPaths.p3a1c8300} fill="var(--fill-0, black)" id="Vector_111" />
          <g id="Group_51">
            <path d={svgPaths.p4519800} fill="var(--fill-0, #C1DDD6)" id="Vector_112" />
            <path d={svgPaths.p2bdf3800} fill="var(--fill-0, black)" id="Vector_113" />
          </g>
          <g id="Group_52">
            <path d={svgPaths.p11e85c00} fill="var(--fill-0, #E4E3D7)" id="Vector_114" />
            <path d={svgPaths.p2682e380} fill="var(--fill-0, black)" id="Vector_115" />
          </g>
          <path d={svgPaths.p159c00} fill="var(--fill-0, black)" id="Vector_116" />
          <path d={svgPaths.p39c2c900} fill="var(--fill-0, black)" id="Vector_117" />
          <g id="Group_53">
            <path d={svgPaths.p3d108680} fill="var(--fill-0, #E4E3D7)" id="Vector_118" />
            <path d={svgPaths.p6808d00} fill="var(--fill-0, black)" id="Vector_119" />
          </g>
          <g id="Group_54">
            <path d={svgPaths.p12b88700} fill="var(--fill-0, #A2FAA3)" id="Vector_120" />
            <path d={svgPaths.p19cee000} fill="var(--fill-0, black)" id="Vector_121" />
          </g>
          <g id="Group_55">
            <path d={svgPaths.p841ed00} fill="var(--fill-0, black)" id="Vector_122" />
            <path d={svgPaths.p3f9d9000} fill="var(--fill-0, black)" id="Vector_123" />
          </g>
          <g id="Group_56">
            <path d={svgPaths.p9f7cf00} fill="var(--fill-0, #C1DDD6)" id="Vector_124" />
            <path d={svgPaths.p36a60560} fill="var(--fill-0, black)" id="Vector_125" />
          </g>
          <path d={svgPaths.p1b6c8780} fill="var(--fill-0, black)" id="Vector_126" />
          <path d={svgPaths.p141f1680} fill="var(--fill-0, black)" id="Vector_127" />
          <path d={svgPaths.p3f4ac440} fill="var(--fill-0, black)" id="Vector_128" />
          <path d={svgPaths.p21d92c00} fill="var(--fill-0, black)" id="Vector_129" />
          <path d={svgPaths.p1e1e6880} fill="var(--fill-0, black)" id="Vector_130" />
          <path d={svgPaths.p1e78b4f0} fill="var(--fill-0, black)" id="Vector_131" />
          <path d={svgPaths.p309f8900} fill="var(--fill-0, black)" id="Vector_132" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.72%] mt-[17.75%] place-items-start relative">
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[rgba(162,250,163,0.1)] h-[738px] ml-0 mt-0 rounded-[40px] w-[1280px]" />
      <Group8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content18 />
      <Group9 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CTA / 31 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[50px] ml-0 mt-0 relative w-[90.516px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.5157 50">
        <g id="Group">
          <path d={svgPaths.p2b296472} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pa9f530} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1ec44280} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p30ffc680} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p8a28180} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p33c98200} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.pea80380} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3330ae00} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] h-[36.965px] ml-[4.14%] mt-[11.82%] relative w-[183.536px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183.535 36.9654">
        <g id="Group">
          <path d={svgPaths.p7b3fb80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1d3e1d00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pa84ad80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2cd25400} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p17564b00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p25321b50} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1e71df80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1a196440} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group4 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">About us</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Our labs</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Growth log</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Careers</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Contact us</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[232px] items-start overflow-clip relative shrink-0 w-[147.265px]" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white w-full">Explore</p>
      <FooterLinks />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Instagram</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">LinkedIn</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">X</p>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[156px] items-start overflow-clip relative shrink-0 w-[147.265px]" data-name="Column">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[16px] text-white w-full">Socials</p>
      <FooterLinks1 />
    </div>
  );
}

function Links() {
  return (
    <div className="basis-0 content-stretch flex gap-[85px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Links">
      <Group5 />
      <Column7 />
      <Column8 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.6] not-italic relative shrink-0 text-[16px] text-white w-full" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Updates</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Get insights on design, strategy, and building at the edge.</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.52)]">Your email</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Subscribe</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput />
      <Button7 />
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[12px] text-white w-full">We respect your inbox. Unsubscribe anytime.</p>
    </div>
  );
}

function Newslatter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[400px]" data-name="Newslatter">
      <Content20 />
      <Actions7 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#0c0a04] relative rounded-[40px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex gap-[128px] items-start p-[48px] relative w-full">
        <Links />
        <Newslatter />
      </div>
    </div>
  );
}

function Credits1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-center leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap" data-name="Credits">
      <p className="relative shrink-0">Privacy policy</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0 underline">Terms of service</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0 underline">Cookie settings</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0 underline">Privacy settings</p>
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

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Row">
      <Credits1 />
      <SocialLinks />
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Credits">
      <Row2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Component">
      <Card />
      <Credits />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer / 10 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

export default function Component1561DesignLabsDesktop() {
  return (
    <div className="flex flex-col items-center relative w-full gap-0 p-0" data-name="1561 Design Labs • Desktop">
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
