<template>
    <h2 class="text-4xl font-medium text-center text-white-700 mb-8">Contact</h2>
    <div class="contact-comp max-w-2xl mx-auto p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="form-group relative">
                <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    placeholder="name"
                    class="w-full p-4 bg-[#E8E6F0] rounded-lg focus:outline-none"
                    required 
                />
                <span class="text-red-500 absolute -top-1 left 2">*</span>
            </div>
            <div class="form-group">
                <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    placeholder="email"
                    class="w-full p-4 bg-[#E8E6F0] rounded-lg focus:outline-none"
                    required 
                />
            </div>
            <div class="form-group">
                <textarea 
                    id="message" 
                    v-model="form.query" 
                    placeholder="message"
                    class="w-full p-4 bg-[#E8E6F0] rounded-lg focus:outline-none min-h-[150px] resize-none"
                    required
                ></textarea>
            </div>
            <button 
                type="submit"
                class="w-full py-3 text-center bg-white hover:bg-gray-50 rounded-lg transition-colors"
            >
                Send
            </button>
        </form>
        <p v-if="submitted" class="mt-4 text-green-600 text-center">Thank you for contacting us!</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    name: "",
    email: "",
    query: "",
});

const submitted = ref(false);

function handleSubmit() {
    console.log("Form submitted:", form.value);
    submitted.value = true;
    resetForm();
}

function resetForm() {
    form.value.name = "";
    form.value.email = "";
    form.value.query = "";
}
</script>

<style scoped>
.contact-comp {
     background-color: #D4DE95;
    color: #3D4127;
}

input::placeholder,
textarea::placeholder {
    color: #6B7280;
}

input:focus::placeholder,
textarea:focus::placeholder {
    color: transparent;
}
</style>
