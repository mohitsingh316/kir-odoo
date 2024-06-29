import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../components/firebase"; // Adjust the path as needed
import "./product-details.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        try {
          const docRef = doc(db, "products", productId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setSelectedProduct({ id: productId, ...docSnap.data() });
          } else {
            console.error("No such product!");
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };
    fetchProduct();
  }, [productId]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAdd = (selectedProduct, quantity) => {
    dispatch(addToCart({ product: selectedProduct, num: Number(quantity) }));
    toast.success("Product has been added to cart!");
  };

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={selectedProduct?.imgUrl} alt={selectedProduct?.productName} />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName}</h2>
            <div className="rate">
              <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <span>{selectedProduct?.avgRating} ratings</span>
            </div>
            <div className="info">
              <span className="price">${selectedProduct?.price}</span>
              <span>category: {selectedProduct?.category}</span>
            </div>
            <p>{selectedProduct?.shortDesc}</p>
            <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handleAdd(selectedProduct, quantity)}
            >
              Add To Cart
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
