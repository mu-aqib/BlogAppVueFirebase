<template>
    <div>
        <slot>
            
        </slot>
    </div>
</template>
<script>
  export default {
    name: "blogpost",
  };
</script>
<style lang="scss" scoped>
  .width-60{
    width: 55%;
  }
  img{
    width: 100%;
    display: block;
  }
  .width-40{
    width: 45%;
  }

  .bg-dark{
    background: #303030;
    color: #fff;
  }
  .content-section{
    padding: 0 130px;
    display: flex;

    .content{
      margin: auto;

      .link{
        font-size: 14px;
        margin: 10px 0;
        display: inline-block;

        &.link-light:hover{
          color: rgb(221, 214, 214);
        }
      }
    }
  }
  h1{
    font-weight: 400;
  }

  .order-1{
    order: 1;
  }
  .order-2{
    order: 2;
  }
  
</style>>