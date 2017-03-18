<template>
    <div>
        <div class="border">
        <rado-header></rado-header>
        <view-panel></view-panel>
        </div>
    </div>
</template>
<style scoped>
    .border{
        max-width: 300px;
        min-width: 200px;
        border: grey solid 1px;
    }
</style>
<script>
import Header from './Header.vue'
import ViewPanel from './ViewPanel.vue'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components: {
        'rado-header': Header,
        'view-panel': ViewPanel
        }

    }
</script>
