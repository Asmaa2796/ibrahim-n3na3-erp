import React, { useEffect } from "react";
import { useTitle } from "../../../../features/context/TitleContext";
import { useTranslation } from "react-i18next";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Teachers = () => {
  const { t, i18n } = useTranslation("global");
  const { setTitle } = useTitle();

   useEffect(() => {
    setTitle(
      t("sidenav.servicesRoutes.insurance_documents")
    );
    document.title = t("sidenav.servicesRoutes.insurance_documents");
    return () => {
      document.title = "Ibrahim N3na3 - ERP";
    };
  }, [setTitle, t, i18n.language]);
  return (
    <>
      <div className="insurance_documents">
        <div className="container">
          <h4 className="action-btns">
            <span
              className="main-color text-md"
              style={{ fontWeight: "bold" }}
            >
              {t("sidenav.servicesRoutes.insurance_documents")}
            </span>
          </h4>
          <div className="filter form-style mb-4">
            <b className="fw-normal d-block mb-2">{t("labels.filteration")}</b>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <select name="" id="">
                  <option value="">{t("labels.alphabetical_order")}</option>
                </select>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <select name="" id="">
                  <option value="">{t("labels.place")}</option>
                </select>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <hr />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <input type="text" placeholder={t("labels.search")} />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <button className="export_btn">{t("labels.export")} <i className="bi bi-download"></i></button>
                <Link to="/add_insurance_document" className="add_new">{t("labels.add_new_document")} <i className="bi bi-plus"></i></Link>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>{t("labels.project_code")}</th>
                  <th>{t("labels.land_area")}</th>
                  <th>{t("labels.foundation_type")}</th>
                  <th>{t("labels.agency_type")}</th>
                  <th>{t("labels.building_count")}</th>
                  <th>{t("labels.owner_count")}</th>
                  <th>{t("labels.governorate")}</th>
                  <th>{t("labels.procedure")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      السويس
                    </span>
                  </td>

                  <td>
                    <div className="btns-div">
                      <Link>
                        <span className="sq-btn">
                          <FaEye className="highlight-green" />
                        </span>
                      </Link>
                      <Link>
                        <span className="sq-btn">
                          <FiEdit className="main-color" />
                        </span>
                      </Link>
                      <button className="btn">
                        <span className="sq-btn">
                          <FaRegTrashCan className="red-text" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      السويس
                    </span>
                  </td>

                  <td>
                    <div className="btns-div">
                      <Link>
                        <span className="sq-btn">
                          <FaEye className="highlight-green" />
                        </span>
                      </Link>
                      <Link>
                        <span className="sq-btn">
                          <FiEdit className="main-color" />
                        </span>
                      </Link>
                      <button className="btn">
                        <span className="sq-btn">
                          <FaRegTrashCan className="red-text" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      السويس
                    </span>
                  </td>

                  <td>
                    <div className="btns-div">
                      <Link>
                        <span className="sq-btn">
                          <FaEye className="highlight-green" />
                        </span>
                      </Link>
                      <Link>
                        <span className="sq-btn">
                          <FiEdit className="main-color" />
                        </span>
                      </Link>
                      <button className="btn">
                        <span className="sq-btn">
                          <FaRegTrashCan className="red-text" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      السويس
                    </span>
                  </td>

                  <td>
                    <div className="btns-div">
                      <Link>
                        <span className="sq-btn">
                          <FaEye className="highlight-green" />
                        </span>
                      </Link>
                      <Link>
                        <span className="sq-btn">
                          <FiEdit className="main-color" />
                        </span>
                      </Link>
                      <button className="btn">
                        <span className="sq-btn">
                          <FaRegTrashCan className="red-text" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      السويس
                    </span>
                  </td>

                  <td>
                    <div className="btns-div">
                      <Link>
                        <span className="sq-btn">
                          <FaEye className="highlight-green" />
                        </span>
                      </Link>
                      <Link>
                        <span className="sq-btn">
                          <FiEdit className="main-color" />
                        </span>
                      </Link>
                      <button className="btn">
                        <span className="sq-btn">
                          <FaRegTrashCan className="red-text" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      77476
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      نص
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>

                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      2
                    </span>
                  </td>
                  <td>
                    <span
                      className="text-sm mb-0 mx-2"
                      style={{ fontWeight: "normal" }}
                    >
                      السويس
                    </span>
                  </td>

                  <td>
                    <div className="btns-div">
                      <Link>
                        <span className="sq-btn">
                          <FaEye className="highlight-green" />
                        </span>
                      </Link>
                      <Link>
                        <span className="sq-btn">
                          <FiEdit className="main-color" />
                        </span>
                      </Link>
                      <button className="btn">
                        <span className="sq-btn">
                          <FaRegTrashCan className="red-text" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination my-1">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">
                    {i18n.language === "ar" ? (
                      <FaArrowRightLong />
                    ) : (
                      <FaArrowLeftLong />
                    )}
                  </span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">
                    {i18n.language === "ar" ? (
                      <FaArrowLeftLong />
                    ) : (
                      <FaArrowRightLong />
                    )}{" "}
                  </span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* search */}
      <div
        className="modal fade"
        id="export"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="searchLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between border-0">
              <button
                type="button"
                className="close border-0 bg-transparent"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span
                  aria-hidden="true"
                  className="gray-color"
                  style={{ fontSize: "16px" }}
                >
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary cancel-btn"
                data-bs-dismiss="modal"
              >
                {t("btns.cancel")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
