<template>
    <button @click.prevent="onClick" class="AddGroup"><img src="@/assets/AddGroup.png" alt=""></button>
</template>
<script>
import item from '@/components/item.vue'
export default {
    components: {
        item
    },
    methods: {
        onClick (){
            item.push({})       
        },
    }
}
</script>