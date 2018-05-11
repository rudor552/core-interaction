var journeys = Array.from(document.querySelectorAll('.journey img'))

journeys.forEach(function(journey) {
	journey.isActive = false
	journey.addEventListener('mousedown', function() {
		 journey.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	journeys.forEach(function(journey) {
		journey.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	journeys.forEach(function(journey) {
		if (journey.isActive) {
			var height = journey.clientHeight
			var width = journey.clientWidth
			journey.style.top = event.pageY - height/2 + 'px'
			journey.style.left = event.pageX - width/2 + 'px'
		}
	})
})
