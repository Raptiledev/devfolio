<template>
    <div class="bg-gray-100 skills-section py-12 px-6 lg:px-16">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">My Skills</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                v-for="skill in skills"
                :key="skill.name"
                class="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
                <div class="flex items-center space-x-4">
                    <div class="bg-blue-500 text-white rounded-full p-3">
                        <svg
                            v-if="skill.icon === 'code'"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 18l6-6m0 0l-6-6m6 6H8m-6 6l6-6m0 0L2 6m6 6h12"
                            />
                        </svg>
                        <svg
                            v-else-if="skill.icon === 'vuejs'"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 2L2 22h20L12 2z"
                            />
                        </svg>
                    </div>
                    <span class="text-lg font-semibold text-gray-700">{{ skill.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const skills = [
    { name: "ASP.NET Core", icon: "code" },
    { name: "Vue.js", icon: "vuejs" },
    { name: "SQL Procedures", icon: "code" },
    { name: "Database Design", icon: "code" },
];
</script>

<style scoped>
.bg-blue-500{
    background-color: #3D4127;
}
.skills-section {
    background-color: #D4DE95;
    color: #3D4127;
}
</style>
