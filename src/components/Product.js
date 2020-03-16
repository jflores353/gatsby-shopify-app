import React from "react"
import Img from "gatsby-image"

const Product = ({ product }) => {
  return (
    <div>
      <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
      <h3>{product.title}</h3>
    </div>
  )
}

export default Product
