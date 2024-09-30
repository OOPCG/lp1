import React from "react";
import { Button } from "./Button";
import { FormContact } from "./FormContact";
import { IconButton } from "./IconButton";
import { LogIn } from "./LogIn";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { ShoppingCart } from "./ShoppingCart";
import { Size48 } from "./Size48";
import contactUs from "./contact-us.png";
import ellipse1 from "./ellipse-1.png";
import rectangle2 from "./rectangle-2.svg";
import "./style.css";
import vector1 from "./vector-1.svg";

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="div-2">
        <img className="img" alt="Contact us" src={contactUs} />
        <div className="overlap-group">
          <img className="vector" alt="Vector" src={vector1} />
          <img className="rectangle" alt="Rectangle" src={rectangle2} />
          <div className="search-bar">
            <div className="state-layer-2">
              <IconButton
                className="leading-icon"
                icon={<Menu className="icon-instance-node" color="#49454F" />}
                stateProp="enabled"
                style="standard"
              />
              <div className="content">
                <div className="supporting-text">Hinted search text</div>
              </div>
              <div className="trailing-elements">
                <IconButton
                  icon={<Search className="icon-instance-node" color="#49454F" />}
                  stateProp="enabled"
                  style="standard"
                />
              </div>
            </div>
          </div>
          <Button className="button-instance" labelText="Cricket" showIcon={false} style="filled" />
          <Button className="design-component-instance-node" labelText="Football" showIcon={false} style="filled" />
          <Button className="button-3" labelText="Cycling" showIcon={false} style="filled" />
          <Button className="button-4" labelText="Swimming" showIcon={false} style="filled" />
          <Button className="button-5" labelText="Trekking" showIcon={false} style="filled" />
          <Button className="button-6" labelText="Tennis" showIcon={false} style="filled" />
          <img className="ellipse" alt="Ellipse" src={ellipse1} />
          <div className="text-wrapper-2">Pro-Players Rentals</div>
          <ShoppingCart className="shopping-cart" />
          <Size48 className="user" />
          <LogIn className="log-in" />
        </div>
        <div className="overlap">
          <FormContact
            buttonClassName="form-contact-6"
            buttonGroupClassName="form-contact-5"
            className="form-contact-instance"
            divClassName="form-contact-2"
            divClassNameOverride="form-contact-3"
            drag="image.svg"
            dragClassName="form-contact-4"
            inputClassName="form-contact-3"
            inputClassNameOverride="form-contact-3"
            labelClassName="form-contact-2"
            labelClassName1="form-contact-2"
            labelClassNameOverride="form-contact-2"
            text=""
            text1="Phone Number"
            textareaClassName="form-contact-3"
          />
          <p className="p">We will contact you soon!</p>
        </div>
      </div>
    </div>
  );
};
