<template>
  <div class="home-grid-container">
    <img class='photo-grid-col-2' src='@/assets/success.png'/>
  </div>
</template>

<style scoped>

.home-grid-container {
    --num-cols: 1;
    --row-height: 450px; 
    display: flex;
    grid-template-columns: repeat(var(--num-cols), 1fr);
    grid-auto-rows: var(--row-height);
    gap: var(--gap);
}

.home-grid-container > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.photo-grid-col-2 {
    grid-column: span 1;
}

img {
  display: block;
  margin-top: 105px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 40%;
}

</style>
