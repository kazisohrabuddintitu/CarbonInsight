<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div v-if="!authenticated" class="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label for="userId" class="block mb-1 font-medium">User ID</label>
            <input
              type="text"
              id="userId"
              v-model="userId"
              placeholder="Enter your user ID"
              class="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div>
            <label for="password" class="block mb-1 font-medium">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              class="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div>
            <label for="userType" class="block mb-1 font-medium">User Type</label>
            <select
              id="userType"
              v-model="userType"
              class="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-400"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="researcher">Researcher</option>
            </select>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition duration-300">Login</button>
        </form>
        <div v-if="error" class="mt-4 text-red-500 text-center">{{ error }}</div>
        <div class="mt-4 flex justify-between items-center">
          <div>
            <p class="text-blue-500 hover:underline"><router-link to=''>Forgot Password?</router-link></p>
          </div>
          <div>
            <p>Don't have an account?</p>
            <p class="text-blue-500 hover:underline"><router-link to='' >Sign Up</router-link></p>
          </div>
        </div>
      </div>
      <router-link v-else to="/home"></router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userId: '',
        password: '',
        userType: 'user',
        authenticated: false,
        error: ''
      };
    },
    
    methods: {
        
      login() {
        if (this.userId === 'user' && this.password === 'user' && this.userType === 'user' ) {
          this.authenticated = true;
          this.$router.push('/home');
        } 
        else if (this.userId === 'admin' && this.password === 'admin' && this.userType === 'admin' ) {
          this.authenticated = true;
          this.$router.push('/admin');
        }
        else if (this.userId === 'researcher' && this.password === 'researcher' && this.userType === 'researcher' ) {
          this.authenticated = true;
          this.$router.push('/researcher');
        }
        else {
          this.error = 'Invalid credentials. Please try again.';
        }
      }
      
    } 
  };
  </script>
  
  