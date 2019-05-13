<template>
  <div class="home container-fluid">
    <div class="row">

      <div class="col-12 product d-lg-none" v-for="product in orderBy(products, 'order')" :key="`mobile-${product.id}`">
        <router-link :to="{ name: 'Product', params: { product_slug: product.slug} }">
          <div class="background-mobile" :style="{ backgroundImage: 'url('+ getPicUrl(product.mobilephoto) +')'}">
            <div class="gradient-mobile">
              <h2 class="product-title">{{ product.name }}</h2>
            </div>
          </div>
        </router-link>
      </div>
      
      <div class="col product d-none d-lg-block" v-for="product in orderBy(products, 'order')" :key="product.id">
        <router-link :to="{ name: 'Product', params: { product_slug: product.slug} }">
          <div class="background" :style="{ backgroundImage: 'url('+ getPicUrl(product.homephoto) +')'}">
            <div class="gradient">
              <h2 class="product-title">{{ product.name }}</h2>
            </div>
          </div>
        </router-link>
      </div>

    </div>
    <div class="row">
      <div class="col-sm-12 mid-strip">
        <h3 class="font-weight-bold slogan">Technology to enhance your home and business</h3>
        <h3 class="font-weight-bold sub-slogan">Serving metro Detroit and southeast Michigan</h3>
      </div>
    </div>
    <div class="row content-row align-items-center">
      <div class="col-sm-12 col-md-6">
        <div class="video-wrapper">
          <div class="embed-responsive embed-responsive-16by9"> 
              <video controls>
                  <source src="../assets/video.mp4" type="video/mp4">
              </video>
          </div> 
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <router-link :to="{ name: 'Contact'}">
          <button type="button" class="apt-button">Schedule Appointment</button>
        </router-link>
        <div class="text-center">
          <img class="alarm-logo" src="../assets/alarm-logo.png" alt="alarm.com">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import Vue2Filters from 'vue2-filters'

export default {
  name: 'Home',
  data () {
    return {
      products: []
    }
  },
  created(){
    // fetch data from the firestore
    db.collection('products').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data(), doc.id)
        let product = doc.data()
        product.id = doc.id
        this.products.push(product)
      })
    })
  },
  mixins: [Vue2Filters.mixin],
  methods: {
    getPicUrl(img){
        var images = require.context('../assets/', true, /\.png$/)
        return images('./' + img)
    }
  }
}
</script>

<style scoped>
.product{
  padding: 0;
}
.content-row{
    padding: 30px 0;
}
.background-mobile{
  padding: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 350px;
}
.background{
  padding: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 580px;
}
.background:hover{
  opacity: 0.9;
}
a:hover{
  text-decoration: none;
}
.product-title{
  font-size: 1.6em;
  color: #0a3a6f;
  font-weight: bold;
  padding: 10px;
}
.gradient-mobile{
  background: -moz-linear-gradient(left, rgba(255,255,255,.8) 0%, rgba(255,255,255,.3) 100%);
  background: -webkit-linear-gradient(left, rgba(255,255,255,.8) 0%,rgba(255,255,255,.3) 100%);
  background: linear-gradient(to right, rgba(255,255,255,.8) 0%,rgba(255,255,255,.3) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 );
}
.gradient{
  height: 30%;
  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );
}
.mid-strip{
  background-image: url("../assets/strip-center.png");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 15px;
  color: #fff;
}
.home{
  background-image: url("../assets/blue-gradient-final.png");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  /* padding: 50px 0; */
}
.video-wrapper{
  border: 5px solid #fff;
}
video{
  width: 100%;
  height: auto;
}
.apt-button{
  height: 60px;
  width: 100%;
  color: #09386d;
  font-size: 1.2em;
  border: none;
  background: -moz-linear-gradient(left,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.5) 100%);
  background: -webkit-linear-gradient(left,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.5) 100%);
  background: linear-gradient(to right,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#80ffffff',GradientType=1 );

}
.apt-button:hover{
  background: #fff;
  cursor: pointer;
}
.alarm-logo{
  width: 85%;
  max-width: 500px;
  padding-top: 20px;
}

/**** MEDIA QUERIES ****/

@media (max-width: 767px) {
  .alarm-logo{
    padding-top: 30px;
  }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  .slogan{
    font-size: 1.7em;
  }
  .sub-slogan{
    font-size: 1.5em;
  }
  .apt-button{
    margin-top: 30px;
  }
  .product-title{
    font-size: 1.4em;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px){
  .slogan{
    font-size: 1.7em;
  }
  .sub-slogan{
    font-size: 1.5em;
  }
  .apt-button{
    margin-top: 30px;
  }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
  .slogan{
    font-size: 1.74em;
  }
  .sub-slogan{
    font-size: 1.6em;
  }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) {
  .slogan{
    font-size: 2.27em;
  }
  .sub-slogan{
    font-size: 2em;
  }
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  .slogan{
    font-size: 2.5em;
  }
  .sub-slogan{
    font-size: 2.2em;
  }
  .content-row, .slogan, .sub-slogan{
    max-width: 1200px;
    margin: auto;
  }
}
</style>
