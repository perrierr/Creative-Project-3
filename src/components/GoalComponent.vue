<template>
<div id="container">
  {{page}} : pageType
  <div class="d-flex">
    <input v-model="goal" type="text" class="form-control" placeholder="Enter goal">
    <input v-model="status" class="form-control" placeholder="Enter status" />
    <input v-model="date" class="form-control" placeholder="Enter date" />
    <button @click="submitGoal()" class="button" rounded-0>SUBMIT</button>
  </div>

    <!--Task Table-->
<table class="table table-striped table-dark mt-5">
  <thead>
    <tr>
      <th scope="col">Goal</th>
      <th scope="col">Status</th>
      <th scope="col">To Do By</th>
      <th scope="col" class="center-text"></th>
      <th scope="col" class="center-text"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(goal, index) in goals" :key="index">
      <td >{{ goal.name }}</td> 
      <td>{{ goal.status }} </td>
      <td> {{ goal.date }} </td>
      <td><div class="pointer" @click="editGoal(index, goal)"><span class="fa fa-pen"></span></div></td>
      <td><div class="pointer" @click="deleteGoal(goal)"><span class="fa fa-trash"></span></div></td>
    </tr>
  </tbody>
</table>

</div>
</template>



<style scoped>

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.form-comtrol {
  margin-right: 10px;
  margin-left: 5px;
}

input:focus, textarea:focus, select:focus{
    text-decoration: none;;
    outline: none;
    border: solid 2px #212529;
}

#container {
  height: 50vh;
  width: 50vw;
  margin: 2rem;
}

.pointer {
  cursor: pointer;
}

.button {
transition-duration: 0.4s;
}

.button:hover {
  background-color: #343a40;
  color: white;
}

.in-progress {
  color: #ffc107;
}

.to-do {
 color: #dc3545;
}

.finished {
  text-decoration: line-through;
  color: #198754;
}

#date {
    padding: 5px;
    color:grey;
    background: transparent
}
</style>

<script>
import axios from 'axios';
export default {
  props: {page: String},
  data() {
    return {
      goalId: '',
      goal: '',
      date: '',
      status: '',
      editedGoal: null,
      editedStatus: null,
      editedDate: null,
      goals: [],
    }
  },
  created() {
    this.getGoals();
  },
  methods: {
    async getGoals() {
      try {
        let response = await axios.get("/api/goals");
        this.goals = response.data.filter(v => v.page === this.page);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async submitGoal() {   
      if(this.goal.length === 0) return;

      if(this.editedGoal === null) {
        this.goals.push({
        page: this.page,
        name: this.goal,
        status: this.status,
        date: this.date,
        });
      //connect to the back-end
        try {
          await axios.post("/api/goals", {
            page: this.page,
            name: this.goal,
            status: this.status,
            date: this.date,
          });
          this.goal = "";
          this.status = "";
          this.date = "";
          return true;
        } catch (error) {
          console.log(error);
        }
      } else {
        this.goals[this.editedGoal].page = this.page;
        this.goals[this.editedGoal].name = this.goal;
        this.goals[this.editedGoal].status = this.status;
        this.goals[this.editedGoal].date = this.date;

        try {
          await axios.put("/api/goals/" + this.goalId, {
            page: this.page,
            name: this.goal,
            status: this.status,
            date: this.date,
          });
          this.editedGoal = null; 
          return true;
        } catch (error) {
          console.log(error);
        }
        this.editedGoal = null; 
        this.goalId = ''; 
      }
    
      this.goal = '';
      this.status = '';
      this.date = '';  

    },
    
    async deleteGoal(goal) {
      try {
        await axios.delete("/api/goals/" + goal.id);
        this.getGoals();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    
    editGoal(index, goal) {   
    this.goalId = goal.id;
    this.goal = this.goals[index].name;
    this.date = this.goals[index].date;
    this.status = this.goals[index].status;
    this.editedGoal = index;
    },
  }
};
</script>


