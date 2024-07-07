jQuery(document).ready(function ($) {
    "use strict";

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = $('#navbar .scrollto');
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.each(function () {
            let navbarlink = $(this);
            if (!navbarlink.prop('hash')) return;
            let section = $(navbarlink.prop('hash'));
            if (!section.length) return;
            if (position >= section.offset().top && position <= (section.offset().top + section.outerHeight())) {
                navbarlink.addClass('active');
            } else {
                navbarlink.removeClass('active');
            }
        });
    };
    $(window).on('load', navbarlinksActive);
    $(document).on('scroll', navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = $('#header');
        let offset = header.outerHeight();

        let elementPos = $(el).offset().top;
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        });
    };

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = $('#header');
    if (selectHeader.length) {
        const headerScrolled = () => {
            if ($(window).scrollTop() > 100) {
                selectHeader.addClass('header-scrolled');
            } else {
                selectHeader.removeClass('header-scrolled');
            }
        };
        $(window).on('load', headerScrolled);
        $(document).on('scroll', headerScrolled);
    }

    /**
     * Mobile nav toggle
     */
    $(document).on('click', '.mobile-nav-toggle', function (e) {
        $('#navbar').toggleClass('navbar-mobile');
        $(this).toggleClass('bi-list bi-x');
    });

    /**
     * Mobile nav dropdowns activate
     */
    $(document).on('click', '.navbar .dropdown > a', function (e) {
        if ($('#navbar').hasClass('navbar-mobile')) {
            e.preventDefault();
            $(this).next('.dropdown-menu').toggleClass('dropdown-active');
        }
    });

    /**
     * Scroll with offset on links with a class name .scrollto
     */
    $(document).on('click', '.scrollto', function (e) {
        if ($($(this).prop('hash')).length) {
            e.preventDefault();

            let navbar = $('#navbar');
            if (navbar.hasClass('navbar-mobile')) {
                navbar.removeClass('navbar-mobile');
                $('.mobile-nav-toggle').toggleClass('bi-list bi-x');
            }
            scrollto($(this).prop('hash'));
        }
    });

    /**
     * Back to top button
     */
    let backtotop = $('.back-to-top');
    if (backtotop.length) {
        const toggleBacktotop = () => {
            if ($(window).scrollTop() > 100) {
                backtotop.addClass('active');
            } else {
                backtotop.removeClass('active');
            }
        };
        $(window).on('load', toggleBacktotop);
        $(document).on('scroll', toggleBacktotop);
    }
});
$(document).ready(function () {
    function initCarousel() {
        if ($("#visible").css("display") == "block") {
            $(".carousel .carousel-item").each(function () {
                var i = $(this).next();
                i.length || (i = $(this).siblings(":first")),
                    i.children(":first-child").clone().appendTo($(this));

                for (var n = 0; n < 4; n++)
                    (i = i.next()).length || (i = $(this).siblings(":first")),
                        i.children(":first-child").clone().appendTo($(this));
            });
        }
    }
    $(window).on({
        resize: initCarousel(),
        load: initCarousel()
    });
});


$(document).ready(function () {
    function initCarousel() {
        if ($("#visible1").css("display") == "block") {
            $(".carousel .carousel-item").each(function () {
                var i = $(this).next();
                i.length || (i = $(this).siblings(":first")),
                    i.children(":first-child").clone().appendTo($(this));

                for (var n = 0; n < 4; n++)
                    (i = i.next()).length || (i = $(this).siblings(":first")),
                        i.children(":first-child").clone().appendTo($(this));
            });
        }
    }
    $(window).on({
        resize: initCarousel(),
        load: initCarousel()
    });
});




$(document).ready(function () {
    function initCarousel() {
        if ($("#visibleCarousel").css("display") == "block") {
            $(".carousel .carousel-item").each(function () {
                var item = $(this).next();
                item.length || (item = $(this).siblings(":first")),
                    item.children(":first-child").clone().appendTo($(this));

                for (var i = 0; i < 4; i++)
                    (item = item.next()).length || (item = $(this).siblings(":first")),
                        item.children(":first-child").clone().appendTo($(this));
            });
        }
    }
    $(window).on({
        resize: initCarousel(),
        load: initCarousel()
    });
});



$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousela');
    var itemsDiv = ('.MultiCarousela-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();

    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousela" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[1];
                itemWidth = '400'
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }

    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = '.leftLst';
        var rightBtn = '.rightLst';
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');

        if (divStyle && divStyle.match) {
            var values = divStyle.match(/-?[\d\.]+/g);
            var xds = Math.abs(values[4]);

            if (e == 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                $(el + ' ' + rightBtn).removeClass("over");

                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    $(el + ' ' + leftBtn).addClass("over");
                }
            } else if (e == 1) {
                var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                $(el + ' ' + leftBtn).removeClass("over");

                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    $(el + ' ' + rightBtn).addClass("over");
                }
            }

            $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        }
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});







































$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousela1s');
    var itemsDiv = ('.MultiCarouselas1-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();

    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarouselas1" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[1];
                itemWidth = '200'
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }

    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = '.leftLst';
        var rightBtn = '.rightLst';
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');

        if (divStyle && divStyle.match) {
            var values = divStyle.match(/-?[\d\.]+/g);
            var xds = Math.abs(values[4]);

            if (e == 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                $(el + ' ' + rightBtn).removeClass("over");

                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    $(el + ' ' + leftBtn).addClass("over");
                }
            } else if (e == 1) {
                var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                $(el + ' ' + leftBtn).removeClass("over");

                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    $(el + ' ' + rightBtn).addClass("over");
                }
            }

            $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        }
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});



$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousela1s');
    var itemsDiv = ('.MultiCarousela1s-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();

    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousela1s" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[1];
                itemWidth = '300'
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }

    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = '.leftLst';
        var rightBtn = '.rightLst';
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');

        if (divStyle && divStyle.match) {
            var values = divStyle.match(/-?[\d\.]+/g);
            var xds = Math.abs(values[4]);

            if (e == 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                $(el + ' ' + rightBtn).removeClass("over");

                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    $(el + ' ' + leftBtn).addClass("over");
                }
            } else if (e == 1) {
                var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                $(el + ' ' + leftBtn).removeClass("over");

                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    $(el + ' ' + rightBtn).addClass("over");
                }
            }

            $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        }
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});