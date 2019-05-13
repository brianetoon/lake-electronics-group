<template>
    <div class="footer container-fluid">
        <div class="row footer-row">
            <div class="col-sm-6 col-md-4 col-lg-4 col-xl d-flex align-items-center obj" v-for="(obj, index) in footer" :key="index">
                <div class="icon">
                    <img :src="getPicUrl(obj.icon)">
                </div>
                <div class="text">
                    <p>{{ obj.name }}</p>
                    <p>{{ obj.value }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{
            footer: [
                {
                    icon: "phone.png",
                    name: 'phone:',
                    value: '248-896-2099'
                },
                {
                    icon: "alarm.png",
                    name: '24/7 Emergency Monitoring:',
                    value: '877-661-6355'
                },
                {
                    icon: "email.png",
                    name: 'email:',
                    value: 'info@lakeelectronicsgroup.com'
                },
                {
                    icon: "fax.png",
                    name: 'fax:',
                    value: '248-313-0865'
                },
                {
                    icon: "address.png",
                    name: '2045 E. West Maple Road, D401',
                    value: 'Walled Lake, Michigan 48390'
                }
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

<style>
.footer{
    background-image: url("../assets/footer.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: freight-sans-pro, sans-serif;
    color: #fff;
}
.text p{
    margin: 0 0 0 5px;
    padding-left: 10px;
    font-size: 0.9em;
}
.obj{
    padding: 10px 0;
}
.footer-row{
    padding: 10px 10px;
}
.icon{
    width: 40px;
    padding: 0 5px;
}
</style>


