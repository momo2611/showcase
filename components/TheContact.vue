<template >
    <section class="contact-section">
        <!-- form contact -->
        <div>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name" class="form-label">Name *</label>
                    <input v-model="formData.name" class="form-input" type="text" id="name" placeholder="E.g: John Doe"
                        required>
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email *</label>
                    <input v-model="formData.email" class="form-input" type="email" id="email"
                        placeholder="E.g: johndoe@example.com" required>
                </div>
                <div class="form-group">
                    <label for="message" class="form-label">Message *</label>
                    <textarea v-model="formData.message" class="form-area" id="message"
                        placeholder="E.g: Your message go here..." required></textarea>
                </div>
                <button class="submit-btn" type="submit">Send</button>
            </form>
        </div>
    </section>
</template>
<script setup>
const formData = ref({
    name: '',
    email: '',
    message: '',
})

const submitForm = () => {
    console.log('Form submitted:', formData.value);

    //   reset
    formData.value = {
        name: '',
        email: '',
        message: '',
    }
}
</script>
<style scoped>
.contact-section {
    float: none;
    margin-bottom: 60px;
    margin-top: 1px;
    max-width: 600px;
    width: 100%;
    clear: both;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
    word-break: break-word;
}

.form-label {
    display: block;
    color: #1C1C1C;
    font-weight: 700;
    font-size: 14px;
    font-style: normal;
    line-height: 14px;
    margin-bottom: 10px;
    margin-top: 0px;
    text-align: left;
    text-transform: none;
}

.form-input,
.form-area {
    display: block;
    width: 100%;
    background-color: #ffffff;
    border-color: #dddddd;
    color: #1C1C1C;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    -webkit-appearance: none;
    border-radius: 3px;
    padding-right: 10px;
    padding-left: 10px;
    border-style: solid;
    margin-bottom: 30px;
}

.form-input {
    margin-top: 0px;
    text-align: left;
    text-transform: none;
    height: 42px;
    line-height: 42px;
}

.form-area {
    height: 132px;
    padding-bottom: 13px;
    padding-top: 13px;
    border-width: 1px;
    outline: none;
}

.submit-btn,
.form-input {
    border-style: solid;
    border-width: 1px;
    outline: none;
}

.submit-btn {
    border-radius: 20px;
    color: #ffffff;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    padding-left: 25px;
    padding-right: 25px;
    text-transform: none;
    background-color: #1c1c1c;
    border: 0;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: auto;
}

.submit-btn:hover {
    background-color: rgba(28, 28, 28, 0.8);
    border: 0;
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    text-decoration: none;
    text-transform: none;
}
</style>