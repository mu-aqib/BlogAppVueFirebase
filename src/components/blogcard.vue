<template>

    <div class="card">
        <div class="card-header" style="color:black">
            <img :src="require(`../assets/blogCards/${post.coverImg}.jpg`)" alt="">
        </div>
        <div class="card-body">
            <h2 class="title">{{post.title}}</h2>
            <h4 class="decription">Posted on {{post.blogDate}}</h4>

            <div class="footer-link">
                <router-link to="#" class="link">VIEW THE POST
                    <Arrow class="arrow" />
                </router-link>
            </div>
        </div>
    </div>

</template>
<script>
    import Arrow from '../assets/Icons/arrow-right-light.svg';
    export default {
        name: 'BlogCards',

        components: {
            Arrow,
        },

        props: {
            post: {
                type: Object,
                required: true,
            },
        }
    }
</script>
<style lang="scss" scoped>
    .card {
        width: 24%;
        background: white;
        overflow: hidden;
        border-radius: 5px 5px 0 0;

        .card-header {
            position: relative;
            height: 180px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .card-body {
            padding: 20px 10px;

            .title {
                font-weight: 400;
            }

            .decription {
                font-size: 14px;
                font-weight: 500;
            }

            .footer-link {
                font-size: 12px;
                font-weight: 600;
                margin-top: 50px;
            }
        }
    }
</style>