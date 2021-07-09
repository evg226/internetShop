export default Vue.component("topMenu",{
    data(){
        return {
            menuItems:[
                {name:"Man",isGroup:true},
                {name:"Accessories",isGroup:false},
                {name:"Bags",isGroup:false},
                {name:"Denim",isGroup:false},
                {name:"T-shirts",isGroup:false},
                {name:"Woman",isGroup:true},
                {name:"Accessories",isGroup:false},
                {name:"Jackets",isGroup:false},
                {name:"Polos",isGroup:false},
                {name:"T-shirts",isGroup:false},
                {name:"Shirts",isGroup:false},
                {name:"Kids",isGroup:true},
                {name:"Accessories",isGroup:false},
                {name:"Jackets",isGroup:false},
                {name:"Polos",isGroup:false},
                {name:"T-shirts",isGroup:false},
                {name:"Shirts",isGroup:false},
                {name:"Bags",isGroup:false},
            ]
        }
    },
    template:`
       <ul class="subnav" id='nav'>
                <li class="subnav__item">
                    <a href="#" class="subnav__link subnav__link-close" id="close_menu" @click="$emit('change-menu-visible')">
                        <img src="img/close.svg" alt="Close">
                    </a>
                </li>
                <li class="subnav__item"><a class="subnav__link subnav__link-gr subnav__link-menu">menu</a></li>
                <li v-for="item of menuItems" class="subnav__item">
                    <a :class="['subnav__link',{'subnav__link-gr':item.isGroup}]" @click="$emit('open-page',1)">{{item.name}}</a>
                 </li>
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Accessories</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Bags</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Denim</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">T-shirts</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link subnav__link-gr">Woman</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Accessories</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Jackets</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Polos</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">T-shirts</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Shirts</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link subnav__link-gr">Kids</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Accessories</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Jackets&Coats</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Polos</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">T-shirts</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Shirts</a></li>-->
<!--                <li class="subnav__item"><a href="catalog.html" class="subnav__link">Bags</a></li>-->
            </ul>
    `
});