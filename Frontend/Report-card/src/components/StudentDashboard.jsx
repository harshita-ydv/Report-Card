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
  const [chartThreeData, setChartThreeData] = useState([]);
  const [chartFourData, setChartFourData] = useState([40, 35, 25]);

  useEffect(() => {
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

    const fetchGenderData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students-count');
        const { maleCount, femaleCount } = response.data;

        setChartTwoData([maleCount, femaleCount]);
      } catch (error) {
        console.error('Error fetching gender data:', error);
      }
    };

    const fetchCategoryData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/student-counts');
        const data = response.data;

        const categories = Object.keys(data);
        const counts = Object.values(data);

        setChartThreeData({ labels: categories, counts });
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

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
              'rgba(0, 51, 102, 0.5)',
              'rgba(0, 76, 153, 0.5)',
              'rgba(0, 102, 204, 0.5)',
              'rgba(0, 127, 255, 0.5)',
              'rgba(51, 153, 255, 0.5)',
              'rgba(102, 178, 255, 0.5)',
            ],
            borderColor: [
              'rgba(0, 51, 102, 1)',
              'rgba(0, 76, 153, 1)',
              'rgba(0, 102, 204, 1)',
              'rgba(0, 127, 255, 1)',
              'rgba(51, 153, 255, 1)',
              'rgba(102, 178, 255, 1)',
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

    createChart(
      totalStudentsRef,
      totalStudentsChartInstance,
      ['Level 1A', 'Level 1B', 'Level 1C', 'Level 2A', 'Level 2B', 'Level 2C'],
      passCounts,
      'Students Passed -'
    );

    const totalStudents = chartTwoData.reduce((a, b) => a + b, 0);
    createChart(
      chartTwoRef,
      chartTwoInstance,
      ['Male', 'Female'],
      chartTwoData,
      `Total Student (${totalStudents})`
    );

    if (chartThreeData.labels && chartThreeData.counts) {
      createChart(
        chartThreeRef,
        chartThreeInstance,
        chartThreeData.labels,
        chartThreeData.counts,
        'Student Categories',
        'bar'
      );
    }

    createChart(
      chartFourRef,
      chartFourInstance,
      ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
      chartFourData,
      'Students by Year',
      'pie'
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
    <div className='mt-8'>
      <h1 className="text-3xl text-center mb-8 font-extrabold text-blue-900">Welcome Teacher Dashboard</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <div>
          <h2 className="text-center mb-4">Total Students Chart</h2>
          <canvas ref={totalStudentsRef} width="400" height="400"></canvas>
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
