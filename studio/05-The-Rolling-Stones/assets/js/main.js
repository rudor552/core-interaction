var stones = Array.from(document.querySelectorAll('.stone img'))

stones.forEach(function(stone) {
	stone.isActive = false
	stone.addEventListener('mousedown', function() {
		 stone.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	stones.forEach(function(stone) {
		stone.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	stones.forEach(function(stone) {
		if (stone.isActive) {
			var height = stone.clientHeight
			var width = stone.clientWidth
			stone.style.top = event.pageY - height/2 + 'px'
			stone.style.left = event.pageX - width/2 + 'px'
		}
	})
})
