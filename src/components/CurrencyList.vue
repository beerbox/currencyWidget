<template>
    <div>
        <div class="row"><div class="key">Base: {{base}}</div></div>
        <div v-for="(value, key) in rates" class="row"><div class="key">{{key}}</div><div class="value"> {{value}}</div></div>
    </div>
</template>
<style scoped>
div{
font-family: Lato;
}


.row{
min-width: 200px;
        max-width: 300px;
        background-color: #EAEAEA;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px grey solid;
}
.key{
width:100%;
background-color: white;
}
.value{
width: 100%;
background-color: #EAEAEA;
}
</style>
<script>
import { busVue }  from '../main.js'
    export default{
        data(){
            return{
                rates:{},
                base: 'GBP',
                state: {}
            }
        },
        watch:{
        base: function(val){
         this.$http.get('http://api.fixer.io/latest?base='+val).then((response) => {
          this.rates = response.body.rates;
          console.log("RATES DOWNLOADED!");

          });
        },
        state: function(val){
            console.log("change in state!!! RATES");
        }
        },
         created(){
 this.$http.get('http://api.fixer.io/latest?base='+this.base).then((response) => {
          this.rates = response.body.rates;
          console.log("RATES DOWNLOADED!");

          });

         busVue.$on('baseWasChanged', (data) => {

          this.base = data;
          console.log(data);

 // success callback
  }, (response) => {
    // error callback
  });
         }
    }
</script>
