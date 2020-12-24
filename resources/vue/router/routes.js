import Index from "../pages/Index.vue";

const routes = [
    page("/", "index", Index),
    page("/home", "home", Index),
    page("/welcome", "welcome", Index)
];

function page(path, name, component, meta = { layout: "default" }) {
    return {
        path,
        name,
        component,
        meta,
        props: true
    };
}

export default routes;
