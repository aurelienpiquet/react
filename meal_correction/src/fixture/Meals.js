const listing = [
    {
        'name' : 'Sushi',
        'description' : 'Finest fish and veggies',
        'price' : 22.99,
        'id': '1'
    },
    {
        'name' : 'Barbecus burget',
        'description' : 'A very good burger',
        'price' : 15.90,
        'id': '2'
    },
    {
        'name' : 'Fish and chips',
        'description' : 'A very fish and more awesome chips',
        'price' : 12,
        'id': '3'
    },
]

const fetchInListing = (itemSearched) => {
    return listing.filter((item) => {
        return item.id === itemSearched.id;
    })?.[0];
}

export { listing, fetchInListing };
