<template>
    <div>
        <keep-alive>
        <component :is="selectedComponent"></component>
        </keep-alive>
    </div>
</template>
<style>

</style>
<script>
import CurrencyList from './CurrencyList.vue'
import Settings from './Settings.vue'
import { busVue }  from '../main.js'

    export default{
        data(){
            return{
                msg:'hello vue',
                state: {},
                selectedComponent: 'CurrencyList'
            }
        },
        components:{
            CurrencyList,Settings
        },
        created(){
          busVue.$on('stateWasChanged', (data) => {
          this.state = data;
          if(this.state.listActive===true){
          this.selectedComponent='CurrencyList';
          }else{
          this.selectedComponent='Settings';
          }
          console.log("List Panel: "+data);
          });
        }
    }
</script>
