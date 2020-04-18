const flowerPowerUrl = "https://wordpress.y-ferreira.eu/wp-json/wc/store/products";

async function fetchFlowers() {
    try {
        const response = await fetch(flowerPowerUrl);
        const flowers = await response.json();
        displayFlowers(flowers);
    } catch (error) {
        console.log(error);
    }
}
fetchFlowers();
function displayFlowers(flowers) {
    console.log(flowers);
    const flowerContainer = document.querySelector(".products");
    let html = "";

    for (let i = 0; i < flowers.length; i++) {
        
        if (!flowers[i].images) {
            continue;
        }
       
       let flowerPrices = "Unknown";
       if (flowers[i].prices.price !== "-") {
        flowerPrices = flowers[i].prices.price; 
       }
       let flowerPricesKR = "Unknown";
       if (flowers[i].prices.price_prefix !== "-") {
        flowerPricesKR = flowers[i].prices.price_prefix; 
       }
       let flowerPricesDot = "Unknown";
       if (flowers[i].prices.decimal_separator !== "-") {
        flowerPricesDot = flowers[i].prices.decimal_separator; 
       }
       let flowerButton = "Unknown";
       if (flowers[i].add_to_cart.text !== "-") {
        flowerButton = flowers[i].add_to_cart.text;
       }
       let flowerImages = "Unknown";
       if (flowers[i].images[0].src !== "-") {
       flowerImages = flowers[i].images[0].src;
       }
            // console.log(flowers[i].images[0].srcset);

        html +=  `<div class="card">
        <div class="image" style="background-image: url(${flowerImages});"></div>
        <div class="details">
            <h4 class="name">${flowers[i].name}</h4>
            <p>${flowerPricesKR}${flowerPrices}${flowerPricesDot}${flowers[i].average_rating}${flowers[i].average_rating}</p>
            <a class="button" href="">${flowerButton}</a>
            <a class="button" href="/">${"View More"}</a>
        </div>
    </div>`; 
    }
    flowerContainer.innerHTML = html;
}
