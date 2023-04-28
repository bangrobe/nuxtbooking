import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
// import Button from "primevue/button";
// import Menubar from 'primevue/menubar';
// import Calendar from 'primevue/calendar';
// import InputNumber from 'primevue/inputnumber';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    // nuxtApp.vueApp.component('Button', Button);
    // nuxtApp.vueApp.component('MenuBar', Menubar);
    // nuxtApp.vueApp.component('Calendar', Calendar);
    // nuxtApp.vueApp.component('InputNumber', InputNumber);
    //other components that you need
});