import React, { useEffect, useState } from 'react';
import { db } from '../components/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = await getDocs(collection(db, 'products'));
      setProducts(productsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imgUrl} alt={product.productName} />
          <h2>{product.productName}</h2>
          <p>{product.shortDesc}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Average Rating: {product.avgRating}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
