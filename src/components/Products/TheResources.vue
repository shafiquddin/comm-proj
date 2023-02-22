<template>
    <base-card>
    <base-button @click="setComponentId('stored-resource')" :mode="storedSelected">View Resources</base-button>
    <base-button @click="setComponentId('add-resources')" :mode="addSelected">Add Resources</base-button>
</base-card>
    <keep-alive>
        <component :is="componentId"></component>
    </keep-alive>
</template>
<script>
import StoredResource from './StoredResource.vue';
import AddResources from './AddResources.vue';

export default {
    data(){
        return {
            componentId:'stored-resource',
            StoredResources: [
        {
          id: "vue-guide",
          title: "Vue Guide",
          description: "Learn Complete Vue.js from",
          link: "https://vuejs.org",
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
    computed:{
        storedSelected()
        {
            return this.componentId==='stored-resource' ? null : 'flat';
        },
        addSelected(){
            return this.componentId==='add-resources' ? null : 'flat';
        },
    },
    provide(){
      return{
        resources:this.StoredResources,
      }   
    },
    components:{
        StoredResource,
        AddResources,
    },
    methods:{
        setComponentId(id){
            this.componentId=id;
        }
    }
}
</script>
<style>

</style>