export default Vue.component("message",{
   props:["text"],
   template:`
   <div class="message">
        <div class="message__body">{{text}}</div>
    </div>
   `
});