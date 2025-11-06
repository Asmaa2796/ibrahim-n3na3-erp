import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const PieChartWithNeedle = () => {
    const {t,i18n} = useTranslation("global");
  const options = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    labels: [], 
    colors: ["#7367F0", "#7267f0da", "#7267f0b5", "#7267f098", "#7267f065"],
    plotOptions: {
      pie: {
        donut: {
          size: "70%", // donut thickness
          labels: {
            show: true,
            name: { show: false },
            value: { show: false },
            total: {
              show: true,
              label: "14%", // 🔹 text in the center
              fontSize: "24px",
              fontWeight: 600,
              color: "#7367F0",
            },
          },
        },
      },
    },
    stroke: {
      show: true,
      width: 5, // 🔹 this controls the space (gap) between segments
      colors: ["#fff"], // white gap
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 180,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div style={{ position: "relative", width: 290, margin: "auto" }}>
      <Chart options={options} series={series} type="donut" height={300} />

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(-50%, 20px)",
          fontSize: "14px",
          color: "#777",
        }}
      > 
        <div className="text-secondary text-sm">{t("sidenav.new_customer")}</div>
        <h4 className="text-center text-dark my-2">14%</h4>
      </div>
    </div>
  );
};

export default PieChartWithNeedle;
