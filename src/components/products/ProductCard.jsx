import { Link } from 'react-router-dom';
import { FaStar, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add your wishlist logic here
  };

  return (
    <Link 
      to={`/products/${product.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group relative"
      aria-label={`View ${product.title}`}
    >
      <div className="relative">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex space-x-2 z-10">
          <button 
            onClick={handleWishlistClick}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Add to wishlist"
          >
            <FaRegHeart className="text-gray-600" />
          </button>
        </div>
        {product.discountPercentage && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
            {Math.round(product.discountPercentage)}% OFF
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800 line-clamp-1">
            {product.title}
          </h3>
          <div className="flex items-center text-sm">
            <FaStar className="text-yellow-400 mr-1" />
            <span>{product.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.discountPercentage && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${(product.price / (1 - product.discountPercentage/100)).toFixed(2)}
              </span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors z-10"
            aria-label="Add to cart"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;