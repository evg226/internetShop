const topMenu=require("./topMenu");
const banner=require("./banner");
const breadcrumb=require("./breadcrumb");
const mainOffer=require("./mainoffer");
const productList=require("./product-list");
const product=require("./product");
const filters=require("./productFilter");
const deliveryBox=require("./deliveryBox");
const footers=require("./footer");
const searchForm=require("./search");
const cartPage = require("./cartPage");
const singUp=require("./signup");
const message=require("./message");

const app = new Vue({
    el: "#app",
    data:{
        products:[
            {id:1,name:"Ellery Capsule",price:45,sizeList:["S","L","XL","XXL"], colorList:["red","blue","black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:2,name:"Dolche Gabbana",price:55,sizeList:["S","M","XL","XXL"], colorList:["red","black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:3,name:"Calvin kleine",price:75,sizeList:["S","XL","XXL"], colorList:["blue","black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:4,name:"Zolla clothe",price:105,sizeList:["S","M","XL","XXL"], colorList:["red","blue"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:5,name:"Addias Shoes",price:125,sizeList:["L","XXL"], colorList:["red"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:6,name:"Nike Super ",price:450,sizeList:["S","XL","XXL"], colorList:["black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:7,name:"Charmalle Sss",price:560,sizeList:["S","M","XL","XXL"], colorList:["black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:8,name:"Max Boots",price:1080,sizeList:["S","XXL"], colorList:["red","blue"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:9,name:"Prime Industry",price:1560,sizeList:["S","XL"], colorList:["red","blue"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:10,name:"My Super Clothes",price:2005,sizeList:["L","XL","XXL"], colorList:["red","blue","black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."}
        ],
        productsMainOffer:[
            {id:1,category:"women",discount:"30% off"},
            {id:2,category:"men",discount:"hot deal"},
            {id:3,category:"kids",discount:"new arrivals"},
            {id:4,category:"accessories",discount:"luxorious&trendy"},
        ],
        filteredProducts:[],
        selectedProduct:{},
        cart:[
            {id:5,name:"Addias Shoes",price:125,quantity:2,color:"red",size:"L"},
            {id:6,name:"Nike Super ",price:450,quantity:1,color:"red",size:"S"},
        ],
        isVisibleMenu:false,
        isVisibleSearch:false,
        activePage:0,
        pages:[
            {name:"Home",path:"/"},
            {name:"Catalog",path:"/productList"},
            {name:"Product",path:"/productDetail"},
            {name:"Cart",path:"/cart"},
            {name:"SignUP",path:"/signUp"},
            ],
        message:""
    },
    methods: {
        openPage(pageNumber) {
            this.activePage = pageNumber;
            if (pageNumber == 0) {
                this.filteredProducts = [...this.products.slice(0, 6)];
            } else {
                this.filteredProducts = [...this.products];
            }
            this.isVisibleMenu=false;
        },
        openProduct(product) {
            this.selectedProduct = {...product};
            this.activePage = 2;
            this.pages[this.activePage].name = product.name;
        },
        setFiltered(filtered) {
            this.openPage(1);
            this.isVisibleSearch=false;
            this.filteredProducts = [...filtered];
            this.setMessage("You have set filter");
        },
        myFunction() {
            document.querySelector("#nav").classList.toggle("open");
        },
        addToCart(product){
            let find=this.cart.find(item=>item.id==product.id);
            if (find){
                find.quantity++;
            } else{
                this.cart.push({...product,quantity:1});
            }
            console.log( `${product.name} has been  addded to cart`);
            this.setMessage(`${product.name} has been  added to cart`);
        },
        clearCart(){
            this.cart=[];
            console.log("Cart has been cleared");
            this.setMessage("Cart has been cleared");
        },
        setMessage(message){
            this.message=message;
            setTimeout(()=>this.message="",5000);
        }
    },

    computed:{
        countCart(){
            return this.cart.reduce((accum,item)=>accum+(+item.quantity),0);
        },
    },
    mounted(){
        this.openPage(0);

    }
});
