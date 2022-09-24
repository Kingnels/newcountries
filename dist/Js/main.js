// document.getElementById('flags').addEventListener("click", getText)
let cardWrapper = document.getElementById('flags');
let searchInput = document.getElementById('search');

function populate(){
    // fetch("countries.json", {mode:"cors"})
    fetch("https://restcountries.com/v3.1/all", {mode:"cors"})

    .then((res) => res.json())
    .then((data) => {
        console.log(data);
       
        let cards = "<div style='position:absolute'></div>";
        data.map((x) => {
            // console.log(x)
    
            cards += `
            <a href='#' style = 'text-decoration: none'>
            <div class="card">
            <div class="image">
                <img src="${x.flags.png}" alt="">
            </div>

            <div class="detail">
                <h2>${x.name.common}</h2>
                <p> <span>Population: </span>${x.population}</p>
                <p> <span>Region: </span>${x.region}</p>
                <p> <span>Capital: </span>${x.capital}</p>
            </div>
        </div>
            </a>
            `
        })
        cardWrapper.innerHTML = cards
    })
.catch((err) => {
    console.log(err);
})
}
populate();


// the search events

searchInput.addEventListener("keyup",()=>{
//    console.log()

fetch("https://restcountries.com/v3.1/all", {mode:"cors"})
.then((res) => res.json())
.then((data) => {
    //console.log(data);
   
    let cards = "<div style='position:absolute'></div>";
    // let count = 0;
    data.map((x) => {
       if(x.name.common.toLowerCase().includes(searchInput.value.toLowerCase())){
           //count++;
           
            cards += `
            <a href='#' style = 'text-decoration: none'>
            <div class="card">
            <div class="image">
                <img src="${x.flags.png}" alt="">
            </div>

            <div class="detail">
                    <h2>${x.name.common}</h2>
                    <p> <span>Population: </span>${x.population}</p>
                    <p> <span>Region: </span>${x.region}</p>
                    <p> <span>Capital: </span>${x.capital}</p>
                </div>
            </div>
            </a>
            `
       }

    })
    // console.log(count)
    // if(count < 1){
    //     cards = "No match found"
    // }
    cardWrapper.innerHTML = cards
})
.catch((err) => {
console.log(err);
})

})