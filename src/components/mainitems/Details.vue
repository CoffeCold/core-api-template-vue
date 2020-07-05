<template >
  <div class="text-center">
    <h1 class="display-4">details main</h1>
    <div>ID: {{id}}</div>

    <router-link :to="{ name: 'subdetails', params: { id: 123 }}">goto sub details</router-link>
  </div>
</template>
<script>
export default {
  name: "Details",
  props: ["id"]
};
</script>


