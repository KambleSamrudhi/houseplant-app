import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air Purifying',
    price: 15.99,
    img: 'https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w',
  },
  {
    id: 2,
    name: 'Spider Plant',
    category: 'Air Purifying',
    price: 12.99,
    img: 'https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg',
  },
  {
    id: 3,
    name: 'Aloe Vera',
    category: 'Succulents',
    price: 9.99,
    img: 'https://m.media-amazon.com/images/I/81XWpVvk5AL.jpg',
  },
  {
    id: 4,
    name: 'Cactus',
    category: 'Succulents',
    price: 7.99,
    img: 'https://www.juneflowers.com/wp-content/uploads/2022/08/Cactus-Plant.jpg',
  },
  {
    id: 5,
    name: 'Peace Lily',
    category: 'Flowering Plants',
    price: 18.99,
    img: 'https://nurserylive.com/cdn/shop/products/nurserylive-gifts-eco-friendly-peace-lily-gift-plant-16968838840460.jpg?v=1634219105',
  },
  {
    id: 6,
    name: 'Orchid',
    category: 'Flowering Plants',
    price: 24.99,
    img: 'https://hips.hearstapps.com/hmg-prod/images/blooming-phalaenopsis-orchids-white-purple-pink-royalty-free-image-1728585929.jpg?crop=0.668xw:1.00xh;0.0912xw,0&resize=980:*',
  },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setDisabledButtons((prev) => [...prev, plant.id]);
  };

  const groupedPlants = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) acc[plant.category] = [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div>
      <h2>Our Plants</h2>
      {Object.keys(groupedPlants).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {groupedPlants[category].map((plant) => (
              <div key={plant.id} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px', textAlign: 'center', maxWidth: '150px' }}>
                <img src={plant.img} alt={plant.name} style={{ borderRadius: '8px', width: '100%' }} />
                <h4>{plant.name}</h4>
                <p className="price">${plant.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={disabledButtons.includes(plant.id)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: disabledButtons.includes(plant.id) ? '#a0aec0' : '#38a169',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: disabledButtons.includes(plant.id) ? 'not-allowed' : 'pointer',
                  }}
                >
                  {disabledButtons.includes(plant.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;