import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();

  const handleClick = () => {
    router(`/shop/${productItem.id}`);
  };

  const handleAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
  };

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" && productItem.discount && (
        <span className="discount">{productItem.discount}% Off</span>
      )}
      <img
        loading="lazy"
        onClick={handleClick}
        src={productItem.imgUrl}
        alt={productItem.productName}
      />
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <h3 onClick={handleClick}>{productItem.productName}</h3>
        <div className="rate">
          {[...Array(5)].map((star, index) => {
            return (
              <i
                key={index}
                className={
                  index < productItem.avgRating ? "fa fa-star" : "fa fa-star-o"
                }
              ></i>
            );
          })}
        </div>
        <div className="price">
          <h4>₹{productItem.price}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handleAdd(productItem)}
          >
            <ion-icon name="add"></ion-icon>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
