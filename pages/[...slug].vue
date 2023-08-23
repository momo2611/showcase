<template>
    <div class="list-container">
        <ListShowDetail :projects="data" />
        <ListRelated :projects="dataFilter" />
    </div>
</template>
<script setup>
const { $projectStore } = useNuxtApp()
const projectsData = computed(() => $projectStore.projects)
const projects = Object.values(projectsData.value)
const data = projects.map(proxy => Object.assign({}, proxy))

const dataFilter = data.filter(data => data.category === 'commercial')
</script>
<style scoped>
.list-container {
    margin-top: 12px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 0;
    padding-top: 0;
}
</style>