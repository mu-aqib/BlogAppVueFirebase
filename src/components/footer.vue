<template>
    <footer>
        <div class="container d-flex">

            <div class="left d-flex">
                <router-link class="logo link-light" :to="{name:'Home'}">FireBlogs</router-link>

                <div class="socialMedia">
                    <a href="#"><youTube class="icon" /></a>
                    <a href="#"><twitter class="icon" /></a>
                    <a href="#"><linkedin class="icon" /></a>
                    <a href="#"><instagram class="icon" /></a>
                </div>
            </div>

            <div class="bottom d-flex">
                <router-link class="link link-light" to="#">Home</router-link>
                <router-link class="link link-light" to="#">Blog</router-link>
                <router-link class="link link-light" to="#">Login/Register</router-link>
            </div>

            <div class="right">
                <p> Copyright 2022 All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>
<script>
    import twitter from '../assets/Icons/twitter-brands.svg';
    import instagram from '../assets/Icons/instagram-brands.svg';
    import linkedin from '../assets/Icons/linkedin-brands.svg';
    import youTube from '../assets/Icons/youtube-brands.svg';
    export default {
        name: 'footerCom',

        components: {
            twitter,
            instagram,
            linkedin,
            youTube,
        },
    }
</script>

<style lang="scss" scoped>
    footer {
        background: #303030;
        padding: 60px 20px;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        margin-top: auto;
        

        .container{
            justify-content: space-between;

            @media (max-width: 750px) {
                align-items: center;
                flex-direction: column;
                gap: 30px 0px;

                .logo{
                    margin-bottom: 20px;
                }
            }
        }

        .left{
            
            padding: 2px 0;
            flex-direction: column;
            justify-content: space-between;

            .socialMedia{
                a{ margin-right: 20px; }

                .icon{
                    width: 20px;
                    color: #fff;
                }
            }

            @media (min-width:750px) {
                width: 25%;
            }
            
        }

        .bottom{
            flex-direction: column;
            align-items: flex-start;

            .link{
                padding: 0 20px;
                margin-bottom: 20px;
                transition: color 300ms ease;
            }
            .link:last-child{
                margin-bottom: 0;
            }
        }

        .right{
            margin-top: auto;
        }

    }
</style>>