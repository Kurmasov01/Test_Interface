<template>
     <div class="container">
      <select v-model="selected" v-for="(mask) in NeedDoList" :key="mask.id">
        <option>знание основ законодательства РФ 1</option>
        <option>знание основ законодательства РФ 2</option>
        <option>знание основ законодательства РФ 3</option>
      </select>
    </div>
</template>
<script>
export default {
  
}
</script>