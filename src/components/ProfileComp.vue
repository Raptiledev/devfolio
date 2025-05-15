<template>
  <div class="profile-comp p-5 mt-2">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
      <!-- Image Section -->
      <div class="md:w-1/2">
        <!-- Changed from md:w-2/3 to md:w-1/2 -->
        <img
          src="../assets/img1.png"
          alt="Profile Image"
          class="rounded-lg shadow-lg w-full max-w-sm mx-auto"
        />
      </div>

      <!-- Text Content Section -->
      <div class="md:w-2/3 text-left">
        <h1 class="text-4xl font-bold mb-4">Welcome to my portfolio!</h1>
        <p class="text-lg mb-4">
          Hey there, I'm a software engineer about to graduate from the computer and information
          technology department. A UI/UX Designer with 2+ years experience familiar with Figma, XD,
          Photoshop, Illustrator, and a Frontend Engineer with 4+ years experience with React,
          Vue.js.
        </p>

        <!-- Social Links -->
        <div class="flex gap-4 mt-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            class="p-2 border rounded-lg hover:bg-green-100 transition-colors"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            class="p-2 border rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://behance.com"
            target="_blank"
            class="p-2 border rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i class="fab fa-behance"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
// No need for scroll handling if we're not doing animations
</script>

<style scoped>
.profile-comp {
  background-color: #d4de95;
  border: 1px solid #bac095;
  border-radius: 12px;
  color: #3d4127;
}
img {
  max-width: 300px; /* Or any specific size you prefer */
  height: auto;
  width: 100%;
}
</style>
