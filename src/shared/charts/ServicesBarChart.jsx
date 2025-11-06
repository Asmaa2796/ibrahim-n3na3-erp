import Chart from "react-apexcharts";

const ServicesBarChart = () => {
  const data = [3.3, 5.1, 4.0, 10.1, 7.0, 4.6, 3.5];
  const maxValue = Math.max(...data);

  // Highlight max value (solid purple), others light purple
  const barColors = data.map((val) =>
    val === maxValue ? "#7367F0" : "#7267f04e"
  );

  const options = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: { show: false },
    },
    colors: barColors,
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: "35%",
      },
    },
    dataLabels: {
      enabled: false, // ❌ Hide data values above bars
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      position: "bottom", // ⬇️ Show weekdays under bars
      axisBorder: { show: true },
      axisTicks: { show: true },
      labels: {
        style: { colors: "#555", fontSize: "10px" },
      },
      tooltip: { enabled: true },
    },
    yaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
    grid: {
      show: true, // ✅ show grid lines
      borderColor: "#e0e0e0",
      strokeDashArray: 4, // dashed lines for a soft look
      position: "back", // ✅ make sure lines appear *behind* bars
      xaxis: {
        lines: { show: true },
      },
      yaxis: {
        lines: { show: false },
      },
    },
    legend: {
      show: false,
    },
    title: {
      text: "",
      floating: true,
      offsetY: 10,
      align: "center",
      style: { color: "#444" },
    },
  };

  const series = [
    {
      name: "Activity",
      data,
    },
  ];

  return (
    <div id="chart" style={{ maxWidth: 700, margin: "auto" }}>
      <Chart options={options} series={series} type="bar" height={250} />
    </div>
  );
};

export default ServicesBarChart;
