var beats = Array.from(document.querySelectorAll('.beat'))

beats.forEach(function(beat) {
	beat.isActive = false
	beat.addEventListener('mousedown', function() {
		 beat.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	beats.forEach(function(beat) {
		beat.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	beats.forEach(function(beat) {
		if (beat.isActive) {
			beat.style.top = event.pageY - 50 + 'px'
			beat.style.left = event.pageX - 50 + 'px'
		}
	})
})
