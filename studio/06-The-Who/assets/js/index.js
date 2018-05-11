var lyricsDiv = document.querySelector('.lyrics')

var artistInput = document.querySelector('#artist')
var titleInput = document.querySelector('#title')
var submitButton = document.querySelector('#lyric-submit')

submitButton.addEventListener('click', function() {

	var artistName = artistInput.value
	var songTitle = titleInput.value

	// Insert your actual API request URL below
	fetch('https://api.lyrics.ovh/v1/' + artistName + '/' + songTitle)
		 .then(function(response) {
			  // Get the response and format it to JSON
			  return response.json();
		 })
		 .then(function(jsonData) {
			  // log the data
			  console.log(jsonData)
			  render(jsonData)
		 });
})


function render(data) {
	// do stuff with the data
	lyricsDiv.innerText = data.lyrics
}
