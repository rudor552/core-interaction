var doors = Array.from(document.querySelectorAll('.door img'))

doors.forEach(function(door) {
	door.isActive = false
	door.addEventListener('mousedown', function() {
		 door.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	doors.forEach(function(door) {
		door.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	doors.forEach(function(door) {
		if (door.isActive) {
			var height = door.clientHeight
			var width = door.clientWidth
			door.style.top = event.pageY - height/2 + 'px'
			door.style.left = event.pageX - width/2 + 'px'
		}
	})
})
