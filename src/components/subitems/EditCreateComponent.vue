<template>
<div v-if="subitem">
    <br>  
    <div>Edit result: </div>
    <br>  
    <div>{{subitem}}</div>
    <br>  
	<form>
		<label>MainItemKeyProperty:
      <input type="text" formControlName="mainItemKeyProperty"  v-model="subitem.mainItemKeyProperty" readonly = true
      placeholder="mainItemKeyProperty"/>
    </label>

		<label>SubItemKeyProperty:
      <input type="text" formControlName="subItemKeyProperty"   v-model="subitem.subItemKeyProperty" readonly = true
      placeholder="subItemKeyProperty"/>
    </label>
		<label>LimitedString:
      <input type="text" formControlName="subItemLimitedStringProperty"  v-model="subitem.subItemLimitedStringProperty"
      />
    </label>
		<label>Price:
      <input type="number" formControlName="subItemPriceProperty"  v-model="subitem.subItemPriceProperty"
      placeholder="subItemPriceProperty"/>
    </label>
		<label>Checkbox:
      <input type="checkbox" formControlName="subItemCheckboxProperty"  v-model="subitem.subItemCheckboxProperty"
      placeholder="subItemCheckboxProperty"/>
    </label>
    <br>    
		<label>Date:
            <input type="date" formControlName="_subItemDateProperty"  v-model="subitem.subItemDateProperty" 
      placeholder="_subItemDateProperty" />
       </label>
       <br>      
	</form>
</div>
</template>

<script>
export default {
  name: "editCreateComponent",
  props: {
    subitem: {}
    
  }
};
</script>
<style scoped>
input[type=text],input[type=number] {
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 10px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
 
}
input[type=checkbox]{
  width: 20px;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 10px ;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
       display: inline-block;
	position: relative;
}
input[type=date]{
  width: 300px;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 30px ;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
 
}


input[type=text]:focus ,input[type=number]:focus  , input[type=checkbox]:focus ,input[type=date]:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}


</style>