<template>
  <address class="flex flex-col">
    <h1 class="mx-2 font-bold text-xl">Contact</h1>
    <div class="flex flex-row w-full">
      <p class="mx-4">
        phone:
        <a href="tel:+`${ Number(phone) }`">{{ phone }}</a>
      </p>
      <p class="mx-4">
        email:
        <a href="mailto:`${email}`">{{ email }}</a>
      </p>
      <p class="mx-4">
        line:
        <a :href="line" add target="_blank">{{ name }}</a>
      </p>
      <p class="mx-4">
        github:
        <a :href="github" add target="_blank">{{ name }}</a>
      </p>
    </div>
  </address>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "Contact",
  setup() {
    const store = useStore();
    const state = reactive({});
    const {
      state: { myContact },
    } = store;
    for (const key in myContact) {
      Object.assign(state, myContact[key]);
    }
    const { name, email, phone, line, github } = state;
    return {
      name,
      email,
      phone,
      line,
      github,
    };
  },
};
</script>
