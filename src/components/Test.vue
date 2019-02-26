<template>
    <div class="test container">
        <h1>This is a test page</h1>
        <div    class="test"
                :style="{ backgroundImage: 'url(' + image + ')' }">
        </div>

        <div class="row" style="background:grey">
            <div class="col-xs-12">
                <img :src="getPicUrl(pic)">
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 background"
                    :style="{ backgroundImage: 'url('+ getPicUrl(bgrd) +')'}">
            </div>
        </div>

        <!-- The issue is that the value for backgroundImage needs to be a string like this: -->
        <!-- <div class="" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div> -->

        <!-- Re: the comment below about kebab-case, this is how you can do that: -->
        <!-- <div class="" v-bind:style="{ 'background-image': 'url(' + image + ')' }"></div> -->


    </div>
</template>

<script>
export default {
    name: 'Test',
    data(){
        return{
            image: "http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png",
            pic: 'lake-logo.png',
            bgrd: 'strip-center.png'
        }
    },
    methods: {
        getPicUrl(img){
            var images = require.context('../assets/', true, /\.png$/)
            return images('./' + img)
        }
    }
}
</script>

<style>
.test{
    width: 300px;
    height: 300px;
    background-size: cover;
    border-radius: 50px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
}
.background{
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    height: 200px;
    width: 100%;
}
</style>
