<template>
    <header>
        <nav class="container">
            <div class="navbar-brand">
                <router-link class="logo" :to="{name:'Home'}">FireBlogs</router-link>
            </div>
            <div class="nav-links" v-show="!mobileNav">
                <router-link class="link" to="#">Home</router-link>
                <router-link class="link" to="#">Blog</router-link>
                <router-link class="link" to="#">Create Post</router-link>
                <router-link class="link" to="#">Login/Register</router-link>
            </div> 
        </nav>
        <menuIcon class="menu-icon" v-show="mobileNav" @click="toggleNav"/>
        <transition name="mobile-nav">
            <div class="mobile-nav" v-show="toggle_nav">
                <router-link class="link" to="#">Home</router-link>
                <router-link class="link" to="#">Blog</router-link>
                <router-link class="link" to="#">Create Post</router-link>
                <router-link class="link" to="#">Login/Register</router-link>
            </div>
        </transition>
    </header>
</template>

<script>
// svg icons 
import menuIcon from '../assets/Icons/bars-regular.svg'
    export default{
        name: 'navigation',

        components: {
            menuIcon,
        },

        data(){
            return {
                screenSize: null,
                toggle_nav: null,
                mobileNav: null
            }
        },


        created(){
            window.addEventListener('resize',this.checkScreen);
            this.checkScreen();
        },

        methods: {
            checkScreen(){
                this.screenSize = window.innerWidth || document.documentElement.clientWidth ||document.body.clientWidth;
                if(this.screenSize <= 750){
                    this.mobileNav = true;
                    return;
                }
                this.mobileNav = false;
                this.toggle_nav = false
                return;
            },
            toggleNav(){
                this.toggle_nav = !this.toggle_nav;
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        position: relative;
        background: #fff;
        padding: 15px 20px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        .link{
            font-weight: 500;
            padding: 0 10px;
            transition: color 300ms ease;
        }

        nav{
            display: flex;
            align-items: center;
            justify-content: space-between;

            .nav-links{
                margin-right: 40px;
            }
        }

        .menu-icon{
            position: absolute;
            right: 20px;
            width: 18px;
            top: 14px;
            cursor: pointer;
        }

        .mobile-nav{
            width: 250px;
            height: 100%;
            display: flex;
            flex-direction: column;
            background: #303030;
            position: fixed;
            top: 0;
            left: 0;
            padding: 30px 20px;
            
            
            .link{
                color: #fff;
                padding: 10px 0;
                margin-bottom: 10px;
            }
        }

        .mobile-nav-enter-active,
        .mobile-nav-leave-active{
            transition: all 1s ease-out;
        }

        .mobile-nav-enter{
            transform: translateX(-100%);
        }
        .mobile-nav-enter-to{
            transform: translateX(0%);
        }
        .mobile-nav-leave-to{
            transform: translateX(-100%);
        }
    }
</style>