
const searchBtn = document.getElementById("search-btn")
const mainFieldEl = document.getElementById("field")

searchBtn.addEventListener("click", handleClick)

function handleClick() {
    const inputEl = document.getElementById("search-input").value

    fetch(`http://www.omdbapi.com/?t=${inputEl}&apikey=44253a73&`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            mainFieldEl.innerHTML = `
                <div>
                    <h2>${data.Title}<img src="images/rating-star.png"><span>${data.imdbRating}</span></h2>
                    <span>${data.Runtime}</span>
                    <span>${data.Genre}</span>
                    <span><img src="images/watchlist.png">Watchlist</span>
                    <p>${data.Plot}</p>
                    <hr>
                </div>
            `
        } )
}

