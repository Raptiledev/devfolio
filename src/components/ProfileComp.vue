<template>
    <div class="profile-comp flex flex-col items-center p-5">
        <div v-if="isVisible" class="images-section flex flex-wrap justify-center gap-4 opacity-0 transition-opacity duration-1000" v-scroll-fade>
            <div v-for="n in 6" :key="n" class="image-column">
                <img :src="`https://via.placeholder.com/150?text=Image+${n}`" alt="Placeholder Image" class="w-36 h-36 object-cover" />
            </div>
        </div>
        <div v-if="isVisible" class="text-section text-center mt-5 opacity-0 transition-opacity duration-1000" v-scroll-fade>
            <h1 class="text-3xl font-bold mb-4">Welcome to my portfolio</h1>
            <p class="mb-2">I am a passionate software engineer.</p>
            <p class="mb-2">I specialize in building scalable web applications.</p>
            <p class="mb-2">With expertise in Vue.js and modern JavaScript frameworks.</p>
            <p class="mb-4">Let's connect and build something amazing together!</p>
            <div class="social-links flex justify-center space-x-4 mt-4">
                <a href="https://linkedin.com" target="_blank" class="text-blue-600 hover:underline flex items-center">
                    <i class="fab fa-linkedin mr-2"></i> LinkedIn
                </a>
                <a href="https://medium.com" target="_blank" class="text-gray-600 hover:underline flex items-center">
                    <i class="fab fa-medium mr-2"></i> Medium
                </a>
                <a href="https://github.com" target="_blank" class="text-black hover:underline flex items-center">
                    <i class="fab fa-github mr-2"></i> GitHub
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const componentPosition = document.querySelector('.profile-comp').offsetTop;
    if (scrollPosition > componentPosition) {
        isVisible.value = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
[v-scroll-fade] {
    opacity: 1 !important;
}
</style>
