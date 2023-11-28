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

    
        <!-- Three boxes section -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 m-10">
          <div class="p-4 bg-blue-200 h-40">
            <h2 class="text-lg font-semibold">Box 1</h2>
            <p>Description or content related to Box 1</p>
          </div>
          <div class="p-4 bg-green-200 h-40">
            <h2 class="text-lg font-semibold">Box 2</h2>
            <p>Description or content related to Box 2</p>
          </div>
          <div class="p-4 bg-yellow-200 h-40">
            <h2 class="text-lg font-semibold">Box 3</h2>
            <p>Description or content related to Box 3</p>
          </div>
        </div>




        <div class="grid md:grid-cols-3 m-10 mt-20 h-40 gap-4">
          <div class="hidden md:block"></div>
          <div class="hidden md:block"></div>
          <div class="bg-blue-200 p-4">
              This box stays right on larger screens and centers on mobile
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
  export default {
};
  </script>
  
  
