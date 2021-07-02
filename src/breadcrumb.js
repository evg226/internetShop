export default Vue.component("breadcrumb",{
    props:["activePage","pages"],
   template : `
          <nav  class="breadcrumb">
            <div class="container breadcrumb__container">
                <div class="breadcrumb__left">
                    {{pages[activePage].name}}
                </div>
                <div class="breadcrumb__right">
                    <a class="breadcrumb__link" @click="$emit('open-page',0)">Home</a>
                    <span v-if="activePage!=0&&activePage!=2">/</span>
                    <a v-if="activePage!=0&&activePage!=2" class="breadcrumb__link breadcrumb__link-current">{{pages[activePage].name}}</a>
                    <span v-if="activePage==2">/</span>
                    <a v-if="activePage==2" class="breadcrumb__link" @click="$emit('open-page',1)">Catalog</a>
                    <span v-if="activePage==2">/</span>
                    <a v-if="activePage==2" class="breadcrumb__link breadcrumb__link-current">{{pages[activePage].name}}</a>
                </div>
            </div>
        </nav>
   `
});