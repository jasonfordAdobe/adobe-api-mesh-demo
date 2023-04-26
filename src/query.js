const SEARCH_TERM = 'bag'
//const NUMBER_OF_RESULTS = 6;

const query = {
    query: `{
    products(search: "${SEARCH_TERM}") {
      items {
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
        image {
          url
        }
      }
    }
  }`,
}
export default query
