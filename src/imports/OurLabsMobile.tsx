import svgPaths from "./svg-v43kfldim9";

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

function Group13() {
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
      <Group13 />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Laboratories</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Where ideas transform</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Two verticals. One mission. Deliberate transformation through design and strategy.</p>
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
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Design</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Media</p>
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

function SectionInfo() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[20px] h-[64px] items-center leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap w-full" data-name="Section Info">
      <p className="relative shrink-0">01</p>
      <p className="relative shrink-0">Design Labs</p>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Products</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">We architect experiences that move markets</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Product design that cuts through noise. We build interfaces and systems that users want to live in, not escape from.</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content4 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Visit</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">→</p>
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

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle1 />
      <Actions2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] h-[59.195px] ml-0 mt-0 relative w-[107.167px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.167 59.1956">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p35d5e000} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p2a3a4300} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p2fbd3b00} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p7dfe100} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p47fe000} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p9a3d7c0} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.pa0ae300} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.pc9ea580} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
          <path d={svgPaths.p1ceb2c80} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p295d8f40} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p397cb300} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p377d1d80} fill="var(--fill-0, white)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] h-[57.196px] ml-[56.44%] mt-[1.7%] relative w-[92.382px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.3818 57.1958">
        <g id="Group">
          <path d={svgPaths.p1877e300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2d6778f0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2938e680} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pef013c0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p227f3a00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p13693500} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p327d9200} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p22421000} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3fa17980} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3b9dc400} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[18.35%] mt-[41.16%] place-items-start relative" data-name="Group">
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group20() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[335px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
          <path d={svgPaths.p1bd48300} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <Group2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Content3 />
      <Group20 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] pb-[64px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <SectionInfo />
      <Content2 />
    </div>
  );
}

function FeatureOne() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Feature one">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-0 relative w-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionInfo1() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[20px] h-[64px] items-center leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap w-full" data-name="Section Info">
      <p className="relative shrink-0">01</p>
      <p className="relative shrink-0">Feature one</p>
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Narratives</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">We engineer stories that convert attention</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`Marketing that doesn't whisper. We craft campaigns and content that grab hold and refuse to let go, turning curiosity into action.`}</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content7 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Visit</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
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

function Button6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">→</p>
      <ChevronRight1 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle2 />
      <Actions3 />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] h-[59.743px] ml-0 mt-0 relative w-[108.155px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.156 59.7427">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p1eadd200} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p1b877e00} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p12cf0b00} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p10ff380} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p36062d00} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p3da4a000} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p232f8200} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p33758b00} fill="var(--fill-0, white)" id="Vector_8" />
          </g>
          <path d={svgPaths.p95c8d80} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1befc600} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2d2df000} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p15027000} fill="var(--fill-0, white)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] h-[57.709px] ml-[57.95%] mt-[1.7%] relative w-[87.68px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.6809 57.7094">
        <g id="Group">
          <path d={svgPaths.p39a761c0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p232bebf0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3a6d53c0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p5bf5f0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3027dc00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2ba14080} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p259c3c00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2ba0080} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p153c2800} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[18.87%] mt-[41.08%] place-items-start relative" data-name="Group">
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group22() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[335px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
          <path d={svgPaths.p1bd48300} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <Group5 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Content6 />
      <Group22 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] pb-[64px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <SectionInfo1 />
      <Content5 />
    </div>
  );
}

function FeatureTwo() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Feature two">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-0 relative w-full">
          <Container3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionInfo2() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[20px] h-[64px] items-center leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap w-full" data-name="Section Info">
      <p className="relative shrink-0">01</p>
      <p className="relative shrink-0">Feature one</p>
    </div>
  );
}

function TaglineWrapper3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Platforms</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">We build tools that solve real problems</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Proprietary software engineered to eliminate friction. We identify inefficiencies and build solutions that make work faster, smarter, and worth doing.</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper3 />
      <Content10 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Learn</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
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

function Button8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">→</p>
      <ChevronRight2 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle3 />
      <Actions4 />
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] h-[59.312px] ml-0 mt-0 relative w-[60.607px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.6072 59.3122">
        <g id="Group">
          <g id="Vector">
            <path d={svgPaths.p18463100} fill="var(--fill-0, #4900AD)" />
            <path d={svgPaths.p2c7c7600} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p2c182e00} fill="var(--fill-0, #6D00FF)" />
            <path d={svgPaths.p3c92fb00} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] h-[40.01px] ml-[31.12%] mt-[16.28%] relative w-[163.843px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.843 40.0103">
        <g id="Group">
          <g id="Vector">
            <path d={svgPaths.p13eb9580} fill="var(--fill-0, #4900AD)" />
            <path d={svgPaths.p6c26700} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p1a10fe00} fill="var(--fill-0, #4900AD)" />
            <path d={svgPaths.p33273500} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.pb1e4280} fill="var(--fill-0, #4900AD)" />
            <path d={svgPaths.p347284f0} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p1b05a980} fill="var(--fill-0, #4900AD)" />
            <path d={svgPaths.p21234300} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.p32834a00} fill="var(--fill-0, #4900AD)" />
            <path d={svgPaths.p21ed1200} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" />
          </g>
          <g id="Vector_6">
            <path d={svgPaths.p3fb34b80} fill="var(--fill-0, #4900AD)" />
            <path d={svgPaths.p19e30c00} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" />
          </g>
          <g id="Vector_7">
            <path d={svgPaths.p10551500} fill="var(--fill-0, #4900AD)" />
            <path d={svgPaths.p31c8e400} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.5%] mt-[41.15%] place-items-start relative" data-name="Group">
      <Group9 />
      <Group10 />
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[335px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
          <g id="Vector">
            <path d={svgPaths.p1bd48300} fill="var(--fill-0, white)" />
            <path d={svgPaths.p6bba2f0} stroke="var(--stroke-0, #4900AD)" strokeOpacity="0.2" strokeWidth="2" />
          </g>
        </svg>
      </div>
      <Group8 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Content9 />
      <Group19 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] pb-[64px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <SectionInfo2 />
      <Content8 />
    </div>
  );
}

function FeatureThree() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Feature three">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-0 relative w-full">
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionInfo3() {
  return (
    <div className="bg-white content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[20px] h-[64px] items-center leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap w-full" data-name="Section Info">
      <p className="relative shrink-0">01</p>
      <p className="relative shrink-0">Feature one</p>
    </div>
  );
}

function TaglineWrapper4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Education</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">We democratize knowledge that matters</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`Specialized expertise shouldn't stay locked away. We're building a platform that makes advanced knowledge accessible to anyone hungry enough to learn it.`}</p>
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper4 />
      <Content13 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Explore</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function ChevronRight3() {
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

function Button10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">→</p>
      <ChevronRight3 />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button9 />
      <Button10 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle4 />
      <Actions5 />
    </div>
  );
}

function Group18() {
  return (
    <div className="relative shrink-0 size-[335px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
        <g id="Group 806">
          <path d={svgPaths.p1bd48300} fill="var(--fill-0, #0038A8)" id="Vector" />
          <g id="Group">
            <g id="Group_2">
              <path d={svgPaths.p393072c0} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.peafcc00} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p30dea80} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.pb87b200} fill="var(--fill-0, white)" id="Vector_5" />
              <path d={svgPaths.p1965e100} fill="var(--fill-0, white)" id="Vector_6" />
              <path d={svgPaths.p3ce59f00} fill="var(--fill-0, white)" id="Vector_7" />
              <path d={svgPaths.p28c5c580} fill="var(--fill-0, white)" id="Vector_8" />
              <path d={svgPaths.p31c37700} fill="var(--fill-0, white)" id="Vector_9" />
              <path d={svgPaths.p2e4b5700} fill="var(--fill-0, white)" id="Vector_10" />
              <path d={svgPaths.pc285e00} fill="var(--fill-0, white)" id="Vector_11" />
              <path d={svgPaths.p3bf83100} fill="var(--fill-0, white)" id="Vector_12" />
              <path d={svgPaths.p2299ee00} fill="var(--fill-0, white)" id="Vector_13" />
              <path d={svgPaths.p770c400} fill="var(--fill-0, white)" id="Vector_14" />
              <path d={svgPaths.p2f702d00} fill="var(--fill-0, white)" id="Vector_15" />
              <path d={svgPaths.p1fac6900} fill="var(--fill-0, white)" id="Vector_16" />
              <path d={svgPaths.p27a38f00} fill="var(--fill-0, white)" id="Vector_17" />
              <path d={svgPaths.p300ddac0} fill="var(--fill-0, white)" id="Vector_18" />
            </g>
            <path d={svgPaths.p139c2e80} fill="var(--fill-0, white)" id="Vector_19" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Content12 />
      <Group18 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] pb-[64px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <SectionInfo3 />
      <Content11 />
    </div>
  );
}

function FeatureFour() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Feature four">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-0 relative w-full">
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Layout2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Layout / 357 /">
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFour />
    </div>
  );
}

function TaglineWrapper5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Synthesis</p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Where design and strategy collide</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">The real work happens at the intersection. Design Labs shapes what users touch. Media Labs shapes what they feel. Together, they move mountains.</p>
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper5 />
      <Content16 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Design</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Builds the interface. Solves the problem. Makes it beautiful.</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List Item">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Media</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Tells the story. Captures attention. Drives the conversion.</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic px-0 py-[8px] relative shrink-0 text-[#0c0a04] w-full" data-name="List">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle5 />
      <List />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Discover</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function ChevronRight4() {
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

function Button12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">→</p>
      <ChevronRight4 />
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <Content15 />
      <Actions6 />
    </div>
  );
}

function Group21() {
  return (
    <div className="relative shrink-0 size-[335px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
        <g id="Group 810">
          <path d={svgPaths.p1bd48300} fill="var(--fill-0, #A2FAA3)" id="Vector" />
          <g id="Line Art">
            <path d={svgPaths.p12cbd5f0} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.p3c9285f1} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p3bb65700} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p2a255980} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p2d783900} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p20258e00} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p222be300} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p3d8ed100} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p2677a000} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p291db6f0} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p23df6b80} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p188d1000} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p32119300} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p79e8500} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p140a5c00} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.p34a7de20} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p3632fc00} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p25ac68f0} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.pb07bc00} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.peec1380} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.pe1537c0} fill="var(--fill-0, black)" id="Vector_22" />
            <path d={svgPaths.p6f9680} fill="var(--fill-0, black)" id="Vector_23" />
            <path d={svgPaths.p246c15f0} fill="var(--fill-0, black)" id="Vector_24" />
            <path d={svgPaths.p3ccda800} fill="var(--fill-0, black)" id="Vector_25" />
            <path d={svgPaths.p4318b00} fill="var(--fill-0, black)" id="Vector_26" />
            <path d={svgPaths.p2bf71d00} fill="var(--fill-0, black)" id="Vector_27" />
            <path d={svgPaths.p3f50e900} fill="var(--fill-0, black)" id="Vector_28" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Component">
      <Content14 />
      <Group21 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 25 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Process</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">How we turn raw ideas into refined outcomes</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We don't believe in first drafts. We believe in deliberate iteration. Every project moves through the same crucible: honest work, relentless refinement, measurable results.`}</p>
    </div>
  );
}

function SectionTitle6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper6 />
      <Content17 />
    </div>
  );
}

function Build() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="build">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="build">
          <path d={svgPaths.p48d2000} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">Mix the ingredients together</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Gather insights, ideas, and constraints. Build the foundation.</p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Build />
      <Content19 />
    </div>
  );
}

function Experiment() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="experiment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="experiment">
          <path d={svgPaths.p13f80680} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">Mould it into shape</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Experiment. Prototype. Test. Push the boundaries of what works.</p>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Experiment />
      <Content21 />
    </div>
  );
}

function Matter() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="matter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="matter">
          <path d={svgPaths.p530cc80} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">Refine until it sings</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Polish every detail. Eliminate friction. Make it matter.</p>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Matter />
      <Content23 />
    </div>
  );
}

function Watch() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="watch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="watch">
          <path d={svgPaths.p3e4e050} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">Watch it transcend</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Launch something that moves markets and changes how people work.</p>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Watch />
      <Content25 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Row">
      <Content18 />
      <Content20 />
      <Content22 />
      <Content24 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle6 />
      <Row />
    </div>
  );
}

function Layout1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 298 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[0.36px] w-full">Ready to build</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full">{`Pick a lab and let's start the work that matters to your brand.`}</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Explore</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Talk</p>
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button13 />
      <Button14 />
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content27 />
      <Actions7 />
    </div>
  );
}

function Group14() {
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

function Group15() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.72%] mt-[17.75%] place-items-start relative">
      <Group14 />
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[rgba(162,250,163,0.1)] h-[193.148px] ml-0 mt-0 rounded-[40px] w-[335px]" />
      <Group15 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content26 />
      <Group17 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CTA / 31 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] h-[40px] ml-0 mt-0 relative w-[72.412px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.4125 40.0001">
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

function Group12() {
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

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group11 />
      <Group12 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Group16 />
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

function Column2() {
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

function Column3() {
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
      <Column1 />
      <Column2 />
      <Column3 />
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

function Button15() {
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
      <Button15 />
    </div>
  );
}

function Actions8() {
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
      <Actions8 />
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

function Container9() {
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
          <Container9 />
        </div>
      </div>
    </div>
  );
}

export default function OurLabsMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Our Labs • Mobile">
      {/* <Navbar /> */}
      <Header />
      <Layout2 />
      <Layout />
      <Layout1 />
      <Cta />
      <Footer />
    </div>
  );
}
