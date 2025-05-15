<template>
  <section id="about" class="about-section py-12 px-6 lg:px-16">
    <h2 class="text-4xl font-medium text-center mb-16">About Me</h2>

    <!-- Tabs Navigation -->
    <div class="tabs-nav mb-8 flex justify-center gap-4">
      <button
        @click="activeTab = 'education'"
        :class="['tab-btn', { active: activeTab === 'education' }]"
      >
        Education
      </button>
      <button
        @click="activeTab = 'experience'"
        :class="['tab-btn', { active: activeTab === 'experience' }]"
      >
        Experience
      </button>
    </div>

    <!-- Tab Content -->
    <div class="container mx-auto max-w-4xl">
      <transition name="fade" mode="out-in">
        <div :key="activeTab">
          <!-- Education Tab -->
          <div v-if="activeTab === 'education'" class="education">
            <h3 class="text-2xl font-medium mb-8">education</h3>
            <div class="timeline">
              <div class="timeline-item" v-observe-visibility="onVisibilityChange">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h4 class="text-xl font-medium">KFS University, Kafr Elsheikh</h4>
                  <p class="text-gray-600 mb-2">bachelor in software engineering (3.1/4.0)</p>
                  <p class="text-gray-500 mb-4">sep, 2018 - present</p>
                  <div class="skills-grid">
                    <span class="skill-tag">Software Engineering</span>
                    <span class="skill-tag">web programming</span>
                    <span class="skill-tag">UI/UX design</span>
                    <span class="skill-tag">Front-end developing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience Tab -->
          <div v-if="activeTab === 'experience'" class="experiences">
            <h3 class="text-2xl font-medium mb-8">experiences</h3>
            <div class="timeline">
              <div
                v-for="(_, index) in 3"
                :key="index"
                class="timeline-item mb-12"
                v-observe-visibility="onVisibilityChange"
              >
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h4 class="text-xl font-medium">ITI, Kafr elSheikh, Egypt</h4>
                  <p class="font-medium">VueJS web developer</p>
                  <p class="text-gray-500 mb-4">1,sep, 2021 - 28,sep, 2021</p>
                  <div class="skills-grid">
                    <span class="skill-tag">HTML5</span>
                    <span class="skill-tag">CSS3</span>
                    <span class="skill-tag">Bootstrap</span>
                    <span class="skill-tag">JQuery</span>
                    <span class="skill-tag">Json</span>
                    <span class="skill-tag">JavaScript</span>
                    <span class="skill-tag">TypeSript</span>
                    <span class="skill-tag">es6</span>
                    <span class="skill-tag">VueJS</span>
                  </div>
                </div>
              </div>

              <div class="timeline-item mb-12">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h4 class="text-xl font-medium">Udacity, Egypt</h4>
                  <p class="font-medium">React Web Developer</p>
                  <p class="text-gray-500 mb-4">Jun 2021 - Jan 2022</p>
                  <div class="skills-grid">
                    <span class="skill-tag">Javascript</span>
                    <span class="skill-tag">Typescript</span>
                    <span class="skill-tag">ReactJS</span>
                    <span class="skill-tag">React-Redux</span>
                    <span class="skill-tag">webpack</span>
                    <span class="skill-tag">NLP</span>
                  </div>
                </div>
              </div>

              <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h4 class="text-xl font-medium">Freelancer, Egypt</h4>
                  <p class="font-medium">Junior UI/UX Designer</p>
                  <p class="text-gray-500">Jun, 2021 - Sep, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('education')
</script>

<style scoped>
.about-section {
  background-color: #d4de95;
  color: #3d4127;
  border-radius: 12px;
}

.timeline {
  position: relative;
}

.timeline-item {
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid #bac095;
  opacity: 0;
  transform: translateX(20px);
  animation: slideIn 0.5s ease forwards;
  animation-delay: calc(var(--index, 0) * 0.1s);
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-marker {
  width: 1rem;
  height: 1rem;
  background-color: #bac095;
  border-radius: 50%;
  position: absolute;
  left: -0.5rem;
  top: 0.25rem;
}

.timeline-content {
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.skill-tag {
  background-color: #e8e6f0;
  color: #3d4127;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

/* Fade transition for tab content */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Timeline items cascade effect */
.timeline-item:nth-child(1) {
  --index: 1;
}
.timeline-item:nth-child(2) {
  --index: 2;
}
.timeline-item:nth-child(3) {
  --index: 3;
}

/* Tab Styles */
.tabs-nav {
  border-bottom: 2px solid #bac095;
  margin-bottom: 2rem;
}

.tab-btn {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #3d4127;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tab-btn:hover {
  color: #000;
}

.tab-btn.active {
  color: #000;
  border-bottom-color: #3d4127;
}

/* Container width adjustment */
.container {
  max-width: 800px;
}
</style>
