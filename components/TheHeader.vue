<template>
    <header class="mobile-header" v-if="isMobile">
        <div class="logo-wrap">
            <div class="logo logo-text-mobile">
                <NuxtLink to="/" class="preserve-whitespace">MO MO</NuxtLink>
            </div>
        </div>
        <button class="hamburger-button" @click="toggleMenu">
            <span class="hamburger-icon"></span>
        </button>
        <transition name="slide">
            <div class="responsive-nav" v-if="isMenuOpen">
                <div class="mobile-nav-container">
                    <!-- close menu button -->
                    <button class="close-button" @click="toggleMenu">
                        <span class="close-icon"></span>
                    </button>

                    <!-- nav link content -->
                    <nav class="mobile-menu">
                        <div class="gallery-title" v-for="content in navContent" key="content.title">
                            <NuxtLink class="link-title" :class="content.active ? 'active' : ''" :to="content.link">{{
                                content.title }}
                            </NuxtLink>
                        </div>
                    </nav>
                    <!-- social mobile -->
                    <div class="social pf-nav-social">
                        <ul>
                            <li>
                                <a href="https://www.behance.net/haulephoto" target="_blank">
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 30 24" class="icon">
                                        <path id="path-1"
                                            d="M18.83,14.38a2.78,2.78,0,0,0,.65,1.9,2.31,2.31,0,0,0,1.7.59,2.31,2.31,0,0,0,1.38-.41,1.79,1.79,0,0,0,.71-0.87h2.31a4.48,4.48,0,0,1-1.71,2.53,5,5,0,0,1-2.78.76,5.53,5.53,0,0,1-2-.37,4.34,4.34,0,0,1-1.55-1,4.77,4.77,0,0,1-1-1.63,6.29,6.29,0,0,1,0-4.13,4.83,4.83,0,0,1,1-1.64A4.64,4.64,0,0,1,19.09,9a4.86,4.86,0,0,1,2-.4A4.5,4.5,0,0,1,23.21,9a4.36,4.36,0,0,1,1.5,1.3,5.39,5.39,0,0,1,.84,1.86,7,7,0,0,1,.18,2.18h-6.9Zm3.67-3.24A1.94,1.94,0,0,0,21,10.6a2.26,2.26,0,0,0-1,.22,2,2,0,0,0-.66.54,1.94,1.94,0,0,0-.35.69,3.47,3.47,0,0,0-.12.65h4.29A2.75,2.75,0,0,0,22.5,11.14ZM18.29,6h5.36V7.35H18.29V6ZM13.89,17.7a4.4,4.4,0,0,1-1.51.7,6.44,6.44,0,0,1-1.73.22H4.24V5.12h6.24a7.7,7.7,0,0,1,1.73.17,3.67,3.67,0,0,1,1.33.56,2.6,2.6,0,0,1,.86,1,3.74,3.74,0,0,1,.3,1.58,3,3,0,0,1-.46,1.7,3.33,3.33,0,0,1-1.35,1.12,3.19,3.19,0,0,1,1.82,1.26,3.79,3.79,0,0,1,.59,2.17,3.79,3.79,0,0,1-.39,1.77A3.24,3.24,0,0,1,13.89,17.7ZM11.72,8.19a1.25,1.25,0,0,0-.45-0.47,1.88,1.88,0,0,0-.64-0.24,5.5,5.5,0,0,0-.76-0.05H7.16v3.16h3a2,2,0,0,0,1.28-.38A1.43,1.43,0,0,0,11.89,9,1.73,1.73,0,0,0,11.72,8.19ZM11.84,13a2.39,2.39,0,0,0-1.52-.45H7.16v3.73h3.11a3.61,3.61,0,0,0,.82-0.09A2,2,0,0,0,11.77,16a1.39,1.39,0,0,0,.47-0.54,1.85,1.85,0,0,0,.17-0.88A1.77,1.77,0,0,0,11.84,13Z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/hau.tienle/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" x="0px" y="0px" viewBox="0 0 30 24" xml:space="preserve" class="icon">
                                        <path
                                            d="M16.21 20h-3.26v-8h-1.63V9.24h1.63V7.59c0-2.25 0.92-3.59 3.53-3.59h2.17v2.76H17.3 c-1.02 0-1.08 0.39-1.08 1.11l0 1.38h2.46L18.38 12h-2.17V20z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_hau.le_/" target="_blank">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 24"
                                        style="enable-background: new 0 0 30 24" xml:space="preserve" class="icon">
                                        <g>
                                            <path
                                                d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                          c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6
                          c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6
                          c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9
                          c0.3-0.3,0.5-0.5,0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4
                          c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9
                          c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4
                          c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9
                          c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z" />
                                            <path d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7
                          c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z" />
                                            <path
                                                d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCiakJUb-7O1MLSplMragvaA" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" viewBox="0 0 30 24" xml:space="preserve" class="icon">
                                        <path
                                            d="M26.15 16.54c0 0-0.22 1.57-0.9 2.26c-0.87 0.91-1.84 0.91-2.28 0.96C19.78 20 15 20 15 20 s-5.91-0.05-7.74-0.23c-0.51-0.09-1.64-0.07-2.51-0.97c-0.68-0.69-0.91-2.26-0.91-2.26s-0.23-1.84-0.23-3.68v-1.73 c0-1.84 0.23-3.68 0.23-3.68s0.22-1.57 0.91-2.26c0.87-0.91 1.83-0.91 2.28-0.96C10.22 4 15 4 15 4H15c0 0 4.8 0 8 0.2 c0.44 0.1 1.4 0.1 2.3 0.96c0.68 0.7 0.9 2.3 0.9 2.26s0.23 1.8 0.2 3.68v1.73C26.38 14.7 26.1 16.5 26.1 16.54z M12.65 8.56l0 6.39l6.15-3.18L12.65 8.56z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:haule@cuastudious.com">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 24"
                                        style="enable-background: new 0 0 30 24" xml:space="preserve" class="icon">
                                        <g>
                                            <path
                                                d="M15,13L7.1,7.1c0-0.5,0.4-1,1-1h13.8c0.5,0,1,0.4,1,1L15,13z M15,14.8l7.9-5.9v8.1c0,0.5-0.4,1-1,1H8.1c-0.5,0-1-0.4-1-1 V8.8L15,14.8z" />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
    </header>
    <!-- nav pc -->
    <header v-else class="nav-pc">
        <nav class="nav-container">
            <div>
                <NuxtLink class="nav-title" :class="content.active ? 'active' : ''" v-for="content in navContent"
                    key="content.title" :to="content.link">{{ content.title }}
                </NuxtLink>
            </div>
        </nav>
        <div class="logo-wrap">
            <div class="logo logo-text">
                <NuxtLink to="/" class="preserve-whitespace">MO MO</NuxtLink>
            </div>
        </div>
        <div class="social pf-nav-social">
            <ul>
                <li>
                    <a href="https://www.behance.net/haulephoto" target="_blank">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24"
                            class="icon">
                            <path id="path-1"
                                d="M18.83,14.38a2.78,2.78,0,0,0,.65,1.9,2.31,2.31,0,0,0,1.7.59,2.31,2.31,0,0,0,1.38-.41,1.79,1.79,0,0,0,.71-0.87h2.31a4.48,4.48,0,0,1-1.71,2.53,5,5,0,0,1-2.78.76,5.53,5.53,0,0,1-2-.37,4.34,4.34,0,0,1-1.55-1,4.77,4.77,0,0,1-1-1.63,6.29,6.29,0,0,1,0-4.13,4.83,4.83,0,0,1,1-1.64A4.64,4.64,0,0,1,19.09,9a4.86,4.86,0,0,1,2-.4A4.5,4.5,0,0,1,23.21,9a4.36,4.36,0,0,1,1.5,1.3,5.39,5.39,0,0,1,.84,1.86,7,7,0,0,1,.18,2.18h-6.9Zm3.67-3.24A1.94,1.94,0,0,0,21,10.6a2.26,2.26,0,0,0-1,.22,2,2,0,0,0-.66.54,1.94,1.94,0,0,0-.35.69,3.47,3.47,0,0,0-.12.65h4.29A2.75,2.75,0,0,0,22.5,11.14ZM18.29,6h5.36V7.35H18.29V6ZM13.89,17.7a4.4,4.4,0,0,1-1.51.7,6.44,6.44,0,0,1-1.73.22H4.24V5.12h6.24a7.7,7.7,0,0,1,1.73.17,3.67,3.67,0,0,1,1.33.56,2.6,2.6,0,0,1,.86,1,3.74,3.74,0,0,1,.3,1.58,3,3,0,0,1-.46,1.7,3.33,3.33,0,0,1-1.35,1.12,3.19,3.19,0,0,1,1.82,1.26,3.79,3.79,0,0,1,.59,2.17,3.79,3.79,0,0,1-.39,1.77A3.24,3.24,0,0,1,13.89,17.7ZM11.72,8.19a1.25,1.25,0,0,0-.45-0.47,1.88,1.88,0,0,0-.64-0.24,5.5,5.5,0,0,0-.76-0.05H7.16v3.16h3a2,2,0,0,0,1.28-.38A1.43,1.43,0,0,0,11.89,9,1.73,1.73,0,0,0,11.72,8.19ZM11.84,13a2.39,2.39,0,0,0-1.52-.45H7.16v3.73h3.11a3.61,3.61,0,0,0,.82-0.09A2,2,0,0,0,11.77,16a1.39,1.39,0,0,0,.47-0.54,1.85,1.85,0,0,0,.17-0.88A1.77,1.77,0,0,0,11.84,13Z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/hau.tienle/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            x="0px" y="0px" viewBox="0 0 30 24" xml:space="preserve" class="icon">
                            <path
                                d="M16.21 20h-3.26v-8h-1.63V9.24h1.63V7.59c0-2.25 0.92-3.59 3.53-3.59h2.17v2.76H17.3 c-1.02 0-1.08 0.39-1.08 1.11l0 1.38h2.46L18.38 12h-2.17V20z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/_hau.le_/" target="_blank">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 24"
                            style="enable-background: new 0 0 30 24" xml:space="preserve" class="icon">
                            <g>
                                <path
                                    d="M15,5.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                          c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2s0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9c-0.3,0.3-0.5,0.5-0.9,0.6
                          c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0s-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3c-0.4-0.1-0.6-0.3-0.9-0.6
                          c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2s0-2.4,0-3.2c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9
                          c0.3-0.3,0.5-0.5,0.9-0.6c0.3-0.1,0.7-0.2,1.5-0.3C12.6,5.4,12.9,5.4,15,5.4 M15,4c-2.2,0-2.4,0-3.3,0c-0.9,0-1.4,0.2-1.9,0.4
                          c-0.5,0.2-1,0.5-1.4,0.9C7.9,5.8,7.6,6.2,7.4,6.8C7.2,7.3,7.1,7.9,7,8.7C7,9.6,7,9.8,7,12s0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9
                          c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4c0.9,0,1.1,0,3.3,0s2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4
                          c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3s0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9
                          c-0.2-0.5-0.5-1-0.9-1.4c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C17.4,4,17.2,4,15,4L15,4L15,4z" />
                                <path d="M15,7.9c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1S17.3,7.9,15,7.9L15,7.9z M15,14.7c-1.5,0-2.7-1.2-2.7-2.7
                          c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7C17.7,13.5,16.5,14.7,15,14.7L15,14.7z" />
                                <path d="M20.2,7.7c0,0.5-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S20.2,7.2,20.2,7.7L20.2,7.7z" />
                            </g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCiakJUb-7O1MLSplMragvaA" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            id="Layer_1" viewBox="0 0 30 24" xml:space="preserve" class="icon">
                            <path
                                d="M26.15 16.54c0 0-0.22 1.57-0.9 2.26c-0.87 0.91-1.84 0.91-2.28 0.96C19.78 20 15 20 15 20 s-5.91-0.05-7.74-0.23c-0.51-0.09-1.64-0.07-2.51-0.97c-0.68-0.69-0.91-2.26-0.91-2.26s-0.23-1.84-0.23-3.68v-1.73 c0-1.84 0.23-3.68 0.23-3.68s0.22-1.57 0.91-2.26c0.87-0.91 1.83-0.91 2.28-0.96C10.22 4 15 4 15 4H15c0 0 4.8 0 8 0.2 c0.44 0.1 1.4 0.1 2.3 0.96c0.68 0.7 0.9 2.3 0.9 2.26s0.23 1.8 0.2 3.68v1.73C26.38 14.7 26.1 16.5 26.1 16.54z M12.65 8.56l0 6.39l6.15-3.18L12.65 8.56z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="mailto:haule@cuastudious.com">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 24"
                            style="enable-background: new 0 0 30 24" xml:space="preserve" class="icon">
                            <g>
                                <path
                                    d="M15,13L7.1,7.1c0-0.5,0.4-1,1-1h13.8c0.5,0,1,0.4,1,1L15,13z M15,14.8l7.9-5.9v8.1c0,0.5-0.4,1-1,1H8.1c-0.5,0-1-0.4-1-1 V8.8L15,14.8z" />
                            </g>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </header>
    <div class="header-placeholder"></div>
</template>

<script setup>
const isMobile = ref(false)
const isMenuOpen = ref(false);

const navContent = [
    { title: "COMMERCIAL", link: '/commercial', active: true },
    { title: "FASHION", link: '/fashion', active: false },
    { title: "PERSONAL", link: '', active: false },
    { title: "ABOUT", link: '/about', active: false },
    { title: "PROJECTS", link: '', active: false },
    { title: "MAGAZINE", link: '', active: false },
    { title: "ACADEMY", link: '', active: false },
];
function checkMobile() {
    isMobile.value = window.innerWidth <= 768;
}
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
header {
    height: 120px;
    align-items: center;
    padding: 0 3%;
    position: fixed;
    z-index: 3;
    display: flex;
    right: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.6);
}

.preserve-whitespace {
    white-space: pre-wrap;
}

.mobile-header {
    display: flex;
    justify-content: center;
    align-items: center;
}

.active {
    color: rgb(40, 40, 40);
    font-weight: 700;
    font-style: normal;
}

.nav-container {
    padding-left: 0;
    padding-right: 0;
    text-align: left;
    display: block;
    float: left;
    max-width: 100%;
    width: 35%;
}

.nav-title {
    padding-right: 20px;
    display: inline-block;
    vertical-align: middle;
}

.logo-wrap {
    width: 30%;
}

.logo-text {
    text-align: center;
}

.logo-text-mobile {
    width: 100%;
    text-align: center;
}

.social {
    width: 35%;
}

.social ul {
    display: flex;
    flex-direction: row;
    float: right;
}

.social ul li {
    padding: 0 0 0 10px;
}

.social svg {
    width: 30px;
    height: 30px;
}

.header-placeholder {
    display: block;
    height: 120px;
}

.responsive-nav {
    z-index: 999;
    background-color: white;
    inset: 0;
    display: flex;
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 72px 5% 80px 5%;
    position: fixed;
    text-align: center;
}

.mobile-nav-container {
    margin: auto;
    width: 100%;
}

.gallery-title {
    padding: 0px 0px 30px;
    display: block;
    font-size: 22px;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}


.hamburger-button {

    position: absolute;
    right: 40px;

    display: block;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger-icon {
    display: block;
    width: 30px;
    height: 3px;
    background-color: black;
    position: relative;
    transform: translateY(-50%);
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-icon:before,
.hamburger-icon:after {
    content: '';
    width: 30px;
    height: 3px;
    background-color: black;
    position: absolute;
    transition: transform 0.3s ease;
}

.hamburger-icon:before,
.hamburger-icon:after {
    transform: translateY(-7px);
}

.hamburger-icon:after {
    transform: translateY(7px);
}

.close-button {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 20px 4%;
}

.close-icon {
    display: block;
    width: 24px;
    height: 24px;
    position: relative;
}

.close-icon:before,
.close-icon:after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: black;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.close-icon:before {
    transform: rotate(45deg);
}

.close-icon:after {
    transform: rotate(-45deg);
}

@media (max-width: 768px) {

    /* Add your mobile styles here */
    .gallery-title .link-title {
        font-size: 22px;
        line-height: 32px;
    }

    .logo {
        max-width: 100%;
        font-size: 23px;
        line-height: 24px;
    }

    .social {
        text-align: center;
        width: 100%;
        background-color: rgb(255, 255, 255);
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        bottom: 0px;
        left: 0px;
        margin: 0px;
        min-height: 80px;
        overflow: auto hidden;
        padding: 5%;
        position: fixed;
    }

    .social ul {
        display: flex;
        justify-content: space-around;
        float: none;
    }
}

/* Styles for non-mobile */
@media (min-width: 769px) {
    /* Add your non-mobile styles here */
}
</style>
