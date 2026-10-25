import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import katex from "katex";
import "katex/dist/katex.min.css";

const app = createApp(App);

app.use(router);

app.directive("katex", {
  mounted(el) {
    katex.render(el.innerText, el, {
      throwOnError: false,
      displayMode: false,
    });
  },
});

app.mount("#app");
