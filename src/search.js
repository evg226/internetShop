export default Vue.component("searchForm",{
    props:["goods"],
    data(){
        return {
            searchLine:""
        }
    },
    template:`
            <form  class="navbar__search" action="#" method="get" name="search" @submit.prevent="filterGoods">
               <input type="search" value="" placeholder="Товар..." v-model.lazy="searchLine" @change="searchCorrect">
               <button type="submit"><img src="img/menu-search.svg"></button>
            </form>
    `,
    methods:{
        searchCorrect(){
            this.searchLine=this.searchLine.trim().toLowerCase();
        },
        filterGoods(){
            const pattern=new RegExp(this.searchLine,"i");
            const filtered = this.searchLine ? this.goods.filter(item=>pattern.test(item.name)) : [...this.goods];
            this.searchLine="";
            this.$emit("make-filter",filtered);
        },
    }
})