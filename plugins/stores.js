import { useProjectStore } from "~/stores/index"

export default defineNuxtPlugin((NuxtApp) => {
    return {
        provide: {
            projectStore: useProjectStore()
        }
    }
})