import svgPaths from "./svg-won3rk7jop";
import imgDesignlabs1 from "figma:asset/1fe4a6f8c1b363985c15ae0c998196567649ce55.png";
import imgMedialabs1 from "figma:asset/065c57548bd704215dd31c9d3c43f2dc0568e2b9.png";
import imgPrologo1 from "figma:asset/6e1e23ebfa7081e1329f58f33457dc42b3011152.png";
import imgImage13 from "figma:asset/79f4e914ef775cfbdd1077909eb58f355334e6f5.png";
import imgImage14 from "figma:asset/5d6fbbe1fe8f59039893adb37bf4b5ac1036bb70.png";
import imgImage12 from "figma:asset/7897b40697ac061afa7a2af8f346260b1330271d.png";
import imgImage16 from "figma:asset/de615735fdc2e0039d87f9891e8b38a6011f821e.png";
import imgAvatarImage from "figma:asset/641af694e6ad40e0dc4bcdbca6f078020de60fa0.png";
import imgImage17 from "figma:asset/496439e3221a21f24442aee050cdda20851840fb.png";
import imgImage20 from "figma:asset/34e4920b88fac3d5e4ddc16f501256642bb9804c.png";
import imgImage18 from "figma:asset/2d636a95ad89cba8b5224bf9e7203682eb252d10.png";
import imgImage21 from "figma:asset/18d4fc4593a34b7c7b9b5ab056fa3f28f684d362.png";
import imgPlaceholderImage from "figma:asset/d47f9f5af24fd7129274afad903571dd3819a330.png";

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

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Ideas engineered into outcomes</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We're 1561 Labs. Design and marketing for SaaS founders who are done with fragmented teams, misaligned strategies, and agencies that don't get it. One partner. One vision. Zero bullshit.`}</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Explore</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
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

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Column">
      <Content1 />
      <Actions1 />
    </div>
  );
}

function Capa() {
  return (
    <div className="[grid-area:1_/_1] h-[382.873px] ml-0 mt-0 relative w-[335px]" data-name="Capa 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 382.873">
        <g id="Capa 4">
          <path d={svgPaths.p177d5680} fill="var(--fill-0, #A2FAA3)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Piezas() {
  return (
    <div className="[grid-area:1_/_1] h-[320.954px] ml-[2.56%] mt-[16.17%] relative w-[297.614px]" data-name="piezas">
      <div className="absolute inset-[-1.01%_-0.9%_-0.7%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300.294 326.441">
          <g id="piezas">
            <path d={svgPaths.p34e6c4f0} fill="var(--fill-0, #EBFF1C)" id="Vector" />
            <path d={svgPaths.p35a0c080} id="Vector_2" stroke="var(--stroke-0, #FF6430)" strokeMiterlimit="10" strokeWidth="0.73" />
            <path d={svgPaths.p27f3e4c0} fill="var(--fill-0, #EBFF1C)" id="Vector_3" />
            <path d={svgPaths.p37f64b40} fill="var(--fill-0, #9992ED)" id="Vector_4" />
            <path d={svgPaths.p2523c700} fill="var(--fill-0, #FF6430)" id="Vector_5" />
            <path d={svgPaths.p9dfe480} fill="var(--fill-0, #FF6430)" id="Vector_6" />
            <path d={svgPaths.p3fe6e00} fill="var(--fill-0, #14002B)" id="Vector_7" />
            <path d={svgPaths.p5997100} fill="var(--fill-0, #14002B)" id="Vector_8" />
            <path d={svgPaths.pf294480} fill="var(--fill-0, #14002B)" id="Vector_9" />
            <path d={svgPaths.p37b9fe80} fill="var(--fill-0, #14002B)" id="Vector_10" />
            <path d={svgPaths.p3f5c6c0} fill="var(--fill-0, #FF6430)" id="Vector_11" />
            <path d={svgPaths.p27472000} id="Vector_12" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.51" />
            <path d={svgPaths.p38e0a000} id="Vector_13" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.51" />
            <path d={svgPaths.p330d0900} fill="var(--fill-0, #14002B)" id="Vector_14" />
            <path d={svgPaths.p1f2a7700} fill="var(--fill-0, white)" id="Vector_15" />
            <path d={svgPaths.pc140f00} fill="var(--fill-0, #9992ED)" id="Vector_16" />
            <path d={svgPaths.p38029380} id="Vector_17" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.51" />
            <path d={svgPaths.p16cadd40} id="Vector_18" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.39" />
            <path d={svgPaths.p32647e83} id="Vector_19" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.39" />
            <path d={svgPaths.p2db5f000} fill="var(--fill-0, #EFB590)" id="Vector_20" />
            <path d={svgPaths.p22873400} fill="var(--fill-0, #1C96FD)" id="Vector_21" />
            <path d={svgPaths.p19734960} id="Vector_22" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.51" />
            <path d="M31.3385 321.472V308.581" id="Vector_23" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.28" />
            <g id="Group">
              <path d={svgPaths.p15224200} fill="var(--fill-0, #FF5F89)" id="Vector_24" />
              <path d={svgPaths.p355ad280} fill="var(--fill-0, #EFB590)" id="Vector_25" />
              <path d={svgPaths.pd817300} fill="var(--fill-0, #1C96FD)" id="Vector_26" />
              <path d={svgPaths.p1a0c9300} fill="var(--fill-0, #EFB590)" id="Vector_27" />
              <path d={svgPaths.p120ec540} fill="var(--fill-0, #FF8010)" id="Vector_28" />
              <path d={svgPaths.p2d86cb80} id="Vector_29" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
              <path d={svgPaths.p5bccc40} id="Vector_30" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
            </g>
            <g id="Group_2">
              <path d={svgPaths.p35a28180} fill="var(--fill-0, #FF6430)" id="Vector_31" />
              <path d={svgPaths.p12161100} id="Vector_32" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
              <path d={svgPaths.p386eef80} id="Vector_33" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
              <path d={svgPaths.p2802600} id="Vector_34" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
              <path d={svgPaths.p47e4d00} id="Vector_35" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
            </g>
            <path d={svgPaths.p1d5b5700} id="Vector_36" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
            <path d={svgPaths.p3d7beb71} fill="var(--fill-0, #14002B)" id="Vector_37" />
            <path d={svgPaths.p533c200} id="Vector_38" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
            <path d={svgPaths.p3946e500} id="Vector_39" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
            <path d={svgPaths.p220a8dc0} id="Vector_40" stroke="var(--stroke-0, #1C96FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.51" />
            <path d={svgPaths.p1e8d7640} id="Vector_41" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
            <path d={svgPaths.p13906c00} id="Vector_42" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
            <path d="M92.1969 305.021V315.994" id="Vector_43" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.51" />
            <path d={svgPaths.p220dd500} id="Vector_44" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
            <path d={svgPaths.pe2d5300} id="Vector_45" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
            <path d={svgPaths.p13a35dc0} id="Vector_46" stroke="var(--stroke-0, #14002B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.36" />
            <path d={svgPaths.p11c1b800} fill="var(--fill-0, #14002B)" id="Vector_47" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Capa />
      <Piezas />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group4 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group5 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Component">
      <Column1 />
      <Group10 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header / 1 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Momentum</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Where ideas become measurable impact</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`We've partnered with growth-stage brands that demanded more than talk. Our work moves markets. Every number below represents a deliberate choice to execute rather than explain.`}</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content4 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Explore</p>
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
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Arrow</p>
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
      <SectionTitle />
      <Actions2 />
    </div>
  );
}

function Stat() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stat">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic pl-[32px] pr-0 py-0 relative text-[#0c0a04] w-full">
        <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[56px] tracking-[-0.56px] w-full">50+</p>
        <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[18px] tracking-[0.18px] w-full">Brand collaboration</p>
      </div>
    </div>
  );
}

function Stat1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stat">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic pl-[32px] pr-0 py-0 relative text-[#0c0a04] w-full">
        <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[56px] tracking-[-0.56px] w-full">111+</p>
        <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[18px] tracking-[0.18px] w-full">Ideas launched to market</p>
      </div>
    </div>
  );
}

function Stat2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stat">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic pl-[32px] pr-0 py-0 relative text-[#0c0a04] w-full">
        <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[56px] w-full">2</p>
        <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[18px] tracking-[0.18px] w-full">Proprietary ventures built</p>
      </div>
    </div>
  );
}

function Stat3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stat">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic pl-[32px] pr-0 py-0 relative text-[#0c0a04] w-full">
        <p className="font-['Inter_Display:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[56px] tracking-[-0.56px] w-full">20M+</p>
        <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[18px] tracking-[0.18px] w-full">Users reached</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Stat />
      <Stat1 />
      <Stat2 />
      <Stat3 />
    </div>
  );
}

function Stats() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stats">
      <Row />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Content3 />
      <Stats />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content2 />
    </div>
  );
}

function Stats1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Stats / 13 /">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Verticals</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">How we build what matters</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`Most founders are too close to see what's broken. That's where we come in.`}</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.24px] w-full">1561 Design Labs</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Product experiences engineered for market differentiation and user obsession.</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <div className="h-[198px] relative shrink-0 w-[334px]" data-name="designlabs 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDesignlabs1} />
      </div>
      <Content6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.24px] w-full">1561 Media Labs</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Marketing narratives built to convert attention into measurable outcomes.</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <div className="h-[198px] relative shrink-0 w-[335px]" data-name="medialabs 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMedialabs1} />
      </div>
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[24px] tracking-[0.24px] w-full">Proprietary ventures</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">SaaS platforms and learning systems designed to solve real problems at scale.</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="Column">
      <div className="h-[198px] relative shrink-0 w-[335px]" data-name="prologo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrologo1} />
      </div>
      <Content8 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Row">
      <Column2 />
      <Column3 />
      <Column4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#a2faa3] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Explore</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Arrow</p>
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

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle1 />
      <Row1 />
      <Actions3 />
    </div>
  );
}

function Layout() {
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

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Recognition from those who know</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full">Our work speaks. The industry listens. These badges represent outcomes, not opinions.</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Explore</p>
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
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Arrow</p>
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
      <Content10 />
      <Actions4 />
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[84px] items-center justify-center p-[14px] relative rounded-[32px] shrink-0 w-[163.5px]" data-name="Logo">
      <div className="h-[67px] relative shrink-0 w-[130px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[84px] items-center justify-center p-[14px] relative rounded-[32px] shrink-0 w-[163.5px]" data-name="Logo">
      <div className="h-[72px] relative shrink-0 w-[100px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Row">
      <Logo />
      <Logo1 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[84px] items-center justify-center p-[14px] relative rounded-[32px] shrink-0 w-[163.5px]" data-name="Logo">
      <div className="h-[35px] relative shrink-0 w-[156px]" data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage12} />
      </div>
    </div>
  );
}

function Logo3() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[84px] items-center justify-center p-[14px] relative rounded-[32px] shrink-0 w-[163.5px]" data-name="Logo">
      <div className="h-[50px] relative shrink-0 w-[44px]" data-name="image 16">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Row">
      <Logo2 />
      <Logo3 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <Row2 />
      <Row3 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Component">
      <Content9 />
      <Content11 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component1 />
    </div>
  );
}

function Logo4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Logo / 4 /">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[64px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center max-w-[768px] not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Section Title">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">What they say</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Brands that demanded more than talk</p>
    </div>
  );
}

function AvatarContent() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center w-full" data-name="Avatar Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Shailendra Shaymsukha</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 tracking-[-0.16px] w-full">{`Head of Brand & Communication`}</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[300px]" data-name="Avatar">
      <div className="relative shrink-0 size-[56px]" data-name="Avatar Image">
        <img alt="" className="block max-w-none size-full" height="56" src={imgAvatarImage} width="56" />
      </div>
      <AvatarContent />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <div className="h-[40px] relative shrink-0 w-[117px]" data-name="image 17">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage17} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center tracking-[-0.32px] w-[min-content]">{`"The design team was skilled with a great eye for detail and user experience. Creative, reliable, and easy to work with an asset to any team."`}</p>
      <Avatar />
    </div>
  );
}

function AvatarContent1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center w-full" data-name="Avatar Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Srikanth ND</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 tracking-[-0.16px] w-full">{`Podcaster & KPMG India COO Tax`}</p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[300px]" data-name="Avatar">
      <div className="relative rounded-[100px] shrink-0 size-[56px]" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgImage20} />
      </div>
      <AvatarContent1 />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <div className="h-[40px] relative shrink-0 w-[105px]" data-name="image 18">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage18} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center tracking-[-0.32px] w-[min-content]">{`"We came with a vision. They came with a system. The execution was relentless. The results were undeniable."`}</p>
      <Avatar1 />
    </div>
  );
}

function AvatarContent2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center w-full" data-name="Avatar Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Amit Kumar</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 tracking-[-0.16px] w-full">Development Manager</p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[300px]" data-name="Avatar">
      <div className="relative rounded-[100px] shrink-0 size-[56px]" data-name="image 21">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[100px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage21} />
        </div>
      </div>
      <AvatarContent2 />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative shrink-0 w-full" data-name="Column">
      <div className="h-[40px] relative shrink-0 w-[77px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] min-w-full not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center tracking-[-0.32px] w-[min-content]">{`"Great and smooth experience working with them. Over 3 year long association, they have delivered thoughtful and great UX/UI Designs"`}</p>
      <Avatar2 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <Column5 />
      <Column6 />
      <Column7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle2 />
      <Content12 />
    </div>
  );
}

function Testimonial() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Testimonial / 3 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-center text-nowrap">Journal</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Our growth log</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Real experiments. Real learnings. Real outcomes from the lab.</p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content13 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">Strategy</p>
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

function Content15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">How we engineered a market shift</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full">We took a struggling brand and rebuilt its entire positioning through deliberate design and media strategy.</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info />
      <Content15 />
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

function Button9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Read more</p>
      <ChevronRight3 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card">
      <div className="aspect-[335/221] relative rounded-[32px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[32px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content14 />
      <Button9 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">Design</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">6 min read</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">The anatomy of a product that converts</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full">Breaking down the design decisions that turned user friction into engagement and engagement into revenue.</p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info1 />
      <Content17 />
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

function Button10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Read more</p>
      <ChevronRight4 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card">
      <div className="aspect-[335/221] relative rounded-[32px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[32px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content16 />
      <Button10 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-[rgba(12,10,4,0.15)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">Ventures</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Info">
      <Tag2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[14px] text-nowrap">7 min read</p>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#0c0a04] w-full" data-name="Content">
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[20px] tracking-[0.2px] w-full">Building in public, learning in private</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] w-full">{`Our SaaS platform went from idea to paying customers in four months. Here's what we learned.`}</p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <Info2 />
      <Content19 />
    </div>
  );
}

function ChevronRight5() {
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

function Button11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">Read more</p>
      <ChevronRight5 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Card">
      <div className="aspect-[335/221] relative rounded-[32px] shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[32px] size-full" src={imgPlaceholderImage} />
      </div>
      <Content18 />
      <Button11 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#a2faa3] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0c0a04] text-[16px] text-nowrap">View all</p>
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Actions">
      <Button12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle3 />
      <Row4 />
      <Actions5 />
    </div>
  );
}

function Blog() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Blog / 34 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[64px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-[#0c0a04] text-center w-full" data-name="Content">
      <p className="font-['Inter_Display:Light',sans-serif] leading-[1.4] relative shrink-0 text-[36px] tracking-[-0.36px] w-full">Ready to build something real</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">{`Stop planning. Start experimenting. Let's turn your vision into market momentum.`}</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#0c0a04] content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0c0a04] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Start</p>
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

function Actions6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button13 />
      <Button14 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <Content21 />
      <Actions6 />
    </div>
  );
}

function Group7() {
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

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[16.72%] mt-[17.75%] place-items-start relative">
      <Group7 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[rgba(162,250,163,0.1)] h-[193.148px] ml-0 mt-0 rounded-[40px] w-[335px]" />
      <Group8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content20 />
      <Group11 />
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

function Group2() {
  return (
    <div className="[grid-area:1_/_1] h-[40px] ml-0 mt-0 relative w-[72.413px]" data-name="Group">
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

function Group9() {
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
      <Group9 />
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
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Design Labs</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Media Labs</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Growth log</p>
    </div>
  );
}

function Link5Careers() {
  return (
    <div className="content-stretch flex items-start px-0 py-[8px] relative shrink-0 w-full" data-name="Link">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.6] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Careers</p>
    </div>
  );
}

function Link6ContactUs() {
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
      <Link5Careers />
      <Link6ContactUs />
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
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Newslatter">
      <Frame />
      <Actions7 />
    </div>
  );
}

function Card3() {
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

function Row5() {
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
      <Row5 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Component">
      <Card3 />
      <Credits />
    </div>
  );
}

function Container8() {
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
          <Container8 />
        </div>
      </div>
    </div>
  );
}

export default function HomeMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Home • Mobile">
      {/* <Navbar /> */}
      <Header />
      <Stats1 />
      <Layout />
      <Logo4 />
      <Testimonial />
      <Blog />
      <Cta />
      <Footer />
    </div>
  );
}
