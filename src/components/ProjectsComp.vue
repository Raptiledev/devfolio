<template>
  <div class="projects">
    <h2 class="text-3xl font-bold text-center text-white-800 mb-6">Projects</h2>
    <div class="project-list">
      <div v-for="project in projects" :key="project.name" class="project-card">
        <img :src="project.icon" :alt="project.name" class="project-icon" />
        <h3 class="text-xl font-semibold text-gray-700">{{ project.name }}</h3>
        <p class="text-gray-600">{{ project.description }}</p>
        <a :href="project.githubLink" target="_blank" class="github-link">GitHub Repository</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import chatIcon from '@/assets/chat-app-icon.png'
import peopleIcon from '@/assets/people.png'
import inventoryIcon from '@/assets/inventory-icon.png'
import examIcon from '@/assets/exam-icon.png'

const projects = [
  {
    name: 'BaatCheet - Real-time Chat Application',
    githubLink: 'https://github.com/Raptiledev/BaatCheet.git',
    description: 'A real-time chat application built with modern web technologies.',
    icon: chatIcon, // Use the imported image
  },
  {
    name: 'Human Resource Management System',
    githubLink: 'https://github.com/Raptiledev/HRMS.git',
    description: 'A system to manage HR tasks efficiently.',
    icon: peopleIcon,
  },
  {
    name: 'Inventory Management System',
    githubLink: 'https://github.com/Raptiledev/Nexship.git',
    description: 'A tool to manage inventory and stock levels.',
    icon: inventoryIcon,
  },
  {
    name: 'Exam Management System',
    githubLink: 'https://github.com/yourusername/exam-management-system',
    description: 'A system to manage exams and results.',
    icon: examIcon,
  },
]
</script>

<style scoped>
.projects {
  padding: 20px;
  border-radius: 12px;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.project-card {
  background-color: #d4de95;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px; /* Increased padding */
  width: 300px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-icon {
  width: 120px; /* Increased from 80px */
  height: 120px; /* Increased from 80px */
  margin: 0 auto 20px; /* Increased bottom margin */
  object-fit: contain; /* Maintain aspect ratio */
  border-radius: 12px; /* Optional: adds rounded corners */
  padding: 10px; /* Add some padding around the icon */
}

.github-link {
  display: inline-block;
  margin-top: 10px;
  color: #636b2f;
  text-decoration: none;
}

.github-link:hover {
  text-decoration: underline;
  color: #3d4127;
}
</style>
