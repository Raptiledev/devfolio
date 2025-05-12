<template>
  <section id="about" class="about-section py-12 px-6 lg:px-16">
    <h2 class="text-4xl font-medium text-center mb-16">About Me</h2>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <!-- Education -->
      <div class="education">
        <h3 class="text-2xl font-medium mb-8">education</h3>
        <div class="timeline">
          <div class="timeline-item">
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

      <!-- Experiences -->
      <div class="experiences">
        <h3 class="text-2xl font-medium mb-8">experiences</h3>
        <div class="timeline">
          <div class="timeline-item mb-12">
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
  padding-left: 1.5rem;
  border-left: 2px solid #BAC095;
}

.timeline-marker {
  width: 1rem;
  height: 1rem;
  background-color: #BAC095;
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
  background-color: #E8E6F0;
  color: #3D4127;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}
</style>

