import React from "react";
import ContactForm from "../../components/common/ContactForm/ContactForm";
import ContactUsRight from "../../components/ContactUsRight/ContactUsRight";
import style from "./ContactUS.module.css";

const ContactUS = ({ isDarkMode }) => {
  return (
    <div className={`container  ${style.cover}`}>
      <ContactForm isDarkMode={isDarkMode} />

      <div className={`${style.right_col}`}>
        <ContactUsRight
          img_class='bi-telephone-fill'
          firstText='تماس بگیرید ...'
          secondText='0938385598'
        />
        <ContactUsRight
          img_class='bi-chat-left-dots-fill'
          firstText='مکاتبه ی ایمیلی'
          secondText='ارتباط از طریق ایمیل'
        />
        <ContactUsRight
          img_class='bi-clock'
          firstText='ساعت کاری'
          secondText='چهارشنبه ساعت 7-9'
        />
        <ContactUsRight
          img_class='bi-geo-alt-fill'
          firstText='نشانی'
          secondText='ساری خیابان 18 دی'
        />
      </div>
    </div>
  );
};

export default ContactUS;
