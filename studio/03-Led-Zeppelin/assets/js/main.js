var leds = Array.from(document.querySelectorAll('.led img'))

leds.forEach(function(led) {
	led.isActive = false
	led.addEventListener('mousedown', function() {
		 led.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	leds.forEach(function(led) {
		led.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	leds.forEach(function(led) {
		if (led.isActive) {
			var height = led.clientHeight
			var width = led.clientWidth
			led.style.top = event.pageY - height/2 + 'px'
			led.style.left = event.pageX - width/2 + 'px'
		}
	})
})
