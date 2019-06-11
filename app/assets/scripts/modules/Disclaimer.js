import $ from 'jquery';

class Disclaimer {
    constructor() {
        this.openDisclaimerButton = $(".open-disclaimer");
        this.disclaimer = $(".disclaimer");
        this.closeDisclaimerButton = $(".disclaimer--close");
        this.events();
    }

    events() {
        //clicking the open modal btn
        this.openDisclaimerButton.ready(this.openDisclaimer.bind(this));

        //clicking the x close modal btn
        this.closeDisclaimerButton.click(this.closeDisclaimer.bind(this));
     
    }
    
    openDisclaimer() {
        this.disclaimer.addClass("disclaimer--is-visible");
        return false;
    }
    closeDisclaimer() {
        this.disclaimer.removeClass("disclaimer--is-visible");
        return false;
    }
}

export default Disclaimer;
