<template >
  <div class="text-center">
    <h1 class="display-4">details sub</h1>
    <div>ID: {{id}}</div>
    <button type="button" @click="$router.go(-1)">Back</button>
  </div>
</template>
<script>
export default {
  name: "Details",
  props: ["id"]
};
</script>

