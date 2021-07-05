export  default Vue.component("signUp",{
    data(){
        return {
            name:"Name",
            lastName:"lastName",
            gender:"",
            email:"box@mail.com"
        }
    },
    computed:{
        isName(){
            return /^[a-z\s]+$/i.test(this.name);
        },
        isLastName(){
            return /^[a-z\s]+$/i.test(this.lastName);
        },
        isEmail(){
            return /^([a-z0-9]+[.-])*[a-z0-9]+@([a-z0-9]+[.-])*[a-z0-9]+[.][a-z]{2,6}$/.test(this.email);
        }
    },
    methods:{
        doRedister(){
            if (this.isName&&this.isLastName&&this.gender&&this.email){
                console.log(this.name);
            console.log(this.lastName);
            console.log(this.gender);
            console.log(this.email);
            } else {
                console.log("Error in data of forms");
            }
        }

    },
    template: `
        <section class="signup">
            <form @submit.prevent="">
                <div class="signup__container container">
                    <div class="signup__left">
                        <div class="signup__header">Your name</div>
                        <input :class="['signup__input',{'border-red':!isName}]" type="text" placeholder="First Name" v-model.lazy="name" onclick="this.select()">
                        <input :class="['signup__input',{'border-red':!isLastName}]" type="text" placeholder="Last Name" v-model.lazy="lastName" onclick="this.select()">

                        <div>
                            <div class="signup__radio-gr">
                                <label class="signup__label" for="male">
                                    <input class="signup__input signup__input_radio" type="radio" name="gender" value="male" v-model="gender">
                                    Male
                                </label>
                                <label class="signup__label" for="female">
                                    <input class="signup__input signup__input_radio" type="radio" name="gender" value="female" v-model="gender">
                                    Female
                                </label>
                            </div>

                        </div>
                        <h2 class="signup__header">Login details</h2>
                        <input :class="['signup__input',{'border-red':!isEmail}]" type="email" placeholder="E-mail" v-model.lazy="email" onclick="this.select()">
                        <input class="signup__input" type="password" placeholder="Password" onclick="this.select()">
                        <div class="signup__text">
                            Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
                        </div>
                        <button class="signup__button" @click="doRedister">Join now</button>
                    </div>
                    <div class="signup__right">
                        <h2 class="signup__desc signup__desc_header">LOYALTY HAS ITS PERKS</h2>
                        <div class="signup__desc">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</div>
                        <ul class="signup__desc">
                            <li class="signup__desc">15% off welcome offer
                            </li>
                            <li class="signup__desc">Free shipping, returns and exchanges on all orders

                            </li>
                            <li class="signup__desc">$10 off a purchase on your birthday

                            </li>
                            <li class="signup__desc">Early access to products</li>
                            <li class="signup__desc">Exclusive offers & rewards</li>
                        </ul>

                    </div>
                </div>
            </form>
        </section>
    `
})