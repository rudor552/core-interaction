var beats = Array.from(document.querySelectorAll('.beat img'))

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
			var height = beat.clientHeight
			var width = beat.clientWidth
			beat.style.top = event.pageY - height/2 + 'px'
			beat.style.left = event.pageX - width/2 + 'px'
		}
	})
})
