<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
  import Navigation from "./components/navigation.vue";
  import Footer from "./components/footer.vue";
  export default {
    name: "app",
    components: {
      Navigation,
      Footer
    },
    created() {},
    mounted() {},
    methods: {},
    watch: {},
  };
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
    line-height: 1.5;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;
  }

  .link {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: black;

    &:hover {
      color: rgb(4, 94, 230);
    }
  }

  .link-light {
    color: #fff;
  }

  // global for header and footer
  .logo {
    font-weight: 500;
    font-size: 24px;
    text-decoration: none;
  }

  .d-flex {
    display: -webkit-flex;
    display: flex;
  }

  .arrow {
    width: 18px;
    vertical-align: middle;
    margin-left: 10px;
  }
</style>