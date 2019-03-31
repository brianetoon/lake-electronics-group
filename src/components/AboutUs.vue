<template>
    <div class="about-us">
        
        <div class="container-fluid banner-background" :style="{ backgroundImage: 'url('+ getPicUrl(banner) +')'}">
            <div class="row">
                <div class="col-12">
                    <h2 class="page-title">
                        {{ title }}
                    </h2>
                </div>
            </div>
        </div>

        <div class="container-fluid info-background" :style="{ backgroundImage: 'url('+ getPicUrl(gradient) +')'}">
            <div class="row content-row">
                <div class="col-md-12 col-lg-6">
                    <p class="info-text" v-for="(para, index) in info" :key="index">
                        {{ para }}
                    </p>
                    <h5 class="title-text">{{ titlelist | uppercase }}:</h5>
                    <p class="list-text" v-for="(item, index) in list" :key="index">
                        {{ item }}
                    </p>
                </div>
                <div class="col-md-12 col-lg-6 text-center text-white">
                    <img class="map" :src="getPicUrl(map)">
                    <h3 class="font-weight-bold">Located in Walled Lake</h3>
                    <h2 class="font-weight-bold">Serving Michigan homes and businesses for 30 years</h2>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'AboutUs',
    data(){
        return{
            title: "About Lake Electronics Group",
            banner: "about-us.png",
            gradient: "product-background.png",
            map: "service-area.png",
            titlelist: "top industry brands",
            list:[
                "DSC Touch security and automation",
                "Lutron window treatments",
                "Monitor Audio",
                "Luxul",
                "Logitech",
                "Fire-Lite fire alarms",
                "Universal Remote"
            ],
            info:[
                "Lake Electronics Group has 30 years of experience, in-depth knowledge, and dependable service in providing home and workplace technology. We install state-of-the-art electronics in new and existing homes, and businesses, using top industry brands.",
                "From enjoying your favorite media indoors and out, to automating your home, to keeping your property secure, Lake has you covered. We are a family owned business located in Walled Lake, Michigan.",
                "Take advantage of turnkey service, competitive pricing, and work completed in a timely manner. When you engage our highly personalized services, you deal with the company’s key people. Call 248-896-2099 for a free estimate or consultation."
            ]
        }
    },
    methods:{
        getPicUrl(img){
            var images = require.context('../assets/', true, /\.png$/)
            return images('./' + img)
        }
    }
}
</script>

<style scoped>
.banner-background{
    padding: 0;
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
}
.page-title{
    font-weight: bold;
    margin: 0;
    padding: 5px 15px 10px 30px;
    background: -moz-linear-gradient(left, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%);
    background: -webkit-linear-gradient(left, rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.3) 100%);
    background: linear-gradient(to right, rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.3) 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 );
}
.info-background{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.info-text{
    color: #fff;
    font-family: freight-sans-pro, sans-serif;
    font-style: normal;
    font-size: 1.2em;
}
.map{
    width: 100%;
    max-width: 500px;
    padding: 15px 0;
}
.content-row{
    padding: 20px 0;
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

/**** MEDIA QUERIES ****/

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px){
    .banner-background{
        height: 350px;
    }
    .page-title{
        font-size: 1.5em;
    }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px){
    .banner-background{
        height: 400px;
    }
    .page-title{
        font-size: 1.6em;
    }
}
/* Large devices and up */
@media (min-width: 992px) {
    .map{
        margin-top: -30%;
    }
}
</style>


