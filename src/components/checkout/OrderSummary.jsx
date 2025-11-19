// src/components/checkout/OrderSummary.jsx
import { useCart } from '../../context/CartContext';

const OrderSummary = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal ({cartCount} items)</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-3">
          <span className="font-semibold">Total</span>
          <span className="font-bold">${cartTotal.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <p className="text-sm font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;