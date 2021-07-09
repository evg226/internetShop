export default Vue.component("product", {
    props: ["product"],
    data() {
        return {
            pictureIndex: 1,
            currentSize:"",
            currentColor:""
        }
    },
    methods: {
        changePicture(step) {
            this.pictureIndex += step;
            (this.pictureIndex > 3) && (this.pictureIndex = 1);
            (this.pictureIndex < 1) && (this.pictureIndex = 3);
        },
    },
    computed:{
        productToCart(){
            let result=this.product;
            let {id,name,price,colorList,sizeList}=this.product;
            return {id,name,price,color:this.currentColor?this.currentColor:colorList[0],size:this.currentSize?this.currentSize:sizeList[0]};
        }
    },

    template: `
           <section class="product">
               <div class="product__picture">
                    <div class="product__page" @click="changePicture(-1)">&lt;</div>
                    <div class="product__image"  @click="changePicture(1)">
                        <img :src="'img/single'+this.pictureIndex+'.jpg'" alt="">
                    </div>
                    <div class="product__page" @click="changePicture(1)">&gt;</div>
                </div>
            <div class="product__white-box">
                <div class="container"></div>
            </div>
            <div class="container">
                <form @submit.prevent="">
                    <div class="product__description">
                        <div class="product__collection">{{product.collection}} collection</div>
                        <div class="product__3line">
                            <div class="product__3line-part"></div>
                            <div class="product__3line-part product__3line-part_active"></div>
                            <div class="product__3line-part"></div>
                        </div>
                        <h2 class="product__caption">{{product.name}}</h2>
                        <p class="product__text">{{product.description}}</p>
                        <div class="product__price">\${{product.price}}</div>
                        <div class="product__line"></div>
                        <div class="product__choose">
                            <select name="color" id="color" v-model="currentColor">
                                <option value="">Choose color</option>
                                 <option v-for="colorItem of product.colorList" :value="colorItem">{{colorItem}}</option>
                            </select>
                            <select name="size" id="size" v-model="currentSize">
                                <option value="">Choose size</option>
                                <option v-for="sizeItem of product.sizeList" :value="sizeItem">{{sizeItem}}</option>
<                           </select>
                            <select name="quantity" id="quantity">
                                <option value="">quantity</option>
                                <option value="good">Good</option>
                                <option value="Excelent">Excelent</option>
                            </select>
                        </div>
                        <button class="product__button" @click="$emit('add-to-cart',productToCart)"> 
                            <img src="img/cart-red.svg" alt="">
                            Add to Cart</button>
                    </div>
                </form>
            </div>
        </section>`
});