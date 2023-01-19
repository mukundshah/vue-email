import { defineComponent, h } from "vue";

export let Column = defineComponent({
  name: "Column",
  setup() {
    return h("td");
  },
});
