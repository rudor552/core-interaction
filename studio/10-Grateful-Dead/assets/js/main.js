var gratefuls = Array.from(document.querySelectorAll('.grateful img'))

gratefuls.forEach(function(grateful) {
	grateful.isActive = false
	grateful.addEventListener('mousedown', function() {
		 grateful.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	gratefuls.forEach(function(grateful) {
		grateful.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	gratefuls.forEach(function(grateful) {
		if (grateful.isActive) {
			var height = grateful.clientHeight
			var width = grateful.clientWidth
			grateful.style.top = event.pageY - height/2 + 'px'
			grateful.style.left = event.pageX - width/2 + 'px'
		}
	})
})
