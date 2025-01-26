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
    <div>
      <h2>Admin Statistics Page</h2>
      <div className="chart-container">
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
