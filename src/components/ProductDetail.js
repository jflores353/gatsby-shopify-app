import React, { useState } from "react"
import Img from "gatsby-image"

const ProductDetail = ({ product }) => {
  const [selectedVariant, setVariant] = useState(product.variants[0])

  return (
    <div>
      <h1>{product.title}</h1>
      <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
      <p>{product.description}</p>
      <p>$ {variant.price}</p>
      <select
        value={selectedVariant}
        onChange={e => setVariant(e.target.value)}
      >
        {product.variants.map(variant => (
          <option value={variant.sku} key={variant.id}>
            {variant.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ProductDetail
