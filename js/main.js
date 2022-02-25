
document.addEventListener('DOMContentLoaded', () => {


    AOS.init({
        duration: 1500,
        once: true,

    })

    const header = document.querySelector('header')

    const leaf1 = document.querySelector('.home_banner_1 .leaf1')
    const leaf2 = document.querySelector('.home_banner_1 .leaf2')
    const homeBannerFood = document.querySelector('.home_banner_1 .homebannerfood')
    const strawberry = document.querySelector('.home_banner_1 .strawberry')
    const body = document.querySelector('body')


    window.addEventListener('scroll', () => {
        // GETTING THE SCROLL VALUE 
        let value = window.scrollY

        // HEADER SCROLL  
        if (value) {
            header.classList.add('header-active')
            body.style.marginTop = header.clientHeight + 'px'

        }
        else {
            header.classList.remove('header-active')
            body.style.marginTop = '0'
        }

        // PARALLAX BG

        const parallaxBGs = document.querySelectorAll('.parallaxBG')
        if (parallaxBGs) {
            parallaxBGs.forEach(
                parallaxBG => {

                    function handler(entries) {
                        for (entry of entries) {
                            if (entry.isIntersecting) {


                                value = value - (parallaxBG.offsetTop + parallaxBG.clientHeight)
                                parallaxBG.style.backgroundPositionY = - (value * 0.1) + 'px'
                            }
                        }
                    }


                    let observer = new IntersectionObserver(handler);

                    observer.observe(parallaxBG);


                }
            )
        }

        // PARALLAX FOR HOME HERO  
        if (homeBannerFood) {
            leaf1.style.transform = "translateX(" + -value * 0.5 + 'px ) ' + "rotate(" + -value * 0.2 + 'deg )'
            leaf2.style.transform = "translateX(" + -value * 0.6 + 'px ) ' + "rotate(" + -value * 0.6 + 'deg )'
            homeBannerFood.style.transform = "translateY(" + value * 0.2 + 'px ) '
            strawberry.style.transform = "translateY(" + value * 0.1 + 'px ) ' + "rotate(" + value * 0.05 + 'deg )'
        }

        // PIZZA PARALLAX
        const pizza = document.querySelector('.about_meal .pizza')
        if (pizza) {
            pizza.style.transform = "translate(-50%, -50%)" + "rotate(" + value * 0.01 + 'deg )'
        }




    })

    // INITIATING TESIMONIAL SLIDER 

    let splide = new Splide('.testimonials .splide', {
        type: 'loop',
        perPage: 3,
        speed: 800,
        rewindSpeed: 800,
        perMove: 1,
        focus: 'center',
        gap: '30px',
        updateOnMove: true,
        autoplay: true,
        interval: 3000,
        trimSpace: 'move',
        pagination: false,
        breakpoints: {
            993: {
                perPage: 2,
                focus: 'start',
            },
            768: {
                perPage: 1,
            },
        }
    });
    splide.mount();

    $(".banner_1 .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        animateOut: 'fadeOut',
        slideTransition: 'ease',
        autoplay: true,
        autoplayTimeout: 5000,
    });



    const hamburger = document.querySelector('header .hamburger')
    const navbar = document.querySelector('header .navbar')
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active')
        navbar.classList.toggle('navbar-active')
    })
});
