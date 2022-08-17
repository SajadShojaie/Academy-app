import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";
import style from "./DatePickerComponent.module.css";
import { Fade } from "react-reveal";

const DatePickerComponent = ({ name, placeholder, setFieldValue }) => {
  return (
    <Fade bottom>
      <DatePicker
        fixMainPosition={true}
        calendarPosition={"top"}
        inputClass={style.custom_input}
        name={name}
        id={name}
        className='purple'
        calendar={persian}
        locale={persian_fa}
        format={"YYYY/MM/DD"}
        placeholder={placeholder}
        onChange={(e) => setFieldValue("birthDate", e.format())}
      />
    </Fade>
  );
};

export default DatePickerComponent;
