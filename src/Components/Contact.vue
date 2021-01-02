<template>
  <address class="font-serif space-y-4 text-gray-200">
    <div class="space-x-4 text-xl">
      <i class="fas fa-address-card"></i>
      <a>{{ birthday }}</a>
    </div>
    <div class="space-x-4 text-xl">
      <i class="fas fa-map-marker-alt"></i>
      <a>{{ address }}</a>
    </div>
    <div class="space-x-4 text-xl cursor-pointer">
      <i class="fas fa-mobile-alt"></i>
      <a href="tel:0625692976">{{ phone }}</a>
    </div>
    <div class="space-x-4 text-xl cursor-pointer">
      <i class="fas fa-envelope"></i>
      <a href="mailto:`${email}`">{{ email }}</a>
    </div>
    <div class="space-x-4 text-xl cursor-pointer">
      <i class="fab fa-line"></i>
      <a :href="line" add target="_blank">{{ name }}</a>
    </div>
    <div class="space-x-4 text-xl cursor-pointer">
      <i class="fab fa-github"></i>
      <a :href="`https://${github}`" add target="_blank">{{ github }}</a>
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
    const { name, birthday, address, email, phone, line, github } = state;
    return {
      name,
      email,
      phone,
      line,
      github,
      birthday,
      address,
    };
  },
};
</script>
