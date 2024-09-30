import React from "react";
import { Checkboxes } from "@/components/Checkboxes/Checkboxes";
import { GenericAvatar } from "./GenericAvatar";
import line1 from "./line-1.svg";

export const LoginPage = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="bg-[url(/login-page.png)] bg-cover bg-[50%_50%] w-[1440px] h-[1024px]">
        <div className="relative w-[990px] h-[623px] top-[193px] left-[219px] bg-[#d9d9d9] rounded-[61px]">
          <div className="absolute w-[938px] h-[81px] top-[76px] left-[19px]">
            <img className="absolute w-[938px] h-px top-[78px] left-0 object-cover" alt="Line" src={line1} />
            <div className="absolute w-[567px] h-[81px] top-0 left-[184px] font-title-page font-[number:var(--title-page-font-weight)] text-[#e36d00] text-[length:var(--title-page-font-size)] text-center tracking-[var(--title-page-letter-spacing)] leading-[var(--title-page-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--title-page-font-style)]">
              PRO-PLAYER RENTALS
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[var(--size-space-200)] absolute top-[292px] left-[390px]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-color-text-default-default text-xl tracking-[0] leading-[28.0px]">
              Password
            </div>
            <div className="flex min-w-60 items-center pt-[var(--size-space-300)] pr-[var(--size-space-400)] pb-[var(--size-space-300)] pl-[var(--size-space-400)] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-color-background-default-default rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default">
              <div className="relative flex-1 mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-default text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
                {""}
              </div>
            </div>
          </div>
          <GenericAvatar className="!absolute !w-[187px] !h-[184px] !top-[218px] !left-[100px]" />
          <div className="absolute w-[223px] h-12 top-[479px] left-[380px]">
            <Checkboxes className="!absolute !left-0 !top-0" stateProp="enabled" type="selected" />
            <div className="absolute w-[180px] top-[13px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[19px] tracking-[0] leading-[19px]">
              Keep me signed in
            </div>
          </div>
          <div className="flex w-[165px] h-[41px] items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] absolute top-[402px] left-[568px] bg-[color:var(--color-background-brand-default)] rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-brand-default">
            <button className="all-[unset] box-border relative w-fit mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-warning-tertiary text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
              Sign-Up
            </button>
          </div>
          <div className="inline-flex flex-col items-start gap-[var(--size-space-200)] absolute top-[209px] left-[390px]">
            <input
              className="relative self-stretch mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-color-text-default-default text-xl tracking-[0] leading-[28.0px] [background:transparent] border-[none] p-0"
              placeholder="Username"
              type="text"
            />
            <div className="relative self-stretch min-w-60 w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-color-background-default-default rounded-[var(--size-radius-200)] border border-solid border-color-border-default-default" />
          </div>
          <button className="all-[unset] box-border flex w-[165px] h-[41px] items-center justify-center gap-[var(--size-space-200)] pt-[var(--size-space-300)] pr-[var(--size-space-300)] pb-[var(--size-space-300)] pl-[var(--size-space-300)] absolute top-[402px] left-[364px] bg-[color:var(--color-background-brand-default)] rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-brand-default">
            <div className="relative w-fit mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-brand-on-brand text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] whitespace-nowrap [font-style:var(--single-line-body-base-font-style)]">
              Login
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
