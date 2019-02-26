<template>
    <div class="main-nav">

        <div class="">
            <b-navbar toggleable="lg" type="dark" variant="">
                <b-navbar-brand href="#">
                    <b-link :to="{ name: 'Home' }">
                        <img src="../assets/lake-logo.png" alt="logo" />
                    </b-link>
                </b-navbar-brand>
                <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
                <b-collapse is-nav id="nav_dropdown_collapse">
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item exact :to="{ name: 'Home' }">HOME</b-nav-item>
                        <b-nav-item-dropdown text="PRODUCTS">
                            <b-dropdown-item href="#">Media Wiring and Installation</b-dropdown-item>
                            <b-dropdown-item href="#">Home Security</b-dropdown-item>
                            <b-dropdown-item href="#">Home Theater and Audio</b-dropdown-item>
                            <b-dropdown-item href="#">Central Vacuum Systems</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item exact :to="{ name: 'Reviews' }">REVIEWS</b-nav-item>
                        <b-nav-item exact :to="{ name: 'ServiceArea' }">ABOUT US</b-nav-item>
                        <b-nav-item exact :to="{ name: 'Contact' }">CONTACT</b-nav-item>

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
ul a, .dropdown a{
    padding: 0 9px;
    font-weight: bold;
    letter-spacing: -0.7px;
    color: white;
}
.active{
    opacity: 1;
}
a:hover{
    color: white;
    opacity: 1;
    text-decoration: none;
}
.dropdown-menu{
    background: gray;
}
@media screen and (min-width: 992px){
    ul a{
        margin-top: 28px;
    }
    .dropdown{
        margin-top: 8px;
    }
}
@media screen and (max-width: 991px){
    nav ul{
        display: flex;
        align-items: flex-end;
    }
}
</style>

