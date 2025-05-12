<template>
    <div class="skills-section py-12 px-6 lg:px-16">
        <h2 class="text-4xl font-medium text-center mb-16">Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <!-- UX/UI Design -->
            <div class="flex flex-col items-center text-center">
                <svg class="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z" fill="currentColor"/>
                </svg>
                <h3 class="text-xl font-medium mb-4">UX/UI Design</h3>
                <p class="text-gray-600">Figma, Illustrator, XD, Photoshop, Gimp</p>
            </div>

            <!-- Language -->
            <div class="flex flex-col items-center text-center">
                <svg class="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3L3 8l3 3-3 3 5 5 3-3 3 3 5-5-3-3 3-3-5-5-3 3-3-3z" fill="currentColor"/>
                </svg>
                <h3 class="text-xl font-medium mb-4">Language</h3>
                <p class="text-gray-600">Python, Javascript, TypeScript, Java, C#</p>
            </div>

            <!-- Front-end -->
            <div class="flex flex-col items-center text-center">
                <svg class="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" fill="currentColor"/>
                </svg>
                <h3 class="text-xl font-medium mb-4">Front-end</h3>
                <p class="text-gray-600">HTML5, CSS3, Bootstrap3, Es6</p>
            </div>

            <!-- Web Technologies -->
            <div class="flex flex-col items-center text-center mt-8 md:mt-0 lg:col-start-2">
                <svg class="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
                </svg>
                <h3 class="text-xl font-medium mb-4">Web Technologies</h3>
                <p class="text-gray-600">Vue, React, Node</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// No need for skills array as we're using static content
</script>

<style scoped>
.skills-section {
  background-color: #D4DE95;
    color: #3D4127;
}

svg {
    color: #3D4127;
}
</style>
