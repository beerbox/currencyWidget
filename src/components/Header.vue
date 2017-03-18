<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>

        <div class="container">
            <div class="currencies" v-bind:class="{active: state.listActive}" @click="goToCurrencies"><strong>{{currencies}}</strong></div>
            <div class="gap"></div>
            <div class="settings" v-bind:class="{active: state.settingsActive}" @click="goToSettings"><strong>{{settings}}</strong></div>
        </div>

    </div>
</template>
<style scoped>
    .container{
        padding: 5px;
        min-width: 200px;
        max-width: 300px;
        background-color: #EAEAEA;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .currencies{
    font-family: Lato;
    font-size: 15px;
    padding: 4px;
    }
    .active{
    text-decoration: underline;
    }
    .gap{
    width: 30%;
    }
    .settings{
    font-family: Lato;
    font-size: 15px;
    padding: 4px;
    }
    .settings:hover{
    cursor: pointer;
    opacity: 0.5;
    }
    .currencies:hover{
    cursor: pointer;
    opacity: 0.5;
    }
</style>
<script>
    /***
    * This component contains header bar (two buttons in menu (currency lists and settings)
    */
import { busVue }  from '../main.js'
    export default{
        data(){
            return{
                currencies: "Currency List",
                settings: "Settings",
                state:{
                listActive: true,
                settingsActive: false
                }
            }
        },
        methods: {
        goToCurrencies(){
        busVue.changeActivePanel({listActive: true, settingsActive: false});
        },
        goToSettings(){
        busVue.changeActivePanel({listActive: false, settingsActive: true});
        }
        },
        created(){
         busVue.$on('stateWasChanged', (data) => {

          this.state = data;
          console.log(data);
          });
        }
    }
</script>
