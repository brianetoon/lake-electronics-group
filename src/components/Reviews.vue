<template>
    <div class="reviews-page">
       
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
            <div class="row content-row margin">
                <div class="col-md-6 order-md-12 btn">
                    <router-link :to="{ name: 'SubmitReview'}">
                        <button type="button" class="review-button">Write a review</button>
                    </router-link>
                </div>
                <div class="col-md-6 order-md-1 five">
                    <h2 class="text font-weight-bold heading">5 Out of 5 Stars / {{ reviews.length }} Reviews</h2>
                </div>
            </div>
            <div class="row margin pb-3">
                <div class="col-12 review" v-for="(review, index) in orderBy(reviews, 'date', -1)" :key="index">
                    <img :src="getPicUrl(stars)" alt="five-stars">
                    <p class="info text">{{ review.comment }}</p>
                    <p class="name-date text">{{ review.name }} on {{ review.date.seconds | moment("MM/DD/YYYY") }}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import db from '@/firebase/init'
import Vue2Filters from 'vue2-filters'

export default {
    name: 'Reviews',
    data(){
        return{
            reviews: [],
            banner: "review-pic.png",
            gradient: "product-background.png",
            stars: "five-stars.png",
            title: "Lake Electronics Group customer reviews"
        }
    },
    mixins: [Vue2Filters.mixin],
    methods:{
        getPicUrl(img){
            var images = require.context('../assets/', true, /\.png$/)
            return images('./' + img)
        }
    },
    created(){
        // fetch data
        db.collection('reviews').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                // assign local variable to each document
                let review = doc.data()
                review.id = doc.id
                this.reviews.push(review)
                this.reviews = this.reviews.filter(review => {
                    return review.rating == "5"
                })
            })
            // console.log(this.reviews)
        })
    }
}
</script>

<style scoped>
.banner-background{
    padding: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
}
.page-title{
    font-weight: bold;
    margin: 0;
    padding: 5px 15px 10px 15px;
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
.content-row{
    padding: 20px 0;
}
.text{
    color: #fff;
    font-family: freight-sans-pro, sans-serif;
    font-style: normal;
    margin: 0;
}
.info{
    font-size: 1.2em;
    padding: 5px 0;
}
.name-date{
    font-size: 1em;
}
.review{
    padding: 15px 0;
}
.margin{
    max-width: 850px;
    margin: auto;
}
.heading{
    padding-top: 15px;
    font-size: 1.5em;
}
.heading-col{
    padding-left: 0;
}
.btn, .five{
    padding: 0;
}
.review-button{
    height: 60px;
    width: 100%;
    color: #09386d;
    font-family: freight-sans-pro, sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    border: none;
    background: -moz-linear-gradient(left,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.5) 100%);
    background: -webkit-linear-gradient(left,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.5) 100%);
    background: linear-gradient(to right,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.5) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#80ffffff',GradientType=1 );

}
.review-button:hover{
  background: #fff;
  cursor: pointer;
}

/**** MEDIA QUERIES ****/

@media (max-width: 575px){
    .page-title{
        font-size: 1.5em;
    }
    .banner-background{
        height: 220px;
    }
}

/* small devices and lower */
@media (max-width: 767px){
    .five{
        padding-top: 20px;
    }
    .page-title{
        font-size: 1.6em;
    }
    .banner-background{
        height: 250px;
    }
}
/* larger devices and up */
@media (min-width: 992px){
    .banner-background{
        height: 350px;
    }
}
</style>


