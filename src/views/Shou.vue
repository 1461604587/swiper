<template>
  <div class="shou-cart">
  <div class="header">
   <input type="text">
  </div>
  <div class="swiper">
<Swp/>
  </div>
  <div class="icon">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
  </div>
  <div class="list">
<Item v-for="(item,index) in list" :key="index" :item="item"/>
  </div>
  </div>
</template>

<script>
import Item from "../components/Item"
import Swp from "../components/Swp"
import {mapState,mapActions} from "vuex"
export default {
components:{
  Item,Swp
},
computed:{
 ...mapState(['list'])
},
created(){
this.getList()
},
methods:{
...mapActions(['getList'])
}
}
</script>

<style lang="scss">
.shou-cart{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header{
    width: 100%;
    height: 50px;
    input{
      width: 100%;
      height: 100%;
      border-radius: 30px;
      border: 1px solid black;
    }
  }
  .swiper{
    width: 100%;
    height: 200px;
    border:1px solid blue;
  }
  .icon{
    width: 100%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    p{
      width:17%;
      height: 47%;
      background: red;
      margin: 5px 5px;

    }
  }
  .list{
    width: 100%;
    flex: 1;
    overflow: auto;
    border:1px solid black;
  }
}
</style>