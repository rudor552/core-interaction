var queens = Array.from(document.querySelectorAll('.queen img'))

queens.forEach(function(queen) {
	queen.isActive = false
	queen.addEventListener('mousedown', function() {
		 queen.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	queens.forEach(function(queen) {
		queen.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	queens.forEach(function(queen) {
		if (queen.isActive) {
			var height = queen.clientHeight
			var width = queen.clientWidth
			queen.style.top = event.pageY - height/2 + 'px'
			queen.style.left = event.pageX - width/2 + 'px'
		}
	})
})
