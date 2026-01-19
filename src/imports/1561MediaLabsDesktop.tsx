import svgPaths from "./svg-81qserlqw9";
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
    <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Navbar / 2 /">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-0 relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Engineering</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Marketing that converts</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Stop guessing where your customers are. Start showing up where they actually pay attention.</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Contact</p>
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
    <div className="bg-white h-[363px] relative shrink-0 w-full" data-name="Header / 62 /">
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
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Method</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Narrative engineering that moves the needle</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`We don't craft stories for applause. We architect narratives that convert attention into action, grounded in data and executed with relentless precision. Every word, every frame, every touchpoint is designed to drive measurable outcomes.`}</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content4 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List Item">
      <ul className="basis-0 block font-['Inter:Regular',sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0a04] text-[18px] tracking-[-0.36px]">
        <li className="ms-[27px]">
          <span className="leading-[1.8]">Strategy meets storytelling</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List Item">
      <ul className="basis-0 block font-['Inter:Regular',sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0a04] text-[18px] tracking-[-0.36px]">
        <li className="ms-[27px]">
          <span className="leading-[1.8]">Data informs every creative decision</span>
        </li>
      </ul>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="List Item">
      <ul className="basis-0 block font-['Inter:Regular',sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0a04] text-[18px] tracking-[-0.36px]">
        <li className="ms-[27px]">
          <span className="leading-[1.8]">Outcomes over aesthetics always</span>
        </li>
      </ul>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle1 />
      <List />
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Learn</p>
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

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <Content3 />
      <Actions2 />
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

function Component1() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Component">
      <Content2 />
      <Group10 />
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
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 19 /">
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Arsenal</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[48px] tracking-[0.48px] w-full">Three weapons in our narrative arsenal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`We've built a system. Each tool sharpens the others. Together, they move markets.`}</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content5 />
    </div>
  );
}

function Group11() {
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

function Group13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group11 />
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group13 />
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[59px]">
      <div className="absolute inset-[-3.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
          <g id="Group 837">
            <path d={svgPaths.p21a12500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p2ccba440} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30%] mt-[30.67%] place-items-start relative">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group14 />
      <Group20 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Campaigns that convert</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">We map the path from awareness to action with surgical precision.</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[394.667px]" data-name="Column">
      <Group21 />
      <Content7 />
    </div>
  );
}

function Group12() {
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group12 />
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group16 />
    </div>
  );
}

function Group24() {
  return (
    <div className="[grid-area:1_/_1] h-[59px] ml-0 mt-0 relative w-[47.2px]">
      <div className="absolute inset-[-3.39%_-4.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.2004 63.0003">
          <g id="Group 840">
            <path d={svgPaths.p1a940000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p26003680} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[34%] mt-[30%] place-items-start relative">
      <Group24 />
    </div>
  );
}

function Group23() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group15 />
      <Group22 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Content systems that scale</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Narratives built to multiply, not diminish, across every channel.</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[394.667px]" data-name="Column">
      <Group23 />
      <Content8 />
    </div>
  );
}

function Group26() {
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

function Group18() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group26 />
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group18 />
    </div>
  );
}

function Group28() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[59px]">
      <div className="absolute inset-[-3.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
          <g id="Group 842">
            <path d={svgPaths.p48bb480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p3109ca20} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p1459f200} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.67%] mt-[30%] place-items-start relative">
      <Group28 />
    </div>
  );
}

function Group25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group17 />
      <Group27 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">{`Growth analytics that prove `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`Numbers don't lie. We measure what matters and optimize relentlessly.`}</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-[394.667px]" data-name="Column">
      <Group25 />
      <Content9 />
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

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle2 />
      <Content6 />
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
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Impact</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Numbers that speak</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">This is what deliberate narrative design looks like in practice.</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper3 />
      <Content10 />
    </div>
  );
}

function Stat() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col font-['Inter_Tight:Regular',sans-serif] gap-[8px] items-start not-italic place-self-stretch relative shrink-0 text-[#0c0a04]" data-name="Stat">
      <p className="leading-[1.2] relative shrink-0 text-[56px] tracking-[0.56px] w-full">3x</p>
      <p className="leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">Average engagement lift</p>
    </div>
  );
}

function Stat1() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col font-['Inter_Tight:Regular',sans-serif] gap-[8px] items-start not-italic place-self-stretch relative shrink-0 text-[#0c0a04]" data-name="Stat">
      <p className="leading-[1.2] relative shrink-0 text-[56px] tracking-[0.56px] w-full">2.8x</p>
      <p className="leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">Conversion rate improvement</p>
    </div>
  );
}

function Stat2() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col font-['Inter_Tight:Regular',sans-serif] gap-[8px] items-start not-italic place-self-stretch relative shrink-0 text-[#0c0a04]" data-name="Stat">
      <p className="leading-[1.2] relative shrink-0 text-[56px] tracking-[0.56px] w-full">47%</p>
      <p className="leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">Audience growth sustained</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="font-['Inter_Tight:Regular',sans-serif] h-[103px] not-italic relative shrink-0 text-[#0c0a04] w-full">
      <p className="absolute leading-[1.2] left-0 text-[56px] top-0 tracking-[0.56px] w-[242px]">68%</p>
      <p className="absolute leading-[1.4] left-0 text-[20px] top-[75px] tracking-[0.2px] w-[242px]">Increased brand recall</p>
    </div>
  );
}

function Stat3() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Stat">
      <Frame />
    </div>
  );
}

function Stats() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] overflow-clip p-[48px] relative self-stretch shrink-0 w-[628px]" data-name="Stats">
      <Stat />
      <Stat1 />
      <Stat2 />
      <Stat3 />
    </div>
  );
}

function Background() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[568px]" data-name="BACKGROUND">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 568 568">
        <g id="BACKGROUND">
          <path d={svgPaths.p2027a680} fill="var(--fill-0, #F6EFE5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Illustrations() {
  return (
    <div className="[grid-area:1_/_1] h-[394.168px] ml-0 mt-0 relative w-[403px]" data-name="ILLUSTRATIONS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 403 394.168">
        <g id="ILLUSTRATIONS">
          <path d={svgPaths.p333cef00} fill="var(--fill-0, #FF8010)" id="Vector" />
          <path d={svgPaths.pd1f1200} fill="var(--fill-0, #FF8010)" id="Vector_2" />
          <path d={svgPaths.p3d847570} fill="var(--fill-0, #FF8010)" id="Vector_3" />
          <path d={svgPaths.p24bf7800} fill="var(--fill-0, #FF8010)" id="Vector_4" />
          <path d={svgPaths.pb285600} fill="var(--fill-0, #FF8010)" id="Vector_5" />
          <path d={svgPaths.p94ac600} fill="var(--fill-0, #FF8010)" id="Vector_6" />
          <path d={svgPaths.p15cf2700} fill="var(--fill-0, #FF8010)" id="Vector_7" />
          <path d={svgPaths.p38fef300} fill="var(--fill-0, #FF8010)" id="Vector_8" />
          <path d={svgPaths.p263f7900} fill="var(--fill-0, #FF8010)" id="Vector_9" />
          <path d={svgPaths.p39426580} fill="var(--fill-0, #FF8010)" id="Vector_10" />
          <path d={svgPaths.p259a3700} fill="var(--fill-0, #FF8010)" id="Vector_11" />
          <path d={svgPaths.p64e2400} fill="var(--fill-0, #001218)" id="Vector_12" />
          <path d={svgPaths.p2b9ec300} fill="var(--fill-0, #001218)" id="Vector_13" />
          <path d={svgPaths.p9fb2b00} fill="var(--fill-0, #001218)" id="Vector_14" />
          <path d={svgPaths.p2f9c5c00} fill="var(--fill-0, #001218)" id="Vector_15" />
          <path d={svgPaths.p1681eb00} fill="var(--fill-0, #001218)" id="Vector_16" />
          <path d={svgPaths.p674200} fill="var(--fill-0, #001218)" id="Vector_17" />
          <path d={svgPaths.p1b154400} fill="var(--fill-0, #001218)" id="Vector_18" />
          <path d={svgPaths.p25b8330} fill="var(--fill-0, #001218)" id="Vector_19" />
          <path d={svgPaths.p1e0f3880} fill="var(--fill-0, #001218)" id="Vector_20" />
          <path d={svgPaths.p252abe00} fill="var(--fill-0, #001218)" id="Vector_21" />
          <path d={svgPaths.p3d2b7480} fill="var(--fill-0, #001218)" id="Vector_22" />
          <path d={svgPaths.p37ceb800} fill="var(--fill-0, #001218)" id="Vector_23" />
          <path d={svgPaths.p172392c0} fill="var(--fill-0, #001218)" id="Vector_24" />
          <path d={svgPaths.p284fc280} fill="var(--fill-0, #001218)" id="Vector_25" />
          <path d={svgPaths.p16f4600} fill="var(--fill-0, #001218)" id="Vector_26" />
          <path d={svgPaths.p345d5200} fill="var(--fill-0, #001218)" id="Vector_27" />
          <path d={svgPaths.p39d91d00} fill="var(--fill-0, #001218)" id="Vector_28" />
          <path d={svgPaths.pcd23300} fill="var(--fill-0, #001218)" id="Vector_29" />
          <path d={svgPaths.p2d3f0a80} fill="var(--fill-0, #001218)" id="Vector_30" />
          <path d={svgPaths.p2aeab7f0} fill="var(--fill-0, #001218)" id="Vector_31" />
          <path d={svgPaths.p2c344200} fill="var(--fill-0, #001218)" id="Vector_32" />
          <path d={svgPaths.p17f6be00} fill="var(--fill-0, #001218)" id="Vector_33" />
          <path d={svgPaths.p3397a900} fill="var(--fill-0, #001218)" id="Vector_34" />
          <path d={svgPaths.pae79e80} fill="var(--fill-0, #001218)" id="Vector_35" />
          <path d={svgPaths.p27e60080} fill="var(--fill-0, #001218)" id="Vector_36" />
          <path d={svgPaths.pfa9a500} fill="var(--fill-0, #001218)" id="Vector_37" />
          <path d={svgPaths.p196add00} fill="var(--fill-0, #001218)" id="Vector_38" />
          <path d={svgPaths.p21c4a100} fill="var(--fill-0, #FF8010)" id="Vector_39" />
          <path d={svgPaths.p379fbf00} fill="var(--fill-0, #001218)" id="Vector_40" />
          <path d={svgPaths.p158b28c0} fill="var(--fill-0, #001218)" id="Vector_41" />
          <path d={svgPaths.p1c125800} fill="var(--fill-0, #001218)" id="Vector_42" />
          <path d={svgPaths.p1b2c580} fill="var(--fill-0, #001218)" id="Vector_43" />
          <path d={svgPaths.pf893d00} fill="var(--fill-0, #001218)" id="Vector_44" />
          <path d={svgPaths.p3419d000} fill="var(--fill-0, #FF8010)" id="Vector_45" />
          <path d={svgPaths.pc680780} fill="var(--fill-0, #001218)" id="Vector_46" />
          <path d={svgPaths.p22f7a100} fill="var(--fill-0, #001218)" id="Vector_47" />
          <path d={svgPaths.p3972e880} fill="var(--fill-0, #001218)" id="Vector_48" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.61%] mt-[15.32%] place-items-start relative">
      <Illustrations />
    </div>
  );
}

function Group29() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Background />
      <Group30 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex gap-[81px] items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      <Stats />
      <Group29 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle3 />
      <Content11 />
    </div>
  );
}

function Stats1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Stats / 20 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Section Title">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">What they say</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Real outcomes from real partners</p>
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

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle4 />
      <Content12 />
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

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Ready to engineer growth</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`Let's build narratives that move markets and minds alike`}</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Talk</p>
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
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content14 />
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

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content13 />
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

function Content15() {
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
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[400px]" data-name="Newslatter">
      <Content15 />
      <Actions4 />
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

export default function Component1561MediaLabsDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="1561 Media Labs • Desktop">
      {/* <Navbar /> */}
      <Header />
      <Layout />
      <Layout1 />
      <Stats1 />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
}
