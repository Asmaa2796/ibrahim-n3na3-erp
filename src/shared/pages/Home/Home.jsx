import React, { useEffect } from "react";
import { useTitle } from "../../../features/context/TitleContext";
import { useTranslation } from "react-i18next";
import "./home.css";
import RevenuesCharts from "../../charts/RevenuesCharts";
import ExpensesChart from "../../charts/ExpensesChart";
import ServicesBarChart from "../../charts/ServicesBarChart";
import PieChartWithNeedle from "../../charts/PieChartWithNeedle";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
const Home = () => {
  const { t, i18n } = useTranslation("global");
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle(t("topnav.dashboard"));
  }, [setTitle, t, i18n.language]);
  return (
    <>
      <div className="main_content">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-lg-6 col-12">
            <div className="div-bg my-2">
              <h5 className="text-sm d-flex justify-content-between align-items-center">
                <span>{t("home.customers_count")}</span>
                <div className="dropdown">
                  <button
                    className="btn p-0 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <HiOutlineDotsVertical />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                  </div>
                </div>
              </h5>
              <small className="text-secondary text-xs d-block" style={{textAlign:i18n.language === "en" && "left"}}>{t("home.last_week")}</small>
              <PieChartWithNeedle/>
              <h5 className="fw-bold">164</h5>
              <span className="text-xs text-secondary d-block" style={{textAlign:i18n.language === "en" && "left"}}>{t("home.total_number_of_customers")}</span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-lg-6 col-12">
            <div className="div-bg my-2">
              <h5 className="text-sm d-flex justify-content-between align-items-center">
                <span>{t("sidenav.services")}</span>
                <div className="dropdown">
                  <button
                    className="btn p-0 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <HiOutlineDotsVertical />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                  </div>
                </div>
              </h5>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-12 custom-flex">
                  <h4>$408</h4>
                  <small className="custom-small">4.2%+</small>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                  <ServicesBarChart />
                </div>
              </div>
              <div className="stats">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-lg-6 col-12">
                    <b className="text-sm fw-normal d-block mb-2 main-color" style={{textAlign:i18n.language === "en" && "left"}}>{t("home.insurance_documents")}</b>
                    <h5 className="text-md">$145.69</h5>
                    <div className="percentage"><div className="perc1"></div></div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-lg-6 col-12">
                    <b className="text-sm fw-normal d-block mb-2 text-info" style={{textAlign:i18n.language === "en" && "left"}}>{t("home.licenses")}</b>
                    <h5 className="text-md">$156.34</h5>
                    <div className="percentage"><div className="perc2"></div></div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-lg-6 col-12">
                    <b className="text-sm fw-normal d-block mb-2 text-danger" style={{textAlign:i18n.language === "en" && "left"}}>{t("home.union")}</b>
                    <h5 className="text-md">$94.19</h5>
                    <div className="percentage"><div className="perc3"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-lg-6 col-12">
            <div className="div-bg my-2">
              <h5 className="text-sm d-flex justify-content-between align-items-center">
                <span>{t("home.revenues")}</span>
                <div className="dropdown">
                  <button
                    className="btn p-0 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <HiOutlineDotsVertical />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                  </div>
                </div>
              </h5>
              <h4 style={{textAlign:i18n.language === "en" && "left"}}>
                87% <small className="highlight-green text-sm">25.8%</small>
              </h4>
              <RevenuesCharts />
              <div className="totals">
                <div className="d-flex justify-content-between align-items-center my-3">
                  <div>
                    <span className="d-block bg-purple span main-color">
                      <BsCurrencyDollar />
                    </span>
                  </div>
                  <div>
                    <small className="text-secondary d-block text-sm">
                      إجمالي الإيرادات اليومية
                    </small>
                  </div>
                  <div>
                    <span className="highlight-green text-sm">+$26</span>
                  </div>
                </div>
              </div>
              <div className="totals">
                <div className="d-flex justify-content-between align-items-center my-3">
                  <div>
                    <span className="d-block bg-light span text-secondary">
                      <BsCurrencyDollar />
                    </span>
                  </div>
                  <div>
                    <small className="text-secondary d-block text-sm">
                      إجمالي الإيرادات الشهرية
                    </small>
                  </div>
                  <div>
                    <span className="highlight-green text-sm">+$398</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-lg-6 col-12">
            <div className="div-bg my-2">
              <h5 className="text-sm d-flex justify-content-between align-items-center">
                <span>{t("home.expenses")}</span>
                <div className="dropdown">
                  <button
                    className="btn p-0 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <HiOutlineDotsVertical />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                  </div>
                </div>
              </h5>
              <h4 style={{textAlign:i18n.language === "en" && "left"}}>
                12% <small className="text-danger text-sm">12.2%</small>
              </h4>
              <ExpensesChart />
              <div className="totals">
                <div className="d-flex justify-content-between align-items-center my-3">
                  <div>
                    <span className="d-block bg-purple span main-color">
                      <BsCurrencyDollar />
                    </span>
                  </div>
                  <div>
                    <small className="text-secondary d-block text-sm">
                      إجمالي المصروفات اليومية
                    </small>
                  </div>
                  <div>
                    <span className="text-danger text-sm">-$26</span>
                  </div>
                </div>
              </div>
              <div className="totals">
                <div className="d-flex justify-content-between align-items-center my-3">
                  <div>
                    <span className="d-block bg-light span text-secondary">
                      <BsCurrencyDollar />
                    </span>
                  </div>
                  <div>
                    <small className="text-secondary d-block text-sm">
                      إجمالي المصروفات الشهرية
                    </small>
                  </div>
                  <div>
                    <span className="text-danger text-sm">-$298</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-lg-6 col-12">
            <div className="div-bg my-2">
              <h5 className="text-sm mb-3 d-flex justify-content-between align-items-center">
                <span>{t("home.services_by_governorates")}</span>
                <div className="dropdown">
                  <button
                    className="btn p-0 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <HiOutlineDotsVertical />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                    <a className="dropdown-item" href="#">
                      -
                    </a>
                  </div>
                </div>
              </h5>
              <div className="d-flex justify-content-between align-items-center my-2">
                <div>
                  <span className="text-dark d-block text-sm">$18,41k</span>
                  <small className="text-secondary d-block text-xs">
                    القاهرة
                  </small>
                </div>
                <div>
                  <span className="highlight-green text-sm">25.8%</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                  <span className="text-dark d-block text-sm">$12,47k</span>
                  <small style={{textAlign:i18n.language === "en" && "left"}} className="text-secondary d-block text-xs">
                    الجيزة
                  </small>
                </div>
                <div>
                  <span className="text-danger text-sm">6.2%</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                  <span className="text-dark d-block text-sm">$7,51k</span>
                  <small style={{textAlign:i18n.language === "en" && "left"}} className="text-secondary d-block text-xs">
                    الفيوم
                  </small>
                </div>
                <div>
                  <span className="highlight-green text-sm">25.8%</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                  <span className="text-dark d-block text-sm">$4,57k</span>
                  <small style={{textAlign:i18n.language === "en" && "left"}} className="text-secondary d-block text-xs">
                    بني سويف
                  </small>
                </div>
                <div>
                  <span className="text-danger text-sm">6.2%</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                  <span className="text-dark d-block text-sm">$3,50k</span>
                  <small style={{textAlign:i18n.language === "en" && "left"}} className="text-secondary d-block text-xs">
                    الإسكندرية
                  </small>
                </div>
                <div>
                  <span className="highlight-green text-sm">6.2%</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                  <span className="text-dark d-block text-sm">$2,33k</span>
                  <small style={{textAlign:i18n.language === "en" && "left"}} className="text-secondary d-block text-xs">طنطا</small>
                </div>
                <div>
                  <span className="text-danger text-sm">25.2%</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                  <span className="text-dark d-block text-sm">$9,41k</span>
                  <small style={{textAlign:i18n.language === "en" && "left"}} className="text-secondary d-block text-xs">
                    المنيا
                  </small>
                </div>
                <div>
                  <span className="highlight-green text-sm">15.8%</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                  <span className="text-dark d-block text-sm">$12,41k</span>
                  <small style={{textAlign:i18n.language === "en" && "left"}} className="text-secondary d-block text-xs">
                    البحر الأحمر
                  </small>
                </div>
                <div>
                  <span className="text-danger text-sm">55.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
