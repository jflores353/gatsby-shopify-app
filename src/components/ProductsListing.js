import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          images {
            localFile {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
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
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)
  return (
    <div>
      {allShopifyProduct.edges.map(edge => (
        <Product product={edge.node} key={edge.node.id} />
      ))}
    </div>
  )
}
export default ProductsListing
