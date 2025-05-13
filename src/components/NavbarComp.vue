<template>
  <header class="bg-primary p-4 text-light shadow-md fixed w-full top-0 z-50">
    <nav class="flex items-center justify-between max-w-6xl mx-auto">
      <div class="text-2xl font-bold text-light">
        <a href="/" class="name-animation">
          <span
            v-for="(letter, index) in 'John Doe'"
            :key="index"
            class="inline-block hover-letter"
          >
            {{ letter }}
          </span>
        </a>
      </div>
      <ul class="flex space-x-6">
        <li v-for="item in menuItems" :key="item" class="relative nav-item">
          <a :href="`#${item.toLowerCase()}`" class="hover-circle">{{ item }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const menuItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
</script>

<style scoped>
.bg-primary {
  background-color: #222831;
}

.text-light {
  color: #dfd0b8;
}

/* Name animation */
.hover-letter {
  transition: transform 0.3s ease;
  display: inline-block;
  padding: 0 1px;
}

.name-animation:hover .hover-letter {
  transform: translateY(-2px);
}

.name-animation:hover .hover-letter:nth-child(odd) {
  transform: translateY(2px);
}

/* Nav items hover effect */
.nav-item {
  position: relative;
}

.hover-circle::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  background-color: rgba(148, 137, 121, 0.2);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  z-index: -1;
}

.hover-circle:hover::before {
  width: 35px;
  height: 35px;
}

/* Link hover color */
.hover-circle {
  position: relative;
  transition: color 0.3s ease;
}

.hover-circle:hover {
  color: #948979;
}

/* Animation for letters spreading */
@keyframes spread {
  0% {
    letter-spacing: normal;
  }
  50% {
    letter-spacing: 3px;
  }
  100% {
    letter-spacing: normal;
  }
}

.name-animation:hover {
  animation: spread 1s ease infinite;
}
</style>
