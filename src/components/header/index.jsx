import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoMdArrowBack } from "react-icons/io";
import { REGISTER_CARD_LINK, MENU_LINK } from "../constants";

const Header = ({ title }) => {
  return (
    <div className='header-wrapper'>
      <span className='icon-wrapper'>
        {title === "Menu" ? (
          <Link to={REGISTER_CARD_LINK}>
            <IoIosMenu className='icon' />
          </Link>
        ) : (
          <Link to={MENU_LINK}>
            <IoMdArrowBack className='icon' />
          </Link>
        )}
      </span>
      <span className='header-title'>{title}</span>
    </div>
  );
};

export default Header;
