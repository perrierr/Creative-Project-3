<template>
<div class=sidepanel>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <div class="wrapper side-panel-open">
    <div class="main">
        <button @click="toggle()" class="side-panel-toggle" type="button">
            <span class="material-icons sp-icon-open">keyboard_double_arrow_left</span>
            <span class="material-icons sp-icon-close">keyboard_double_arrow_right</span>
        </button>
        <div class="side-panel">
            This is the side panel content
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    
  }
}

</script>

<style scoped>

.side-panel-toggle {
  width: 40px;
  height: 100%;
  flex-shrink: 0;
  display: grid;
  place-items: center;

  color: white;
  background: grey;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  cursor: pointer;
}

.side-panel-toggle:hover {
  background: black;
}

.sp-icon-close {
  display: none !important;
}

.side-panel {
  display: none;
  width: 200px;
  flex-shrink: 0;
  color: white;
  background: grey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
}

.side-panel-open .side-panel {
    display: initial;
}

.side-panel-open .sp-icon-open {
  display: none !important;
}

.side-panel-open .sp-icon-close {
  display: initial !important;
}

</style>