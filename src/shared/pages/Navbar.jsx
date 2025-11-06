import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTitle } from "../../features/context/TitleContext";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { logout } from "../../features/redux/Slices/authSlice";
import { toast } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";
import { IoLanguageSharp,IoNotificationsOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

import { MdOutlineDashboardCustomize } from "react-icons/md";

const Navbar = ({ toggleSideNav, isSideNavOpen }) => {
  const { t, i18n } = useTranslation("global");
  const { title } = useTitle();
  const [isMobileScrolled, setIsMobileScrolled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userErp = sessionStorage.getItem("userErp");
  const today = new Date();
  const dayNames = [
    t("labels.week.sunday"),
    t("labels.week.monday"),
    t("labels.week.tuesday"),
    t("labels.week.wednesday"),
    t("labels.week.thursday"),
    t("labels.week.friday"),
    t("labels.week.saturday"),
  ];
  const day = dayNames[today.getDay()];
  const dateStr = `${String(today.getDate()).padStart(2, "0")}/${String(
    today.getMonth() + 1
  ).padStart(2, "0")}/${today.getFullYear()}`;
  const handleLogout = () => {
    dispatch(logout());
    toast.success(t("topnav.logoutSuccess"), {
      onClose: () => navigate(location.pathname),
    });
  };
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      const scrolled = window.scrollY >= 100;
      setIsMobileScrolled(isMobile && scrolled);
    };

    // Run once on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`navbar topnav border-bottom shadow-sm ${
        isSideNavOpen ? "with-sidenav" : "full-width"
      } ${isMobileScrolled ? "fixed-top" : ""}`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="toggle_sidenav d-flex align-items-center gap-2">
          <span
            className="p-3 main-color"
            onClick={toggleSideNav}
            style={{ cursor: "pointer" }}
            aria-label="Toggle Side Navigation"
          >
            <i className="fa fa-bars"></i>
          </span>
          <form className="form_search">
            <IoSearchOutline />
            <input placeholder={t("btns.search")}/>
          </form>
        </div>

        <ul className="actions d-flex align-items-center list-unstyled m-0">
          {/* <li className="text-sm gray-color">
            {t("labels.today")} : {day} {dateStr}
          </li> */}
          <li className="text-sm gray-color">
           <FiSun />
          </li>
          <li className="text-sm gray-color">
            <div className="notification position-relative">
              <IoNotificationsOutline/>
              <GoDotFill className="text-danger dot" />
            </div>
          </li>
          <li className="text-sm gray-color">
           <MdOutlineDashboardCustomize />
          </li>
          <li className="dropdown">
            <button
              className="dropdown-toggle bg-transparent border-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Language"
            >
              <IoLanguageSharp/>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  className="dropdown-item en-lang"
                >
                  English
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("ar")}
                  className="dropdown-item ar-lang"
                >
                  العربية
                </button>
              </li>
            </ul>
          </li>

          {/* {userErp ? (
            <li className="dropdown">
            <button
              className="dropdown-toggle user-btn border-0 text-sm"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="User Menu"
            >
             <div className="icon"><img src="/fav.png" alt="fav"/></div> <span className="mx-3 text-sm">{i18n.language === "ar" ? "أدمن":"Admin"}</span> <IoIosArrowDown />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="#" className="dropdown-item" style={{fontSize:"11px"}}>
                  {t("topnav.profile")}
                </Link>
              </li>
              <li>
                <Link to="#" className="dropdown-item" style={{fontSize:"11px"}} onClick={handleLogout}>
                  {t("topnav.logout")}
                </Link>
              </li>
            </ul>
          </li>
          ) : (
            <Link to="/login" className="text-sm main-color login-btn"><i className="bi bi-box-arrow-in-right"></i> {t("sign.login")} </Link>
          )} */}
           <li className="dropdown">
            <button
              className="dropdown-toggle user-btn border-0 text-sm"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="User Menu"
            >
             <div className="icon"><img src="/avatar.png" alt="fav"/></div>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="#" className="dropdown-item" style={{fontSize:"11px"}}>
                  {t("topnav.profile")}
                </Link>
              </li>
              <li>
                <Link to="#" className="dropdown-item" style={{fontSize:"11px"}} onClick={handleLogout}>
                  {t("topnav.logout")}
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
