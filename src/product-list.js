export default Vue.component("productList",{
    props:["products","activePage"],
    template:`  <div class="featured">
                    <div class="featured__container container">
                        <div v-if="activePage==0" class="featured__header">
                            <h2 class="featured__heading">Featured Items</h2>
                            <div class="featured__desc">
                                Shop for items based on what we featured in this week
                            </div>
                        </div>    
                        <article class="featured__box">
                             <product-item v-for="product of showProducts" :key="product.id" :product="product"></product-item>
                        </article>
                         <a v-if="activePage==0" class="featured__button" @click="$emit('show-all-products')">Browse All Products</a>
                    </div>
                </div>`,
    computed:{
        showProducts(){
            return this.products;
        }
    }
});

Vue.component("productItem",{
    props:["product"],
    computed:{
        productToCart(){
            let result=this.product;
            let {id,name,price,colorList,sizeList}=this.product;
            return {id,name,price,color:colorList[0],size:sizeList[0]};
        }
    },
    template: `
            <div class="featured__item">
                <a href="#" class="featured__item-link" @click="$parent.$emit('open-product',product)">
                    <div class="featured__item-img">
                        <img :src='"img/feature"+product.id+".png"' alt="product img">
                    </div>
                    <div class="featured__item-header">
                        <h3 class="featured__item-heading">{{product.name}}</h3>
                        <div class="featured__item-desc">{{product.description}}</div>
                        <div class="featured__item-price">\${{product.price}}</div>
                    </div>
                </a>
                <div class="featured__item_add">
                    <a class="featured__item_add-link" @click="$parent.$emit('add-to-cart',productToCart)">Add to Cart</a>
                </div>
           </div>
    `
})