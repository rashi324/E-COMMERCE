import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  // More efficient version of fetchProductData using .find()
  useEffect(() => {
    if (products.length > 0) {
      const item = products.find((item) => item._id === productId);
      if (item) {
        setProductData(item);
        setImage(item.image[0]);
      }
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="text-center text-gray-500 py-20">Loading product...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((imgUrl) => (
              <img
                key={imgUrl}
                onClick={() => setImage(imgUrl)}
                src={imgUrl}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Preview of ${productData.name}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt={productData.name} />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img src={assets.star_icon} alt="star" className="w-3.5" key={i} />
            ))}
            <img src={assets.star_dull_icon} alt="dull star" className="w-3.5" />
            <p className="pl-2">122</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? 'border-orange-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            disabled={!size}
            className={`px-8 py-3 text-sm ${
              size
                ? 'bg-black text-white hover:bg-gray-900'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            fugiat facilis molestiae quia, numquam, optio magni quidem aspernatur
            modi iste commodi est nulla tenetur maiores, cum dolore! Facere, dicta
            accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla libero
            corrupti, pariatur quo doloribus provident eligendi, voluptatum est
            soluta sunt sed eum suscipit consequatur alias. Dolor nisi quis
            obcaecati molestiae perspiciatis. Eveniet quasi, qui possimus quam
            dicta sit dignissimos soluta.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
