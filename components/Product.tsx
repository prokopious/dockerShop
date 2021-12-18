import * as React from "react"
import { IProduct } from "../types"

type Props = {
  product: IProduct
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <div className="product">
        <img src={product.imageUrl} alt={product.name} />
        <div className="description">
          <h3>{product.name}</h3>
          <h5>{`$${product.price}`}</h5>
        </div>
        <form
          action="https://digital-art.click/create-checkout-session"
          method="POST"
        >
          <button type="submit">Checkout</button>
        </form>{" "}
      </div>
    </div>
  )
}

export default Product
