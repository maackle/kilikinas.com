$ ->
	# $(window).scrollTop(300)
	$(window).scroll (e) ->
		$scrollables = $('[data-bg-speed]')
		y = $(this).scrollTop()
		$scrollables.each (i, el) ->
			speed = $(el).attr('data-bg-speed')
			console.log "-#{y/speed}px"
			$(this).scrollTop("-#{y/speed}px")

	$orderChoices = $('.order-page .location-choices')
	$orderItems = $('.order-page .squareup-embeds')

	resetOrderPage = (e) ->
		$orderChoices.fadeIn()
		$orderItems.hide()
		$orderItems.find('.local-items, .anywhere-items').hide()

	unfoldOrderPage = (e) ->
		$orderChoices.hide()
		$orderItems.fadeIn('slow')
		if $(this).hasClass('local')
			$orderItems.find('.local-items').show()
		else
			$orderItems.find('.anywhere-items').show()

	$orderChoices.find('.choice').click unfoldOrderPage
	$orderItems.find('a.reset').click resetOrderPage

	# Uncomment the next line to show locale choices
	resetOrderPage()