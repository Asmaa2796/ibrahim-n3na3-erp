import Chart from "react-apexcharts";

const StackedBarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 250,
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        borderRadiusApplication: "end",
        columnWidth: "35%",
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        "Online advertising",
        "Sales Training",
        "Print advertising",
        "Catalogs",
        "Meetings",
        "Public relations",
      ],
      labels: { show: false },
    },
    yaxis: { labels: { show: false } },
    grid: { show: false },
    fill: { opacity: 1 },
    colors: ["#ccc","#7367F0"],
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: { radius: 6 },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const series = [
    {
      name: "Q1 Budget",
      data: [14000, 34000, 44000, 24000, 34000, 14000],
      stack: "A",
    },
    {
      name: "Q2 Actual",
      data: [14000, 34000, 44000, 24000, 34000, 14000],
      stack: "B",
    },
  ];

  return (
    <div className="chart-container" style={{ maxWidth: 800, margin: "auto" }}>
      <Chart options={options} series={series} type="bar" height={250} />
    </div>
  );
};

export default StackedBarChart;
