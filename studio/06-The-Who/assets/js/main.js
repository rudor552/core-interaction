var whos = Array.from(document.querySelectorAll('.who img'))

whos.forEach(function(who) {
	who.isActive = false
	who.addEventListener('mousedown', function() {
		 who.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	whos.forEach(function(who) {
		who.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	whos.forEach(function(who) {
		if (who.isActive) {
			var height = who.clientHeight
			var width = who.clientWidth
			who.style.top = event.pageY - height/2 + 'px'
			who.style.left = event.pageX - width/2 + 'px'
		}
	})
})
