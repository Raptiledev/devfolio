<template>
    <div class="projects">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Projects</h2>
        <div class="project-list">
            <div v-for="project in projects" :key="project.name" class="project-card">
                <img :src="project.icon" :alt="project.name" class="project-icon text-gray" />
                <h3 class="text-xl font-semibold text-gray-700">{{ project.name }}</h3>
                <p class="text-gray-600">{{ project.description }}</p>
                <a :href="project.githubLink" target="_blank" class="github-link">GitHub Repository</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
    {
        name: "RealTime Chat App",
        githubLink: "https://github.com/yourusername/realtime-chat-app",
        description: "A real-time chat application built with modern web technologies.",
        icon: "/assets/chat-app-icon.png",
    },
    {
        name: "Human Resource Management System",
        githubLink: "https://github.com/yourusername/hr-management-system",
        description: "A system to manage HR tasks efficiently.",
        icon: "/assets/hrms-icon.png",
    },
    {
        name: "Inventory Management System",
        githubLink: "https://github.com/yourusername/inventory-management-system",
        description: "A tool to manage inventory and stock levels.",
        icon: "/assets/inventory-icon.png",
    },
    {
        name: "Exam Management System",
        githubLink: "https://github.com/yourusername/exam-management-system",
        description: "A system to manage exams and results.",
        icon: "/assets/exam-icon.png",
    },
];
</script>

<style scoped>
.projects {
    padding: 20px;
}

.project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.project-card {
    background-color: #D4DE95;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    width: 300px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
}

.github-link {
    display: inline-block;
    margin-top: 10px;
    color: #636B2F;
    text-decoration: none;
}

.github-link:hover {
    text-decoration: underline;
    color: #3D4127;
}
</style>
