import img from "./images/image-product-mobile.jpg";
import img_desktop from "./images/image-product-desktop.jpg";

export function Product() {

	return (
		<article className="product">
			<picture className="product__image">
				<source srcSet={img_desktop} media="(min-width: 600px)" />
				<img src={img} />
			</picture>
			<div className="product__description">
				<div className="product__description_title">Gaby Eau de Parfum</div>
				<div className="product__description_content">
					Enter the world of CHANEL and discover the latest in Fashion &
					Accessories, Eyewear, Fragrance, Skincare & Makeup, Fine Jewelry &
					Watches.
				</div>
				<div className="flex">
					<div className="product__description_price">$119.99</div>
					<s>$149.99</s>
				</div>
				<button className="btn">Add</button>
			</div>
		</article>
	)
}
