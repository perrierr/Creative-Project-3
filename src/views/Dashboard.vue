<template>
  <div class="dashboard" style="background-color: #B1B1B1">
    <div class="sidebar">
    <SidebarComponent />
    <FooterComponent/>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <!-- <div class=sidepanel>
      <SideComponent />
    </div> -->
  </div>
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent"
import FooterComponent from "@/components/FooterComponent"
//import SideComponent from "@/components/SideComponent"

export default {
  name: 'Home-view',
  
  components: {
    SidebarComponent,
    //SideComponent
    FooterComponent
  }

}

</script>

<style scoped>

.dashboard {
  display: flex;
  background-color: white;
  height: 100vh;
  width: 100vw;
}

.sidebar {
  flex: 0.7;
  height: 100%;
  justify-content: space-between;
}

.content {
  flex: 4;
  background-color: #212529;
  border-radius: 20px;
  margin-right: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.sidepanel {
  flex: 0.5;
  margin-top: 15px;
  margin-bottom: 15px;
  /*border: solid 3px red;*/
}

.footer {
  flex: 0.5;
}
</style>


