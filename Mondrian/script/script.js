'use strict';

let animateFlag = false;

let animationList = [
    ['rotateIn1', 'rotateOut1'],
    ['rotateIn2', 'rotateOut2'],
    ['zoomIn', 'zoomOut'],
    ['slideIn', 'slideOut'],
    ['fadeIn', 'fadeOut'],
    ['tantalidIn', 'tantalidOut']
];

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isAnimation(obj, animeType) {
    $(obj).off().not(':animated').removeClass('hidden').addClass(animeType).on('animationend', function () {
        $(obj).removeClass(animeType);
    });
}

function createOverlay(target) {
    $(target).prepend('<div class="modal-overlay"></div>');
}

function buildGalleryModal(target) {
    let cloneTarget = $('div').filter(function () {
        return ($(this).data('target') === target);
    });
    $(cloneTarget).clone(true).appendTo($(cloneTarget).parents('section')).removeAttr('data-target').attr({
        id: target,
        class: 'gallery-modal js-modal hidden'
    });

    let modal = document.getElementById(target);
    $(modal).children('dl').wrap('<figcaption>');
    $(modal).wrapInner('<div class="gallery-modal-content"><figure>');
    return modal;
}

$(function () {
    $('.js-contact-demo').on('submit', function (event) {
        event.preventDefault();
    });

    $('.js-modal-open').each(function () {
        $(this).on('click', function () {
            if (!animateFlag) {

                if ($('.l-body').css('display') === 'grid') {
                    animateFlag = true;
                    let target = $(this).data('target');
                    let reduceMotion = prefersReducedMotion();

                    if (target === 'contact') {
                        createOverlay('.contact-modal');
                        $('.contact-modal').off().removeClass('hidden');
                        if (reduceMotion) {
                            animateFlag = false;
                        } else {
                            isAnimation($('.modal-overlay'), animationList[4][0]);
                            isAnimation('#contact', animationList[5][0]);
                            $('.modal-overlay').on('animationend', function () {
                                animateFlag = false;
                            });
                        }
                    } else if (target === 'blog') {
                        createOverlay('.blog-modal');
                        $('.blog-modal').off().removeClass('hidden');
                        if (reduceMotion) {
                            animateFlag = false;
                        } else {
                            isAnimation($('.modal-overlay'), animationList[4][0]);
                            isAnimation('#blog', animationList[5][0]);
                            $('.modal-overlay').on('animationend', function () {
                                animateFlag = false;
                            });
                        }
                    } else {
                        let modal = buildGalleryModal(target);
                        createOverlay(modal);

                        if (reduceMotion) {
                            $(modal).removeClass('hidden');
                            animateFlag = false;
                        } else {
                            $('body').css('perspective', '50rem');
                            $('.l-body').wrap('<div class="rotate-body">');

                            isAnimation('.rotate-body', animationList[0][0]);
                            $('.rotate-body').on('animationend', function () {
                                $(modal).off().removeClass('hidden');
                                isAnimation('.rotate-body', animationList[1][0]);
                                isAnimation($('.modal-overlay'), animationList[4][0]);
                                isAnimation($(modal).children('*:not(:first-child)'), animationList[3][0]);
                                $('.modal-overlay').on('animationend', function () {
                                    $('body').css('perspective', '');
                                    $('.l-body').unwrap();
                                    animateFlag = false;
                                });
                            });
                        }
                    }
                } else {
                    animateFlag = true;
                    let target = $(this).data('target');
                    if (target === 'contact') {
                        createOverlay('.contact-modal');
                        $('.contact-modal').fadeIn(function () {
                            animateFlag = false;
                        });
                    } else {
                        $('<div id ="' + target + '">').insertAfter('header').addClass('gallery-modal-mobile js-modal hidden');
                        let modal = document.getElementById(target);

                        $.ajax({
                            type: 'GET',
                            url: 'index.html',
                            dataType: 'html',
                            success: function (data) {
                                $(modal).html($(data).find('[data-target="' + target + '"]').find('img'));
                                createOverlay(modal);

                                $(modal).fadeIn(function () {
                                    animateFlag = false;
                                });
                            }
                        });
                    }
                }
            }
        });
    });

    $(document).on('click', '.modal-overlay, .js-modal-close', function () {
        if (!animateFlag) {
            let modal = document.getElementById($('.modal-overlay').parent('div').attr('id'));
            let reduceMotion = prefersReducedMotion();

            if ($('.l-body').css('display') === 'grid') {

                if ($('.modal-overlay').siblings('div').attr('id') === 'contact') {
                    animateFlag = true;
                    if (reduceMotion) {
                        $('.modal-overlay').remove();
                        $('.contact-modal').addClass('hidden');
                        animateFlag = false;
                    } else {
                        isAnimation($('.modal-overlay'), animationList[4][1]);
                        isAnimation('#contact', animationList[5][1]);
                        $('.modal-overlay').on('animationend', function () {
                            $('.modal-overlay').remove();
                        });
                        $('#contact').on('animationend', function () {
                            $('.contact-modal').addClass('hidden');
                            animateFlag = false;
                        });
                    }
                } else if ($('.modal-overlay').siblings('dl').attr('id') === 'blog') {
                    animateFlag = true;
                    if (reduceMotion) {
                        $('.modal-overlay').remove();
                        $('.blog-modal').addClass('hidden');
                        animateFlag = false;
                    } else {
                        isAnimation($('.modal-overlay'), animationList[4][1]);
                        isAnimation('#blog', animationList[5][1]);
                        $('.modal-overlay').on('animationend', function () {
                            $('.modal-overlay').remove();
                        });
                        $('#blog').on('animationend', function () {
                            $('.blog-modal').addClass('hidden');
                            animateFlag = false;
                        });
                    }
                } else {
                    animateFlag = true;
                    if (reduceMotion) {
                        $(modal).remove();
                        animateFlag = false;
                    } else {
                        $('body').css('perspective', '50rem');
                        $('.l-body').wrap('<div class="rotate-body">');
                        isAnimation('.rotate-body', animationList[0][1]);
                        $('.rotate-body').on('animationend', function () {
                            isAnimation('.rotate-body', animationList[1][1]);
                            isAnimation($('.modal-overlay'), animationList[4][1]);
                            isAnimation($(modal).children('*:not(:first-child)'), animationList[3][1]);

                            $('.rotate-body').on('animationend', function () {
                                $(modal).remove();
                                $('body').css('perspective', '');
                                $('.l-body').unwrap();
                                animateFlag = false;
                            });
                        });
                    }
                }
            } else {

                if ($('.modal-overlay').siblings('div').attr('id') === 'contact') {
                    animateFlag = true;
                    $('.contact-modal').fadeOut(function () {
                        $('.modal-overlay').remove();
                        animateFlag = false;
                    });
                } else {
                    animateFlag = true;
                    $(modal).fadeOut(function () {
                        $(modal).remove();
                        animateFlag = false;
                    });
                }
            }
        }
    });
});
