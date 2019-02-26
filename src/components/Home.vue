<template>
  <div class="home container-fluid">
    <div class="row">

      <!-- <div class="col-sm-12 col-md-6 pic-box sec-auto">
        <h1 class="box-title">Security and automation</h1>
      </div>
      <div class="col-sm-12 col-md-6 pic-box install">
        <h1 class="box-title">Media wiring and installation</h1>
      </div> -->
      
    </div>
    <div class="row">
      <div class="col-sm-12 mid-strip">
        <h3 class="font-weight-bold slogan">Technology to enhance your home and business</h3>
        <h3 class="font-weight-bold sub-slogan">Serving metro Detroit and southeast Michigan</h3>
      </div>
    </div>
    <div class="row bot-strip">
      <div class="col-sm-12 col-md-6">
        <div class="video-wrapper">
          <div class="embed-responsive embed-responsive-16by9"> 
              <video width="320" height="240" controls>
                  <source src="../assets/video.mp4" type="video/mp4">
              </video>
          </div> 
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <button type="button" class="apt-button">Schedule Appointment</button>
        <div class="text-center">
          <img class="alarm-logo" src="../assets/alarm-logo.png" alt="alarm.com">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<style>
.pic-box{
  padding: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 325px;
}
.box-title{
  font-size: 1.6em;
  color: #0a3a6f;
  font-weight: bold;
  letter-spacing: -0.7px;
  padding: 10px 0px 10px 10px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&1+0,0+100 */
  background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%,rgba(255,255,255,0.2) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0.2) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
}
.sec-auto{
  /* background-image: url("../assets/sec-and-auto-2@2x.png"); */
}
.install{
  /* background-image: url("../assets/install@2x.png"); */
}
.mid-strip{
  background-image: url("../assets/strip-center.png");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 15px;
  color: #fff;
}

.bot-strip{
  background-image: url("../assets/lower-gradient.png");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 0;
}
.video-wrapper{
  
}
.video-wrapper{
  border: 5px solid #fff;
}

.apt-button{
  height: 60px;
  width: 100%;
  color: #09386d;
  font-size: 1.2em;
  border: none;
  background: -moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.3) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(255,255,255,1) 0%,rgba(255,255,255,0.3) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0.3) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */
}

.apt-button:hover{
  background: #fff;
  cursor: pointer;
}

/**** MEDIA QUERIES ****/

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
    .slogan{
    font-size: 1.7em;
  }
  .sub-slogan{
    font-size: 1.5em;
  }
  .alarm-logo{
    width: 350px;
    padding-top: 30px;
  }
  .apt-button{
    margin-top: 30px;
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
  .alarm-logo{
    width: 450px;
    padding-top: 30px;
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
  .alarm-logo{
    width: 300px;
    padding-top: 30px;
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
  .alarm-logo{
    width: 350px;
    padding-top: 60px;
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
  .alarm-logo{
    width: 500px;
    padding-top: 75px;
  }
}
</style>
