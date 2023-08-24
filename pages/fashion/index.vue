<template>
    <div class="show-container">
        <main>
            <div class="show-covers">
                <a href="" class="project-cover" v-for="index in 10">
                    <img src="https://cdn.myportfolio.com/96d1fb56-926a-4913-b087-b9739a916216/c5e668e8-e8f8-4ffb-a6b4-e4176acc3078_carw_3x4x640.jpg?h=66ebd943543be1620cd2da580bc711cb"
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
    width: calc(25% - 11.25px);
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

    .project-cover:nth-child(4n + 1) {
        clear: none;
        margin-left: auto;
    }
}

@media (max-width: 540px) {
    .project-cover {
        margin-right: 0 !important;
        width: 100%;
    }
}

.project-cover:nth-child(4n + 1) {
    clear: left;
    margin-left: auto;
}


.project-cover:nth-child(4n) {
    margin-right: 0;
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