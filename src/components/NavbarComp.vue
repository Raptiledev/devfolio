<template>
  <header class="bg-primary p-4 text-light shadow-md fixed w-full top-0 z-50">
    <nav class="flex items-center justify-between max-w-6xl mx-auto">
      <div  class="text-2xl font-bold text-light">
       <a href="/">John Doe</a> 
      </div>
      <ul class="flex space-x-6">
         <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Navbar Component
</script>

<style scoped>
.bg-primary {
  background-color: #222831;
}
.text-light {
  color: #DFD0B8;
}
.hover\:text-accent:hover {
  color: #948979;
}
</style>
