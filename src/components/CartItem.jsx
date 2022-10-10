import { ChevronDown, ChevronUp, Trash } from '../icons';
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../features/cart/cartSlice'

const CartItem = ({ id, img, title, price, amount }) => {
    const dispatch = useDispatch()
    return (
        <article className='cart-item'>
      <img src={img} alt={title} />
      <div className="item-title">
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <div className='remove-btn' onClick={() => dispatch(removeItem(id))}><Trash /></div>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => dispatch(increase({id}))}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => 
        	{if (amount === 1) {
			    dispatch(removeItem(id))
			    return;
			}
				dispatch(decrease({id}))
			}}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
    )
}

export default CartItem