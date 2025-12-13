'use client';
import React from 'react';
import Image from 'next/image';
import { CreditCard, Download, Heart, Minus, Plus, Repeat, ShieldCheck, ShoppingCart } from 'lucide-react';
import RelatedProducts from './RelatedProducts';
import Tabs from './Tabs';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, increaseItemQuantity, decreaseItemQuantity } from '../Reducers/cartSlice';
import NotFound from './NotFound';
import Products from '../Data/Products';
import { useParams} from 'next/navigation';
import Link from 'next/link';
import { toggleSavedItem, isItemSaved, } from '../Reducers/itemSlice';
import { RootState } from '../store/store';
import toast from 'react-hot-toast';




function ProductDetails() {

	interface Product {
  id: string;
  image: string;
  badge?: string;
  secondImage?: string;
  thirdImage?: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  discount: number;
  rating: number;
  category?: string;
}

	
	const dispatch = useDispatch();
	const params = useParams();
	//   const navigate = useNavigate();
	const productId = params?.id?.toString(); // ← Get ID from URL
	
	const product = Products.find((p) => String(p.id) === productId); // ← Get product by ID
	
	const [activeImage, setActiveImage] = React.useState(product?.image ?? '');

const [zoomStyle, setZoomStyle] = React.useState({});

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
  const x = ((e.pageX - left) / width) * 100;
  const y = ((e.pageY - top) / height) * 100;
  setZoomStyle({
    transformOrigin: `${x}% ${y}%`,
    transform: "scale(2)", // Zoom factor
  });
};

const handleMouseLeave = () => {
  setZoomStyle({ transform: "scale(1)", transformOrigin: "center" });
};



// Always call hooks before any conditional returns
const isFavorited = useSelector((state: RootState) =>
	product ? isItemSaved(state, product.id) : false
);

const cartItem = useSelector((state: RootState) =>
	product ? state.cart.items.find((item) => item.id === product.id) : undefined
);

const quantity = cartItem ? cartItem.quantity : 1;




if (!product) {
	return <NotFound />;
}

const handleAddToCart = (product: Product) => {
		 dispatch(addItemToCart({ ...product, id: String(product.id), quantity: 1 }));

		 toast.success("Product Added Successfully"); 

		}



const increaseQuantity = (itemId: number | string) => {
	dispatch(increaseItemQuantity(itemId));

};

const decreaseQuantity = (itemId: number | string) => {
	dispatch(decreaseItemQuantity(itemId));
};



	return (
		<div className="bg-[#ffff] stroke-[#E5E7EB] mt-14 lg:mt-6 px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[60.61px] w-full h-auto text-[#6B7280]">
			<div className='flex lg:flex-row flex-col py-8'>
				{/* left-side  */}
				<div>
					<div className='relative w-full lg:w-[630px] xl:w-[660px] h-auto lg:h-[660px] overflow-hidden' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} >
						<Image src={activeImage} alt={product.name} style={zoomStyle} width={660} height={660} className="px-4 w-[330px] lg:w-[660px] h-auto lg:h-[660px] object-cover" />
						<h3 className='inline-flex top-3 left-3 absolute bg-[#DC2626] py-[4px] lg:py-[6px] pr-[7px] lg:pr-[9.68px] pl-[6px] lg:pl-[8px] border rounded-full font-extrabold text-[#FEF2F2] text-[8px] lg:text-[10px]'>{product.discount}%</h3>
						<Image src="/assets/products/span.badge.svg" alt="New Arrival 1" width={80.19} height={24} className='top-9 left-3 absolute lg:mt-[10px] w-[60.19px] lg:w-[80.19px] h-[24px] lg:h-[24px]' />
					</div>

					<div className="flex flex-row justify-center gap-4 lg:gap-6 pt-[20px] lg:pt-[40px] w-full">
					{[product.image, product.secondImage, product.thirdImage].map((img, i) => (
						img && (
							<button
								key={i}
								onClick={() => setActiveImage(img)}
								className={`p-1 ${
									activeImage === img ? "border transition rounded-lg border-gray-300" : ""
								}`}
							>
								<Image
									src={img}
									alt={`Thumbnail ${i + 1}`}
									width={73}
									height={73}
									className="w-[48px] lg:w-[73px] h-[48px] lg:h-[73px] object-cover"
								/>
							</button>
						)
					))}
				</div>
			</div>
				{/* right-side   */}
				<div className='lg:pl-[40px]'>
					<h1 className='pt-12 lg:pt-0 w-full lg:w-[601px] xl:w-[633.81px] h-auto font-bold text-[#030712] text-[26px] lg:text-[38px] leading-[45.6px] tracking-tighter'>{product.name}</h1>
					<div className='flex flex-row pt-[15.6px] pb-[17.5px] border-[#E5E7EB] border-b-2 w-full lg:w-[590px] xl:w-[633.81px] h-auto'>
						<Image src="/assets/products/Icon.svg" alt="New Arrival 1" width={50.88} height={11} className='w-[43.88px] lg:w-[50.88px] h-[10px] lg:h-[11px] object-cover' />
						<Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[10.35px] lg:w-[11.35px] h-[10px] lg:h-[11px] object-cover' />
						<Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[10.35px] lg:w-[11.35px] h-[10px] lg:h-[11px] object-cover' />
						<span className='-mt-[6px] lg:-mt-[9px] ml-[8px] py-[1.5px] lg:py-[3.5px] pr-[4.63px] pl-[5px] border-[#E5E7EB] border-2 rounded-lg font-bold text-[#030712] text-[10px] lg:text-[13px]'>{product.rating}.00</span>
						<h1 className='-mt-[3px] ml-[8px] text-[#6b7280] text-[10px] lg:text-[12px]'>2</h1>
						<span className='-mt-[4px] ml-[13.6px] border-[#E5E7EB] border-1'></span>
						<h1 className='-mt-[3px] ml-[14px] text-[#6b7280] text-[11px] lg:text-[13px]'>SKU: <span className='font-bold text-[#030712]'>E7F8G9HO</span></h1>
					</div>

					<div className='mt-[22px]'>
						<h1 className='mb-[19px] lg:w-[609.69px] xl:w-[642.69px] h-auto lg:h-[38px] text-[#4B5563] text-[12px] lg:text-[14px] tracking-tight'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.</h1>
						<div className='flex flex-row pb-[21px]'>
							<p className='top-0 mb-[12px] font-bold text-[#dc2626] text-[28px] lg:text-[30px]'>${product.price}</p>
							<p className='ml-[6.36px] pt-3 font-medium text-[#111827] text-[18.9px] lg:text-[21.9px] line-through'>${product.discountPrice}</p>
						</div>
					</div>

					<button className='bg-[#16A34A] hover:bg-green-700 mb-[20px] pt-[10px] lg:pt-[14px] pr-[17.7px] pb-[12px] lg:pb-[15px] pl-[18px] rounded-lg font-bold text-[#ffff] text-[10px] lg:text-[14px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
						Order on WhatsApp
					</button>

					<div className='bg-[#FFEDD5] border-[#FED7AA] border-1 rounded-lg w-fulllg:w-[601px] xl:w-[660px] h-auto lg:h-[66px]'>
						<div className='flex flex-row items-center gap-2'>
							<h3 className='lg:py-[25px] pl-[8px] lg:pl-[16px] font-bold text-[#EA580C] text-[10px] lg:text-[13px] tracking-tighter'>Special Offer :</h3>
							<div className='flex flex-row items-center gap-2 lg:gap-2 lg:my-4 lg:pl-[15.67px]'>
								<span className='flex bg-[#FFEDD5] px-[9.99px] lg:px-[9.99px] py-[6px] lg:py-[6px] border-[#FED7AA] border-2 rounded-lg font-semibold text-[10px] lg:text-[13px]'>81</span>
								<span className='bg-[#FFEDD5] px-[9.99px] py-[6px] border-[#FED7AA] border-2 rounded-lg font-semibold text-[10px] lg:text-[13px]'>06</span>
								<span className='bg-[#FFEDD5] px-[9.99px] py-[6px] border-[#FED7AA] border-2 rounded-lg font-semibold text-[10px] lg:text-[13px]'>50</span>
								<span className='py-[6px]'>:</span>
								<span className='bg-[#FFEDD5] px-[9.99px] lg:px-[9.99px] py-[6px] lg:py-[6px] border-[#FED7AA] border-2 rounded-lg font-semibold text-[10px] lg:text-[13px]'>02</span>
							</div>

							<h3 className='py-[25px] pl-[8px] lg:pl-[16px] text-[#6B7280] text-[10px] lg:text-[13px] tracking-tighter'>Remains until the end of the offer.</h3>

						</div>
					</div>
					<div className='flex flex-row gap-[10px] pt-[20px] pb-[30px]'>
						<div className='flex flex-row justify-between items-center px-2 border-[#D1D5DB] border-2 rounded-lg w-[80px] lg:w-[114px] h-[40px] lg:h-[48px] text-[#030712]'>
							<button onClick={() => decreaseQuantity(product.id)}> <Minus className='w-[8.05] lg:w-[11.05] h-[8.05] lg:h-[11.05]' /></button>
							<span className="mx-2 my-1">{quantity}</span>
							<button onClick={() => increaseQuantity(product.id)}><Plus className='w-[11.05] h-[11.05]' /></button>
						</div>

						<button onClick={() => handleAddToCart(product)}  className='flex flex-row gap-2 bg-[#16A34A] hover:bg-green-700 pt-[12px] lg:pt-[14px] pr-8 lg:pb-[15px] pl-3 lg:pl-[33.42px] rounded-lg w-auto lg:w-[160px] h-[40px] lg:h-[46px] font-bold text-[#ffff] text-[10px] lg:text-[14px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
							<ShoppingCart className='lg:mt-0.5 w-3 lg:w-[14px] h-3 lg:h-[14px]' /> Add to cart
						</button>
						<Link href="/cartList">
							<button className='flex flex-row gap-2 bg-[#212529] hover:bg-stone-950 pt-[12px] lg:pt-[14px] pr-8 lg:pb-[15px] pl-3 lg:pl-[33.42px] rounded-lg w-auto lg:w-[160px] h-[40px] lg:h-[46px] font-bold text-[#ffff] text-[10px] lg:text-[14px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
								<ShoppingCart className='lg:mt-0.5 w-3 lg:w-[14px] h-3 lg:h-[14px]' /> Buy Now
							</button>
						</Link>
					</div>

					<div className='border border-[#E5E7EB] rounded-t-lg lg:w-[601px] xl:w-[660px] h-auto lg:h-[64px]'>
						<div className='flex flex-row gap-6'>
							<CreditCard className='lg:mt-[17.65px] mb-[10px] ml-[21px] w-[26px] h-auto lg:h-[26px]' />
							<h3 className='px-[10.5px] py-[14px] lg:pt-[14px] w-full lg:w-[533.99px] h-auto lg:h-[35.5px] text-[#6B7280] text-[11px] lg:text-[13px] leading-[19.5px] tracking-tighter'>
								<span className='font-bold'>Payment.</span> Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment
							</h3>
						</div>
					</div>

					<div className='border border-[#E5E7EB] rounded-b-lg lg:w-[601px] xl:w-[660px] h-auto lg:h-[64px]'>
						<div className='flex flex-row gap-6'>
							<ShieldCheck className='lg:mt-[17.65px] mb-[10px] ml-[21px] w-[26px] h-auto lg:h-[26px]' />
							<h3 className='px-[10.5px] py-[14px] lg:pt-[14px] w-full lg:w-[533.99px] h-auto lg:h-[35.5px] text-[#6B7280] text-[11px] lg:text-[13px] leading-[19.5px] tracking-tight'>
								<span className='font-bold'>Warranty.</span> The Consumer Protection Act does not provide for the return of this product of proper quality.
							</h3>
						</div>
					</div>

					<div className='flex flex-row gap-[10px] lg:gap-6 mt-[31px]'>
						<div className='flex flex-row'>
							<div className='relative my-auto lg:my-[8.29px] border border-[#E5E7EB] rounded-lg w-[30px] lg:w-[36px] h-[30px] lg:h-[36px]'>
								<button
									onClick={() => dispatch(toggleSavedItem(product as Product))}
									className={`p-0.5 absolute top-1/6 right-1/6 lg:top-1.5 lg:right-0.5 cursor-pointer ${isFavorited ? 'fill-red-500  text-red-500  transition-colors duration-300 ease-in-out ' : ' text-gray-600'}`}
								>
									<Heart className="w-[14.26px] lg:w-[18.26px] h-[14.43px] lg:h-[16.43px]" />
								</button>

							</div>

							<h3 className='my-auto lg:my-[16.79px] ml-2 font-medium text-[#030712] text-[11px] lg:text-[13px]'>Add to wishlist</h3>
						</div>
						<div className='flex flex-row'>
							<div className='my-auto lg:my-[8.29px] border border-[#E5E7EB] rounded-lg w-[30px] lg:w-[36px] h-[30px] lg:h-[36px]'>
								<Download className="my-[5.79px] lg:my-[9.79px] ml-[7.16px] w-[14.26px] lg:w-[18.26px] h-[14.43px] lg:h-[16.43px]" />
							</div>

							<h3 className='my-auto lg:my-[16.79px] ml-2 font-medium text-[#030712] text-[11px] lg:text-[13px]'>Share this Product</h3>
						</div>
						<div className='flex flex-row'>
							<div className='my-auto lg:my-[8.29px] border border-[#E5E7EB] rounded-lg w-[30px] lg:w-[36px] h-[30px] lg:h-[36px]'>
								<Repeat className="my-[5.79px] lg:my-[9.79px] ml-[7.16px] w-[14.26px] lg:w-[18.26px] h-[14.43px] lg:h-[16.43px]" />
							</div>

							<h3 className='my-auto lg:my-[16.79px] ml-2 font-medium text-[#030712] text-[11px] lg:text-[13px]'>Compare</h3>
						</div>
					</div>


				</div>
			</div>


			<div>
				<Tabs />
			</div>

			<div>
				<h1 className='font-bold text-[#030712] text-[18px]'>Related products</h1>
				<RelatedProducts />
			</div>

		</div>

	);
}

export default ProductDetails