import trackMiddleware from "../middleware/track.middleware";
import Index from "../pages/Index.vue";

const routes = [
    page("/", "index", Index),
    page("/home", "home", Index),
    page("/welcome", "welcome", Index)
];

function page(
    path,
    name,
    component,
    meta = { layout: "default", middleware: [] }
) {
    return {
        path,
        name,
        component,
        meta: { ...meta, middleware: [...meta.middleware, trackMiddleware] },
        props: true
    };
}

export default routes;
