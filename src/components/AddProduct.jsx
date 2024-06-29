import React, { useState } from "react";
import { db } from "../components/firebase";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import './AddProduct.css';

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [avgRating, setAvgRating] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "products"), {
        productName,
        imgUrl,
        category,
        price: Number(price),
        shortDesc,
        description,
        avgRating: Number(avgRating),
      });
      toast.success("Product added successfully");
      // Clear the form fields
      setProductName("");
      setImgUrl("");
      setCategory("");
      setPrice("");
      setShortDesc("");
      setDescription("");
      setAvgRating("");
    } catch (error) {
      console.error("Error adding product: ", error);
      toast.error("Error adding product");
    }
  };

  return (
    <form onSubmit={handleAddProduct} className="add-product-form">
      <h3>Add Product</h3>
      <div className="mb-3">
        <label>Product Name</label>
        <input
          type="text"
          className="form-control"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Image URL</label>
        <input
          type="text"
          className="form-control"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Category</label>
        <input
          type="text"
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Short Description</label>
        <textarea
          className="form-control"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Average Rating</label>
        <input
          type="number"
          step="0.1"
          className="form-control"
          value={avgRating}
          onChange={(e) => setAvgRating(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
