<template>
  <section id="about" class="about-section py-12 px-6 lg:px-16">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="text-center">
            <span class="title text-center pgray">About Me.</span>
        </div>
      <!-- Education -->
      <div class="education">
        <h2 class="text-4xl font-bold text-primary mb-8">Education</h2>
        <div class="timeline">
          <div class="timeline-item mb-8">
            <div class="timeline-dot bg-secondary"></div>
            <div class="timeline-content">
              <h3 class="text-2xl font-semibold">KFS University, Kafr Elsheikh</h3>
              <p class="text-lg text-gray-700 mb-2">Bachelor in Software Engineering (3.1/4.0)</p>
              <p class="text-gray-500">Sep, 2018 - Present</p>
              <div class="skills mt-4 flex flex-wrap gap-2">
                <span class="skill-chip">Software Engineering</span>
                <span class="skill-chip">Web Programming</span>
                <span class="skill-chip">UI/UX Design</span>
                <span class="skill-chip">Front-end Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experiences -->
      <div class="experiences">
        <h2 class="text-4xl font-bold text-primary mb-8">Experiences</h2>
        <div class="timeline">
          <div class="timeline-item mb-8">
            <div class="timeline-dot bg-secondary"></div>
            <div class="timeline-content">
              <h3 class="text-2xl font-semibold">ITI, Kafr ElSheikh, Egypt</h3>
              <p class="text-lg text-gray-700 mb-2">VueJS Web Developer</p>
              <p class="text-gray-500">Sep, 2021 - Sep, 2022</p>
              <div class="skills mt-4 flex flex-wrap gap-2">
                <span class="skill-chip">HTML5</span>
                <span class="skill-chip">CSS3</span>
                <span class="skill-chip">JavaScript</span>
                <span class="skill-chip">VueJS</span>
              </div>
            </div>
          </div>
          <div class="timeline-item mb-8">
            <div class="timeline-dot bg-secondary"></div>
            <div class="timeline-content">
              <h3 class="text-2xl font-semibold">Freelancer, Egypt</h3>
              <p class="text-lg text-gray-700 mb-2">Junior UI/UX Designer</p>
              <p class="text-gray-500">Jun, 2021 - Sep, 2021</p>
              <div class="skills mt-4 flex flex-wrap gap-2">
                <span class="skill-chip">Figma</span>
                <span class="skill-chip">Adobe XD</span>
                <span class="skill-chip">Photoshop</span>
                <span class="skill-chip">Illustrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: #D4DE95;
  color: #3D4127;
}

.timeline {
  position: relative;
}

.timeline-item {
  position: relative;
  padding-left: 2.5rem;
}

.timeline-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0.25rem;
  background-color: #636B2F;
}

.timeline-content {
  padding-left: 2rem;
  border-left: 2px solid #636B2F;
}

.skill-chip {
  background-color: #BAC095;
  color: #3D4127;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
</style>

