var blocks = Array.from(document.querySelectorAll('.block'))

blocks.forEach(function(block) {
	block.isActive = false
	block.addEventListener('mousedown', function() {
		 block.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	blocks.forEach(function(block) {
		block.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	blocks.forEach(function(block) {
		if (block.isActive) {
			block.style.top = event.pageY - 50 + 'px'
			block.style.left = event.pageX - 50 + 'px'
		}
	})
})
