<template>
    <div class="container">
        <center><p>You can change your base rate here:</p>
        <select v-model="base" @change="changeBase(base)">
            <option>GBP</option>
            <option>USD</option>
            <option>EUR</option>
            <option>PLN</option>
            <option>CHF</option>


        </select></center>
    </div>
</template>
<style scoped>
.container{
padding: 10px;
}
</style>
<script>
import { busVue }  from '../main.js'
    export default{
        data(){
            return{
                msg:'hello vue',
                base: 'GBP'
            }

        },
        methods: {
        changeBase(base){

        busVue.changeBase(base);
        }
        }
    }
</script>
