import $ from 'jquery';
import slick from 'slick-carousel';

class HeroSlider {
    constructor() {
        this.els = $(".hero-slider");
        this.initSlider();
    }

    initSlider() {
        this.els.slick({
            autoplay: true,
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    }
}

export default HeroSlider;
