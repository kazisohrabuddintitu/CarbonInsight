
<template>
    <div class="bg-white flex flex-col justify-between min-h-screen">
        <!-- Nav bar -->
        <nav class="bg-gray-800 text-white">
          <div class="flex justify-between items-center py-4 px-6 md:px-10">
            <h1 class="text-4xl font-bold">Carbon Insights</h1>
            <div class="md:hidden">
              <button
                @click="toggleMenu"
                class="text-white focus:outline-none focus:text-white"
              >
                <svg
                  class="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    v-if="!showMenu"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  />
                  <path
                    v-if="showMenu"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.293 7.293l1.414-1.414L12 12.586l6.293-6.293 1.414 1.414L13.414 14l5.293 5.293-1.414 1.414L12 15.414l-6.293 6.293-1.414-1.414L10.586 14 4.293 7.707 2.88 6.293 4.293 7.707z"
                  />
                </svg>
              </button>
            </div>
            <div class="hidden md:flex items-center space-x-4">
              <a href="#graph" class="hover:text-gray-300">Graph</a>
              <a href="#calculator" class="hover:text-gray-300">Calculate</a>
              <a href="/" class="hover:text-gray-300">Logout</a>
            </div>
          </div>

          <!-- Responsive menu -->
          <div v-show="showMenu" class="md:hidden">
            <a href="#graph" class="block py-2 px-4 text-sm hover:bg-gray-700">Graph</a>
            <a href="#calculator" class="block py-2 px-4 text-sm hover:bg-gray-700">Calculate</a>
            <a href="/" class="block py-2 px-4 text-sm hover:bg-gray-700">Logout</a>
          </div>
        </nav>
    
        <!-- Summary section -->
        <div class="bg-gray-100 h-60 p-6 m-10 flex flex-col md:flex-row items-center justify-center">
          <p class="text-lg text-center md:text-left">Summary of the website goes here</p>
        </div>

        <!-- Charts and Graphs section -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 m-10" id="graph">
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
        <div class="flex justify-center items-center md:justify-end md:items-end" id="calculator">
          <div class="w-60 h-40 m-10 content-end">
            <div class="bg-blue-200 p-4 text-center font-semibold">
              <h1>Calculate your carbon footprint</h1>
              <div class="pt-12">
                <button class="bg-white rounded p-1">
                  <a href="https://www.carbonfootprint.com/calculator.aspx">Calculate</a>
                </button>
              </div>
            </div>
          </div>
        </div>


        <!-- Footer section -->
        <div>
          <hr class="border border-gray-300 my-3">
          <footer class="bg-white text-center pb-2">
            <h2 class="text-lg font-semibold">About Us</h2>
            <p>Information about the website in the footer.</p>
          </footer>
        </div>

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
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
  }
  </script>
  
  
