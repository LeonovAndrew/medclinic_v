$(function(){
	// Главный слайдер
	if ($('.main_slider .slider').length) {
		new Swiper('.main_slider .slider', {
			spaceBetween: 15,
			slidesPerView: 1,
			loop: true,
			speed: 750,
			watchOverflow: true,
			watchSlidesVisibility: true,
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			}
		})
	}


	// О нас
	if ($('.about .slider').length) {
		new Swiper('.about .slider', {
			spaceBetween: 15,
			slidesPerView: 1,
			loop: true,
			speed: 500,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			}
		})
	}


	// Клиника в фото
	if ($('.gallery .slider').length) {
		new Swiper('.gallery .slider', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			speed: 500,
			watchOverflow: true,
			watchSlidesVisibility: true,
			loopAdditionalSlides: 1,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1
				}
			},
			on: {
		        init: function (swiper) {
		        	$(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')

			        setTimeout(function(){
			            observer.observe()
			        }, 300)
		        }
		    }
		})
	}


	// Клиника в фото
	if ($('.gallery_small .slider').length) {
		new Swiper('.gallery_small .slider', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			speed: 500,
			watchOverflow: true,
			watchSlidesVisibility: true,
			loopAdditionalSlides: 1,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 3
				}
			},
			on: {
		        init: function (swiper) {
		        	$(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')

			        setTimeout(function(){
			            observer.observe()
			        }, 300)
		        }
		    }
		})
	}

	// Клиника в фото
	if ($('.articles .slider').length) {
		new Swiper('.articles .slider', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			speed: 500,
			watchOverflow: true,
			watchSlidesVisibility: true,
			loopAdditionalSlides: 1,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 12,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 3
				}
			}
		})
	}


	// Открыть фильтр
	$('body').on('click', '.open_filter', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
			$(this).next().slideUp()
		} else {
			$(this).addClass('active')
			$(this).next().slideDown()
		}
    })


    // Лицензии
	if ($('.licenses .slider').length) {
		new Swiper('.licenses .slider', {
			spaceBetween: 20,
			slidesPerView: 2,
			loop: false,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			}
		})
	}


	if ($('.reviews .slider').length) {
		new Swiper('.reviews .slider', {
			spaceBetween: 20,
			slidesPerView: 2,
			loop: false,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
		        slideChangeTransitionEnd: function (swiper) {
		        	$(swiper.$el).find('.review').each(function() {
			        	if ( $(this).find('.read_more').hasClass('active') ) {
			        		let textBtn =  $(this).find('.read_more.active').text()
							let dataText = $(this).find('.read_more.active').attr('data-text')

							$(this).find('.read_more.active').text(dataText)
							$(this).find('.read_more.active').attr('data-text', textBtn)

							$(this).find('.read_more.active').removeClass('active')
				        	$(this).find('.text.show').removeClass('show')
			        	}
			        })
		        },
		    },
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 2
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 2
				}
			}
		})
	}


	if ( $('.filter_page').length ) {
		var mixer = mixitup('.filter_page', {
			selectors: {
		        target: '.mix:not(.hide)'
		    },
			controls: {
		        scope: 'local'
		    },
			animation: {
				duration: 300
			}
		})
	}
})

$(window).load(function(){
	// Преимущества
	if ($('.advantages .slider').length) {
		new Swiper('.advantages .slider', {
			spaceBetween: 20,
			slidesPerView: 4,
			loop: false,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.item').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.item') )
					}, 200)
				},
				resize: function (swiper) {
					$(swiper.$el).find('.item').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.item') )
					}, 200)
				}
			}
		})
	}

	// Наши аллергологи
	if ($('.doctors .slider').length) {
		new Swiper('.doctors .slider', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			speed: 500,
			watchOverflow: true,
			watchSlidesVisibility: true,
			loopAdditionalSlides: 1,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 2
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 2
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.doctor').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.doctor') )
					}, 200)
				},
				resize: function (swiper) {
					$(swiper.$el).find('.doctor').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.doctor') )
					}, 200)
				}
			}
		})
	}
})