import React from "react";
import { Button } from "@/components/Button";
import { IconButton } from "@/components/IconButton";
import { IconComponentNode } from "./IconComponentNode";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { Size48 } from "./Size48";
import { Size481 } from "./Size481";
import ellipse1 from "./ellipse-1.png";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import rectangle10 from "./rectangle-10.png";
import rectangle11 from "./rectangle-11.png";
import rectangle12 from "./rectangle-12.png";
import rectangle4 from "./rectangle-4.png";
import rectangle5 from "./rectangle-5.png";
import rectangle6 from "./rectangle-6.png";
import rectangle7 from "./rectangle-7.png";
import rectangle9 from "./rectangle-9.png";

export const Home = () => {
  return (
    <div className="bg-[#ffffff80] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff80] overflow-hidden bg-[url(/home.png)] bg-cover bg-[50%_50%] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1169px] h-[516px] top-[151px] left-[136px] bg-[url(/rectangle-1.png)] bg-cover bg-[50%_50%]">
          <p className="absolute w-[538px] h-[57px] top-[13px] left-[57px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-10">
            Lets celebrate sports day !!
          </p>
          <img className="w-[398px] top-[70px] left-[174px] absolute h-px object-cover" alt="Line" src={line2} />
        </div>
        <div className="absolute w-[1429px] h-[126px] top-0.5 left-[11px] bg-[url(/rectangle-2.svg)] bg-[100%_100%]">
          <div className="absolute w-[870px] h-[99px] top-2 left-[108px]">
            <div className="absolute w-[870px] h-[99px] top-0 left-0">
              <div className="flex max-w-[720px] w-[697px] h-[50px] items-center gap-1 absolute top-0 left-[173px] bg-m3-schemes-surface-container-high rounded-[28px] overflow-hidden">
                <div className="gap-1 p-1 flex items-center relative flex-1 self-stretch grow">
                  <IconButton
                    className="!mt-[-3.00px] !mb-[-3.00px]"
                    icon={<Menu className="!relative !w-6 !h-6" color="#49454F" />}
                    stateProp="enabled"
                    style="standard"
                  />
                  <div className="flex items-center gap-2.5 relative flex-1 self-stretch grow">
                    <div className="relative w-fit font-m3-body-large font-[number:var(--m3-body-large-font-weight)] text-m3-schemes-on-surface-variant text-[length:var(--m3-body-large-font-size)] tracking-[var(--m3-body-large-letter-spacing)] leading-[var(--m3-body-large-line-height)] whitespace-nowrap [font-style:var(--m3-body-large-font-style)]">
                      Hinted search text
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-end relative flex-[0_0_auto] mt-[-3.00px] mb-[-3.00px]">
                    <IconButton
                      icon={<Search className="!relative !w-6 !h-6" color="#49454F" />}
                      stateProp="enabled"
                      style="standard"
                    />
                  </div>
                </div>
              </div>
              <Button
                className="!left-[173px] !absolute !bg-[#a2845e] !top-[59px]"
                labelText="Cricket"
                showIcon={false}
                stateProp="enabled"
                style="filled"
              />
              <Button
                className="!left-[290px] !absolute !bg-[#a2845e] !top-[59px]"
                labelText="Football"
                showIcon={false}
                stateProp="enabled"
                style="filled"
              />
              <div className="absolute w-[298px] h-[61px] top-1.5 left-0 font-m3-body-large font-[number:var(--m3-body-large-font-weight)] text-black text-[length:var(--m3-body-large-font-size)] tracking-[var(--m3-body-large-letter-spacing)] leading-[var(--m3-body-large-line-height)] [font-style:var(--m3-body-large-font-style)]">
                Pro-Players Rentals
              </div>
            </div>
            <Button
              className="!left-[415px] !absolute !bg-[#a2845e] !top-[59px]"
              labelText="Cycling"
              showIcon={false}
              stateProp="enabled"
              style="filled"
            />
            <Button
              className="!left-[534px] !absolute !bg-[#a2845e] !top-[59px]"
              labelText="Swimming"
              showIcon={false}
              stateProp="enabled"
              style="filled"
            />
            <Button
              className="!left-[663px] !absolute !bg-[#a2845e] !top-[59px]"
              labelText="Trekking"
              showIcon={false}
              stateProp="enabled"
              style="filled"
            />
            <Button
              className="!left-[779px] !absolute !bg-[#a2845e] !top-[59px]"
              labelText="Tennis"
              showIcon={false}
              stateProp="enabled"
              style="filled"
            />
          </div>
          <img className="absolute w-[55px] h-[55px] top-5 left-[37px] object-cover" alt="Ellipse" src={ellipse1} />
          <Size48 className="!absolute !w-12 !h-12 !top-[33px] !left-[1108px]" />
          <IconComponentNode className="!absolute !w-12 !h-12 !top-[33px] !left-[1199px]" />
          <Size481 className="!absolute !w-12 !h-12 !top-[33px] !left-[1290px]" />
        </div>
        <div className="absolute w-[1169px] h-[289px] top-[705px] left-[156px]">
          <div className="absolute w-[1169px] h-72 top-px left-0 bg-[#e1e1e1] rounded-[49px]" />
          <div className="absolute w-[797px] h-[53px] top-0 left-[47px] font-m3-headline-large font-[number:var(--m3-headline-large-font-weight)] text-black text-[length:var(--m3-headline-large-font-size)] tracking-[var(--m3-headline-large-letter-spacing)] leading-[var(--m3-headline-large-line-height)] [font-style:var(--m3-headline-large-font-style)]">
            Yours Favorites
          </div>
          <img
            className="absolute w-[221px] h-[198px] top-[63px] left-6 object-cover"
            alt="Rectangle"
            src={rectangle4}
          />
          <img className="absolute w-[221px] h-[198px] top-[63px] left-[324px]" alt="Rectangle" src={rectangle5} />
          <img
            className="absolute w-[221px] h-[198px] top-[63px] left-[624px] object-cover"
            alt="Rectangle"
            src={rectangle6}
          />
          <img
            className="absolute w-[229px] h-[206px] top-[63px] left-[920px] object-cover"
            alt="Rectangle"
            src={rectangle7}
          />
          <img className="w-[1091px] top-[46px] left-[47px] absolute h-px object-cover" alt="Line" src={line1} />
        </div>
        <img
          className="absolute w-[221px] h-[215px] top-[3521px] left-[1985px] object-cover"
          alt="Rectangle"
          src={rectangle9}
        />
        <img
          className="absolute w-[221px] h-[215px] top-[3521px] left-[2285px] object-cover"
          alt="Rectangle"
          src={rectangle10}
        />
        <img className="absolute w-[221px] h-[215px] top-[3521px] left-[2585px]" alt="Rectangle" src={rectangle11} />
        <img
          className="absolute w-[221px] h-[215px] top-[3521px] left-[2885px] object-cover"
          alt="Rectangle"
          src={rectangle12}
        />
        <div className="absolute w-[245px] h-[37px] top-[1281px] left-20 font-m3-headline-medium font-[number:var(--m3-headline-medium-font-weight)] text-black text-[length:var(--m3-headline-medium-font-size)] text-center tracking-[var(--m3-headline-medium-letter-spacing)] leading-[var(--m3-headline-medium-line-height)] whitespace-nowrap [font-style:var(--m3-headline-medium-font-style)]">
          Nike Shoes
        </div>
        <div className="absolute w-[245px] h-[37px] top-[1281px] left-[368px] font-m3-headline-medium font-[number:var(--m3-headline-medium-font-weight)] text-black text-[length:var(--m3-headline-medium-font-size)] text-center tracking-[var(--m3-headline-medium-letter-spacing)] leading-[var(--m3-headline-medium-line-height)] whitespace-nowrap [font-style:var(--m3-headline-medium-font-style)]">
          Badminton Bats
        </div>
        <div className="absolute w-[221px] h-[37px] top-[1281px] left-[680px] font-m3-headline-medium font-[number:var(--m3-headline-medium-font-weight)] text-black text-[length:var(--m3-headline-medium-font-size)] text-center tracking-[var(--m3-headline-medium-letter-spacing)] leading-[var(--m3-headline-medium-line-height)] whitespace-nowrap [font-style:var(--m3-headline-medium-font-style)]">
          Tennis Ball
        </div>
        <div className="absolute w-[245px] h-[37px] top-[1276px] left-[977px] font-m3-headline-medium font-[number:var(--m3-headline-medium-font-weight)] text-black text-[length:var(--m3-headline-medium-font-size)] text-center tracking-[var(--m3-headline-medium-letter-spacing)] leading-[var(--m3-headline-medium-line-height)] whitespace-nowrap [font-style:var(--m3-headline-medium-font-style)]">
          Football Gloves
        </div>
        <div className="absolute w-[1276px] h-[459px] top-[1927px] left-0 bg-black" />
      </div>
    </div>
  );
};
