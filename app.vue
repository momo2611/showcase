<template>
  <TheHeader />
  <!-- <NuxtLayout> -->
  <NuxtPage />
  <!-- </NuxtLayout> -->
  <TheFooter />
  <div class="scroll-to-top" v-if="showScrollButton" @click="scrollToTop">
    <a class="circle">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve">
        <g>
          <path
            d="M13.8,1.3L21.6,9c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.1,0.3,0.1,0.4s0,0.3-0.1,0.4c-0.1,0.1-0.1,0.3-0.3,0.4
                    c-0.1,0.1-0.2,0.2-0.4,0.3c-0.2,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.1-0.3-0.2-0.4-0.3L14.2,5l0,19.1
                    c0,0.2-0.1,0.3-0.1,0.5c0,0.1-0.1,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.3,0.1-0.5,0.1c-0.1,0-0.3,0-0.4-0.1
                    c-0.1-0.1-0.3-0.1-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.1-0.1-0.3-0.1-0.5l0-19.1l-5.7,5.7C6,10.8,5.8,10.9,5.7,11
                    c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.1-0.2-0.2-0.4C4.1,10.2,4,10.1,4.1,9.9
                    c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.3,0.3-0.4l7.7-7.8c0.1,0,0.2-0.1,0.2-0.1c0,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2-0.1
                    c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1C13.7,1.2,13.8,1.2,13.8,1.3z">
          </path>
        </g>
      </svg>
    </a>
  </div>
</template>
<script setup>
const showScrollButton = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 200;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.7rem);
}

.scroll-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 9999;
  transition: background 0.2s ease, color 0.2s ease;
}

.circle {
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 60px;
  display: block;
  height: 60px;
  width: 60px;
}

.circle:hover {
  background: rgba(0, 0, 0, 0.2);
}

.circle svg {
  transition: fill 0.2s ease;
  fill: #000;
  height: 24px;
  opacity: 0.3;
  position: absolute;
  width: 24px;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  left: 50%;
  top: 50%;
}
</style>
