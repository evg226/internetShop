export default Vue.component("deliveryBox",{
    data(){
        return {
            deliveryList:[
                {id:1,link:4,name:"Free Delivery",img:"delivery",description:"Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models."},
                {id:1,link:1,name:"Sales & discounts",img:"persent",description:"Worldwide delivery on all. Authoritdf fgdfd tion with extensive models."},
                {id:1,link:4,name:"Quality assurance",img:"crown",description:"Authorit tively morph next-generation innov tion with extensive models."},
            ]
        }
    },
    template:`<section class="delivery">
            <div class="delivery__box container">
                <a v-for="item of deliveryList" href="#" class="delivery__card" @click="$emit('open-page',item.link)">
                    <div class="delivery__img">
                        <img :src="'img/'+item.img+'.svg'" alt="">
                    </div>
                    <h2 class="delivery__cap">
                        {{item.name}}
                    </h2>
                    <div class="delivery__text">
                         {{item.description}}
                    </div>
                </a>
<!--                <a href="#" class="delivery__card">-->
<!--                    <div class="delivery__img">-->
<!--                        <img src="img/persent.svg" alt="">-->
<!--                    </div>-->
<!--                    <div class="delivery__cap">-->
<!--                        Sales & discounts-->
<!--                    </div>-->
<!--                    <div class="delivery__text">-->
<!--                        Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive-->
<!--                        models.-->
<!--                    </div>-->
<!--                </a>-->
<!--                <a href="#" class="delivery__card">-->
<!--                    <div class="delivery__img">-->
<!--                        <img src="img/crown.svg" alt="">-->
<!--                    </div>-->
<!--                    <div class="delivery__cap">-->
<!--                        Quality assurance-->
<!--                    </div>-->
<!--                    <div class="delivery__text">-->
<!--                        Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive-->
<!--                        models.-->
<!--                    </div>-->
<!--                </a>-->
            </div>
        </section>
    `
})