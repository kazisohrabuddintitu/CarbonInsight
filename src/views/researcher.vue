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
                <a href="#dataentry" class="hover:text-gray-300">Data entry</a>
                <a href="#graph" class="hover:text-gray-300">Graph</a>
                <a href="/" class="hover:text-gray-300">Logout</a>
              </div>
            </div>

            <!-- Responsive menu -->
            <div v-show="showMenu" class="md:hidden">           
              <a href="dataentry" class="block py-2 px-4 text-sm hover:bg-gray-700">Data entry</a>
              <a href="#graph" class="block py-2 px-4 text-sm hover:bg-gray-700">Graph</a>
              <a href="/" class="block py-2 px-4 text-sm hover:bg-gray-700">Logout</a>
            </div>
        </nav>
   
        <!-- Data Entry section -->
        <div class="bg-gray-100 px-10 pb-10 py-3 mx-2 mt-20 rounded-r-8 mb-10" id="dataentry">
          <h2 class="text-4xl font-semibold text-center">Data Entry</h2>
          <!-- Input for Pie Chart -->
          <div class="mt-4">
            <label for="pieChartInput" class="block">Pie Chart Data:</label>
            <div v-for="(input, index) in inputs" :key="index" class="flex space-x-4 mb-2">
              <input :id="'month' + index" :name="'month' + index" type="text" placeholder="Month" class="border-gray-300 border rounded-md p-2 w-1/2">
              <input :id="'value' + index" :name="'value' + index" type="text" placeholder="Value" class="border-gray-300 border rounded-md p-2 w-1/2">
            </div>
            <!-- Add more button -->
            <button @click="addInput" class="mt-2 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add More
            </button>
          </div>

          <!-- Input for Graph -->
          <div class="mt-4">
            <label for="pieChartInput" class="block">Graph Data:</label>
            <div v-for="(input, index) in inputs" :key="index" class="flex space-x-4 mb-2">
              <input :id="'month' + index" :name="'month' + index" type="text" placeholder="Month" class="border-gray-300 border rounded-md p-2 w-1/2">
              <input :id="'value' + index" :name="'value' + index" type="text" placeholder="Value" class="border-gray-300 border rounded-md p-2 w-1/2">
            </div>
            <!-- Add more button -->
            <button @click="addInput" class="mt-2 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add More
            </button>
          </div>

           <!-- Input for Bar Chart -->
           <div class="mt-4">
            <label for="pieChartInput" class="block">Bar Chart Data:</label>
            <div v-for="(input, index) in inputs" :key="index" class="flex space-x-4 mb-2">
              <input :id="'month' + index" :name="'month' + index" type="text" placeholder="Month" class="border-gray-300 border rounded-md p-2 w-1/2">
              <input :id="'value' + index" :name="'value' + index" type="text" placeholder="Value" class="border-gray-300 border rounded-md p-2 w-1/2">
            </div>
            <!-- Add more button -->
            <button @click="addInput" class="mt-2 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add More
            </button>
          </div>

          <!-- Button to Submit Data -->
          <div class="mt-4 ">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-32">Submit</button>
          </div>
        </div>

        <!-- Charts and Graphs section -->
        <div class="bg-gray-200 mx-2 rounded border-r-8" id="graph">
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
        </div>
        
        <!-- Footer section -->
        <div>
          <!-- Line above footer -->
          <hr class="border border-gray-300 my-3">
          <!-- About Us section (Footer) -->
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
    addInput() {
      this.inputs.push({ month: '', value: '' });
    },
  },
  data() {
    return {
      showMenu: false,
      inputs: [{ month: '', value: '' }]
    };
  },
  };
</script>