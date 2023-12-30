var swiper = function (root) {
    var me = this;
    me.root = $(root);

    var _init = function (element) {
        var $element = element;
        
        initEvents($element);
    },

    initEvents = function ($element) {
        var swiperArr = [];

        $($element).each(function(item) {
            slideItem = $(this);
            swiperType = $(this).attr('data-swiper-type');

            switch (swiperType) {
                case 'breaking-news-slider':
                    swiperArr[item] = new Swiper('#'+swiperType, {
                        slidesPerView: "auto",
                        spaceBetween: 10,
                        loop: true,
                    });        
                    break;
                case 'main-slider':
                    var slidePagination = []

                    slideItem.find('.js-swiper-slide-item').each(function() {
                        title = $(this).attr('data-slide-title')
                        smallImage = $(this).attr('data-slide-small-image')

                        slidePagination.push(
                            {
                                title: title,
                                smallImage: smallImage
                            }
                        );
                    });

                    swiperArr[item] = new Swiper('#'+swiperType, {
                        slidesPerView: "auto",
                        spaceBetween: 10,
                        loop: true,

                        pagination: {
                            el: '.js-swiper-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return `
                                
                                    <div class="${className}">
                                        <div class="swiper-pagination-item px-3 py-3">
                                            <a href="#" class="d-flex text-white" target="_blank">
                                                <div class="image me-2">
                                                    <img src="${slidePagination[index].smallImage}" alt="#" class="rounded-circle">
                                                </div>
                                                <div class="title lh-1 text-start">
                                                    ${slidePagination[index].title}
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                `
                            },
                        },
                    });    

                slideItem.find('.swiper-pagination-bullet').hover(function() {
                    $( this ).trigger( "click" );
                });    
                    break;
            
                default:
                    // default code block..
                    break;
            }
        });
    };

    me.root.each(function () {
        new _init($(this));
    });
};

$(document).ready(function () {
    new swiper(".js-swiper-container");
});

var darkModeToggle = function (root) {
    var me = this;
    me.root = $(root);

    var _init = function (element) {
        var $element = element;
        
        initEvents($element);
    },

    initEvents = function ($element) {
        $element.on('click', function() {
            var pageBody = $('.js-page-body');
                darkModeMoon = $(`.js-dark-mode-toggle-field[data-dark-mode-type="moon"]`)
                darkModeSun = $(`.js-dark-mode-toggle-field[data-dark-mode-type="sun"]`)

            pageBody.toggleClass('dark-mode');
            
            if(pageBody.hasClass('dark-mode'))
            {
                darkModeMoon.addClass('d-none');
                darkModeSun.removeClass('d-none');
            }
            else
            {
                darkModeSun.addClass('d-none');
                darkModeMoon.removeClass('d-none');
            } 
        });
    };

    me.root.each(function () {
        new _init($(this));
    });
};

$(document).ready(function () {
    new darkModeToggle(".js-dark-mode-toggle");
});

var searchScreenToggle = function (root) {
    var me = this;
    me.root = $(root);

    var _init = function (element) {
        var $element = element;
        
        initEvents($element);
    },

    initEvents = function ($element) {
        $element.on('click', function() {
            $('.js-search-screen').show().toggleClass('fade');
        });

        $('.js-close-search-screen').on('click', function() {
            $('.js-search-screen').hide().toggleClass('fade');
        });
    };

    me.root.each(function () {
        new _init($(this));
    });
};

$(document).ready(function () {
    new searchScreenToggle(".js-search-screen-toggle");
});