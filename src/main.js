// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

var VueResource = require('vue-resource');

Vue.use(VueResource);

/* eslint-disable no-new */
export const busVue = new Vue({
    data(){

        return{
            state:{
                listActive: true, settingsActive:false,
            },
            baseCurrency: "GBP"
        }
    },
    methods: {

        changeActivePanel(state){

            if(state.listActive===true){
                this.state.listActive=true; this.state.settingsActive=false;

            }else{
                this.state.listActive=false; this.state.settingsActive=true;
            }
            debugger;
            this.$emit('stateWasChanged', state);

        },
        changeBase(base){
            this.$emit('baseWasChanged', base);
        }


    }

});



new Vue({
  el: '#app-widget',
  template: '<App/>',
  components: { App,  }
});
