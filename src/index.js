const topMenu=require("./topMenu");
const banner=require("./banner");
const breadcrumb=require("./breadcrumb");
const mainOffer=require("./mainoffer");
const productList=require("./product-list");
const product=require("./product");
const filters=require("./productFilter");
const deliveryBox=require("./deliveryBox");
const footers=require("./footer");

const app = new Vue({
    el: "#app",
    data:{
        products:[
            {id:1,name:"ELLERY X M'O CAPSULE",price:"45",color:"red",sizeList:["S","L","XL","XXL"], colorList:["red","blue","black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:2,name:"ELLERY X M'O CAPSULE",price:"55",color:"red",sizeList:["S","M","XL","XXL"], colorList:["red","black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:3,name:"ELLERY X M'O CAPSULE",price:"75",color:"red",sizeList:["S","XL","XXL"], colorList:["blue","black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:4,name:"ELLERY X M'O CAPSULE",price:"105",color:"red",sizeList:["S","M","XL","XXL"], colorList:["red","blue"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:5,name:"ELLERY X M'O CAPSULE",price:"125",color:"red",sizeList:["L","XXL"], colorList:["red"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:6,name:"ELLERY X M'O CAPSULE",price:"450",color:"red",sizeList:["S","XL","XXL"], colorList:["black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:7,name:"ELLERY X M'O CAPSULE",price:"560",color:"red",sizeList:["S","M","XL","XXL"], colorList:["black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:8,name:"ELLERY X M'O CAPSULE",price:"1080",color:"red",sizeList:["S","XXL"], colorList:["red","blue"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:9,name:"ELLERY X M'O CAPSULE",price:"1560",color:"red",sizeList:["S","XL"], colorList:["red","blue"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."},
            {id:10,name:"ELLERY X M'O CAPSULE",price:"2005",color:"red",sizeList:["L","XL","XXL"], colorList:["red","blue","black"],collection:"women",quality:"good",description:"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Ellery teams up with Moda Operandi."}
        ],
        productsMainOffer:[
            {id:1,category:"women",discount:"30% off"},
            {id:2,category:"men",discount:"hot deal"},
            {id:3,category:"kids",discount:"new arrivals"},
            {id:4,category:"accessories",discount:"luxorious&trendy"},
        ],
        filteredProducts:[],
        selectedProduct:{},
        cart:[],
        isVisibleMenu:false,
        activePage:0,
        pages:[
            {name:"Home",path:"/"},
            {name:"Catalog",path:"/productList"},
            {name:"Product",path:"/productDetail"},
            {name:"Cart",path:"/cart"},
            {name:"SignUP",path:"/signUp"},
            ],
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
            this.filteredProducts = [...filtered];
        },
        myFunction() {
            document.querySelector("#nav").classList.toggle("open");
        }
    },
    mounted(){
        this.openPage(0);
    }
})