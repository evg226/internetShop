Vue.component("cartPage",{
    props:["cart"],
    data(){
        return {
            country:"Country",
            state:"State",
            postcode:"100000"
        }
    },
    computed:{
        countCart(){
            return this.cart.reduce((accum,item)=>accum+(+item.quantity),0);
        },
        total(){
            return this.cart.reduce((accum,item)=>accum+item.price*item.quantity,0);
        },
        isCountry(){
            return /^[a-z\s]+$/i.test(this.country);
        },
        isState(){
            return /^[a-z\s]+$/i.test(this.state);
        },
        isPostCode(){
            return /^[0-9]{6}$/.test(this.postcode);
        }
    },
    methods:{
        remove(item){
            this.cart.splice(this.cart.indexOf(item), 1);
            console.log( `${item.name} has been deleted from cart`);
            this.$emit('set-message',`${item.name} has been deleted from cart`);
        },
        getAQuote(){
            this.country="Russia";
            this.state="Moscow";
            this.postcode="121000";
        },
        proceed(e){
            e.preventDefault();
            if (!(this.isCountry&&this.isState&&this.isPostCode)) {
                this.$emit('set-message',"Error Shipping Address!");
                console.log("Error Shipping Address!");
            }   else if (this.cart.length===0){
                this.$emit('set-message',"You can add goods to Cart!");
                console.log("You can add goods to Cart!");
            } else {
                this.$emit('set-message',"Your order has been shipped");
                console.log("Your order has been shipped");
            }
        },
    },
    template:`
               <section class="cartbox">
                     <form @submit.prevent="">
                        <div class="container cartbox__container">
                            <div class="cartbox__left">
                                <cart-item v-for="item of cart" :item="item" :key="item.id" @remove="remove"></cart-item>
                                <div class="cartbox__item-header" v-if="cart.length==0">Cart is Empty</div>                                 
                                <div class="cartbox__action">
                                    <a class="cartbox__button" @click="$emit('clear-cart')">Clear Shopping Cart</a>
                                    <a class="cartbox__button" @click="$emit('continue-shopping',1)">Continue Shopping</a>
                                </div>
                            </div>
                             <div class="cartbox__right">
                                <div class="cartbox__shipping">
                                    <h2 class="cartbox__header">Shipping Address</h2>
                                    <input :class="['cartbox__input',{'border-red':!isCountry}]" type="text" placeholder="Country" v-model.lazy="country" onFocus="this.select()">
                                    <input :class="['cartbox__input',{'border-red':!isState}]" type="text" placeholder="State" v-model.lazy="state" onFocus="this.select()">
                                    <input :class="['cartbox__input',{'border-red':!isPostCode}]" type="tel" placeholder="Postcode" v-model.lazy="postcode" onFocus="this.select()">
                                    <a href="#" class="cartbox__button cartbox__button_shipping" @click="getAQuote">get a quote</a>
                                </div>
                                <div class="cartbox__proseed">
                                    <p class="cartbox__proseed-text-sub">Sub total <span>{{countCart}}</span> </p>
                                    <p class="cartbox__proseed-text-grand">Grand total <span>\${{total}}</span> </p>
                                    <div class="cartbox__proseed-line"></div>
                                    <button class="cartbox__proseed-button" @click="proceed">Proseed</button>
                                </div>
                             </div>
                        </div>
                    </form>
               </section>
    `
});

Vue.component("cartItem",{
   props: ["item"],
    methods:{
        updateCheck(){
            if (this.item.quantity<=0) this.$emit('remove',this.item);
        },
    },
    template: `
            <div class="cartbox__item">
                <div class="cartbox__item-picture">
<!--                     <img src="img/cart-pic-1.png" alt="">-->
                     <img :src='"img/feature"+item.id+".png"' alt="product img">
                </div>
                 <div class="cartbox__item-desc">
                    <div class="cartbox__item-header">{{item.name}}</div>
                    <div class="cartbox__item-text">Price:&nbsp;&nbsp;
                        <span class="cartbox__item-text_price">\${{item.price}}</span>
                    </div>
                    <div class="cartbox__item-text">Color:&nbsp;&nbsp;<span>{{item.color}}</span></div>
                    <div class="cartbox__item-text">Size:&nbsp;&nbsp;<span>{{item.size}}</span></div>
                    <div class="cartbox__item-text">Quantity:&nbsp;&nbsp;
                        <input class="cartbox__item-text_input" type="number" name="quantity" v-model.lazy="item.quantity" @change.lazy="updateCheck">
                    </div>
                 </div>
                 <div class="cartbox__item-del" @click="$emit('remove',item)">X</div>   
            </div>
   `
});