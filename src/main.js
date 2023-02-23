import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/Layout/BaseCard.vue';
import BaseButton from './components/Layout/BaseButton.vue';
import BaseDialog from './components/Layout/BaseDialog.vue';

const app=createApp(App);

app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-dialog',BaseDialog);


app.mount('#app')
