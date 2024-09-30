/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon10 } from "../../icons/Icon10";
import { Icon20 } from "../../icons/Icon20";

export const Button = ({ labelText = "Label", style, stateProp, showIcon, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "tonal",
    state: stateProp || "disabled",
    showIcon: showIcon || true,
  });

  return (
    <div
      className={`inline-flex items-center relative flex-col rounded-[100px] gap-2 h-10 overflow-hidden justify-center ${
        state.style === "outlined" && state.state === "disabled"
          ? "border-[#1d1b201f]"
          : state.style === "outlined" && ["enabled", "hovered", "pressed"].includes(state.state)
          ? "border-m3-schemes-outline"
          : state.style === "outlined" && state.state === "focused"
          ? "border-m3-schemes-primary"
          : ""
      } ${
        (state.state === "enabled" && state.style === "elevated") ||
        (state.state === "focused" && state.style === "elevated") ||
        (state.state === "hovered" && state.style === "filled") ||
        (state.state === "hovered" && state.style === "tonal") ||
        (state.state === "pressed" && state.style === "elevated")
          ? "shadow-m3-elevation-light-1"
          : state.style === "elevated" && state.state === "hovered"
          ? "shadow-m3-elevation-light-2"
          : ""
      } ${
        (state.state === "enabled" && state.style === "tonal") ||
        (state.state === "focused" && state.style === "tonal") ||
        (state.state === "hovered" && state.style === "tonal") ||
        (state.state === "pressed" && state.style === "tonal")
          ? "bg-m3-schemes-secondary-container"
          : (state.state === "enabled" && state.style === "elevated") ||
            (state.state === "focused" && state.style === "elevated") ||
            (state.state === "hovered" && state.style === "elevated") ||
            (state.state === "pressed" && state.style === "elevated")
          ? "bg-m3-schemes-surface-container-low"
          : (state.state === "enabled" && state.style === "filled") ||
            (state.state === "focused" && state.style === "filled") ||
            (state.state === "hovered" && state.style === "filled") ||
            (state.state === "pressed" && state.style === "filled")
          ? "bg-m3-schemes-primary"
          : ""
      } ${state.style === "outlined" ? "border border-solid" : ""} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div
        className={`w-full flex self-stretch items-center grow gap-2 flex-1 relative ${
          (!state.showIcon && state.style === "elevated") ||
          (!state.showIcon && state.style === "filled") ||
          (!state.showIcon && state.style === "outlined") ||
          (!state.showIcon && state.style === "tonal")
            ? "px-6 py-2.5"
            : state.showIcon && state.style === "text"
            ? "pl-3 pr-4 py-2.5"
            : !state.showIcon && state.style === "text"
            ? "px-3 py-2.5"
            : "pl-4 pr-6 py-2.5"
        } ${
          state.showIcon && state.style === "filled" && ["focused", "hovered"].includes(state.state)
            ? "overflow-hidden"
            : ""
        } ${
          state.showIcon && state.style === "filled" && ["focused", "hovered"].includes(state.state) ? "rounded" : ""
        } ${
          (!state.showIcon && state.state === "disabled" && state.style === "elevated") ||
          (!state.showIcon && state.style === "outlined") ||
          (state.showIcon && state.state === "enabled" && state.style === "outlined") ||
          (state.showIcon && state.state === "focused" && state.style === "outlined") ||
          (state.showIcon && state.state === "hovered" && state.style === "outlined") ||
          (state.showIcon && state.state === "pressed" && state.style === "outlined") ||
          (state.state === "enabled" && state.style === "elevated") ||
          (state.state === "focused" && state.style === "elevated") ||
          (state.state === "hovered" && state.style === "elevated") ||
          (state.state === "pressed" && state.style === "elevated") ||
          state.style === "filled" ||
          state.style === "text" ||
          state.style === "tonal"
            ? "justify-center"
            : ""
        } ${
          state.state === "disabled" && ["elevated", "filled", "tonal"].includes(state.style)
            ? "bg-[#1d1b201f]"
            : state.style === "tonal" && ["focused", "pressed"].includes(state.state)
            ? "bg-[#1d192b1f]"
            : state.state === "hovered" && state.style === "tonal"
            ? "bg-[#1d192b14]"
            : (state.state === "focused" && state.style === "elevated") ||
              (state.state === "focused" && state.style === "outlined") ||
              (state.state === "focused" && state.style === "text") ||
              (state.state === "pressed" && state.style === "elevated") ||
              (state.state === "pressed" && state.style === "outlined") ||
              (state.state === "pressed" && state.style === "text")
            ? "bg-[#65558f1f]"
            : state.state === "hovered" && ["elevated", "outlined", "text"].includes(state.style)
            ? "bg-[#65558f14]"
            : state.style === "filled" && ["focused", "pressed"].includes(state.state)
            ? "bg-[#ffffff1f]"
            : state.state === "hovered" && state.style === "filled"
            ? "bg-[#ffffff14]"
            : ""
        }`}
      >
        {((state.showIcon && state.state === "disabled" && state.style === "elevated") ||
          (state.showIcon && state.state === "disabled" && state.style === "text") ||
          (state.showIcon && state.state === "disabled" && state.style === "tonal") ||
          (state.showIcon && state.state === "enabled") ||
          (state.showIcon && state.state === "focused") ||
          (state.showIcon && state.state === "hovered") ||
          (state.showIcon && state.state === "pressed")) && (
          <Icon10
            className="!relative !w-[18px] !h-[18px]"
            color={
              state.state === "disabled"
                ? "#1D1B20"
                : (state.state === "enabled" && state.style === "tonal") ||
                  (state.state === "focused" && state.style === "tonal") ||
                  (state.state === "hovered" && state.style === "tonal") ||
                  (state.state === "pressed" && state.style === "tonal")
                ? "#1D192B"
                : state.style === "filled"
                ? "white"
                : "#65558F"
            }
            opacity={state.state === "disabled" ? "0.38" : undefined}
          />
        )}

        {state.showIcon && state.state === "disabled" && ["filled", "outlined"].includes(state.style) && (
          <Icon20 className="!relative !w-[18px] !h-[18px]" />
        )}

        <div
          className={`font-m3-label-large w-fit mt-[-1.00px] tracking-[var(--m3-label-large-letter-spacing)] text-[length:var(--m3-label-large-font-size)] [font-style:var(--m3-label-large-font-style)] relative font-[number:var(--m3-label-large-font-weight)] text-center whitespace-nowrap leading-[var(--m3-label-large-line-height)] ${
            state.state === "disabled" ? "opacity-[0.38]" : ""
          } ${
            state.state === "disabled"
              ? "text-m3-schemes-on-surface"
              : (state.state === "enabled" && state.style === "tonal") ||
                (state.state === "focused" && state.style === "tonal") ||
                (state.state === "hovered" && state.style === "tonal") ||
                (state.state === "pressed" && state.style === "tonal")
              ? "text-m3-schemes-on-secondary-container"
              : (state.state === "enabled" && state.style === "filled") ||
                (state.state === "focused" && state.style === "filled") ||
                (state.state === "hovered" && state.style === "filled") ||
                (state.state === "pressed" && state.style === "filled")
              ? "text-m3-schemes-on-primary"
              : "text-m3-schemes-primary"
          }`}
        >
          {labelText}
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

Button.propTypes = {
  labelText: PropTypes.string,
  style: PropTypes.oneOf(["filled", "tonal", "elevated", "text", "outlined"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "pressed", "hovered", "disabled"]),
  showIcon: PropTypes.bool,
};
