<template>
  <div v-if="mainitem" class="text-center">
    
    <div>Mainitem : {{mainitem.mainItemString1Property}}</div>

    <div>
      <p>Key : {{mainitem.keyProperty}}</p>
      <hr>
      <dl class="row">
        <dt class="col-sm-4">
          <label>MainItemKeyProperty</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{mainitem.keyProperty}}</a>
        </dd>
        <dt class="col-sm-4">
          <label>mainItemString1Property</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{mainitem.mainItemString1Property}}</a>
        </dd>
        <dt class="col-sm-4">
          <label>mainItemString2Property</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{mainitem.mainItemString2Property}}</a>
        </dd>
        <dt class="col-sm-4">
          <label>mainItemState</label>
        </dt>
        <dd class="col-sm-8">
          <a>{{mainitem.mainItemState}}</a>
        </dd>
      </dl>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "deleteDetailsComponent",
  props: {
    mainitem: {}
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