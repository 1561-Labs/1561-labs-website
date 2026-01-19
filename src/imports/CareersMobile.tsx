import svgPaths from "./svg-xtlt40vdu4";

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

function Group5() {
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
      <Group5 />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Build</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Shape the future</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We're looking for restless minds ready to experiment, iterate, and create work that matters`}</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Learn</p>
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Culture</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Where experimentation meets execution</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We don't believe in perfect first drafts. We believe in honest work that evolves through iteration and real feedback.`}</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content3 />
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
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <SectionTitle1 />
      <Actions2 />
    </div>
  );
}

function TabOne() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab one">
      <div aria-hidden="true" className="absolute border-[#0c0a04] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Autonomy</p>
    </div>
  );
}

function TabTwo() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab two">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Iteration</p>
    </div>
  );
}

function TabThree() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab three">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Outcomes</p>
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

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Freedom</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">You own your craft and your decisions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">We trust builders to build. No micromanagement, no politics. Just clarity on what matters and the space to figure out how.</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content5 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Discover</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Learn</p>
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

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle2 />
      <Actions3 />
    </div>
  );
}

function Group11() {
  return (
    <div className="relative shrink-0 size-[335px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 335">
        <g id="Group 821">
          <path d={svgPaths.p1bd48300} fill="var(--fill-0, #A2FAA3)" id="Vector" />
          <g id="Line Art">
            <path d={svgPaths.p371fbe00} fill="var(--fill-0, black)" id="Vector_2" />
            <path d={svgPaths.p215c3000} fill="var(--fill-0, black)" id="Vector_3" />
            <path d={svgPaths.p14e08d80} fill="var(--fill-0, black)" id="Vector_4" />
            <path d={svgPaths.p32c0f670} fill="var(--fill-0, black)" id="Vector_5" />
            <path d={svgPaths.p33674600} fill="var(--fill-0, black)" id="Vector_6" />
            <path d={svgPaths.p330e7e00} fill="var(--fill-0, black)" id="Vector_7" />
            <path d={svgPaths.p29b32270} fill="var(--fill-0, black)" id="Vector_8" />
            <path d={svgPaths.p427ad00} fill="var(--fill-0, black)" id="Vector_9" />
            <path d={svgPaths.p1abf6180} fill="var(--fill-0, black)" id="Vector_10" />
            <path d={svgPaths.p9d1d420} fill="var(--fill-0, black)" id="Vector_11" />
            <path d={svgPaths.p3480d680} fill="var(--fill-0, black)" id="Vector_12" />
            <path d={svgPaths.p20549100} fill="var(--fill-0, black)" id="Vector_13" />
            <path d={svgPaths.p35204f80} fill="var(--fill-0, black)" id="Vector_14" />
            <path d={svgPaths.p31c96580} fill="var(--fill-0, black)" id="Vector_15" />
            <path d={svgPaths.p14d96600} fill="var(--fill-0, black)" id="Vector_16" />
            <path d={svgPaths.p2c76c700} fill="var(--fill-0, black)" id="Vector_17" />
            <path d={svgPaths.p2ad8dc80} fill="var(--fill-0, black)" id="Vector_18" />
            <path d={svgPaths.p13f48000} fill="var(--fill-0, black)" id="Vector_19" />
            <path d={svgPaths.p23f83f00} fill="var(--fill-0, black)" id="Vector_20" />
            <path d={svgPaths.p22eccc00} fill="var(--fill-0, black)" id="Vector_21" />
            <path d={svgPaths.p257a5e00} fill="var(--fill-0, black)" id="Vector_22" />
            <path d={svgPaths.p28985d70} fill="var(--fill-0, black)" id="Vector_23" />
            <path d={svgPaths.p25df3600} fill="var(--fill-0, black)" id="Vector_24" />
            <path d={svgPaths.p3a2ec400} fill="var(--fill-0, black)" id="Vector_25" />
            <path d={svgPaths.p11ad7c80} fill="var(--fill-0, black)" id="Vector_26" />
            <path d={svgPaths.pd8eaa00} fill="var(--fill-0, black)" id="Vector_27" />
            <path d={svgPaths.p16cbd3c0} fill="var(--fill-0, black)" id="Vector_28" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TabPane() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Tab Pane 1">
      <Content4 />
      <Group11 />
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content2 />
      <TabContainer />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 501 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Values</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[0.36px] w-full">What drives us forward</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We built 1561 Labs on principles that shape how we work and who we hire. These aren't slogans on a wall. They're how we operate every day.`}</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper3 />
      <Content7 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Explore</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Learn</p>
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

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <SectionTitle3 />
      <Actions4 />
    </div>
  );
}

function TabOne1() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab one">
      <div aria-hidden="true" className="absolute border-[#0c0a04] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Relentless curiosity</p>
    </div>
  );
}

function TabTwo1() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab two">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Radical collaboration</p>
    </div>
  );
}

function TabThree1() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[8px] relative shrink-0" data-name="Tab three">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Outcomes over optics</p>
    </div>
  );
}

function TabsMenu1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0" data-name="Tabs Menu">
      <TabOne1 />
      <TabTwo1 />
      <TabThree1 />
    </div>
  );
}

function TaglineWrapper4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Curiosity</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">{`We ask questions others don't ask`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Restless minds dig deeper. We chase understanding over assumptions, always willing to challenge what we think we know.</p>
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper4 />
      <Content9 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Discover</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Learn</p>
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

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <SectionTitle4 />
      <Actions5 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[231.189px] ml-0 mt-0 relative w-[261.718px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 261.717 231.189">
        <g id="Group">
          <path d={svgPaths.p19203480} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1710ef00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p3cc77280} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p9b9ea80} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p3b85e250} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p3ca65500} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p13c7bd00} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p332b0a80} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p3dbc1c80} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.pd108400} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p233a8500} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p4402400} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.p385d7f80} fill="var(--fill-0, black)" id="Vector_13" />
          <path d={svgPaths.p471000} fill="var(--fill-0, black)" id="Vector_14" />
          <path d={svgPaths.p15f9bb80} fill="var(--fill-0, black)" id="Vector_15" />
          <path d={svgPaths.p1963d200} fill="var(--fill-0, black)" id="Vector_16" />
          <path d={svgPaths.p25f93080} fill="var(--fill-0, black)" id="Vector_17" />
          <path d={svgPaths.p27241b00} fill="var(--fill-0, black)" id="Vector_18" />
          <path d={svgPaths.p1c4a0600} fill="var(--fill-0, #FFE400)" id="Vector_19" />
          <path d={svgPaths.p108b0e00} fill="var(--fill-0, #FFE400)" id="Vector_20" />
          <path d={svgPaths.p1f19f280} fill="var(--fill-0, #FFE400)" id="Vector_21" />
          <path d={svgPaths.p1d868f30} fill="var(--fill-0, #FFE400)" id="Vector_22" />
          <path d={svgPaths.p95cf5c0} fill="var(--fill-0, black)" id="Vector_23" />
        </g>
      </svg>
    </div>
  );
}

function LineArt() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.94%] mt-[15.63%] place-items-start relative" data-name="Line Art">
      <Group2 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#f6efe5] ml-0 mt-0 rounded-[32px] size-[335px]" />
      <LineArt />
    </div>
  );
}

function TabPane1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Tab Pane 1">
      <Content8 />
      <Group10 />
    </div>
  );
}

function TabsContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[707px] items-start relative shrink-0 w-full" data-name="Tabs Content">
      <TabPane1 />
    </div>
  );
}

function TabContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Tab container">
      <TabsMenu1 />
      <TabsContent1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content6 />
      <TabContainer1 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 501 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper5() {
  return <div className="h-[48px] shrink-0 w-full" data-name="Tagline Wrapper" />;
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Open positions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We're hiring builders ready to move fast and think differently. Apply for a role or pitch something new.`}</p>
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper5 />
      <Content10 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">Design</p>
    </div>
  );
}

function JobTitle() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Job Title">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0c0a04] text-[20px] text-nowrap tracking-[0.2px]">Senior product designer</p>
      <Tag />
    </div>
  );
}

function Job() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[335px]" data-name="Job">
      <JobTitle />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] not-italic relative shrink-0 text-[#0c0a04] text-[16px] tracking-[-0.32px] w-full">{`Lead product experiences from concept through execution. Shape how our clients' users interact with their world.`}</p>
    </div>
  );
}

function LocationOn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="location_on">
          <path d={svgPaths.pc28280} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <LocationOn />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">India</p>
    </div>
  );
}

function Schedule() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="schedule">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="schedule">
          <path d={svgPaths.p5cd18f0} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <Schedule />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Full-time</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Info">
      <Content14 />
      <Content15 />
    </div>
  );
}

function JobContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Job content">
      <Job />
      <Info />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Apply now</p>
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117px]" data-name="Actions">
      <Button11 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Content">
      <JobContent />
      <Actions6 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[24px] relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
      <Content13 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">Strategy</p>
    </div>
  );
}

function JobTitle1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Job Title">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0c0a04] text-[20px] text-nowrap tracking-[0.2px]">Growth strategist</p>
      <Tag1 />
    </div>
  );
}

function Job1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[335px]" data-name="Job">
      <JobTitle1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] not-italic relative shrink-0 text-[#0c0a04] text-[16px] tracking-[-0.32px] w-full">Translate market signals into executable plans. Build the bridge between insight and action for growth-stage brands.</p>
    </div>
  );
}

function LocationOn1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="location_on">
          <path d={svgPaths.pc28280} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <LocationOn1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">India</p>
    </div>
  );
}

function Schedule1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="schedule">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="schedule">
          <path d={svgPaths.p5cd18f0} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <Schedule1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Full-time</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Info">
      <Content18 />
      <Content19 />
    </div>
  );
}

function JobContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Job content">
      <Job1 />
      <Info1 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Apply now</p>
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117px]" data-name="Actions">
      <Button12 />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Content">
      <JobContent1 />
      <Actions7 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[24px] relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
      <Content17 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">Technology</p>
    </div>
  );
}

function JobTitle2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Job Title">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0c0a04] text-[20px] text-nowrap tracking-[0.2px]">Creative technologist</p>
      <Tag2 />
    </div>
  );
}

function Job2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[335px]" data-name="Job">
      <JobTitle2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] not-italic relative shrink-0 text-[#0c0a04] text-[16px] tracking-[-0.32px] w-full">Build at the intersection of code and craft. Turn ambitious ideas into working prototypes and scalable solutions.</p>
    </div>
  );
}

function LocationOn2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="location_on">
          <path d={svgPaths.pc28280} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <LocationOn2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">India</p>
    </div>
  );
}

function Schedule2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="schedule">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="schedule">
          <path d={svgPaths.p5cd18f0} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <Schedule2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Full-time</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Info">
      <Content22 />
      <Content23 />
    </div>
  );
}

function JobContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Job content">
      <Job2 />
      <Info2 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[20px] py-[8px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Apply now</p>
    </div>
  );
}

function Actions8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117px]" data-name="Actions">
      <Button13 />
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
      <JobContent2 />
      <Actions8 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[24px] relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
      <Content21 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Column">
      <Content12 />
      <Content16 />
      <Content20 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Column1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle5 />
      <Content11 />
    </div>
  );
}

function Career() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Career / 26 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center pb-[64px] pt-0 px-[20px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Apply</p>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Join the lab</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`Tell us about yourself and what you're doing.`}</p>
    </div>
  );
}

function SectionTitle6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper6 />
      <Content24 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] w-full" />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">First name</p>
      <TextInput />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] w-full" />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Last name</p>
      <TextInput1 />
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Inputs">
      <Input />
      <Input1 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] w-full" />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Email</p>
      <TextInput2 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] w-full" />
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Phone number</p>
      <TextInput3 />
    </div>
  );
}

function Inputs1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Inputs">
      <Input2 />
      <Input3 />
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <path d={svgPaths.p3b248fc0} fill="var(--fill-0, #0C0A04)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shrink-0 w-full" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0a04] text-[16px]">Select one</p>
          <KeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">What brings you here?</p>
      <Select />
    </div>
  );
}

function Radio1() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0 size-[18px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Radio() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Radio">
      <Radio1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">
        <p className="leading-[1.6]">Design</p>
      </div>
    </div>
  );
}

function Radio3() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0 size-[18px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Radio2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Radio">
      <Radio3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">
        <p className="leading-[1.6]">Marketing</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Radio />
      <Radio2 />
    </div>
  );
}

function Radio5() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0 size-[18px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Radio4() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Radio">
      <Radio5 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">
        <p className="leading-[1.6]">Tech</p>
      </div>
    </div>
  );
}

function Radio7() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0 size-[18px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Radio6() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Radio">
      <Radio7 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">
        <p className="leading-[1.6]">Operations</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Radio4 />
      <Radio6 />
    </div>
  );
}

function Radio9() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0 size-[18px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Radio8() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Radio">
      <Radio9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">
        <p className="leading-[1.6]">GenAI</p>
      </div>
    </div>
  );
}

function Radio11() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0 size-[18px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Radio10() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Radio">
      <Radio11 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">
        <p className="leading-[1.6]">Others</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <Radio8 />
      <Radio10 />
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Content">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Radios() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-0 py-[16px] relative shrink-0 w-full" data-name="Radios">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">
        <p className="leading-[1.6]">What is your skill set?</p>
      </div>
      <Content25 />
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[180px] relative rounded-[12px] shrink-0 w-full" data-name="Text Area">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,10,4,0.6)]">Tell us what matters to you</p>
        <div className="absolute bottom-[1.76px] flex items-center justify-center right-[2px] size-[2px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[135deg]">
            <div className="h-0 relative w-[2.828px]">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(12, 10, 4, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.82843 1">
                  <line id="Line 1" stroke="var(--stroke-0, #0C0A04)" x2="2.82843" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[2px] flex items-center justify-center right-[2px] size-[6px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[135deg]">
            <div className="h-0 relative w-[8.485px]">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(12, 10, 4, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.48528 1">
                  <line id="Line 2" stroke="var(--stroke-0, #0C0A04)" x2="8.48528" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Please attached your resume, LinkedIn or personal website</p>
      <TextArea />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[180px] relative rounded-[12px] shrink-0 w-full" data-name="Text Area">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,10,4,0.6)]">Tell us what matters to you</p>
        <div className="absolute bottom-[1.76px] flex items-center justify-center right-[2px] size-[2px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[135deg]">
            <div className="h-0 relative w-[2.828px]">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(12, 10, 4, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.82843 1">
                  <line id="Line 1" stroke="var(--stroke-0, #0C0A04)" x2="2.82843" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[2px] flex items-center justify-center right-[2px] size-[6px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[135deg]">
            <div className="h-0 relative w-[8.485px]">
              <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(12, 10, 4, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.48528 1">
                  <line id="Line 2" stroke="var(--stroke-0, #0C0A04)" x2="8.48528" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Message</p>
      <TextArea1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[18px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[16px] pt-0 px-0 relative shrink-0" data-name="Checkbox">
      <Checkbox1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">I agree to the terms</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Submit</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Form">
      <Inputs />
      <Inputs1 />
      <Input4 />
      <Radios />
      <Input5 />
      <Input6 />
      <Checkbox />
      <Button14 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle6 />
      <Form />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Contact / 4 /">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[768px] not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Section Title">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[0.36px] w-full">Questions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Everything you need to know about working with us</p>
    </div>
  );
}

function Resume() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="resume">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="resume">
          <path d={svgPaths.pf7a4900} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[18px] w-full">How long is the hiring process?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">We move fast. Most decisions happen within two weeks of your submission.</p>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Resume />
      <ListItem />
    </div>
  );
}

function Work() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="work">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="work">
          <path d={svgPaths.p2ed4c980} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[18px] w-full">Do you offer remote work options?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We're based in India and welcome both on-site and distributed collaboration.`}</p>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Work />
      <ListItem1 />
    </div>
  );
}

function Work1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="work">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="work">
          <path d={svgPaths.p2ed4c980} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[18px] w-full">What should my portfolio include?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Show us work that matters to you, not just what looks polished.</p>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Work1 />
      <ListItem2 />
    </div>
  );
}

function Explore() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="explore">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="explore">
          <path d={svgPaths.p1267ee00} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[18px] w-full">Do you hire junior-level talent?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Yes. We value hunger and curiosity over years of experience.</p>
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Explore />
      <ListItem3 />
    </div>
  );
}

function Chat() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="chat">
          <path d={svgPaths.p20fb7780} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[18px] w-full">{`What's the interview like?`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Conversation focused on your thinking, not rehearsed answers.</p>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Chat />
      <ListItem4 />
    </div>
  );
}

function Apps() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="apps">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="apps">
          <path d={svgPaths.pd342b80} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[18px] w-full">Can I apply for multiple roles?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Absolutely. Tell us where you think you fit best.</p>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <Apps />
      <ListItem5 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center overflow-clip relative shrink-0 w-full" data-name="Row">
      <Content27 />
      <Content28 />
      <Content29 />
      <Content30 />
      <Content31 />
      <Content32 />
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle7 />
      <Content26 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="FAQ / 14 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Ready to build something real?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`Send us your work and let's see if we're aligned`}</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Apply now</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Get in touch</p>
    </div>
  );
}

function Actions9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button15 />
      <Button16 />
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content34 />
      <Actions9 />
    </div>
  );
}

function Group6() {
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

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.72%] mt-[17.75%] place-items-start relative">
      <Group6 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[rgba(162,250,163,0.1)] h-[193.148px] ml-0 mt-0 rounded-[40px] w-[335px]" />
      <Group7 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content33 />
      <Group9 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CTA / 31 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
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

function Group4() {
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

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
      <Group4 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <Group8 />
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

function Column3() {
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

function Column4() {
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
      <Column2 />
      <Column3 />
      <Column4 />
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

function TextInput4() {
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

function Button17() {
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

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Form">
      <TextInput4 />
      <Button17 />
    </div>
  );
}

function Actions10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Actions">
      <Form1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[12px] text-white w-full">We respect your inbox. Unsubscribe anytime.</p>
    </div>
  );
}

function Newslatter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Newslatter">
      <Frame />
      <Actions10 />
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

function Row4() {
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
      <Row4 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Component">
      <Card />
      <Credits />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer / 10 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[48px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

export default function CareersMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Careers • Mobile">
      {/* <Navbar /> */}
      <Header />
      <Layout />
      <Layout1 />
      <Career />
      <Contact />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
