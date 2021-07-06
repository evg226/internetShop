export default Vue.component("footers",{
    data(){
        return {
            youMail:""
        }
    },
    methods:{
        subsribe(){
            if (this.youMail.length>0) {
                this.$emit('set-message',"You have been subcribed to mail:\n"+this.youMail);
            } else {
                document.forms.emailForm.email.style.boxShadow="0 0 10px red";
                this.$emit('set-message',`Error in email address`);
            }
        },
        clearEmail(){
            document.forms.emailForm.email.style.boxShadow='none';
        }
    },
    template:`<footer class="footer">
        <div class="subscribe">
            <div class="container subscribe__container">
                <figure class="subscribe__card">
                    <div>
                        <img src="img/Intersect.png" alt="">
                    </div>
                    <figcaption class="subscribe__left__text">
                        “Vefigurebulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
                    </figcaption>
                </figure>
               <div class="subscribe__card">
                    <div class="subscribe__right__heading">
                        subscribe
                    </div>
                    <div class="subscribe__right__text">
                        FOR OUR NEWLETTER AND PROMOTION
                    </div>
                    <form class="subscribe__form" name="emailForm" method="get" @submit.prevent="subsribe">
                        <input class="email" type="email" name="email" placeholder="email@server.com" v-model="youMail" @input="clearEmail">
                        <input class="button" type="submit" value="Subscribe">
                    </form>
                </div>
            </div>
        </div>
        <section class="copyright">
            <div class="copyright__container container">
                <h3 class="copyright_left">
                    &copy; evg226 2021 Brand All Rights Reserved.
                </h3>
                <div class="social">
                    <a class="social__item" href="https://www.vk.com">
                        <img src="img/p.svg" alt="">
                    </a>
                    <a class="social__item" href="https://www.instagram.com">
                        <img src="img/insta.svg" alt="">
                    </a>
                    <a class="social__item" href="https://wwww.facebook.com">
                        <img src="img/f.svg" alt="">
                    </a>
                    <a class="social__item" href="https://twitter.com/">
                        <img src="img/tw.svg" alt="">
                    </a>
                </div>
            </div>
        </section>
    </footer>
    `
});