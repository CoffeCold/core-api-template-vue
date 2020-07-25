<template>
  <div v-if="subitem" class="text-center">
    <div>
      <hr>
      <dl class="row">
        <dt class="col-sm-4">
          <label>MainItemKeyProperty</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{subitem.mainItemKeyProperty}}</a>
        </dd>
        <dt class="col-sm-4">
          <label>subItemKeyProperty</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{subitem.subItemKeyProperty}}</a>
        </dd>
        <dt class="col-sm-4">
          <label>subItemLimitedStringProperty</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{subitem.subItemLimitedStringProperty}}</a>
        </dd>
        <dt class="col-sm-4">
          <label>subItemPriceProperty</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{subitem.subItemPriceProperty}}</a>
        </dd>
        <dt class="col-sm-4">
          <label>subItemCheckboxProperty</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{subitem.subItemCheckboxProperty}}</a>
        </dd>
        <dt class="col-sm-4">
          <label>subItemDateProperty</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{subitem.subItemDateProperty}}</a>
        </dd>
      </dl>
    </div>
    <hr>
  </div>
</template>
  <script>
export default {
  name: "deleteDetailsComponent",
  props: {
    subitem: {}
  }
};
</script>
<style scoped>
dl {
  width: 100%;
  overflow: hidden;
  background: var(--grey-color);
  padding: 0;
  margin: 0;
}
dt {
  float: left;
  width: 50%;
  /* adjust the width; make sure the total of both is 100% */
  background: var(--grey-color);
  padding: 0;
  margin: 0;
}
dd {
  float: left;
  width: 50%;
  /* adjust the width; make sure the total of both is 100% */
  background: var(--yellow-color);
  padding: 0;
  margin: 0;
}
</style>