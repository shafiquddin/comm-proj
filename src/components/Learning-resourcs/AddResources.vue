<template>
  <base-card>
    <form @submit.prevent="submitRes">
    <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="title">
    </div>
    <div class="form-control">
        <label for="description">Title</label>
        <textarea name="description" id="description" rows="3" ref="description"></textarea>
    </div>
    <div class="form-control">
        <label for="link">Title</label>
        <input type="url" id="link" name="link" ref="link">
    </div>
    <div>
        <base-button type="submit">Add Resources</base-button>
    </div>
      </form>
    </base-card>
    <base-dialog v-if="isInputInvalid" title="Invalid Input" @close="isInputInvalid=false">
    <template #default>
      <p>Unfortunately,Aleast one input is Invalid</p>
      <p>please make sure All inputs must be valid</p>
    </template>
    <template #actions>
      <base-button @click="this.isInputInvalid=false">Okey</base-button>
    </template>
    </base-dialog>
</template>
<script>
export default {
inject:['addResource'],
data(){
    return{
        isInputInvalid:false,
    }
},
methods:{
    submitRes(){
        const enteredTitle=this.$refs.title.value;
        const enteredDes=this.$refs.description.value;
        const enteredLink=this.$refs.link.value;
        if(enteredTitle.trim()=='' || enteredDes.trim()=='' || enteredLink.trim()==''){
            this.isInputInvalid=true;
            return;
        }
        this.addResource(enteredTitle,enteredDes,enteredLink);

    }
}
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>