$(document).ready(function () {
    $(".index a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
// //////////////////////////////////////////////////////////////////
if (window.innerWidth > 541) {
    var swiper = new Swiper('.intro .swiper-container', {
        direction: 'vertical',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "0" + (index + 1) + '</span>';
            },
        },
        autoplay: {
            delay: 4000,
        },
        speed: 800,
    });
}
if (window.innerWidth < 541) {
    var swiper = new Swiper('.intro .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 4000,
        },
        speed: 800,
    });
}
// //////////////////////////////////////////////////////////////////
var swiper = new Swiper('.ourpartners .swiper-container', {
    slidesPerView: 3,
    navigation: {
        nextEl: '.ourpartners .swiper-button-next',
        prevEl: '.ourpartners .swiper-button-prev',
    },
    pagination: {
        el: '.ourpartners .swiper-pagination',
    },
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        '576': {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        '361': {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

var swiper = new Swiper('.satisfiedcustomers .swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.satisfiedcustomers .swiper-pagination',
    },
    autoplay: {
        delay: 4000,
    },
    speed: 800,
    breakpoints: {
        '576': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});
// //////////////////////////////////////////////////////////////////////
var mySwiper = new Swiper('.bestwork .swiper-container', {
    updateOnWindowResize: true,
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    speed: 400,
    setWrapperSize: true,
    roundLengths: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 300,
        depth: 300,
        slideShadows: false,
        modifier: 1,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 2,
        }
    },
    pagination: {
        el: '.bestwork .swiper-pagination',
    },
    navigation: {
        nextEl: '.bestwork .swiper-button-next',
        prevEl: '.bestwork .swiper-button-prev',
    },

});
// //////////////////////////////////////////////////////////////////////////////
const menu = document.querySelector('.menu');
const headerBottom = document.querySelector('.header_bottom');
const menuWrapper = document.querySelector('.menu_wrapper');
const menuClose = document.querySelector('.menu_close');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.nav a');

menu.addEventListener('click', () => {
    menuWrapper.classList.toggle('active')
    headerBottom.classList.toggle('active')
    body.style.overflow = 'hidden'
})
menuClose.addEventListener('click', () => {
    menuWrapper.classList.toggle('active')
    headerBottom.classList.toggle('active')
    body.style.overflow = 'visible'
})
menuWrapper.addEventListener('click', () => {
    menuWrapper.classList.toggle('active')
    headerBottom.classList.toggle('active')
    body.style.overflow = 'visible'
})
menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
        menuWrapper.classList.remove('active')
        headerBottom.classList.toggle('active')
        body.style.overflow = 'visible'
    })
})

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("contacts_map"), {
        center: new google.maps.LatLng(41.315215, 69.245549),
        zoom: 16,
    });
    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(41.315215, 69.245549),
        icon: {
            url: 'img/map_logo.svg',
        },
        map: map,
    });
};
initMap();