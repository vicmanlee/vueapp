<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  const ERR_OK = 0;
  import header from './components/header/header.vue';
  export default{
    data () {
     return {
       seller: {}
       };
     },
     created () {
       this.$http.get('/api/seller').then((response) => {
         response = response.body;
         if (response.errno === ERR_OK) {
           this.seller = response.data;
           };
       });
     },
    components: {'v-header': header}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    width: 100%
    height : 40px
    line-height : 40px
    border-bottom : 1px solid rgba(7,17,27,0.1)
  .tab-item
    flex:1
    text-align :center
    & > a
      display: block
      font-size: 14px
      color: #59c795
      &.active
        color: #f35353
</style>


