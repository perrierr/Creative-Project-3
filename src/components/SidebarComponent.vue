<template>
<div class="sidebar-view">
        <div>
            <h2><b>Set Goals</b></h2>
        </div>
        <div class="nav flex-column nav-pills" id="v-pills-tab">
            <div class="home-container">
                <router-link id="link-home" to="/" active-class="home-active" tag="button" class="side-btn">
                    <div class="link-container">
                        <h1><span class="fa fa-home"></span></h1>
                    </div>
                </router-link>
            </div>
            <router-link to="/experience" active-class="active" tag="button" class="side-btn">
                <div class="link-container">
                    Experience
                </div>
            </router-link>
            <router-link to="/financial" active-class="active" tag="button" class="side-btn">
                <div class="link-container">
                    Financial
                </div>
            </router-link>
            <router-link to="/intellectual" active-class="active" tag="button" class="side-btn">
                <div class="link-container">
                    Intellectual
                </div>
            </router-link>
        </div>
</div>
    
</template>

<script>


export default {

}
</script>

<style scoped>

h2 {
    color: #212529;
    margin-top: 18px;
    margin-bottom: 10px;  
}

h1 {
    color: #212529;
    margin-top: 15px;
    margin-bottom: 10px;
}


.side-btn:focus {
    outline: none;
}

.side-btn.active {
position: relative;
background-color: #212529;
color: white;
font-weight: 500;
margin-left: 5px;
border-radius: 10px 0 0 10px;
}

.side-btn.active {
position: relative;
background-color: #212529;
color: white;
font-weight: 500;
margin-left: 5px;
border-radius: 10px 0 0 10px;
}

.side-btn {
padding: 15px;
border: none;
cursor: pointer;
font-size: 16px;
color: #212529;
background-color: transparent;
}

.home-container > #link-home { 
  display: flex;
  justify-content: center;
  color: white;
  width: 220px;
  /*border: solid 2px purple;*/
}

.home-container > #link-home:hover {
  animation: shake 2s;
  animation-iteration-count: 2;
}

@keyframes shake {
  0% {
      transform: translate(1px, 1px);
  }

  50% {
      transform: translate(-1px, -1px) rotate(16deg);/*usually put it 0.2deg*/
  }

  100% {
      transform: translate(1px, 1px)  rotate(-12deg);
  }
}

</style>
