import React from "react";
import "./form-input.styles.scss";

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div>
    {" "}
    {/* Input Component */}
    <div className="group">
      <img className="sign-in-icon" src={otherProps.img_label}></img>
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  </div>
);
