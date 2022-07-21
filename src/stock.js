const data = require('./dataset.json')

let cards = ``
data.stock.forEach(item => {
    let price_currency = {
        EUR: '&euro;',
        CENT: '&cent;',
        POUND: '&pound;',
        RUB: '&#8381;',
        YEN: '&yen;',
        USD: '&#36;'
    }
    cards += `
        <div class="card">
            <div class="card__img"><a href="${item.href}"><img src="./images/gallery/${item.image}" alt="${item.title}"></a></div>
            <div class="card__description">
                <h3 class="card__title">${item.title}</h3>
               <ul class="card__tag-list">
                    <li class="card__tag">make: ${item.make}</li>
                    <li class="card__tag">model: ${item.model}</li>
                    <li class="card__tag">type: ${item.type}</li>
                    <li class="card__tag">year: ${item.year}</li>
                    <li class="card__tag">mileage: ${item.mileage}</li>
                    <li class="card__tag">axle_configuration: ${item.axle_configuration}</li>
                    <li class="card__tag">power: ${item.power}</li>
                    <li class="card__tag">power_measure: ${item.power_measure}</li>
                    <li class="card__tag">payload: ${item.payload}</li>
                    <li class="card__tag">gross_weight: ${item.gross_weight}</li>
                </ul>
                <div class="card__price"><span>${price_currency[item.price_currency]}${item.price.toLocaleString()}</span></div>
            </div>
        </div>`
})

module.exports = cards

