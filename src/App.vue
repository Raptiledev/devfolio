<template>
  <div class="app-container">
    <Navbar @navigate="scrollToSection" />
    <ProfileComp />
    <section ref="aboutSection" id="about">
      <AboutComp />
    </section>
    <section ref="skillsSection" id="skills">
      <SkillsComp />
    </section>
    <!-- <section ref="experienceSection" id="experience">
      <ExperienceComp />
    </section> -->
    <section ref="projectsSection" id="projects">
      <ProjectsComp />
    </section>
    <section ref="contactSection" id="contact">
      <ContactComp />
    </section>
  </div>
</template>

<script setup>
import Navbar from "./components/NavbarComp.vue";
import AboutComp from "./components/AboutComp.vue";
import SkillsComp from "./components/SkillsComp.vue";
import ProjectsComp from "./components/ProjectsComp.vue";
import ContactComp from "./components/ContactComp.vue";
import { ref } from 'vue';
import ProfileComp from "./components/ProfileComp.vue";

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
</script>

<style scoped>
.app-container {
  background-color: #222831;
  color: #DFD0B8;
  font-family: Arial, sans-serif;
  min-height: 100vh;
}

section {
  padding: 4rem 2rem;
  border-bottom: 1px solid #393E46;
}

@media (max-width: 768px) {
  section {
    padding: 3rem 1.5rem;
  }
}
</style>