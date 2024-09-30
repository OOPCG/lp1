/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CheckIndeterminateSmall9 } from "../../icons/CheckIndeterminateSmall9";
import { CheckSmall11 } from "../../icons/CheckSmall11";
import { TypeUnselectedStatePressed } from "../../icons/TypeUnselectedStatePressed";
import "./style.css";

export const Checkboxes = ({ type, stateProp, typeSelectedStateClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "selected",
    state: stateProp || "enabled",
  });

  return (
    <>
      {(state.state === "disabled" ||
        state.state === "enabled" ||
        state.state === "focused" ||
        state.state === "hovered" ||
        (state.state === "pressed" && state.type === "error-indeterminate") ||
        (state.state === "pressed" && state.type === "error-selected") ||
        (state.state === "pressed" && state.type === "indeterminate") ||
        (state.state === "pressed" && state.type === "selected")) && (
        <div
          className={`checkboxes ${state.state} ${typeSelectedStateClassName}`}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
        >
          <div className={`state-layer state-${state.state} ${state.type}`}>
            {["error-indeterminate", "error-selected", "indeterminate", "selected"].includes(state.type) && (
              <div className="container" />
            )}

            {["error-selected", "selected"].includes(state.type) && (
              <CheckSmall11 className="instance-node" color={state.state === "disabled" ? "#FEF7FF" : "white"} />
            )}

            {["error-indeterminate", "indeterminate"].includes(state.type) && (
              <CheckIndeterminateSmall9 className="instance-node" />
            )}

            {state.state === "pressed" && (
              <img
                className="ripple"
                alt="Ripple"
                src={
                  ["error-indeterminate", "error-selected"].includes(state.type)
                    ? "/img/ripple-3.svg"
                    : "/img/ripple-1.svg"
                }
              />
            )}

            {["error-unselected", "unselected"].includes(state.type) && <div className="div" />}
          </div>
        </div>
      )}

      {state.state === "pressed" && ["error-unselected", "unselected"].includes(state.type) && (
        <TypeUnselectedStatePressed
          className="type-unselected-state-pressed"
          color={state.type === "error-unselected" ? "#B3261E" : "#1D1B20"}
          fill={state.type === "error-unselected" ? "#B3261E" : "#65558F"}
        />
      )}
    </>
  );
};

function reducer(state, action) {
  if (state.state === "enabled" && state.type === "selected") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hovered",
          type: "selected",
        };
    }
  }

  if (state.state === "enabled" && state.type === "indeterminate") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hovered",
          type: "indeterminate",
        };
    }
  }

  if (state.state === "enabled" && state.type === "unselected") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hovered",
          type: "unselected",
        };
    }
  }

  if (state.state === "enabled" && state.type === "error-selected") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hovered",
          type: "error-selected",
        };
    }
  }

  if (state.state === "enabled" && state.type === "error-indeterminate") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hovered",
          type: "error-indeterminate",
        };
    }
  }

  if (state.state === "enabled" && state.type === "error-unselected") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hovered",
          type: "error-unselected",
        };
    }
  }

  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

Checkboxes.propTypes = {
  type: PropTypes.oneOf([
    "error-indeterminate",
    "indeterminate",
    "unselected",
    "error-unselected",
    "selected",
    "error-selected",
  ]),
  stateProp: PropTypes.oneOf(["enabled", "pressed", "focused", "hovered", "disabled"]),
};
