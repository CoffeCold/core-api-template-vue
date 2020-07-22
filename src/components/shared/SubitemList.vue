<template>
  <div>
     <hr>
    <br>
    <slot name="subdescriptionslot"></slot>
     <hr>
 
    <br>

    <div class="container">
      <div class="row grid-container">
        <div class="col-md-10">
          <div class="table">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Keyxx</th>
                  <th>SubItemDateProperty</th>
                  <th>SubItemPriceProperty</th>
                  <th>SubItemLimitedStringProperty</th>
                  <th>SubItemCheckboxProperty</th>
                  <th>MainItemKeyProperty</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in subitems" :key="item.subItemKeyProperty">
                  <td>{{ item.subItemKeyProperty }}</td>
                  <td>{{ item.subItemDateProperty }}</td>
                  <td>{{ item.subItemPriceProperty }}</td>
                  <td>{{ item.subItemLimitedStringProperty }}</td>
                  <td>{{ item.subItemCheckboxProperty }}</td>
                  <td>{{ item.mainItemKeyProperty }}</td>
 
                <td>
                    <router-link
                      :to="{ name: 'subdetails', params: { id: item.subItemKeyProperty }}"
                    >Details</router-link>
                    <router-link
                      :to="{ name: 'subedit', params: { id: item.subItemKeyProperty }}"
                    >Edit</router-link>
                    <router-link
                      :to="{ name: 'subdelete', params: { id: item.subItemKeyProperty }}"
                    >Delete</router-link>
                  </td>
                  
                </tr>
                <tr v-if="!subitems.length">
                  <td>&nbsp;</td>
                  <td colspan="7">No Records Found</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoTask",
  props: {
    subitems: {}
  }
};
</script>