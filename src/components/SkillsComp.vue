<template>
  <div class="skills-section py-12 px-6 lg:px-16">
    <h2 class="text-4xl font-medium text-center mb-16 fade-in">Skills</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      <!-- UX/UI Design -->
      <div
        class="flex flex-col items-center text-center fade-in"
        v-observe-visibility="onVisibilityChange"
      >
        <svg
          class="w-16 h-16 mb-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z"
            fill="currentColor"
          />
        </svg>
        <h3 class="text-xl font-medium mb-4">UX/UI Design</h3>
        <p class="text-gray-600">Figma, Illustrator, XD, Photoshop, Gimp</p>
      </div>

      <!-- Language -->
      <div
        class="flex flex-col items-center text-center fade-in"
        v-observe-visibility="onVisibilityChange"
      >
        <svg
          class="w-16 h-16 mb-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 3L3 8l3 3-3 3 5 5 3-3 3 3 5-5-3-3 3-3-5-5-3 3-3-3z" fill="currentColor" />
        </svg>
        <h3 class="text-xl font-medium mb-4">Language</h3>
        <p class="text-gray-600">Python, Javascript, TypeScript, Java, C#</p>
      </div>

      <!-- Front-end -->
      <div
        class="flex flex-col items-center text-center fade-in"
        v-observe-visibility="onVisibilityChange"
      >
        <svg
          class="w-16 h-16 mb-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"
            fill="currentColor"
          />
        </svg>
        <h3 class="text-xl font-medium mb-4">Front-end</h3>
        <p class="text-gray-600">HTML5, CSS3, Bootstrap3, Es6</p>
      </div>

      <!-- Web Technologies -->
      <div
        class="flex flex-col items-center text-center mt-8 md:mt-0 lg:col-start-2 fade-in"
        v-observe-visibility="onVisibilityChange"
      >
        <svg
          class="w-16 h-16 mb-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"
            fill="currentColor"
          />
        </svg>
        <h3 class="text-xl font-medium mb-4">Web Technologies</h3>
        <p class="text-gray-600">Vue, React, Node</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const onVisibilityChange = (isVisible, entry) => {
  if (isVisible) {
    entry.target.classList.add('visible')
  } else {
    entry.target.classList.remove('visible')
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px',
    },
  )

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.skills-section {
  background-color: #d4de95;
  color: #3d4127;
}

svg {
  color: #3d4127;
}

/* Fade animation */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Add cascade effect for skills */
.fade-in:nth-child(1) {
  transition-delay: 0.1s;
}
.fade-in:nth-child(2) {
  transition-delay: 0.2s;
}
.fade-in:nth-child(3) {
  transition-delay: 0.3s;
}
.fade-in:nth-child(4) {
  transition-delay: 0.4s;
}
</style>
