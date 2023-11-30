
<template>
  
    <div class="bg-white min-h-screen">
        <!-- Title section -->
        <div class=" py-4 text-center">
          <h1 class="text-4xl font-bold">Title</h1>
        </div>
    
        <!-- Summary section -->
        <div class="bg-gray-100 h-60 p-6 m-10 flex flex-col md:flex-row items-center justify-center">
          <p class="text-lg text-center md:text-left">Summary of the website goes here</p>
        </div>

        <!-- Charts and Graphs section -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 m-10">
          <div class="p-2 bg-blue-200 h-40 md:h-80 lg:h-100">
            <h2 class="text-lg font-semibold">Pie Chart of all GHG</h2>
            <canvas ref="pieChartCanvas" class="md:p-5 pb-5"></canvas>
          </div>
          <div class="p-4 bg-green-200 h-40 md:h-80 lg:h-100">
            <h2 class="text-lg font-semibold">Graph of GHG emission over a period of time</h2>
            <canvas ref="lineGraphCanvas" class="md:pb-2 pb-5"></canvas>
          </div>
          <div class="p-4 bg-yellow-200 h-40 md:h-80 lg:h-100">
            <h2 class="text-lg font-semibold">Bar Chart of GHG emission by sectors</h2>
            <canvas ref="barChartCanvas" class="md:p-2 pb-5"></canvas>
          </div>
        </div>

        <!-- Calculator section -->
        <div class="grid md:grid-cols-3 m-10 mt-20 h-40 gap-4">
          <div class="hidden md:block"></div>
          <div class="hidden md:block"></div>
          <div class="bg-blue-200 p-4">
              Calculate your carbon footprint
          </div>
        </div>


        <!-- Line above footer -->
        <hr class="border-t border-gray-300 my-8">

        <!-- About Us section (Footer) -->
        <footer class="bg-white text-center pb-5">
          <h2 class="text-lg font-semibold">About Us</h2>
          <p>Information about the website or company in the footer.</p>
        </footer>
    </div>
  </template>

  
  <script>
  import Chart from 'chart.js/auto';


  export default {
    mounted() {
    const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'Example Pie Chart',
      data: [30, 40, 30],
      backgroundColor: ['red', 'blue', 'yellow'],
    }]
  };

  const lineGraphData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Example Line Graph',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'green',
    }]
  };

  const barChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Example Bar Chart',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange'],
    }]
  };
  this.renderChart('pieChartCanvas', 'pie', pieChartData);
  this.renderChart('lineGraphCanvas', 'line', lineGraphData);
  this.renderChart('barChartCanvas', 'bar', barChartData);
  },
  methods: {
    renderChart(canvasId, type, data) {
      const ctx = this.$refs[canvasId].getContext('2d');
      new Chart(ctx, {
        type: type,
        data: data,
      });
    },
  },
  };
  </script>
  
  
