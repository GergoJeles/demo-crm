import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import nProgress from "nprogress";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});

nProgress.init({
    color: "red",
    showSpinner: true,
});
