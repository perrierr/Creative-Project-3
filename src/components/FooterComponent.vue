<template>
 <div class='footer'>
    <div class='footer-item'><a id='link-footer-1' href="https://github.com/perrierr/Creative-Project-3"><h1><span class="fa-brands fa-github"></span></h1></a></div>
  </div>
</template>

<style scoped>
  
.footer-item > #link-footer-1 { 
  display: flex;
  padding-left: 5px;
  margin-top: 50px;
  justify-content: center;
  width: 220px;
  color: white;
  /*border: solid 2px purple;*/
}

.footer-item > #link-footer-1:hover {
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