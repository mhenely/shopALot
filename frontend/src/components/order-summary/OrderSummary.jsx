import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { incrementItems, decrementItems, removeItem } from '../../features/cart/cartItems'

import { TrashIcon } from '@heroicons/react/20/solid'

const OrderSummary = () => {

  const checkoutItems = useSelector(state => state.cartItems.items)

  const subTotal = Math.round(((checkoutItems.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)) * 100) / 100).toFixed(2);
  const shipping = checkoutItems[0] ? 10.00 : 0;
  const tax = Math.round(((subTotal ? 0.075 * (subTotal + shipping) : 0) * 100) / 100).toFixed(2);
  const total = Math.round(((subTotal ? ( Number(tax) + Number(subTotal) + shipping) : 0) * 100) / 100).toFixed(2);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNavigate = (category, name) => {
    navigate(`/categories/${category}/${name.toLowerCase()}`)
  }

  // get the category for each item

  return (
    <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {checkoutItems.map((item) => (
                  <li key={item.id} className="flex px-4 py-6 sm:px-6">
                    <div className="flex-shrink-0">
                      <img alt={item.name} src={item.imageUrl} onClick={() => handleNavigate(item.category, item.name)} className="w-20 rounded-md cursor-pointer" />
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            {/* LINK TO PRODUCT PAGE */}
                            <span onClick={() => handleNavigate(item.category, item.name)} className="font-medium text-gray-700 hover:text-gray-800 cursor-pointer">
                              {item.name}
                            </span>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                        </div>

                        <div className="ml-4 flow-root flex-shrink-0">
                          <button
                            onClick={() => dispatch(removeItem(item.id))}
                            type="button"
                            className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <TrashIcon aria-hidden="true" className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-1 items-end justify-between pt-2">
                        <p className="mt-1 text-sm font-medium text-gray-900">${Math.round(item.price * 100 / 100).toFixed(2)}</p>

                        <div className="ml-4">
                          <label htmlFor="quantity" className="sr-only">
                            Quantity
                          </label>
                          
                          <div className="focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <span onClick={() => dispatch(decrementItems(item.id))} className='text-left text-xl font-medium text-gray-700 shadow-sm cursor-pointer'>&#10094;</span>
                            <span className='text-left text-xl font-medium text-gray-700 shadow-sm'>{item.quantity}</span>
                            <span onClick={() => dispatch(incrementItems(item))} className='text-left text-xl font-medium text-gray-700 shadow-sm cursor-pointer'>&#10095;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">${subTotal}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Shipping</dt>
                  <dd className="text-sm font-medium text-gray-900">${shipping}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">Taxes</dt>
                  <dd className="text-sm font-medium text-gray-900">${tax}</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Total</dt>
                  <dd className="text-base font-medium text-gray-900">${total}</dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
  )
}

export default OrderSummary