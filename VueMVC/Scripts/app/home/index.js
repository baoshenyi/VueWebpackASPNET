import Vue from 'vue'
import app from './App'
import vueResource from 'vue-resource'

Vue.use(vueResource)

new Vue({
    el: '#app',
    template: '<app/>',
    components: { app }
})
