export default Vue.component("productFilter",{
    props:["products"],
    data(){
        return{
            filterPrices:[50,100,500,1000],
            selectedSizes:[]
        }
    },
    computed:{
        sizes(){
            let result=new Set();
            this.products.forEach(product=>product.sizeList.forEach(size=>result.add(size)));
            return result;
        }
    },
    methods:{
        makeFilter(prop,value) {
            let filtered=prop=="noFilter"?this.products:this.products.filter((item)=>item[prop]<=value);
            this.$emit("make-filter",filtered);
        },
        makeFilterSizes(){
            let filtered=[];
            if (!this.selectedSizes.length){
                filtered=this.products;
            } else{
                filtered=[];
                this.selectedSizes.forEach(size=>this.products.forEach(product=>product.sizeList.find(item=>item==size)?filtered.push(product):null));
            }
            this.$emit("make-filter",filtered);
        }
    },
    template:`
           <nav class="filter">
            <ul class="container filter__container">
                <li class="filter__item filter__item_1">
                    <div class="filter__item-caption filter__item-caption-close">
                        <span>Filter</span><img src="img/filter.svg" alt="">
                    </div>
                    <div class="filter__item-drop filter__item-drop-1">
                        <details open class="filter__subitem">
                            <summary class="summary_1">Category</summary>
                            <div class="filter__subitem-drop">
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Accesories</div>
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Bags</div>
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Accesories</div>
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Accesories</div>
                            </div>
                        </details>
                        <details class="filter__subitem">
                            <summary>Designer</summary>
                            <div class="filter__subitem-drop">
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Accesories</div>
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Bags</div>
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Accesories</div>
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Accesories</div>
                            </div>
                        </details>
                        <details class=" filter__subitem">
                            <summary>Price</summary>
                            <div class="filter__subitem-drop">
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Accesories
                                </div>
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Bags</div>
                                <div class="filter__subitem-drop-link filter__subitem-drop-link-1">Accesories
                                </div>
                                <div
                                    class="filter__subitem-drop-link filter__subitem-drop-link-1 filter__subitem-drop-link-last">
                                    Accesories</div>
                            </div>
                        </details>
                    </div>
                </li>
                <li class="filter__item">
                    <div class="filter__item-caption">
                        <span>Trending&nbsp;now</span><img src="img/Filter2.svg" alt="">
                    </div>
                    <div class="filter__item-drop">
                        <div class="filter__subitem-drop-link">Accesories</div>
                        <div class="filter__subitem-drop-link">Bags</div>
                        <div class="filter__subitem-drop-link">Accesories</div>
                        <div class="filter__subitem-drop-link">Accesories</div>
                    </div>
                </li>
              <li class="filter__item">
                    <div class="filter__item-caption">
                        <span>Size</span><img src="img/Filter2.svg" alt="">
                    </div>
                    <div class="filter__item-drop">
                        <form name="sizesFilterForm">
                            <div class="filter__subitem-drop-link" v-for="size of this.sizes">
                                <input type="checkbox" :value="size" v-model="selectedSizes" @change="makeFilterSizes"> {{size}}
                            </div>
                        </form>
                    </div>
                </li>
                <li class="filter__item">
                    <div class="filter__item-caption">
                        <span>Price</span><img src="img/Filter2.svg" alt="">
                    </div>
                    <div class="filter__item-drop filter__item-drop-4">
                        <div class="filter__subitem-drop-link" v-for="item of filterPrices" @click="makeFilter('price',item)">{{item}}</div>
                        <div class="filter__subitem-drop-link" @click="makeFilter('noFilter','')">More</div>
                    </div>
                </li>
            </ul>
     </nav>
    `
    }
)