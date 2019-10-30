<template>
  <div id="app" class="text-center">
    <img src="./assets/logo.png" alt="Vue logo" class="inline-block" />
    <img src="./assets/tailwindcss.svg" alt="Tailwind Logo" class="inline-block w-64"/>
    <HelloWorld msg="A template for making web app with Vue.js and Tailwind." />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import './styles/style.scss';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>
