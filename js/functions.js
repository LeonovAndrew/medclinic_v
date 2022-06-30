$(function(){
	// Проверка браузера
	if ( !supportsCssVars() ) {
		$('body').addClass('lock')
		$('.supports_error').addClass('show')
	}

	// Ленивая загрузка
	setTimeout(function(){
		observer = lozad('.lozad:not(.loaded)', {
			rootMargin: '200px 0px',
			threshold: 0,
			loaded: function(el) {
				el.classList.add('loaded')
			}
		})

		observer.observe()
	}, 200)


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() +'px')

	// Показать все
	$('body').on('click', 'header .menu .sub_menu .more_btn', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active').text('Смотреть все')

			$(this).closest('.list_wrapp').find('.hide').removeClass('show')
		} else {
			$(this).addClass('active').text('Скрыть')

			$(this).closest('.list_wrapp').find('.hide').addClass('show')
		}
    })

    // Поиск
	$('body').on('click', '.open_search', function(e) {
    	e.preventDefault()

		$('.search_content').fadeIn(200)

		$('body').addClass('lock')
    })

	$('body').on('click', '.close_search', function(e) {
    	e.preventDefault()

		$('.search_content').fadeOut(200)

		$('body').removeClass('lock')
    })


	// Плавная прокрутка к якорю
	$('body').on('click', '.scroll_link', function(e) {
		e.preventDefault()

		let href = $(this).data('anchor')

		$('html, body').stop().animate({
			scrollTop: $(href).offset().top - 80
		}, 1000)
	})


	// Аккордион
	$('body').on('click', '.accordion .item .title', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.item')
		let accordion = $(this).closest('.accordion')

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
			parent.find('.data').slideUp(300)
		} else {
			accordion.find('.item .title').removeClass('active')
			accordion.find('.data').slideUp(300)

			$(this).addClass('active')
			parent.find('.data').slideDown(300)
		}
	})


     // Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function(e) {
		e.preventDefault()

	    if( !$(this).hasClass('active') ) {
	    	let parent = $(this).closest('.tabs_container')
		    let activeTab = $(this).data('content')
        	let level = $(this).data('level')

		    parent.find('.tabs:first').find('button').removeClass('active')
		    parent.find('.tab_content.' + level).removeClass('active')

		    $(this).addClass('active')
		    $(activeTab).addClass('active')


		    let text = $(this).text()

		    $(this).closest('.fix_tabs').removeClass('show')

		    $(this).closest('.tabs_container').find('.open_tabs').text(text)
	    }
	})

	if( locationHash && $('.tabs_container').length ) {
		let activeTab = $('.tabs button[data-content='+ locationHash +']')
		let parent = activeTab.closest('.tabs_container')
    	let level = activeTab.data('level')

		parent.find('.tabs:first').find('button').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		$(locationHash).addClass('active')

		$('html, body').stop().animate({
		   	scrollTop: $(locationHash).offset().top - 430
		}, 1000)
	}


	$('body').on('click', '.open_tabs', function(e) {
		e.preventDefault()

	    $(this).closest('.tabs_container').find('.fix_tabs').addClass('show')
	})

	$('body').on('click', '.fix_tabs .close_tabs', function(e) {
		e.preventDefault()

	    $(this).closest('.fix_tabs').removeClass('show')
	})

	


	// Моб. меню
	$('body').on('click', '.mob_menu_link', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active')

			$('header .info').removeClass('show')

			$('header').removeClass('active')

			$('body').removeClass('mob_lock')
		} else {
			$(this).addClass('active')

			$('header .info').addClass('show')

			$('header').addClass('active')

			$('body').addClass('mob_lock')

			let HeadH = $('header .top').outerHeight()

			$('header .info').css('padding-top', HeadH)
		}
    })


	// Раскрытие элемента
	$('.more_btnJs').click(function(e){
		e.preventDefault()

		$(this).closest('.wrapp_more').find('.hidden').removeClass('hidden')
		$(this).closest('.wrapp_more').find('.mob_hidden').removeClass('mob_hidden')

		$(this).hide()
	})


	if( $(window).width() < 1025 ){
		// Аккордион моб меню
		$('body').on('click', 'header .menu .item a.sub_link', function(e) {
			e.preventDefault()

			if( $(this).hasClass('view') ) {
				$(this).removeClass('view')
				$(this).next().slideUp(300)
			} else {
				$(this).addClass('view')
				$(this).next().slideDown(300)
			}
		})
	}

	if( $(window).width() < 768 ){
		// Аккордион моб меню

		$('body').on('click', 'header .menu .sub_menu .sub_link2', function(e) {
			e.preventDefault()

			if( $(this).hasClass('view') ) {
				$(this).removeClass('view')
				$(this).next().slideUp(300)
			} else {
				$(this).addClass('view')
				$(this).next().slideDown(300)
			}
		})
	}


	// Всплывающие окна
	$('.modal_link').click(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).data('content'),
			type : 'inline',
			opts : {
				touch : false,
				speed : 300,
				backFocus : false,
				trapFocus : false,
				autoFocus : false,
				mobile : {
				    clickSlide: "close"
				}
			}
		})
	})


	// Увеличение картинки
	$('.fancy_img').fancybox({
		backFocus : false,
		mobile : {
		    clickSlide: "close"
		}
	})

	$(document).on('click', '.swiper-slide-duplicate .fancy_img', function(e) {
		e.preventDefault()

		let thisSlideIndes = $(this).closest('.swiper-slide-duplicate').data('swiper-slide-index')

		$(this).closest('.swiper-wrapper').find('.swiper-slide:not(.swiper-slide-duplicate)[data-swiper-slide-index="' + thisSlideIndes + '"] a').trigger('click')
	})


	// Маска ввода
	$('input[type=tel]').inputmask('+7 999 999-99-99')

	// Кастомный select
	$('.select_wrap select').niceSelect()


	//Календари
	$('.datepicker_here').datepicker({
		autoClose: true,
		navTitles: {
		    days: 'MM yyyy',
		},
		onRenderCell: function(date, cellType) {
			if (cellType == 'day') {
	            return {
	            	html: '<div><span>'+date.getDate()+'</span></div>',
	            }
	        }
	    },
		onShow: function(inst){
			inst.$el.addClass('show')

			$('.fancybox-slide--html').addClass('noScroll')
			$('body').addClass('lock_date')

			if ( !inst.$el.hasClass('active') ) {
				inst.$el.addClass('active')

				let textData = inst.$el.data('text')

				inst.$el.next().prepend($('<div class="title_datepicker">'+ textData +'</div>'))

				inst.$el.next().prepend($('<button type="button" class="close_datepicker"></button>'))
			}


			inst.$el.next().find('.close_datepicker').click(function(e){
				e.preventDefault()

				$(this).closest('.datepicker').removeClass('active')

				$(this).closest('.datepicker').prev().removeClass('show')

				$(this).closest('.datepicker').prev().blur()
			})
		},
		onHide: function(inst){
			inst.$el.removeClass('show')

			$('.fancybox-slide--html').removeClass('noScroll')
			$('body').removeClass('lock_date')
		}
	})


	// Показать полностью
	$('body').on('click', '.read_more', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active')

			let textBtn = $(this).text()

			let dataText = $(this).attr('data-text')

			$(this).text(dataText)

			$(this).attr('data-text', textBtn)

			$(this).closest('.review').find('.text').removeClass('show')
		} else {
			$(this).addClass('active')

			let textBtn = $(this).text()

			let dataText = $(this).attr('data-text')

			$(this).text(dataText)

			$(this).attr('data-text', textBtn)

			$(this).closest('.review').find('.text').addClass('show')
		}
    })
})

$(window).load(function(){
	if( $(window).width() > 1024 ){
		// Шапка
		headerHeight = $('header').innerHeight()

		$('header').wrap('<div class="header_wrap" style="height: ' + headerHeight + 'px"></div>')
	}

	// Шапка
	if( $(window).scrollTop() > $(window).height() && $(window).width() > 1024 ) {
		$('header').addClass('fixed')
	} else{
		$('header').removeClass('fixed')
	}

	if( $(window).scrollTop() > 0 ) {
		$('header .top').addClass('fixed')
	} else{
		$('header .top').removeClass('fixed')
	}

	$(window).scroll(function(){
		if( $(window).scrollTop() > $(window).height() && $(window).width() > 1024 ) {
			$('header').addClass('fixed')
		} else{
			$('header').removeClass('fixed')
		}

		if( $(window).scrollTop() > 0 ) {
			$('header .top').addClass('fixed')
		} else{
			$('header .top').removeClass('fixed')
		}
	})

	$('header').height('auto')

	if ( $(window).width() < 1025 ) {
		let headH = $('header .top').outerHeight()

		$('header').height(headH)
	}
})


$(window).resize(function(){
	$('header').height('auto')

	if ( $(window).width() < 1025 ) {
		let headH = $('header .top').outerHeight()

		$('header').height(headH)

		$('header .info')
	}
})

// Вспомогательные функции
function widthScroll() {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}


var supportsCssVars = function() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}

function setHeight(className){
    let maxheight = 0

    className.each(function() {
    	let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}