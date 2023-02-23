<template>
  <base-card>
    <base-button
      @click="setComponentId('stored-resources')"
      :mode="componentId === 'stored-resources' ? null : 'flat'"
      >Resources</base-button
    >
    <base-button
      @click="setComponentId('add-resources')"
      :mode="componentId === 'add-resources' ? null : 'flat'"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="componentId"></component>
  </keep-alive>
</template>
<script>
import StoredResources from "./StoredResources.vue";
import AddResources from "./AddResources.vue";
export default {
  data() {
    return {
      componentId: "stored-resources",
      StoredResources: [
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
    };
  },
  provide() {
    return {
      resources: this.StoredResources,
      addResource: this.AddResources,
      deleteResource:this.deleteRes
    };
  },
  methods: {
    setComponentId(id) {
      this.componentId = id;
    },
    AddResources(title, description, link) {
      const newData = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.StoredResources.unshift(newData);
      this.componentId='stored-resources'
    },
    deleteRes(id){
      const resIndex=this.StoredResources.findIndex(std=>std.id===id);
      this.StoredResources.splice(resIndex,1);
    }
  },
  components: {
    AddResources,
    StoredResources,
  },
};
</script>
