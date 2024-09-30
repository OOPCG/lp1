/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon56 } from "../../icons/Icon56";

export const IconButton = ({
  style,
  stateProp,
  className,
  icon = <Icon56 className="!relative !w-6 !h-6" color="#49454F" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "outlined",
    state: stateProp || "disabled",
  });

  return (
    <div
      className={`w-12 flex flex-col items-center gap-2.5 h-12 justify-center relative ${
        state.state === "disabled" && state.style === "standard" ? "opacity-[0.38]" : ""
      } ${
        (state.state === "disabled" && state.style === "filled") ||
        (state.state === "disabled" && state.style === "outlined") ||
        (state.state === "disabled" && state.style === "tonal") ||
        (state.state === "enabled" && state.style === "outlined")
          ? "p-2"
          : state.style === "filled" && state.state === "enabled"
          ? "p-1"
          : ""
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`inline-flex items-center gap-2.5 flex-[0_0_auto] overflow-hidden rounded-[100px] justify-center relative ${
          state.style === "outlined" ? "border border-solid" : ""
        } ${
          state.style === "outlined" && state.state === "disabled"
            ? "border-[#1d1b201f]"
            : (state.state === "enabled" && state.style === "outlined") ||
              (state.state === "focused" && state.style === "outlined") ||
              (state.state === "hovered" && state.style === "outlined") ||
              (state.state === "pressed" && state.style === "outlined")
            ? "border-m3-schemes-outline"
            : ""
        } ${
          (state.state === "disabled" && state.style === "filled") ||
          (state.state === "disabled" && state.style === "outlined") ||
          (state.state === "disabled" && state.style === "tonal") ||
          (state.state === "enabled" && state.style === "outlined")
            ? "mt-[-4.00px]"
            : ""
        } ${
          (state.state === "disabled" && state.style === "filled") ||
          (state.state === "disabled" && state.style === "outlined") ||
          (state.state === "disabled" && state.style === "tonal") ||
          (state.state === "enabled" && state.style === "outlined")
            ? "mr-[-4.00px]"
            : ""
        } ${
          (state.state === "disabled" && state.style === "filled") ||
          (state.state === "disabled" && state.style === "outlined") ||
          (state.state === "disabled" && state.style === "tonal") ||
          (state.state === "enabled" && state.style === "outlined")
            ? "ml-[-4.00px]"
            : ""
        } ${
          state.state === "disabled" && ["filled", "tonal"].includes(state.style)
            ? "bg-[#1d1b201f]"
            : (state.state === "enabled" && state.style === "tonal") ||
              (state.state === "focused" && state.style === "tonal") ||
              (state.state === "hovered" && state.style === "tonal") ||
              (state.state === "pressed" && state.style === "tonal")
            ? "bg-m3-schemes-secondary-container"
            : (state.state === "enabled" && state.style === "filled") ||
              (state.state === "focused" && state.style === "filled") ||
              (state.state === "hovered" && state.style === "filled") ||
              (state.state === "pressed" && state.style === "filled")
            ? "bg-m3-schemes-primary"
            : ""
        } ${
          (state.state === "disabled" && state.style === "filled") ||
          (state.state === "disabled" && state.style === "outlined") ||
          (state.state === "disabled" && state.style === "tonal") ||
          (state.state === "enabled" && state.style === "outlined")
            ? "mb-[-4.00px]"
            : ""
        }`}
      >
        <div
          className={`inline-flex items-center gap-2.5 flex-[0_0_auto] p-2 justify-center relative ${
            (state.state === "focused" && state.style === "outlined") ||
            (state.state === "focused" && state.style === "standard") ||
            (state.state === "pressed" && state.style === "outlined") ||
            (state.state === "pressed" && state.style === "standard")
              ? "bg-[#49454f1f]"
              : state.state === "hovered" && ["outlined", "standard"].includes(state.style)
              ? "bg-[#49454f14]"
              : state.style === "tonal" && ["focused", "pressed"].includes(state.state)
              ? "bg-[#1d192b1f]"
              : state.state === "hovered" && state.style === "tonal"
              ? "bg-[#1d192b14]"
              : state.style === "filled" && ["focused", "pressed"].includes(state.state)
              ? "bg-[#ffffff1f]"
              : state.state === "hovered" && state.style === "filled"
              ? "bg-[#ffffff14]"
              : ""
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

IconButton.propTypes = {
  style: PropTypes.oneOf(["filled", "outlined", "tonal", "standard"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "pressed", "hovered", "disabled"]),
};
