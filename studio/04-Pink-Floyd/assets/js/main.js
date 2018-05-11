var pinks = Array.from(document.querySelectorAll('.pink img'))

pinks.forEach(function(pink) {
	pink.isActive = false
	pink.addEventListener('mousedown', function() {
		 pink.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	pinks.forEach(function(pink) {
		pink.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	pinks.forEach(function(pink) {
		if (pink.isActive) {
			var height = pink.clientHeight
			var width = pink.clientWidth
			pink.style.top = event.pageY - height/2 + 'px'
			pink.style.left = event.pageX - width/2 + 'px'
		}
	})
})
