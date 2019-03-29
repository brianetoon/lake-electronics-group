<template>
    <div class="product" v-if="product">
        
        <div class="container-fluid banner-background" :style="{ backgroundImage: 'url('+ getPicUrl(product.banner) +')'}">
            <div class="row">
                <div class="col-12 title-background">
                    <h2 class="page-title">{{ product.name }}</h2>
                </div>
            </div>
            <div class="row" v-if="product.bannerpic">
                <div class="col-6 banner-pic-wrapper">
                    <img class="banner-pic media-border" :src="getPicUrl(product.bannerpic)">
                </div>
            </div>
        </div>

        <div class="container-fluid info-background justify-content-center">

            <div class="row content-row">

                <div class="col-xs-12 col-md-6">
                    <p class="info-text" v-for="(para, index) in product.info" :key="`A-${index}`">{{ para }}</p>
                    <div class="d-none d-lg-block">
                        <h5 class="title-text">{{ product.titlelist }}:</h5>
                        <p class="list-text" v-for="(item, index) in product.list" :key="`B-${index}`">{{ item }}</p>
                    </div>
                </div>

                <div class="col-xs-12 col-md-6 pic-margin text-center">
                    <img class="info-pic media-border" :src="getPicUrl(product.infopic)">
                    <img class="alarm-lg d-none d-lg-block" :src="getPicUrl(product.alarm)" v-if="product.alarm">
                </div>

            </div>

            <div class="row content-row d-lg-none">
                <div class="col-xs-12 col-md-6 list-margin">
                    <h5 class="title-text">{{ product.titlelist }}:</h5>
                    <p class="list-text" v-for="(item, index) in product.list" :key="`B-${index}`">{{ item }}</p>
                </div>

                <div class="col-xs-12 col-md-6 text-center">
                    <img class="alarm" :src="getPicUrl(product.alarm)" v-if="product.alarm">
                </div>
            </div>

            <div class="row content-row justify-content-center media-wrapper" v-if="product.video">
                <div class="col-xs-12 col-sm-12 col-md-10 col-lg-7 media-border">
                        <div class="video">
                            <div class="embed-responsive embed-responsive-16by9"> 
                                <video controls>
                                    <source :src="getVidUrl(product.video)" type="video/mp4">
                                </video>
                            </div> 
                        </div>
                    
                </div>
            </div>

            <div class="row content-row justify-content-center media-wrapper" v-if="product.carousel">
                <div class="col-xs-12 col-sm-12 col-md-10 col-lg-7 media-border">
                    <b-carousel id="carousel1"
                        style="text-shadow: 1px 1px 2px #333;"
                        controls
                        indicators
                        background="rgba(255,255,255, .5)"
                        :interval="4000"
                        img-width="566"
                        img-height="360"
                        v-model="slide"
                        @sliding-start="onSlideStart"
                        @sliding-end="onSlideEnd"
                    >
                        <b-carousel-slide 
                            v-for="(image, index) in product.carousel" :key="index"
                            :img-src="getSliderPic(product, index)">
                        </b-carousel-slide>

                    </b-carousel>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Product',
    data(){
        return{
            product: null,
            slide: 0,
            sliding: null
        }
    },
    created(){
        let ref = db.collection('products').where('slug', '==' , this.$route.params.product_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.product = doc.data()
                this.product.id = doc.id
            })
        })
    },
    methods: {
    getPicUrl(img){
        var images = require.context('../assets/', true, /\.png$/)
        return images('./' + img)
    },
    getVidUrl(vid){
        var images = require.context('../assets/', true, /\.mp4$/)
        return images('./' + vid)
    },
    getSliderPic(product, index){
        var images = require.context('../assets/', true, /\.jpg$/)
        return images('./' + product.carousel[index])
    },
    onSlideStart (slide) {
        this.sliding = true
    },
    onSlideEnd (slide) {
        this.sliding = false
    }
  }
}
</script>

<style>
.page-title{
    font-weight: bold;
    margin: 0;
    padding: 5px 15px 10px 30px;
    background: -moz-linear-gradient(left, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%);
    background: -webkit-linear-gradient(left, rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.3) 100%);
    background: linear-gradient(to right, rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.3) 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 );
}
.title-background{
    padding: 0;
}
.banner-background{
    padding: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
}
.info-background{
    background-image: url("../assets/product-background.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.content-row{
    padding: 20px 0;
}
.info-text{
    color: #fff;
    font-family: freight-sans-pro, sans-serif;
    font-style: normal;
    font-size: 1.1em;
}
.title-text{
    color: #fff;
    font-family: freight-sans-pro, sans-serif;
    font-style: normal;
    font-weight: bold;
}
.list-text{
    color: #fff;
    font-family: freight-sans-pro, sans-serif;
    font-style: normal;
    font-size: 1.2em;
    margin: 0;
}
.info-pic{
    width: 100%;
}
.banner-pic{
    width: 100%;
    max-width: 450px;
}
.banner-pic-wrapper{
    padding: 50px 30px;
}
.alarm{
    width: 85%;
    padding: 20px 0;
    max-width: 450px;
}
.alarm-lg{
    width: 85%;
    padding: 20px 0;
    max-width: 450px;
    margin: 0 auto;
}
.video{
    width: 100%;
    background-color: black;
}
.media-border{
    border: 7px solid rgba(255,255,255, .5);
    padding: 0;
    border-radius: 1%;
}

/**** MEDIA QUERIES ****/

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
    .page-title{
        font-size: 1.5em;
    }
    .media-wrapper{
        padding: 15px;
    }
    .banner-background{
        height: 350px;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px){
    .page-title{
        font-size: 1.5em;
    }
    .media-wrapper{
        padding: 15px;
    }
    .banner-background{
        height: 400px;
    }
}
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
    .pic-margin{
        margin-top: -80px;
    }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) {
    .pic-margin{
        margin-top: -85px;
    }
}
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    .pic-margin{
        margin-top: -90px;
    }
}
</style>


