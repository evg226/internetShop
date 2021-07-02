export default Vue.component("mainOffer",{
    props:["products"],
    template: `
        <section class="main__offer container">
            <div class="main__offer__top">
                <productMO v-for="item of products.slice(0,3)" :key="item.id" :item="item"></productMO>
            </div>
            <productMO :item="products.slice(3,4)[0]"></productMO>
        </section>`
});
Vue.component("productMO",{
    props:["item"],
    template: `<a href="#" class="main__offer__item" :class="{'main__offer__bottom':item.id==4}" @click="$parent.$emit('open-products')">
                    <div class="main__offer__item__text">
                       <h2 class="main__offer__item__text_top">{{item.discount}}</h2>
                        <p class="main__offer__item__text_bottom">for {{item.category}}</p>
                    </div>
                    <img :src="'img/for_'+ item.category +'.png'">
               </a>`,
})