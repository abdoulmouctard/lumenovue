import VueRouter from "vue-router";

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}
const Hello = {template: '<div>Hello there</div>'}

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {path: '/', component: Hello},
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar}
    ]
});

export default router