<template>
    <div class="main-nav">

        <div class="container">
            <b-navbar toggleable="md" type="dark" variant="">
                <b-navbar-brand href="#">
                    <b-link :to="{ name: 'Home' }">
                        <img src="../assets/logo.png" alt="logo" />
                    </b-link>
                </b-navbar-brand>
                <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
                <b-collapse is-nav id="nav_dropdown_collapse">
                    <b-navbar-nav class="ml-auto">
                        <b-link exact :to="{ name: 'Home' }">Home</b-link>
                        <b-link exact :to="{ name: 'Products' }">Products</b-link>
                        <b-link exact :to="{ name: 'Reviews' }">Reviews</b-link>
                        <b-link exact :to="{ name: 'ServiceArea' }">Service Area</b-link>
                        <b-link exact :to="{ name: 'Contact' }">Contact</b-link>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
    }
}
</script>

<style>
.main-nav{
    background-image: url("../assets/nav-bkgd.png");
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 87px;
}
ul a{
    padding: 0 10px;
    font-weight: bold;
    color: white;
    opacity: 0.64;
}
.active{
    opacity: 1;
}
a:hover{
    color: white;
    opacity: 1;
    text-decoration: none;
}
@media screen and (min-width: 768px){
    ul a{
        margin-top: 20px;
    }
}
@media screen and (max-width: 767px){
    nav ul{
        display: flex;
        align-items: flex-end;
    }
}
</style>

