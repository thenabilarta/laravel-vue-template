import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import ExampleComponent2 from "./components/ExampleComponent2";

const routes = [
  {
    path: "/",
    component: ExampleComponent,
    name: "home"
  },
  {
    path: "/second",
    component: ExampleComponent2,
    name: "second"
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

export default router;
