export default Vue.component("banner",{
    template: `
        <section  class="banner">
            <div class="banner__container container">
                <div class="banner__img">
                    <img src="img/man.png" alt="banner image">
                </div>
                <div class="banner__heading">
                    <h2 class="banner__heading__big">The Brand</h2>
                    <p class="banner__heading__little">
                        of Luxerious <span class="banner__heading__call">fashion</span>
                    </p>
                </div>
            </div>
        </section>
    `
});