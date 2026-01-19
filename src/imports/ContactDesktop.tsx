import svgPaths from "./svg-yr8fa85baz";

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

function Group7() {
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
      <Group7 />
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
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Connect</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">{`Let's build together`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`We're here to listen, collaborate, and transform your vision into reality`}</p>
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

function Component() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-full" data-name="Component">
      <SectionTitle />
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
        <div className="content-stretch flex flex-col items-center pb-0 pt-[112px] px-[64px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="mail">
          <path d={svgPaths.p3f0f1c00} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Email</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`Send us a message and we'll get back to you quickly.`}</p>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Contact Info">
      <Content3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">humans@1561labs.com</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Mail />
      <ContactInfo />
    </div>
  );
}

function LocationOn() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="location_on">
          <path d={svgPaths.p2703f9f0} fill="var(--fill-0, #0C0A04)" id="Vector" stroke="var(--stroke-0, #0C0A04)" />
        </g>
      </svg>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[32px] tracking-[0.32px] w-full">Office</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Find us in India where the work happens every day.</p>
    </div>
  );
}

function ContactInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Contact Info">
      <Content5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Gurugram, Delhi NCR, India</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <LocationOn />
      <ContactInfo1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Row">
      <Content2 />
      <Content4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Row />
    </div>
  );
}

function Contact1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Contact / 18 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Collaborate</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Send it over</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`Tell us what you're building and we'll respond.`}</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content7 />
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
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Name</p>
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
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Email</p>
      <TextInput1 />
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Company Name</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Phone Number</p>
      <TextInput3 />
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[180px] relative rounded-[12px] shrink-0 w-full" data-name="Text Area">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-[rgba(12,10,4,0.6)]">Describe your project here</p>
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

function Input4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] w-full">Message</p>
      <TextArea />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Send</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Form">
      <Input />
      <Input1 />
      <Input2 />
      <Input3 />
      <Input4 />
      <Button1 />
    </div>
  );
}

function Content6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <SectionTitle1 />
      <Form />
    </div>
  );
}

function Background() {
  return (
    <div className="[grid-area:1_/_1] h-[900px] ml-0 mt-0 relative w-[600px]" data-name="Background">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 900">
        <g id="Background">
          <path d={svgPaths.p25ca980} fill="var(--fill-0, #F6EFE5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Circle() {
  return (
    <div className="[grid-area:1_/_1] ml-[11.24%] mt-[30.6%] relative size-[127.71px]" data-name="CIRCLE">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127.71 127.71">
        <g id="CIRCLE">
          <path d={svgPaths.p15510f00} fill="var(--fill-0, #F5C06C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[652.291px] ml-0 mt-0 relative w-[426.406px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 426.406 652.291">
        <g id="Group">
          <path d={svgPaths.p121ae180} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1da33e00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p39d240c0} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p3bb3000} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p27209f00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p12f13a00} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p3ea58c00} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function WnrDp() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="wnrDp8">
      <Group2 />
    </div>
  );
}

function Draw() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="DRAW">
      <WnrDp />
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[14.5%] mt-[22.37%] place-items-start relative">
      <Circle />
      <Draw />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Background />
      <Group11 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Component">
      <Content6 />
      <Group12 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Contact / 7 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Section Title">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Questions</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">The answers to what drives our work and how we operate</p>
    </div>
  );
}

function Labs() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="labs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="labs">
          <path d={svgPaths.p39192700} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[22px] w-full">What is 1561 Labs?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`We're an experimental lab where ideas get deliberately transformed through design, media, and strategic execution.`}</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Labs />
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
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[22px] w-full">How do you approach projects?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">We iterate relentlessly, mixing and molding concepts until the work transcends what came before it.</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Work />
      <ListItem1 />
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

function ListItem2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[22px] w-full">What makes your process different?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">We chase outcomes over optics, building work that matters through honest experimentation and disciplined curiosity.</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Experiment />
      <ListItem2 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Content9 />
      <Content10 />
      <Content11 />
    </div>
  );
}

function Strategy() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="strategy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="strategy">
          <path d={svgPaths.p10007c00} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[22px] w-full">Do you work with all company sizes?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">We partner with growth-stage and strategic brands ready to move beyond conventional thinking.</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Strategy />
      <ListItem3 />
    </div>
  );
}

function Labs1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="labs">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="labs">
          <path d={svgPaths.p39192700} fill="var(--fill-0, #0C0A04)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[22px] w-full">What are your two main verticals?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">1561 Design Labs architects product experiences that drive differentiation, while 1561 Media Labs engineers narratives that convert attention into results.</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Labs1 />
      <ListItem4 />
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

function ListItem5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="List Item">
      <p className="font-['Inter_Display:Medium',sans-serif] leading-[1.6] relative shrink-0 text-[22px] w-full">Building something beyond client work?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`Yes, we're developing a SaaS platform and a learning platform designed to solve real problems and democratize specialized knowledge.`}</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Build />
      <ListItem5 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[48px] items-start overflow-clip relative shrink-0 w-full" data-name="Row">
      <Content12 />
      <Content13 />
      <Content14 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <Row1 />
      <Row2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle2 />
      <Content8 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="FAQ / 14 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[64px] relative shrink-0 text-[48px] tracking-[-0.48px] w-full">Ready to start building?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">{`Let's turn your vision into something real and measurable.`}</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Begin</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Learn more</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content16 />
      <Actions1 />
    </div>
  );
}

function Group8() {
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

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.72%] mt-[17.75%] place-items-start relative">
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[rgba(162,250,163,0.1)] h-[738px] ml-0 mt-0 rounded-[40px] w-[1280px]" />
      <Group9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content15 />
      <Group10 />
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="CTA / 31 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
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

function Group4() {
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

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group3 />
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group5 />
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

function Column1() {
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

function Column2() {
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
      <Group6 />
      <Column1 />
      <Column2 />
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

function TextInput4() {
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

function Button4() {
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
      <TextInput4 />
      <Button4 />
    </div>
  );
}

function Actions2() {
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
      <Actions2 />
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

function Row3() {
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
      <Row3 />
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

function Container6() {
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
          <Container6 />
        </div>
      </div>
    </div>
  );
}

export default function ContactDesktop() {
  return (
    <div className="flex flex-col items-center relative w-full gap-0 p-0" data-name="Contact • Desktop">
      {/* <Navbar /> */}
      <Header />
      <Contact1 />
      <Contact />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
