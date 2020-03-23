import React, { useState, useContext } from "react"
import Img from "gatsby-image"
import { StoreContext } from "../context/StoreContext"

const ProductDetail = ({ product }) => {
  const [selectedVariant, setVariant] = useState(product.variants[0])
  const { client } = useContext(StoreContext)

  const addToCart = async variantId => {
    const newCheckout = await client.checkout.create()

    const lineItems = [
      {
        variantId: variantId.replace("Shopify__ProductVariant__", ""),
        quantity: 1,
      },
    ]

    const addItems = await client.checkout.addLineItems(
      newCheckout.id,
      lineItems
    )
    window.open(addItems.webUrl, "_blank")
    console.log("addItems", addItems.webUrl)
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
      <p>{product.description}</p>
      <p>$ {selectedVariant.price}</p>
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
      <button onClick={() => addToCart(selectedVariant.id)}>Buy Now</button>
    </div>
  )
}

export default ProductDetail
