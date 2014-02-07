$ ->
	# $(window).scrollTop(300)
	$(window).scroll (e) ->
		$scrollables = $('[data-bg-speed]')
		y = $(this).scrollTop()
		$scrollables.each (i, el) ->
			speed = $(el).attr('data-bg-speed')
			console.log "-#{y/speed}px"
			$(this).scrollTop("-#{y/speed}px")