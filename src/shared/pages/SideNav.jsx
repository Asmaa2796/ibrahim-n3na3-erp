import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaMoneyBillWave,
  FaUsers,
  FaBuilding,
  FaGlobe,
  FaUserCog,
  FaUserTie,
  FaUserShield,
  FaWhatsapp,
  FaWarehouse,
} from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { BsBank } from "react-icons/bs";
import { MdOutlineRequestPage } from "react-icons/md";
import { GiCash } from "react-icons/gi";
const SideNav = ({ isOpen, toggleSideNav }) => {
  const { t, i18n } = useTranslation("global");
  const location = useLocation();
  const currentPath = location.pathname;
  const sideNavRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        window.innerWidth < 1200 &&
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target)
      ) {
        toggleSideNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // for touch devices (iPhone, Android)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, toggleSideNav]);

  const handleLinkClick = () => {
    if (window.innerWidth < 1200) {
      toggleSideNav();
    }
  };
  return (
    <div
      ref={sideNavRef}
      className={`sidenav ${isOpen ? "openNav" : "closedNav"}`}
    >
      <span className="closeNav" onClick={toggleSideNav}>
        <i className="bi bi-x"></i>
      </span>
      <div className="text-center mt-3">
        <Link to="/" className="main-color">
          <h4> Mr.Ibrahim </h4>
        </Link>
      </div>
      <ul className="mb-0 mt-5 list-unstyled main-ul">
        <li className={`${currentPath === "/" && "active"}`}>
          <Link to="/">
            <FaHome className="mx-2" />
            <span>{t("sidenav.home")}</span>
          </Link>
        </li>

        <li
          className={`dropdown 
        ${
          (currentPath === "/insurance_documents" && "active") ||
          (currentPath === "/union_services" && "active") ||
          (currentPath === "/city_licenses" && "active") ||
          (currentPath === "/rural_licenses" && "active") ||
          (currentPath === "/engineering_drawings_printing" && "active") ||
          (currentPath === "/architectural_drawings_and_licenses" && "active") ||
          (currentPath === "/real_estate_and_lands_trade" && "active") ||
          (currentPath === "/construction" && "active") ||
          (currentPath === "/oxygen_cylinders" && "active") ||
          (currentPath === "/add_insurance_document" && "active")
        }`}
        >
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <GrServices className="mx-2" />
            {t("sidenav.services")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="/insurance_documents"
                onClick={handleLinkClick}
                className="dropdown-item fw-normal"
              >
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.servicesRoutes.insurance_documents")}
              </Link>
            </li>
            <li>
              <Link
                to="/city_licenses"
                onClick={handleLinkClick}
                className="dropdown-item fw-normal"
              >
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.servicesRoutes.city_licenses")}
              </Link>
            </li>
            <li>
              <Link
                to="/rural_licenses"
                onClick={handleLinkClick}
                className="dropdown-item fw-normal"
              >
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.servicesRoutes.rural_licenses")}
              </Link>
            </li>
            <li>
              <Link
                to="/engineering_drawings_printing"
                onClick={handleLinkClick}
                className="dropdown-item fw-normal"
              >
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.servicesRoutes.engineering_drawings_printing")}
              </Link>
            </li>
            <li>
              <Link
                to="/architectural_drawings_and_licenses"
                onClick={handleLinkClick}
                className="dropdown-item fw-normal"
              >
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.servicesRoutes.architectural_drawings_and_licenses")}
              </Link>
            </li>
            <li>
              <Link
                to="/real_estate_and_lands_trade"
                onClick={handleLinkClick}
                className="dropdown-item fw-normal"
              >
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.servicesRoutes.real_estate_and_lands_trade")}
              </Link>
            </li>
            <li>
              <Link
                to="/construction"
                onClick={handleLinkClick}
                className="dropdown-item fw-normal"
              >
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.servicesRoutes.construction")}
              </Link>
            </li>
            <li>
              <Link
                to="/oxygen_cylinders"
                onClick={handleLinkClick}
                className="dropdown-item fw-normal"
              >
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.servicesRoutes.oxygen_cylinders")}
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <GiCash className="mx-2" />
            {t("sidenav.expenses")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.expensesRoutes.taxes")}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.expensesRoutes.bank_accounts_and_transfers")}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.expensesRoutes.vaults")}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                {t("sidenav.expensesRoutes.cash_counting")}
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <FaUsers className="mx-2" />
            {t("sidenav.customers")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                --
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <FaBuilding className="mx-2" />
            {t("sidenav.work_departments_structure")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                --
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <FaGlobe className="mx-2" />
            {t("sidenav.geographic_areas")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                --
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <FaUserCog className="mx-2" />
            {t("sidenav.engineers")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                --
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <MdOutlineRequestPage className="mx-2" />
            {t("sidenav.requestors")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                --
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <FaWhatsapp className="mx-2" />
            {t("sidenav.whatsapp_notifications")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                --
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <FaUserTie className="mx-2" />
            {t("sidenav.users")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                --
              </Link>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
          >
            <FaUserShield className="mx-2" />
            {t("sidenav.permissions")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" onClick={handleLinkClick} className="dropdown-item">
                <i
                  className="bi bi-circle-fill text-xs main-color"
                  style={{ marginLeft: "2px" }}
                ></i>
                --
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;