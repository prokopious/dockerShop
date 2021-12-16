import { useState, useEffect } from "react"
import Product from "../components/Product"
import{ IProduct }from "../types"

const ikon: IProduct = {
  name: "Squirrel Icon",
  price: 10,
  imageUrl: "https://i.imgur.com/J2ZjK3P.png"
}

const ProductDisplay = () => (
  <section>
    <Product product={ikon} />
  </section>
)

const Message = ({ string: message }) => (
  <section>
    <p>{message}</p>
  </section>
)

export default function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.")
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      )
    }
  }, [])

  return message ? <Message message={message} /> : <ProductDisplay />
}
