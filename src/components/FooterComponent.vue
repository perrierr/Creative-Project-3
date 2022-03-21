<template>
 <div class='footer'>
    <div class='footer-item'><a id='link-footer' href="https://github.com/BYUCS260/lab-1-photography-website-perrierr">Source</a></div>
  </div>
</template>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    
  }
  
  .footer-item > #link-footer { /* a means it has an anchor*/
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3em;
    text-decoration: none;
    background: #af829b;
    color: white;
    padding: 1em;
    width: 100%;
  }
  
  #link-footer {
    color: currentColor;
    display: block;
    text-align: center;
    text-decoration: none;
    color: white;
  }
  
  .footer-item > #link-footer:hover {
    background: #af829b;
    animation: shake 2s;
    animation-iteration-count: 2;
  }
  
  @keyframes shake {
    0% {
        transform: translate(1px, 1px);
    }
  
    50% {
        transform: translate(-1px, -1px) rotate(12deg);/*usually put it 0.2deg*/
    }
  
    100% {
        transform: translate(1px, 1px)  rotate(-12deg);
    }
  }
</style>