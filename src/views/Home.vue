<template>
  <div class="home">
    <!------------------------------------ BLOG POSTS -------------------- -->
    <blog-post>
      <div class="d-flex main-blogSEction">
        <div class="content-section bg-dark width-40">
          <div class="content ">
            <h1>{{mainpage.title}}</h1>
            <p>
              {{mainpage.body}}
            </p>
            <router-link class="link link-light" to="#">
              Login/Register
              <Arrow class="arrow arrow-light" />
            </router-link>
          </div>
        </div>

        <div class="width-60">
          <img :src="require(`../assets/blogPhotos/${mainpage.img}.jpg`)" alt="">
        </div>
      </div>
    </blog-post>

    <blog-post v-for="item in blogs" :key="item.title">
      <div class="d-flex">

        <!-- <div :class="{'width-60': item.title == 'Blog 1', 'width-40': item.title == 'Blog 2'}"> -->
        <div :class="item.title === 'Blog 1' ? 'width-60':'width-60 order-2'">
          <img :src="require(`../assets/blogPhotos/${item.img}.jpg`)" alt="">
        </div>

        <div :class="item.title === 'Blog 1' ? 'content-section width-40':'content-section width-40 order-1'">
          <div class="content ">
            <h1>{{item.title}}</h1>
            <p>
              {{item.body}}
            </p>
            <router-link class="link" to="#">
              View Blog
              <Arrow class="arrow" />
            </router-link>
          </div>
        </div>

      </div>
    </blog-post>




    <!-- ----------------- BLOG CARDS --------------------------------- -->
    <section class="BlogCards">
      <div class="container d-flex">
        <BlogCard :post="post" v-for="(post, index) in BlogCards" :key="index" />
      </div>
    </section>


  </div>
</template>

<script>
  import Arrow from '../assets/Icons/arrow-right-light.svg';
  import BlogPost from '../components/blogpost.vue';
  import BlogCard from '../components/blogcard.vue'
  export default {
    name: "Home",
    components: {
      BlogCard,
      BlogPost,
      Arrow,
    },
    data() {
      return {
        mainpage: {
          title: "Welcome Company",
          body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deleniti eaque quam sequi aperiam ipsa.",
          img: "coding"
        },
        blogs: [{
            title: "Blog 1",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deleniti eaque quam sequi aperiam ipsa.",
            img: "beautiful-stories"
          },
          {
            title: "Blog 2",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deleniti eaque quam sequi aperiam ipsa.",
            img: "designed-for-everyone"
          },
        ],
        BlogCards: [{
            title: 'Blog Title #1',
            coverImg: 'stock-1',
            blogDate: 'Feb 7, 2022'
          },
          {
            title: 'Blog Title #2',
            coverImg: 'stock-2',
            blogDate: 'Feb 7, 2022'
          },
          {
            title: 'Blog Title #3',
            coverImg: 'stock-3',
            blogDate: 'Feb 7, 2022'
          },
          {
            title: 'Blog Title #4',
            coverImg: 'stock-4',
            blogDate: 'Feb 7, 2022'
          },
        ]
      }
    }
  };
</script>

<style lang="scss" scoped>

  .BlogCards {
    background: rgb(238, 238, 238);
    padding: 80px 0;

    .container {
      justify-content: space-between;
    }
  }
</style>