// TODO: 아래 정보들(색상, 툴팁 사용여부 등을 프롭스로 받아서 넘기기)

export const BUBBLE_DATA = {
  labels: ["a", "b", "c"],
  datasets: [
    {
      label: "Food",
      data: [
        { x: 10, y: 20, r: 5 },
        { x: 100, y: 200, r: 5 },
        { x: 400, y: 250, r: 5 },
        { x: 700, y: 570, r: 20 },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "#694b51",
      borderWidth: 1,
    },
  ],
};

export const BUBBLE_OPTION = {
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
  legend: {
    labels: {
      fontSize: 20,
    },
  },
  tooltips: {
    enabled: true,
  },
};

export const MIXED_DATA = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  // data: {
  datasets: [
    {
      type: "line",
      label: "Sales",
      data: [51, 65, 40, 49, 60, 37, 40, 51, 65, 40, 49],
      fill: false,
      borderColor: "#EC932F",
      backgroundColor: "#EC932F",
      pointBorderColor: "#EC932F",
      pointBackgroundColor: "#EC932F",
      pointHoverBackgroundColor: "#EC932F",
      pointHoverBorderColor: "#EC932F",
    },
    {
      type: "bubble",
      label: "Food",
      data: [
        { x: 100, y: 200, r: 15 },
        { x: 10, y: 20, r: 8 },
        { x: 40, y: 50, r: 9 },
        { x: 70, y: 70, r: 10 },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "#694b51",
      borderWidth: 1,
    },
    {
      type: "bubble",
      label: "bubble",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "#cc6060",
      borderColor: "rgba(75,192,192,1)",
      borderDash: [],
      borderDashOffset: 0.0,
      pointBorderColor: "#020c0c",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#8c1ca8",
      pointHoverBorderColor: "#291212",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 10, y: 20, r: 5 },
        { x: 100, y: 200, r: 5 },
        { x: 400, y: 250, r: 5 },
        { x: 700, y: 570, r: 20 },
      ],
    },
    {
      type: "bar",
      label: "Visitor",
      data: [200, 185, 590, 621, 250, 400, 95, 185, 590, 621, 250, 100],
      fill: false,
      backgroundColor: "#71B37C",
      borderColor: "#71B37C",
      hoverBackgroundColor: "#1a291c",
      hoverBorderColor: "#71B37C",
    },
  ],
  // },
};
