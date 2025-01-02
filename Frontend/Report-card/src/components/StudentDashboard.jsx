import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

// Register Chart.js components and plugins
Chart.register(...registerables);

const StudentDashboard = () => {
  const totalStudentsRef = useRef(null);
  const chartTwoRef = useRef(null);
  const chartThreeRef = useRef(null);
  const chartFourRef = useRef(null);

  const totalStudentsChartInstance = useRef(null);
  const chartTwoInstance = useRef(null);
  const chartThreeInstance = useRef(null);
  const chartFourInstance = useRef(null);

  const [passCounts, setPassCounts] = useState([]);
  const [chartTwoData, setChartTwoData] = useState([]);
  const [chartThreeData, setChartThreeData] = useState([]); // Updated state for Chart Three
  const [chartFourData, setChartFourData] = useState([40, 35, 25]); // Default data for the 4th chart (can be updated)

  useEffect(() => {
    // Fetch data for all levels
    const fetchStudentData = async () => {
      try {
        const endpoints = [
          '1apassed-students',
          '1bpassed-students',
          '1cpassed-students',
          '2apassed-students',
          '2bpassed-students',
          '2cpassed-students',
        ];

        const responses = await Promise.all(
          endpoints.map((endpoint) =>
            axios.get(`http://localhost:5000/api/${endpoint}`)
          )
        );

        const counts = responses.map((response) => response.data.count);
        setPassCounts(counts);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    // Fetch student gender data for Chart Two
    const fetchGenderData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students-count');
        const { maleCount, femaleCount } = response.data;

        setChartTwoData([maleCount, femaleCount]);
      } catch (error) {
        console.error('Error fetching gender data:', error);
      }
    };

    // Fetch student category data for Chart Three
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/student-counts');
        const data = response.data;

        // Update chartThreeData with category counts
        const categories = Object.keys(data);
        const counts = Object.values(data);

        setChartThreeData({ labels: categories, counts });
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    // Fetch student counts by year for Chart Four (integrate this into the fourth chart)
    const fetchStudentCountsByYear = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/student-counts-by-year');
        const { 1: year1Count, 2: year2Count, 3: year3Count, 4: year4Count } = response.data;

        setChartFourData([year1Count, year2Count, year3Count, year4Count]);
      } catch (error) {
        console.error('Error fetching student counts by year:', error);
      }
    };

    fetchStudentData();
    fetchGenderData();
    fetchCategoryData();
    fetchStudentCountsByYear();
  }, []);

  useEffect(() => {
    const createChart = (ref, instance, labels, data, title, type = 'doughnut') => {
      if (instance.current) {
        instance.current.destroy();
      }

      const chartData = {
        labels,
        datasets: [
          {
            label: title,
            data,
            backgroundColor: [
              'rgba(0, 51, 102, 0.5)',  // Dark blue
              'rgba(0, 76, 153, 0.5)',  // Slightly lighter dark blue
              'rgba(0, 102, 204, 0.5)', // Medium dark blue
              'rgba(0, 127, 255, 0.5)', // Light dark blue
              'rgba(51, 153, 255, 0.5)', // Lightest dark blue
              'rgba(102, 178, 255, 0.5)' // Very light dark blue
            ],
            borderColor: [
              'rgba(0, 51, 102, 1)',  // Dark blue
              'rgba(0, 76, 153, 1)',  // Slightly lighter dark blue
              'rgba(0, 102, 204, 1)', // Medium dark blue
              'rgba(0, 127, 255, 1)', // Light dark blue
              'rgba(51, 153, 255, 1)', // Lightest dark blue
              'rgba(102, 178, 255, 1)' // Very light dark blue
            ],
            borderWidth: 1,
          },
        ],
      };
      

      const chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: title,
          },
        },
      };

      const ctx = ref.current.getContext('2d');
      instance.current = new Chart(ctx, {
        type: type,
        data: chartData,
        options: chartOptions,
      });
    };

    // Create the first chart
    createChart(
      totalStudentsRef,
      totalStudentsChartInstance,
      ['Level 1A', 'Level 1B', 'Level 1C', 'Level 2A', 'Level 2B', 'Level 2C'],
      passCounts,
      'Students Passed -'
    );

    // Create the second chart (Gender distribution)
    const totalStudents = chartTwoData.reduce((a, b) => a + b, 0);
    createChart(
      chartTwoRef,
      chartTwoInstance,
      ['Male', 'Female'],
      chartTwoData,
      `Total Student (${totalStudents})`
    );

    // Create the third chart (Student Categories - Bar Chart)
    if (chartThreeData.labels && chartThreeData.counts) {
      createChart(
        chartThreeRef,
        chartThreeInstance,
        chartThreeData.labels,
        chartThreeData.counts,
        'Student Categories',
        'bar'  // Change the chart type to 'bar'
      );
    }

    // Create the fourth chart (Counts by Year)
    createChart(
      chartFourRef,
      chartFourInstance,
      ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
      chartFourData,
      'Students by Year',
      'pie' // Pie chart for Year data
    );

    return () => {
      if (totalStudentsChartInstance.current) {
        totalStudentsChartInstance.current.destroy();
      }
      if (chartTwoInstance.current) {
        chartTwoInstance.current.destroy();
      }
      if (chartThreeInstance.current) {
        chartThreeInstance.current.destroy();
      }
      if (chartFourInstance.current) {
        chartFourInstance.current.destroy();
      }
    };
  }, [passCounts, chartTwoData, chartThreeData, chartFourData]);

  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div>
        <h2 className="text-center mb-4">Total Students Chart</h2>
        <canvas ref={totalStudentsRef} width="400" height="40"></canvas>
      </div>

      <div>
        <h2 className="text-center mb-4">Gender Distribution</h2>
        <canvas ref={chartTwoRef} width="400" height="400"></canvas>
      </div>

      <div>
        <h2 className="text-center mb-4">Student Categories</h2>
        <canvas ref={chartThreeRef} width="400" height="400"></canvas>
      </div>

      <div>
        <h2 className="text-center mb-4">Students by Year</h2>
        <canvas ref={chartFourRef} width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default StudentDashboard;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StudentPassCount = () => {
//   const [passCount, setPassCount] = useState(0);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/passed-students')
//       .then((response) => {
//         setPassCount(response.data.count);
//       })
//       .catch((error) => {
//         console.error('Error fetching pass count:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Students Passed in Level 1A</h2>
//       <p>{passCount} students have passed in Level 1A.</p>
//     </div>
//   );
// };

// export default StudentPassCount;
