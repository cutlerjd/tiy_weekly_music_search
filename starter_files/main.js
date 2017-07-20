/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let url = new URL ("/search?term=","https://itunes.apple.com")
console.log(url)

fetch(url + "u2").then(function(response){
  console.log(response)  
  return response
})
.then(function(response) {
  return response.json();
})
.then(function(musicData) {
    console.log(musicData)
    return musicData
});
