<template >
  <div class="text-center">
    <h1 class="display-4">list main</h1>
    <router-link :to="{ name: 'maindetails', params: { id: 123 }}">goto details</router-link>
  </div>
</template>
<script>
export default {
  name: "List"
};
</script>