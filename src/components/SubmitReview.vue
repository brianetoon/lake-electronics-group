<template>
  <div class="submit-review">

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
        <div class="col-12 review-form">
          <form @submit.prevent="SubmitReview">

            <div class="form-group greeting">
              <p>Thank you for taking the time to tell us about your experience. Please fill out the form below.</p>
            </div>

            <div class="form-group rating">
              <label for="rating">Rating</label>
              <div class="starrating d-flex justify-content-end flex-row-reverse">
                <input type="radio" id="star5" name="rating" value="5" v-model="rating"/><label for="star5" title="5 star"><font-awesome-icon icon="star" size="2x" /></label>
                <input type="radio" id="star4" name="rating" value="4" v-model="rating"/><label for="star4" title="4 star"><font-awesome-icon icon="star" size="2x" /></label>
                <input type="radio" id="star3" name="rating" value="3" v-model="rating"/><label for="star3" title="3 star"><font-awesome-icon icon="star" size="2x" /></label>
                <input type="radio" id="star2" name="rating" value="2" v-model="rating"/><label for="star2" title="2 star"><font-awesome-icon icon="star" size="2x" /></label>
                <input type="radio" id="star1" name="rating" value="1" v-model="rating"/><label for="star1" title="1 star"><font-awesome-icon icon="star" size="2x" /></label>
              </div>
            </div>
            

            <div class="form-group comment">
              <label for="comment">Comments</label>
              <textarea class="form-control" name="comment" cols="30" rows="10" v-model="comment"></textarea>
            </div>
            <div class="form-group name">
              <label for="name">Name</label>
              <input class="form-control" type="text" name="name" v-model="name">
            </div>
            <p class="font-weight-bold text-danger text-center">{{ feedback }}</p>
            <div class="form-group button">
              <button class="blue-button">Submit Review</button>
            </div>
          </form>
        </div>
      </div>

    </div>	
  </div>

</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'SubmitReview',
    data(){
        return{
          title: "Write a Review",
          banner: "review-pic.png",
          gradient: "product-background.png",
          name: null,
          comment: null,
          rating: null,
          date: {
            seconds: null,
            nanoseconds: 0
          },
          feedback: null
        }
    },
    methods: {
      SubmitReview(){
        if(this.name && this.comment && this.rating){
          this.feedback = null
          // create a timestamp
          this.date.seconds = Math.round(+new Date()/1000)

          db.collection('reviews').add({
            name: this.name,
            comment: this.comment,
            rating: this.rating,
            date: this.date
          }).then(() => {
            this.$router.push({ name: 'Reviews' })
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.feedback = 'Please complete the form'
        }
      },
      getPicUrl(img){
          var images = require.context('../assets/', true, /\.png$/)
          return images('./' + img)
      }
    }
}
</script>

<style scoped>
.review-form{
  font-family: freight-sans-pro, sans-serif;
}
label{
  font-weight: bold;
}
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
.review-form{
  max-width: 800px;
  margin: auto;
}
form{
  background:rgba(255, 255, 255, .8);
  padding:0 30px;
}
.content-row{
    padding: 20px 0;
}
.review-form .form-group{
  margin: 20px auto;
}
.greeting{
  padding-top: 30px;
  font-weight: bold;
}
.button{
  padding-bottom: 30px;
  text-align: center;
}
.blue-button{
  background-color: #09386d;
  color: white;
  font-weight: bold;
  width: 200px;
  height: 50px;
}
.blue-button:hover{
  cursor: pointer;
}

a[href], a[href]:hover {color: grey; font-size: 1em; text-decoration: none}
.starrating > input {display: none;}  /* Remove radio buttons */
.starrating > label
{
  color: grey; /* Start color when not clicked */
}
.starrating > input:checked ~ label
{ color: #ffca08 ; } /* Set yellow color when star checked */

.starrating > input:hover ~ label
{ color: #ffca08 ;  } /* Set yellow color when star hover */

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
    form{
      padding: 0 20px;
    }
    .greeting{
      padding-top: 20px;
    }
}
/* larger devices and up */
@media (min-width: 992px){
    .banner-background{
        height: 350px;
    }
}

</style>

