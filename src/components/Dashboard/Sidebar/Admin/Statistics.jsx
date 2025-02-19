import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import ApexCharts from "react-apexcharts";

const Statistics = () => {
  const axiosSecure = useAxiosSecure();
  const [barChartData, setBarChartData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get("/adminStatistic")
      .then((response) => {
        setBarChartData(response.data.bookingByDate); // Correct key here
        setLineChartData(response.data.bookVsDelivered); // Correct key here
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching statistics", error);
        setLoading(false);
      });
  }, []);

  const barChartOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, // Hide the toolbar in dark mode
      },
    },
    xaxis: {
      categories: barChartData?.map((data) => data._id), // Date (_id from bookingByDate)
    },
    yaxis: {
      title: {
        text: "Bookings Count",
      },
    },
    title: {
      text: "Bookings by Date",
      align: "center",
      style: {
        fontSize: "18px",
        color: "#4a4a4a", // Text color
      },
    },
    theme: {
      mode: "light", // Will use the theme switch logic
    },
  };

  const barChartSeries = [
    {
      name: "Bookings",
      data: barChartData?.map((data) => data.count), // Count from bookingByDate
    },
  ];

  // Prepare the data for the line chart (Booked vs Delivered)
  const lineChartOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: lineChartData?.map((data) => data._id), // Date
    },
    yaxis: {
      title: {
        text: "Parcel Count",
      },
    },
    title: {
      text: "Booked vs Delivered Parcels",
      align: "center",
      style: {
        fontSize: "18px",
        color: "#4a4a4a",
      },
    },
    theme: {
      mode: "light", // Switch to dark mode when toggled
    },
  };

  const lineChartSeries = [
    {
      name: "Booked Parcels",
      data: lineChartData?.map((data) => data.booked),
    },
    {
      name: "Delivered Parcels",
      data: lineChartData?.map((data) => data.delivered),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-10 w-11/12 mx-auto dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-semibold text-center dark:text-white mb-8">
        Admin Statistics Page
      </h2>

      <div className="chart-container mb-8">
        <ApexCharts
          options={barChartOptions}
          series={barChartSeries}
          type="bar"
          height={350}
        />
      </div>

      <div className="chart-container">
        <ApexCharts
          options={lineChartOptions}
          series={lineChartSeries}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default Statistics;
