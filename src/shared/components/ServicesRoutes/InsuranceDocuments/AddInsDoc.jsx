import React, { useEffect, useState } from "react";
import { useTitle } from "../../../../features/context/TitleContext";
import { useTranslation } from "react-i18next";
import { BsCloudUpload } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { FaFilePdf, FaFileWord } from "react-icons/fa6";

import { Link } from "react-router-dom";
import "./InsDoc.css";
import { toast } from "react-toastify";
const AddInsDoc = () => {
  const { t, i18n } = useTranslation("global");
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(
      `${t("sidenav.servicesRoutes.insurance_documents")} > ${t("btns.add")}`
    );
    document.title = `${t("sidenav.servicesRoutes.insurance_documents")} > ${t(
      "btns.add"
    )}`;
    return () => {
      document.title = "Ibrahim N3na3 - ERP";
    };
  }, [setTitle, t, i18n.language]);

  const [filePreviews, setFilePreviews] = useState({});
  const [owners, setOwners] = useState([{ id: Date.now() }]);

  const handleAddOwner = () => {
    setOwners([...owners, { id: Date.now() }]);
  };
  const handleRemoveOwner = (id) => {
    setOwners(owners.filter((owner) => owner.id !== id));
  };
  const [buildings, setBuildings] = useState([{ id: Date.now() }]);

  const handleAddBuilding = () => {
    setBuildings([...buildings, { id: Date.now() }]);
  };

  const handleRemoveBuilding = (id) => {
    setBuildings(buildings.filter((b) => b.id !== id));
  };
  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type;
    let preview = { type: "file" };

    if (fileType.startsWith("image/")) {
      preview = { type: "image", src: URL.createObjectURL(file) };
    } else if (fileType.includes("pdf")) {
      preview = { type: "pdf" };
    } else if (
      fileType.includes("word") ||
      file.name.endsWith(".doc") ||
      file.name.endsWith(".docx")
    ) {
      preview = { type: "word" };
    } else if (
      fileType.includes("excel") ||
      file.name.endsWith(".xls") ||
      file.name.endsWith(".xlsx")
    ) {
      preview = { type: "excel" };
    }

    setFilePreviews((prev) => ({ ...prev, [key]: preview }));
  };

  const renderIcon = (preview) => {
    if (!preview) return <BsCloudUpload className="text-secondary" size={25} />;

    switch (preview.type) {
      case "pdf":
        return <FaFilePdf color="#e74c3c" size={25} />;
      case "word":
        return <FaFileWord color="#2b579a" size={25} />;
      case "excel":
        return <RiFileExcel2Fill color="#217346" size={25} />;
      case "image":
        return (
          <img
            src={preview.src}
            alt="preview"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        );
      default:
        return <FaFileAlt color="#777" size={25} />;
    }
  };

  const [idImagePreview, setIdImagePreview] = useState(null);

  const handleIdImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type.startsWith("image/")) {
      setIdImagePreview(URL.createObjectURL(file));
    } else {
      toast.warning(t("labels.only_image_files_are_allowed"));
      e.target.value = "";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div style={{ textAlign: i18n.language === "ar" ? "left" : "right" }}>
        <Link
          to="/insurance_documents"
          className="btn btn-dark text-white back_btn"
        >
          {t("btns.back")}{" "}
          <i
            className={`bi bi-arrow-${
              i18n.language === "ar" ? "left" : "right"
            } text-xs`}
          ></i>
        </Link>
      </div>
      <h5 className="text-center main-color mb-5">
        {t("labels.add_new_document")}
      </h5>
      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="table_form form-style my-3 p-3 rounded bg-white div-bg"
      >
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <h5>{t("labels.basic_data")}</h5>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t("labels.project_code")}</label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t("labels.select_client")}</label>
            <select name="" id="">
              <option value="">--</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t("labels.project_type")}</label>
            <select name="" id="">
              <option value="">--</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t("labels.sub_project_type")}</label>
            <select name="" id="">
              <option value="">--</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t("labels.building_count")}</label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <hr />
            <h5>{t("labels.owner_data")}</h5>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t("labels.owners_count")}</label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t("labels.owner_type")}</label>
            <input type="text" className="input-bg" required />
          </div>
          {owners.map((owner, index) => (
            <div key={owner.id} className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <b>
                      {t("labels.owner")} {index + 1}
                    </b>
                  </div>
                  {owners.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mt-0 fw-normal"
                      onClick={() => handleRemoveOwner(owner.id)}
                    >
                      <i className="bi bi-dash"></i> {t("labels.remove_owner")}
                    </button>
                  )}
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">{t("labels.name")}</label>
                <input type="text" className="input-bg" required />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">{t("labels.address")}</label>
                <input type="text" className="input-bg" required />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">{t("labels.title")}</label>
                <input type="text" className="input-bg" required />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">{t("labels.phone")}</label>
                <input type="text" className="input-bg" required />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">{t("labels.job")}</label>
                <input type="text" className="input-bg" required />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">{t("labels.national_id")}</label>
                <input type="text" className="input-bg" required />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">
                  {t("labels.id_expiry_date")}
                </label>
                <input type="date" className="input-bg" required />
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                <label className="text-light">
                  {t("labels.attach_id_image")}
                </label>
                <div className="upload_input_file d-flex align-items-center gap-2">
                  {idImagePreview ? (
                    <img
                      src={idImagePreview}
                      alt="Uploaded"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
                  ) : (
                    <>
                      <BsCloudUpload className="text-secondary text-xs" />
                      <small className="text-secondary text-xs mx-1">
                        {t("labels.upload_image")}
                      </small>
                    </>
                  )}

                  {/* Actual input (transparent) */}
                  <input
                    type="file"
                    accept="image/*"
                    className="input-bg position-absolute top-0 start-0 w-100 h-100 opacity-0"
                    style={{ cursor: "pointer" }}
                    onChange={handleIdImageChange}
                    required
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Add New Owner Button */}
          <div className="col-12 text-end">
            <button
              type="button"
              className="add_new mt-3"
              onClick={handleAddOwner}
            >
              {t("labels.add_another_owner")} <i className="bi bi-plus"></i>
            </button>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <hr />
            <h5>{t("labels.planning_approval_data")}</h5>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <b className="text-sm">{t("labels.address")}</b>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <label className="text-light">{t("labels.governorate")}</label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <label className="text-light">{t("labels.city")}</label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <label className="text-light">{t("labels.village_street")}</label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <label className="text-light">{t("labels.type")}</label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <hr />
            <h5>{t("labels.existing_building_data")}</h5>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <textarea name="" id=""></textarea>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <hr />
            <h5>{t("labels.requested_works")}</h5>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <textarea name="" id=""></textarea>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">
              {t("labels.repeated_floors_count")}
            </label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t("labels.building_usage")}</label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label className="text-light">{t("labels.building_ratio")}</label>
            <input type="text" className="input-bg" required />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            {buildings.map((building, index) => (
              <div key={building.id} className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <b>
                        {t("labels.building")} {index + 1}
                      </b>
                    </div>

                    {buildings.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-danger btn-sm fw-normal my-3"
                        onClick={() => handleRemoveBuilding(building.id)}
                      >
                        <i className="bi bi-dash"></i>{" "}
                        {t("labels.remove_building")}
                      </button>
                    )}
                  </div>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                  <b className="text-sm">{t("labels.building_dimensions")}</b>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label>{t("labels.north_distance")}</label>
                  <input type="text" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label>{t("labels.south_distance")}</label>
                  <input type="text" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label>{t("labels.east_distance")}</label>
                  <input type="text" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label>{t("labels.west_distance")}</label>
                  <input type="text" />
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label>{t("labels.street_width")}</label>
                  <input type="text" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label>{t("labels.north_street_width")}</label>
                  <input type="text" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label>{t("labels.south_street_width")}</label>
                  <input type="text" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label>{t("labels.east_street_width")}</label>
                  <input type="text" />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                  <label>{t("labels.west_street_width")}</label>
                  <input type="text" />
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <label>{t("labels.ground_area")}</label>
                  <input type="text" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                  <label>{t("labels.repeated_area")}</label>
                  <input type="text" />
                </div>
              </div>
            ))}
          </div>

          {/* Add New Building Button */}
          <div className="col-12 text-end">
            <button
              className="add_new mt-3"
              type="button"
              onClick={handleAddBuilding}
            >
              {t("labels.add_another_building")} <i className="bi bi-plus"></i>
            </button>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <hr />
            <h5>{t("labels.structural_data")}</h5>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.total_height")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.fence_length")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.execution_months")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.fence_excavation_depth")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.fence_foundation_type")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.building_structure_type")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.soil_strength")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.foundation_type")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.excavation_depth")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.load_piles")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.basement")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.basement_count")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.area")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.mezzanine")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.services")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <label>{t("labels.show_final_insurance_amount")}</label>
            <input
              type="text"
              placeholder={t("labels.final_insurance_amount")}
            />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <hr />
            <h5>{t("labels.owner_authorization")}</h5>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label>{t("labels.authorization_type")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label>{t("labels.architect")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label>{t("labels.supervising_engineer")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label>{t("labels.structural_engineer")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label>{t("labels.inspection_consultant")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label>{t("labels.soil_report_consultant")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <label>{t("labels.applicant")}</label>
            <input type="text" />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <label>{t("labels.site_coordinates")}</label>
            <div className="upload_file text-center">
              {renderIcon(filePreviews.site_coordinates)}
              <span className="text-secondary d-block text-sm mt-2">
                {t("labels.upload_image_or_file")}
              </span>

              <input
                type="file"
                onChange={(e) => handleFileChange(e, "site_coordinates")}
                accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.xls,.xlsx"
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <label>{t("labels.project_nature_statement")}</label>
            <div className="upload_file text-center">
              {renderIcon(filePreviews.project_nature_statement)}
              <span className="text-secondary d-block text-sm mt-2">
                {t("labels.upload_image_or_file")}
              </span>

              <input
                type="file"
                onChange={(e) =>
                  handleFileChange(e, "project_nature_statement")
                }
                accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.xls,.xlsx"
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <label>{t("labels.project_drawings")}</label>
            <div className="upload_file text-center">
              {renderIcon(filePreviews.project_drawings)}
              <span className="text-secondary d-block text-sm mt-2">
                {t("labels.upload_image_or_file")}
              </span>

              <input
                type="file"
                onChange={(e) => handleFileChange(e, "project_drawings")}
                accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.xls,.xlsx"
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <label>{t("labels.engineer_response")}</label>
            <span className="engineer_approval">
              {t("labels.engineer_approval")}{" "}
              <i className="bi bi-check-circle"></i>
            </span>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <label>{t("labels.project_notes")}</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <label>{t("labels.inheritance_declaration")}</label>
            <div className="upload_file text-center">
              {renderIcon(filePreviews.inheritance_declaration)}
              <span className="text-secondary d-block text-sm mt-2">
                {t("labels.upload_image_or_file")}
              </span>

              <input
                type="file"
                onChange={(e) => handleFileChange(e, "inheritance_declaration")}
                accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.xls,.xlsx"
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <label>{t("labels.agent_data")}</label>
            <div className="upload_file text-center">
              {renderIcon(filePreviews.agent_data)}
              <span className="text-secondary d-block text-sm mt-2">
                {t("labels.upload_image_or_file")}
              </span>

              <input
                type="file"
                onChange={(e) => handleFileChange(e, "agent_data")}
                accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.xls,.xlsx"
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <label>{t("labels.exceptional_missing_items")}</label>
            <textarea name="" id=""></textarea>
          </div>
        </div>

        <div className="text-center">
          <button className="btn show_all">{t("btns.add")}</button>
        </div>
      </form>
    </>
  );
};

export default AddInsDoc;
