import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

function HomeScreen() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const { data } = await axios.get("http://localhost:8000/api/products/");
      setProducts(data);
		}

		fetchProducts();
	}, []);
	return (
		<div className="py-4">
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product prod={product /** Passing a prop */} />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default HomeScreen;
