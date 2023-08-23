<template>
    <div class="related-container">
        <div class="related-title">
            <h3>YOU MAY ALSO LIKE</h3>
        </div>
        <div class="show-covers">
            <a href="" class="project-cover" v-for="pro in projects">
                <img :src="pro.photos[0]" alt="" class="cover-img">
                <div class="overlay">
                    <div class="overlay-text">
                        <p>{{ pro.title }}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    projects: {
        type: Array,
        required: true,
        default: () => []
    }
})
</script>
<style scoped>
.show-covers {
    display: flex;
    flex-wrap: wrap;
}

.related-container {
    width: 100%;
    margin-bottom: 12px;
    padding-top: 0px;
    display: block;
}

.related-title {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    text-align: left;
    width: 100%;
}

.related-title h3 {
    color: #111;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 30px;
    margin-top: 0px;
    text-transform: uppercase;
    white-space: pre-wrap;
}

.project-cover {
    overflow: hidden;
    position: relative;
    float: left;
    display: block;
    margin-right: 34px;
    margin-bottom: 12px;
    width: calc(10% - 30.6px);
    height: 100%;
}

.project-cover img {
    width: calc(100% + 2px);
    object-fit: cover;
    height: calc(100% + 2px);
}

.project-cover:nth-child(10n + 1) {
    clear: left;
    margin-left: 0;
}

.project-cover:last-child {
    margin-right: 0;
}

.project-cover:nth-child(-n + 10) {
    display: block;
}

@media (max-width: 768px) {
    .project-cover {
        width: calc(50% - 17px);
    }

    .project-cover:nth-child(2n) {
        margin-right: 0px !important;
    }

    .project-cover:nth-child(10n + 1) {
        clear: none;
    }
}

@media (max-width: 540px) {
    .project-cover {
        width: 100%;
        margin-right: 0px !important;
    }
}

.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
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
    font-size: 12px;
    padding: 12px;
}
</style>