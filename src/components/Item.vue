<template>
  <div class="item-cart">
<div class="item">
  <p>{{item.title}}</p>
</div>
  </div>
</template>

<script>
export default {
props:["item"]
}
</script>

<style lang="scss">
.item{
  width: 100%;
  height: 50px;
  border-bottom: 2px solid yellow;
  p{
    line-height: 50px;
    text-align: center;
  }
}
</style>