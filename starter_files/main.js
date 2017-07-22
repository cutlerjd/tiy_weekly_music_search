/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
let formInput = document.getElementById("submit")
let resultsList = document.getElementsByClassName("results")[0]
let audioPlayer = document.getElementsByClassName("music-player")[0]
let url = new URL("/search?term=", "https://itunes.apple.com")

// resultsList.addEventListener("click",function(e){
//   console.log(e.target.dataset.url)
//   audioPlayer.setAttribute("src", e.target.dataset.url)
//   audioPlayer.setAttribute("autoplay",true)
// })

formInput.addEventListener("click", function (e) {
  let searchI = document.getElementById("searchTerm").value
  searchITunes(url, searchI)
})

function searchITunes(url, search) {
  fetch(url + search).then(function (response) {
    return response
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (musicData) {
      let innerHTML = ''
      musicData.results.forEach(function(result){
        innerHTML += `
    <div class="result" data-url="${result.previewUrl}">
      <img src="${result.artworkUrl100}">
      <h2>${result.trackName}</h2>
      <h3>${result.artistName}</h3>
    </div>
    `
      })
      resultsList.innerHTML = innerHTML
      return musicData
    })
    .then(addListener);
}

function addListener(){
  let results = document.querySelectorAll('.results .result *')
  results.forEach(function(listener){
    listener.addEventListener("click",function(e){
      console.log(e)
  audioPlayer.setAttribute("src", e.path[1].dataset.url)
  audioPlayer.setAttribute("autoplay",true)
    })
  })
}
