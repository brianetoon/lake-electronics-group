<template>
    <div class="contact">
        
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

                <div class="col-xs-12 col-sm-12 col-md-6 contact-info">
                    <h3 class="text-white font-weight-bold">Lake Electronics Group</h3>
                    <p><strong>info@lakeelectronicsgroup.com</strong></p>
                    <p><strong>Contacts:</strong> Michael or Gabriel</p>
                    <p><strong>Tel:</strong> 248-896-2099</p>
                    <p><strong>Fax:</strong> 248-313-0865</p>
                    <p>2045 E. West Maple Road, D401 <br>Walled Lake, Michigan 48390</p>
                    <p><strong>24/7 Emergency Monitoring Service:</strong><br>877-661-6355</p>
                    <p><strong>Office Hours:</strong><br>
                    Monday-Friday 8:00 am - 5:00 pm <br>
                    Closed Saturday and Sunday</p>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 contact-form">

                    <div class="text-center success-message" v-if="success">
                        <h3>We have received your message!</h3>
                        <p>Thank you for contacting Lake Electronics Group. We will get back to you as soon as possible.</p>
                    </div>

                    <form @submit.prevent="submitForm()" v-if="!success">
                        
                        <div class="form-group greeting">
                            <p>If you would like to schedule an appointment or just have a question for us please fill out this form.</p>
                        </div>

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input class="form-control" type="text" name="name" v-model.trim="$v.form.name.$model">
                            <div v-if="showErrors">
                                <div class="error" v-if="!$v.form.name.required">Name is required</div>
                                <div class="error" v-if="!$v.form.name.minLength">Name must have at least {{$v.form.name.$params.minLength.min}} letters</div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input class="form-control" type="email" name="email" v-model.trim="$v.form.email.$model">
                            <div v-if="showErrors">
                                <div class="error" v-if="!$v.form.email.required">Email is required</div>
                                <div class="error" v-if="!$v.form.email.email">Invalid email address</div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input class="form-control" type="tel" name="phone" v-model.trim="$v.form.phone.$model" placeholder="numbers only, no spaces or dashes">
                            <div v-if="showErrors">
                                <div class="error" v-if="!$v.form.phone.required">Phone number is required</div>
                                <div class="error" v-if="!$v.form.phone.minLength">Phone number must have at least {{$v.form.phone.$params.minLength.min}} digits</div>
                                <div class="error" v-if="!$v.form.phone.maxLength">Phone number must not be longer than {{$v.form.phone.$params.maxLength.max}} digits</div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" type="text" rows="10" v-model="form.message"></textarea>
                            <div v-if="showErrors">
                                <div class="error" v-if="!$v.form.message.required">Your message is required</div>
                                <div class="error" v-if="!$v.form.message.minLength">Please enter a longer message</div>
                            </div>
                        </div>

                        <div class="form-group button text-center">
                            <button class="blue-button">
                                <span v-if="!submitting">Send Message</span>
                                <span v-if="submitting">Sending...</span>
                            </button>
                        </div>

                        <!-- <p class="error" v-if="submitStatus === 'ERROR'">Please fill out the form correctly</p> -->

                    </form>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'Contact',
    data(){
        return{
            banner: "contact-pic.png",
            gradient: "product-background.png",
            title: "Contact Lake Electronics Group",
            form: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            success: false,
            submitting: false,
            submitStatus: null,
            showErrors: false
        }
    },
    created(){
        console.log(this.$v)
    },
    validations:{
        form:{
            name:{
                required,
                minLength: minLength(3)
            },
            email:{
                required,
                email
            },
            phone:{
                required,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            message:{
                required,
                minLength: minLength(20)
            }
        }
    },
     methods:{
        getPicUrl(img){
            var images = require.context('../assets/', true, /\.png$/)
            return images('./' + img)
        },
        submitForm(){
            this.$v.$touch()
            if (this.$v.$invalid){
                this.showErrors = true
                this.submitStatus = 'ERROR'
            } else {
                console.log('valid!')
                this.submitting = true
                axios.post('mail.php', this.form)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() =>{
                    this.success = true
                })
            }
        }
    }
}
</script>

<style scoped>
.banner-background{
    padding: 0;
    background-position: right;
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
.contact-form{
  font-family: freight-sans-pro, sans-serif;
  /* padding: 30px 0; */
}
form{
    background:rgba(255, 255, 255, .8);
    padding: 10px 20px;
}
.greeting, label{
    font-weight: bold;
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
.content-row{
    padding: 20px 0;
}
.contact-info p{
    color: #fff;
    font-family: freight-sans-pro, sans-serif;
    font-style: normal;
    font-size: 1.2em;
    margin: 0;
    padding: 5px 0 5px 30px;
}
.contact-form{
    font-family: freight-sans-pro, sans-serif;
}
.error{
    color: red;
    font-weight: bold;
}
.success-message{
    color: white;
    font-weight: bold;
    font-size: 1.2em;
}
.margin{
    max-width: 1200px;
    margin: auto;
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
    .page-title{
        font-size: 1.6em;
    }
    .banner-background{
        height: 250px;
    }
    .contact-form{
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


