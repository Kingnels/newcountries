// document.getElementById('flags').addEventListener("click", getText)
let cardWrapper = document.getElementById('flags');
let searchInput = document.getElementById('search');

function populate(){
    fetch("countries.json", {mode:"cors"})
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
       
        let cards = "<div></div>";
        data.map((x) => {
            cards += `
            <a href='#'>
            <div class="card">
            <div class="image">
                <img src="${x.flag}" alt="">
            </div>

            <div class="detail">
                <h2>${x.name}</h2>
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

fetch("countries.json", {mode:"cors"})
.then((res) => res.json())
.then((data) => {
    //console.log(data);
   
    let cards = "<div></div>";
    // let count = 0;
    data.map((x) => {
       if(x.name.toLowerCase().includes(searchInput.value.toLowerCase())){
           //count++;
           
            cards += `
            <a href='#'>
            <div class="card">
            <div class="image">
                <img src="${x.flag}" alt="">
            </div>

            <div class="detail">
                    <h2>${x.name}</h2>
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