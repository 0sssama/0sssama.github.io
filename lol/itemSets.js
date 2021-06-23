let displayItems = items.map(
    (item) =>
        `<div class="item ${item.sold_out ? 'sold-out' : ''}">
            <a href="/lol/item-page/${item.id}">
                <p class="sold-out-text ${item.sold_out ? 'visible' : ''}">Sold out</p>
                <img src="${item.image}" alt="${item.name}">
                <div class="item__description">
                    <h2 class="item__name">${item.name}</h2>
                    <p class="item__price">$${item.price}</p>
                </div>
            </a>
        </div>`
);
displayItems = displayItems.join('\n\r');
$('main').html(displayItems);