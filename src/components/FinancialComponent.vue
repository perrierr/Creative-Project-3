<template>
<div id="container">

  <!--Input-->
  <div class="d-flex">
    <input v-model="task" type="text" placeholder="Enter goal" class="form-control">
    <button @click="submitGoal" class="btn btn-warning rounded-0">SUBMIT</button>
  </div> 

  <!--Task table-->
  <table class="table table-bordered mt-5">
  <thead>
    <tr>
      <th scope="col">Goals</th>
      <th scope="col">To Do By</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center">#</th>
      <th scope="col" class="text-center">#</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <td>{{product.name}}</td>
      <td>{{product.by}}</td>
      <td>{{product.status}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div class="text-center">
          <span class="fa fa-trash"></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>

</div>
</template>

<style scoped>
#container {
  padding: 50px;
}

table.table-bordered > thead > tr > th{
  border:1px solid black;
}

table.table-bordered > tbody > tr > td {
  border:1px solid black;
}

</style>


<script>
export default {
  name: 'todo-app',
  props: {
    products: Array
  },
  data() {
    return {
    }
  },

};
</script>