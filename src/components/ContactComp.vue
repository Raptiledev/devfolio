<template>
  <section id="contact" class="py-12 px-6 lg:px-16">
    <h2 class="text-4xl font-medium text-center mb-8">Contact</h2>
    <div class="contact-comp max-w-2xl mx-auto p-8 rounded-lg shadow-lg">
      <form @submit.prevent="sendEmail" class="space-y-6">
        <div class="form-group relative">
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Your Name"
            class="form-input"
            :disabled="loading"
            required
          />
          <span class="text-red-500 absolute -top-1 left-2">*</span>
        </div>
        <div class="form-group relative">
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Your Email"
            class="form-input"
            :disabled="loading"
            required
          />
          <span class="text-red-500 absolute -top-1 left-2">*</span>
        </div>
        <div class="form-group relative">
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Your Message"
            class="form-input min-h-[150px] resize-none"
            :disabled="loading"
            required
          ></textarea>
          <span class="text-red-500 absolute -top-1 left-2">*</span>
        </div>
        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
      <div
        v-if="status"
        :class="['mt-4 text-center', status.success ? 'text-green-600' : 'text-red-600']"
      >
        {{ status.message }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const loading = ref(false)
const status = ref(null)

async function sendEmail() {
  loading.value = true
  status.value = null

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID', // Add your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Add your EmailJS template ID
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
        to_email: 'your-email@gmail.com', // Add your email
      },
      'YOUR_PUBLIC_KEY', // Add your EmailJS public key
    )

    status.value = {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    }
    resetForm()
  } catch (error) {
    status.value = {
      success: false,
      message: 'Oops! Something went wrong. Please try again.',
    }
  } finally {
    loading.value = false
  }
}

function resetForm() {
  form.value = {
    name: '',
    email: '',
    message: '',
  }
}
</script>

<style scoped>
.contact-comp {
  background-color: #d4de95;
  color: #3d4127;
}

.form-input {
  @apply w-full p-4 bg-[#E8E6F0] rounded-lg focus:outline-none transition-all duration-300;
}

.form-input:focus {
  @apply ring-2 ring-[#3D4127] ring-opacity-50;
}

.form-input:disabled {
  @apply opacity-70 cursor-not-allowed;
}

.submit-btn {
  @apply w-full py-3 px-6 text-center bg-[#3D4127] text-[#D4DE95]
    hover:bg-opacity-90 rounded-lg transition-all duration-300
    disabled:opacity-70 disabled:cursor-not-allowed;
}

input::placeholder,
textarea::placeholder {
  color: #6b7280;
}

input:focus::placeholder,
textarea:focus::placeholder {
  color: transparent;
}

/* Animation for status message */
.mt-4 {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
