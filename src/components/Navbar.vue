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

                            <b-dropdown-item v-for="product in orderBy(products, 'order')" :key="product.id"
                                :to="{ name: 'Product', params: { product_slug: product.slug} }"
                                class="text-uppercase">
                                {{ product.name }}
                            </b-dropdown-item>

                        </b-nav-item-dropdown>
                        <b-nav-item exact :to="{ name: 'Reviews' }">REVIEWS</b-nav-item>
                        <b-nav-item exact :to="{ name: 'AboutUs' }">ABOUT US</b-nav-item>
                        <b-nav-item exact :to="{ name: 'Contact' }">CONTACT</b-nav-item>

                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

    </div>
</template>

<script>
import db from '@/firebase/init'
import Vue2Filters from 'vue2-filters'

export default {
    name: 'Navbar',
    data(){
        return{
            products: []
        }
    },
    created(){
    // fetch data from the firestore
    db.collection('products').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let product = doc.data()
        product.id = doc.id
        this.products.push(product)
      })
    })
  },
   mixins: [Vue2Filters.mixin]
}
</script>

<style>
.main-nav{
    background-image: url("../assets/nav-bkgd.png");
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 140px;
    padding-top: 20px;
}
ul a, .dropdown a{
    padding: 0 9px;
    font-weight: bold;
    letter-spacing: -0.7px;
    color: white;
    line-height: 1.20;
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
    background:#fff;
    padding: 0;
}
a.dropdown-item{
    margin: 0;
    color: #9ca9ca;
}
a.dropdown-item:focus, a.dropdown-item:hover{
    color: #0a3a6f;
    background: none;
}
.dropdown-menu .active{
    background-color: white;
    color: #0a3a6f;
}
.dropdown-item .active, .dropdown-item:active{
    opacity: 1;
    background-color: white;
    color:#0a3a6f; 
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
    .nav-link{
        padding: 3px 0;
    }
}
@media (max-width: 500px) {
    ul a, .dropdown a{
        font-size: 0.9em;
    }
}

@media (min-width: 992px) { 
     ul a, .dropdown a{
        font-size: 1.05em;
    }
}
@media (min-width: 1200px) { 
     ul a, .dropdown a{
        font-size: 1.1em;
    }
}
</style>

