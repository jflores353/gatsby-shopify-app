import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product.handle}`}>
      <div>
        <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
        <h3>{product.title}</h3>
      </div>
    </Link>
  )
}

export default Product
