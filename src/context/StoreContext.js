import React from "react"
import Client from "shopify-buy"

export const client = Client.buildClient({
  domain: "gatsby-shoppe.myshopify.com/",
  storefrontAccessToken: "b076470c3e3fea33c44a3a37ef4bba64",
})

export const StoreContext = React.createContext({
  client,
})
