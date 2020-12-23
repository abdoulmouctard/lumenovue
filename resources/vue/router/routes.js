import Index from "../pages/Index.vue";

function page(path, name, component, meta = { layout: "default" }) {
    return {
        path,
        name,
        component,
        meta,
        props: true
    };
}

const routes = [
    page("/", "index", Index),
    page("/home", "home", Index),
    page("/welcome", "welcome", Index)
];

export default routes;
