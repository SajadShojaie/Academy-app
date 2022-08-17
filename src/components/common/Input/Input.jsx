import React from "react";
import style from "./Input.module.css";
import Fade from "react-reveal/Fade";
import { DarkcontextConsumer } from "../../../core/utils/context/Darkcontext";

const Input = ({
  inputType,
  inputText,
  height,
  background,
  name,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <DarkcontextConsumer>
      {(isDarkMode) => {
        return (
          <Fade bottom>
            <input
              style={{
                height: `${height}`,
                background: `${background}`,
              }}
              type={inputType}
              placeholder={inputText}
              className={`
              ${style.input} ${
                isDarkMode ? style.input_dark : style.input_light
              }`}
              name={name}
              id={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          </Fade>
        );
      }}
    </DarkcontextConsumer>
  );
};

export default Input;
