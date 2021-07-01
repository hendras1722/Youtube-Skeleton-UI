import { useState, useEffect } from 'react';
import SkeletonProduct from '../skeleton/SkeletonProduct';
const Products = () => {
	const [products, setProducts] = useState([]);
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		setLoader(true);
		setTimeout(async () => {
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			setLoader(false);
			setProducts(data);
		}, 4000);
	}, []);
	return !loader
		? products.map((product) => (
				<div className='col-3' key={product.id}>
					<div className='product'>
						<div className='product-image'>
							<img src={product.image} alt='' />
						</div>
						<div className='product-body'>
							<div className='product-title'>{product.title.slice(0, 30)}</div>
							<div className='product-price'>$ {product.price}</div>
							<div className='product-button'>
								<a href=''>buy now</a>
							</div>
						</div>
					</div>
				</div>
		  ))
		: [1, 2, 3, 4, 5, 6, 7, 8].map((loading) => (
				<div className='col-3'>
					<SkeletonProduct />
				</div>
		  ));
};
export default Products;
