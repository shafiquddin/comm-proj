<template>
  <the-header title="RememberMe"></the-header>
  <stored-resources :resources="Resources"></stored-resources>
</template>

<script>
import StoredResources from './components/Learning-resources/StoredResources.vue';
import TheHeader from './components/UI/TheHeader.vue';

export default {
  data(){
    return {
      Resources: [
        {
          id: "vue-guide",
          title: "Vue Guide",
          description: "Learn Complete Vue.js from",
          link: "https://google.com",
        },
        {
          id: "Google",
          title: "Google",
          description: "Learn to Google...",
          link: "https://google.com",
        },
      ],
    }
  },
  components:{
    TheHeader,
    StoredResources,
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
