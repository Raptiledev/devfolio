<template>
    <div class="contact-comp">
        <h2>Contact Us</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
                <label for="query">Query Description:</label>
                <textarea id="query" v-model="form.query" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        <p v-if="submitted">Thank you for contacting us!</p>
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
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.form-group {
    margin-bottom: 15px;
}
label {
    display: block;
    margin-bottom: 5px;
}
input,
textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
button {
    padding: 10px 15px;
    background-color: #636B2F;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}
button:hover {
    background-color: #3D4127;
}
p {
    margin-top: 15px;
    color: green;
}
</style>
