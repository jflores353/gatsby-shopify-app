import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          description
          descriptionHtml
          variants {
            sku
            id
            title
            price
          }
        }
      }
    }
  }
`

const ProductsListing = () => {
  const data = useStaticQuery(PRODUCTS_LISTING_QUERY)
  console.log(data)
  return <div></div>
}
export default ProductsListing
