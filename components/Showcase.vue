<template>
    <div class="show-container">
        <main>
            <div class="show-covers">
                <a href="" class="project-cover" v-for="index in 10">
                    <img src="https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/f758fa0c-87a1-4ed5-a435-f94624e605d0_carw_3x4x640.jpeg?h=320373e1b2c49d6558c31c9af5af1ec0"
                        alt="" class="cover-img">
                    <div class="overlay">
                        <div class="overlay-text">
                            <p>Click to Learn More {{ index }}</p>
                        </div>
                    </div>
                </a>
            </div>
        </main>
    </div>
</template>
<script setup>
// const { $projectStore } = useNuxtApp()
// const projects = computed(() => $projectStore.projects)
const linkToDetail = defineProps()
</script>
<style scoped>
.show-container {
    position: relative;
    width: 100%;
}

.show-covers {
    display: flex;
    flex-wrap: wrap;
}

.project-cover {
    display: block;
    position: relative;
    margin-right: 15px;
    width: calc(20% - 12px);
    margin-bottom: 15px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    min-height: 100%;
}

@media (max-width: 768px) {
    .project-cover {
        width: calc(50% - 7.5px);
    }

    .project-cover:nth-child(5n + 1) {
        clear: none;
    }
}

@media (max-width: 540px) {
    .project-cover {
        margin-right: 0 !important;
        width: 100%;
    }
}

.project-cover:nth-child(5n + 1) {
    clear: left;
}

.project-cover img {
    max-width: 100%;
    height: auto;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project-cover:hover .overlay {
    opacity: 1;
}

.overlay-text {
    text-align: center;
    color: white;
    font-size: 18px;
    padding: 20px;
}
</style>