import svgPaths from "./svg-qxdumr8jxm";
import imgPlaceholderImage from "figma:asset/d47f9f5af24fd7129274afad903571dd3819a330.png";

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[40px] ml-0 mt-0 relative w-[72.412px]" data-name="Group">
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
    <div className="bg-white h-[67px] relative shrink-0 w-full max-w-[1440px] mx-auto" data-name="Navbar / 2 /">
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Documented</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">How we build</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Real experiments, honest failures, and the work that shaped us into what we are today</p>
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
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Read</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Subscribe</p>
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
    <div className="bg-white h-[365px] relative shrink-0 w-full" data-name="Header / 62 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-0 pt-[112px] px-[64px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Stories</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">What we learned building</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Each entry documents a moment that changed how we work</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content2 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">Design</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">8 min read</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.24px] w-full">The day we rebuilt our entire design system</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Constraints forced clarity. We discovered that limitation breeds better decisions than freedom ever could.</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info />
      <Content5 />
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

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Read more</p>
      <ChevronRight />
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="aspect-[405.3333435058594/270] relative rounded-[32px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[32px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content4 />
      <Button3 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">Strategy</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">12 min read</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.24px] w-full">When a client said no to our best idea</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">We fought for it. Then we listened. The compromise we reached was stronger than either version alone.</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info1 />
      <Content7 />
    </div>
  );
}

function ChevronRight1() {
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
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Read more</p>
      <ChevronRight1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[32px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[32px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content6 />
      <Button4 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">Process</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">6 min read</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.24px] w-full">How we learned to kill our darlings</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`Beautiful work that doesn't move the needle gets cut. It hurts. But the work improves when you stop protecting ideas.`}</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info2 />
      <Content9 />
    </div>
  );
}

function ChevronRight2() {
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

function Button5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Read more</p>
      <ChevronRight2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="aspect-[405.33331298828125/270] relative rounded-[32px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[32px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content8 />
      <Button5 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">View all</p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <Button6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle1 />
      <Content3 />
      <Actions2 />
    </div>
  );
}

function Blog() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Blog / 34 /">
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Explore</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Navigate our work by what matters</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`Filter through experiments that shaped our process, milestones that defined our growth, and lessons we've learned along the way.`}</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content10 />
    </div>
  );
}

function Group11() {
  return (
    <div className="relative shrink-0 size-[235px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 235">
        <g id="Group 815">
          <circle cx="117.5" cy="117.5" fill="var(--fill-0, #A2FAA3)" fillOpacity="0.5" id="Ellipse 1" r="117.5" />
          <g id="Group 814">
            <path d={svgPaths.p40a0500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p422f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p2eca5900} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Experiments</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">The work we tried, tested, and refined in real time.</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[394.667px]" data-name="Column">
      <Group11 />
      <Content12 />
    </div>
  );
}

function Content13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[101px] items-center left-0 not-italic text-[#0c0a04] text-center top-[267px] w-[394.667px]" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Milestones</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">The moments that shifted how we operate.</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute aspect-[48/60] left-[37.87%] right-[38.3%] top-[calc(50%-0.5px)] translate-y-[-50%]">
      <div className="absolute inset-[-2.86%_-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.0005 73.9995">
          <g id="Group 812">
            <path d={svgPaths.p28c5a100} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p5de9700} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="4" />
            <path d="M30.0002 1.99949V19.4995" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(162,250,163,0.5)] left-[79.83px] rounded-[117.5px] size-[235px] top-0">
      <Group10 />
    </div>
  );
}

function Column2() {
  return (
    <div className="h-[368px] overflow-clip relative shrink-0 w-[394.667px]" data-name="Column">
      <Content13 />
      <Frame />
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[235px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 235">
        <g id="Group 815">
          <circle cx="117.5" cy="117.5" fill="var(--fill-0, #A2FAA3)" fillOpacity="0.5" id="Ellipse 1" r="117.5" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] aspect-[20/18] ml-[33.62%] mt-[calc(50%-34.5px)] relative w-[77.778px]">
      <div className="absolute inset-[-2.86%_-2.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81.7778 74">
          <g id="Group 816">
            <path d={svgPaths.p3af18c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p333d0800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group12 />
      <Group14 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Lessons learned</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Truths we discovered through building and failing.</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[394.667px]" data-name="Column">
      <Group13 />
      <Content14 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle2 />
      <Content11 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 239 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-0 pt-[112px] px-[64px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Get updates</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">New stories land when we have something real to say</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,10,4,0.6)]">Enter your email</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Subscribe</p>
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

function Actions3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[513px]" data-name="Actions">
      <Form />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[12px] w-full">By subscribing you agree to receive updates from 1561 Labs about our work and insights.</p>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content16 />
      <Actions3 />
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content15 />
      <Group9 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CTA / 32 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container4 />
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
    <div className="[grid-area:1_/_1] h-[36.965px] ml-[4.14%] mt-[11.82%] relative w-[183.535px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183.535 36.9651">
        <g id="Group">
          <path d={svgPaths.p23b3cc00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p17cccff0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p7f19480} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2bad8b00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p308c400} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p20abfc00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p15767400} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p35b4e980} fill="var(--fill-0, white)" id="Vector_8" />
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

function Column4() {
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

function Column5() {
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
      <Column4 />
      <Column5 />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.6] not-italic relative shrink-0 text-[16px] text-white w-full" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">Updates</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 w-full">Get insights on design, strategy, and building at the edge.</p>
    </div>
  );
}

function TextInput1() {
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

function Button8() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Subscribe</p>
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput1 />
      <Button8 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[12px] text-white w-full">We respect your inbox. Unsubscribe anytime.</p>
    </div>
  );
}

function Newslatter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[400px]" data-name="Newslatter">
      <Content17 />
      <Actions4 />
    </div>
  );
}

function Card3() {
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

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Component">
      <Card3 />
      <Credits />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer / 10 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[80px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

export default function GrowthLogDesktop() {
  return (
    <div className="flex flex-col items-center relative w-full gap-0 p-0" data-name="Growth Log • Desktop">
      {/* <Navbar /> */}
      <Header />
      <Blog />
      <Layout />
      <Cta />
      <Footer />
    </div>
  );
}
