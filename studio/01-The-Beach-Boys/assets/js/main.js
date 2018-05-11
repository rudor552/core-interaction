var beaches = Array.from(document.querySelectorAll('.beach img'))

beaches.forEach(function(beach) {
	beach.isActive = false
	beach.addEventListener('mousedown', function() {
		 beach.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	beaches.forEach(function(beach) {
		beach.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	beaches.forEach(function(beach) {
		if (beach.isActive) {
			var height = beach.clientHeight
			var width = beach.clientWidth
			beach.style.top = event.pageY - height/2 + 'px'
			beach.style.left = event.pageX - width/2 + 'px'
		}
	})
})
