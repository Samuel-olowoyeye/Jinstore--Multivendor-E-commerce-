'use client'
import Image from 'next/image'
import Products from '@/Data/Products'
import {ChevronRight, Funnel, LayoutGrid, LayoutList, LucideArrowUpDown, MoveRight, Plus, X } from 'lucide-react'
import React, { useEffect,useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import HeartButton from '@/ButtonComponent/HeartButton'
import Link from 'next/link'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { RootState } from '../store/store';


import { setSortOption } from '../Reducers/CategorySlice';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Slider } from "@/components/ui/slider"
import { Product } from '@/Reducers/itemSlice'
import { useSearchParams} from "next/navigation";

const Shop = () => {

	const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // const selectedCategory = useSelector((state) => state.categorys.category);123
	const searchParams = useSearchParams();
 

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
	const sortOption = useSelector((state) => state.category.sortOption);

		{/* filter and sort menu open functionality */}
		const [openFilter, setOpenFilter] = useState(false)
		const [openSort, setOpenSort] = useState(false)

		// Prevent background scroll when openFilter is open
					useEffect(() => {
						if (openFilter) {
							document.body.style.overflow = "hidden";
						} else {
							document.body.style.overflow = "";
						}
						return () => {
							document.body.style.overflow = "";
						};
					}, [openFilter]);
		
					// Prevent background scroll when openSort is open
					useEffect(() => {
						if (openSort) {
							document.body.style.overflow = "hidden";
						} else {
							document.body.style.overflow = "";
						}
						return () => {
							document.body.style.overflow = "";
						};
					}, [openSort]);
	


	// Keep sstate in sync with URL
	 useEffect(() => {
		 const categoryParam = searchParams.get("category");

    if (categoryParam) {
      if (categoryParam === "fruits-vegetables") {
        setSelectedCategory("Fruits & Vegetables");
      } else if (categoryParam === "beverages") {
        setSelectedCategory("Beverages");
      }
    } else {
      setSelectedCategory("All Categories");
    }
  }, [searchParams]);
	const dispatch = useDispatch();

	const handleSortChange = (option: string) => {
    dispatch(setSortOption(option));
		
  };

	const handleCategoryClick = (category: string) => {
    // dispatch(setCategory(category));
		setSelectedCategory(category);
  };

	
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const filterByCategory = (products: any[], category: string) => {
    return category === 'All Categories' ? products : products.filter(product => product.category === category);
  };
	
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const sortProducts = (products: any[], sortOption: any) => {
    switch (sortOption) {
      case 'Price - Low To High':
        return [...products].sort((a, b) => a.price - b.price);
      case 'Price - High To Low':
        return [...products].sort((a, b) => b.price - a.price);
      case 'Relevance':
      default:
        return products; // Define relevance logic if needed
    }
  };
	const filteredProducts = sortProducts(
    (filterByCategory(Products, selectedCategory)),
    sortOption
  );

	const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);


	

  return (
    <div className="bg-[#ffff] stroke-[#E5E7EB] px-4 lg:px-[80px] 2xl:px-[600px] xl:px-[280px] pb-[60.61px] text-[#6B7280]">
      <div className='flex flex-row justify-between items-center w-full h-[48px]'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-row items-center pr-[6px]'>
            <h1 className='pt-30 lg:pt-[22.39px] text-[#9CA3AF] text-[10px] lg:text-[12px]'>Home</h1>
            <ChevronRight className='space-x-1 mt-30.5 lg:mt-[22.39px] w-3 lg:w-4' />
          </div>
          <h1 className='pt-30 lg:pt-[22.39px] font-normal text-[#030712] text-[10px] lg:text-[12px]'>Shop</h1>
        </div>
      </div>
      

{/* filters header  */}
    <div className='flex lg:flex-row flex-col justify-between lg:gap-[35px] xl:gap-[45px] mt-12 lg:mt-0 pt-[30px]'>
			{/* left side  */}
        <div className='hidden lg:flex lg:flex-col w-[259px] h-auto'>
					<div className='border-[#E5E7EB] border-b-1'>
            	<h2 className ='text-[#030712] text-[14px] font-semibold '>Widget price filter</h2>
						<div className='flex flex-row'>
								<div>
										<h3 className='pt-[20px] pb-1 text-[#6B7280] text-[12px]'>Min price</h3>
										<input type='number' placeholder='0'  className='px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[109.44px] xl:w-[116.44px] h-[38px]'/>
										<span className='px-2 text-[#030712]'>-</span>
								</div>					
								<div>
										<h3 className='pt-[20px] pb-1 text-[#6B7280] text-[12px]'>Max price</h3>
										<input type='number' placeholder='0'  className='px-4 border-[#D1D5DB] border-1 rounded-lg lg:w-[109.44px] xl:w-[116.44px] h-[38px]'/>
								</div>``

							</div>
							<div>
								<Slider defaultValue={[0]} max={30} step={1} className='pt-[20px]' />
								</div>
							<div className='flex flex-row justify-between items-center mb-[26px] pt-[30.5px]'>
										<h2 className='text-[#030712] text-[14px]'>Price: $0 — $30</h2>
										<button className='bg-[#E5E7EB] pt-[10px] pr-[17.7px] pb-[11px] pl-[18px] rounded-lg font-bold text-[#000000] text-[14px]'>
											Filter
										</button>
							</div>

						</div>

						<div className='pt-[25px] border-[#E5E7EB] border-b-1'>
								<h2 className='font-semibold text-[#030712] text-[14px]'>Product Categories</h2>
								<div className='flex flex-row justify-between items-center pt-[21px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'All Categories'}  onChange={() => handleCategoryClick('All Categories')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>All Categories</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Fruits & Vegetables'}  onChange={() => handleCategoryClick('Fruits & Vegetables')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Fruits & Vegetables</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Baby & Pregnancy'}  onChange={() => handleCategoryClick('Baby & Pregnancy')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Baby & Pregnancy</h2>
										</label>
								<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Beverages'} onChange={() => handleCategoryClick('Beverages')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Beverages</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Meats & Seafood'}  onChange={() => handleCategoryClick('Meats & Seafood')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Meats & Seafood</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Biscuits & Snacks'}  onChange={() => handleCategoryClick('Biscuits & Snacks')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Biscuits & Snacks</h2>
										</label>
									<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Breads & Bakery'}  onChange={() => handleCategoryClick('Breads & Bakery')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Breads & Bakery</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
									<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Breaksfast & Dairy'}  onChange={() => handleCategoryClick('Breaksfast & Dairy')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Breaksfast & Dairy</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Frozen Foods'}  onChange={() => handleCategoryClick('Frozen Foods')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Frozen Foods</h2>
										</label>
									<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Grocery & Staples'}  onChange={() => handleCategoryClick('Grocery & Staples')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Grocery & Staples</h2>
										</label>
									<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Healthcare'}  onChange={() => handleCategoryClick('Healthcare')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Healthcare</h2>
										</label>
									<label className='flex flex-row items-center gap-[10px] pt-[14px] pb-[37px]'>
												<input checked={selectedCategory === 'Household Needs'}  onChange={() => handleCategoryClick('Household Needs')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Household Needs</h2>
										</label>
						</div>

					<div className='pt-[25px] border-[#E5E7EB] border-b-1' >
						<h2 className='font-semibold text-[#030712] text-[14px]'>Filter by Color</h2>
						<div className='flex flex-row justify-between items-center pt-[21px] pb-[29px]'>
										<div className='flex flex-row items-center gap-[10px]'>
												<span className='bg-[#81D742] border rounded-full w-[20px] h-[20px]'></span>
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Green</h2>
										</div>

										<h3 className='text-[#9CA3AF] text-[14px]'>(1)</h3>
								</div>
						</div>

					<div className='pt-[25px] border-[#E5E7EB] border-b-1' >
						<h2 className='font-semibold text-[#030712] text-[14px]'>Filter by Brands</h2>
						<div className='flex flex-row justify-between items-center pt-[21px] pb-[29px]'>
										<div className='flex flex-row items-center gap-[10px]'>
												<input type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Fresh</h2>
										</div>

										<h3 className='text-[#9CA3AF] text-[14px]'>(1)</h3>
								</div>
						</div>

					<div className='pt-[25px]' >
						<h2 className='font-semibold text-[#030712] text-[14px]'>Product Status</h2>
						<div className='items-center pt-[21px] pb-[29px]'>
										<div className='flex flex-row items-center gap-[10px]'>
												<input type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>In Stock</h2>
										</div>
										<div className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>On Sale</h2>
										</div>

								</div>
						</div>
    </div>

		{/* Mobile filter and sort  */}
		<div className='lg:hidden flex flex-row justify-center gap-6 pb-6 w-full font-bold'>
				<button onClick={()=> setOpenFilter(true)} className='flex flex-row items-center gap-2 text-[#634c9f] text-[12px] uppercase cursor-pointer'>
					<Funnel  className='flex-start fill-[#634c9f] mb-0.5 w-3.5 h-3.5'/>
					<h3>Filter</h3>
				</button> 
				<span className='mx-2 my-0.5 border-[#6B7280] border-1'></span>
				<button onClick={()=> setOpenSort(true)} className='flex flex-row items-center gap-2 text-[#634c9f] text-[12px] uppercase cursor-pointer'>
					<LucideArrowUpDown  className='flex-start fill-[#634c9f] mb-0.5 w-3.5 h-3.5'/>
					<h3>Sort</h3>
				</button>

				{/* Mobile filter menu page open  */}

				{openFilter && (
					<div className='z-50 fixed inset-0 flex justify-center items-end bg-black/40'>
						<div className='bg-white shadow-lg p-5 rounded-t-2xl w-full h-full overflow-y-auto animate-slide-up'>
							<div className='flex justify-between items-center mb-4'>
									<h2 className='font-semibold text-[#030712] text-[14px]'>
											Widget Price Filter
									</h2>
									<button onClick={()=> setOpenFilter(false)} >
										<X className='w-5 h-5'/>
									</button>
							</div>
							{/* mobile filter features */}
							<div className='flex flex-col w-full h-auto'>
					<div className='border-[#E5E7EB] border-b-1'>

						<div className='flex flex-row'>
								<div>
										<h3 className='pt-[20px] pb-1 text-[#6B7280] text-[12px]'>Min price</h3>
										<input type='number' placeholder='0'  className='mx-auto px-4 border-[#D1D5DB] border-1 rounded-lg w-full h-[38px]'/>
								</div>
								<span className='px-4 pt-[48px] pb-1 text-[#030712]'>-</span>					
								<div>
										<h3 className='pt-[20px] pb-1 text-[#6B7280] text-[12px]'>Max price</h3>
										<input type='number' placeholder='0'  className='mx-auto px-4 border-[#D1D5DB] border-1 rounded-lg w-full h-[38px]'/>
								</div>

							</div>
							<div>
								<Slider defaultValue={[0]} max={30} step={1} className='pt-[20px]' />
								</div>
							<div className='flex flex-row justify-between items-center mb-[26px] pt-[30.5px]'>
										<h2 className='text-[#030712] text-[14px]'>Price: $0 — $30</h2>
										<button className='bg-[#E5E7EB] pt-[10px] pr-[17.7px] pb-[11px] pl-[18px] rounded-lg font-bold text-[#000000] text-[14px]'>
											Filter
										</button>
							</div>

						</div>

						<div className='pt-[25px] border-[#E5E7EB] border-b-1'>
								<h2 className='font-semibold text-[#030712] text-[14px]'>Product Categories</h2>
								<div className='flex flex-row justify-between items-center pt-[21px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'All Categories'}  onChange={() => handleCategoryClick('All Categories')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>All Categories</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Fruits & Vegetables'}  onChange={() => handleCategoryClick('Fruits & Vegetables')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Fruits & Vegetables</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Baby & Pregnancy'}  onChange={() => handleCategoryClick('Baby & Pregnancy')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Baby & Pregnancy</h2>
										</label>
								<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Beverages'} onChange={() => handleCategoryClick('Beverages')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Beverages</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Meats & Seafood'}  onChange={() => handleCategoryClick('Meats & Seafood')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Meats & Seafood</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Biscuits & Snacks'}  onChange={() => handleCategoryClick('Biscuits & Snacks')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Biscuits & Snacks</h2>
										</label>
									<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Breads & Bakery'}  onChange={() => handleCategoryClick('Breads & Bakery')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Breads & Bakery</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
									<div className='flex flex-row justify-between items-center pt-[14px]'>
										<label className='flex flex-row items-center gap-[10px]'>
												<input checked={selectedCategory === 'Breaksfast & Dairy'}  onChange={() => handleCategoryClick('Breaksfast & Dairy')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Breaksfast & Dairy</h2>
										</label>

										<Plus className='mr-2 w-4 text-[#636363]' />
								</div>
								<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Frozen Foods'}  onChange={() => handleCategoryClick('Frozen Foods')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Frozen Foods</h2>
										</label>
									<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Grocery & Staples'}  onChange={() => handleCategoryClick('Grocery & Staples')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Grocery & Staples</h2>
										</label>
									<label className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input checked={selectedCategory === 'Healthcare'}  onChange={() => handleCategoryClick('Healthcare')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Healthcare</h2>
										</label>
									<label className='flex flex-row items-center gap-[10px] pt-[14px] pb-[37px]'>
												<input checked={selectedCategory === 'Household Needs'}  onChange={() => handleCategoryClick('Household Needs')} type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Household Needs</h2>
										</label>
						</div>

					<div className='pt-[25px] border-[#E5E7EB] border-b-1' >
						<h2 className='font-semibold text-[#030712] text-[14px]'>Filter by Color</h2>
						<div className='flex flex-row justify-between items-center pt-[21px] pb-[29px]'>
										<div className='flex flex-row items-center gap-[10px]'>
												<span className='bg-[#81D742] border rounded-full w-[20px] h-[20px]'></span>
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Green</h2>
										</div>

										<h3 className='text-[#9CA3AF] text-[14px]'>(1)</h3>
								</div>
						</div>

					<div className='pt-[25px] border-[#E5E7EB] border-b-1' >
						<h2 className='font-semibold text-[#030712] text-[14px]'>Filter by Brands</h2>
						<div className='flex flex-row justify-between items-center pt-[21px] pb-[29px]'>
										<div className='flex flex-row items-center gap-[10px]'>
												<input type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>Fresh</h2>
										</div>

										<h3 className='text-[#9CA3AF] text-[14px]'>(1)</h3>
								</div>
						</div>

					<div className='pt-[25px]' >
						<h2 className='font-semibold text-[#030712] text-[14px]'>Product Status</h2>
						<div className='items-center pt-[21px] pb-[29px]'>
										<div className='flex flex-row items-center gap-[10px]'>
												<input type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>In Stock</h2>
										</div>
										<div className='flex flex-row items-center gap-[10px] pt-[14px]'>
												<input type='checkbox' className='w-4 h-4' />
												<h2 className='font-medium text-[#030712] text-[14px] hover:text-[#634C9F] active:text-[#634C9F]'>On Sale</h2>
										</div>

								</div>
						</div>
    </div>
						</div>
					</div>
				)
				 }


				{/* Mobile Sort menu page open  */}

				{openSort && (
					<div className='z-50 fixed inset-0 flex justify-center items-end bg-black/40'>
						<div className='bg-white shadow-lg p-5 rounded-t-2xl w-full h-full animate-slide-up'>
							<div className='flex justify-between items-center mb-4 px-2'>
									<h2 className='font-semibold text-[14px]'>
											Sort by
									</h2>
									<button onClick={()=> setOpenSort(false)} >
										<X className='w-5 h-5 cursor-pointer'/>
									</button>
							</div>

							<div className="flex flex-col">
						<RadioGroup defaultValue="option-one">
							<div className='flex flex-row items-center gap-2 py-3 border-y-1'>
								<RadioGroupItem value="option-one" id="option-one" />
								<label htmlFor="option-one"
											className={`px-2 bg-white text-[12px] text-start  font-semibold ${sortOption === 'Relevance' ? 'bg-gray-300' : ''}`}
											onClick={() => handleSortChange('Relevance')}
										>
											Relevance
										</label>
								</div>

								<div className='flex flex-row items-center gap-2 py-3 border-b-1'>
									<RadioGroupItem value="option-two" id="option-two" /> 
									<label htmlFor="option-two"
										className={`px-2 bg-white text-[12px] text-start font-semibold ${sortOption === 'Price - High To Low' ? 'bg-gray-300' : ''}`}
										onClick={() => handleSortChange('Price - High To Low')}
									>
										Price - High To Low
									</label>
								</div>

								<div className='flex flex-row items-center gap-2 py-3 border-b-1'>
									<RadioGroupItem value="option-three" id="option-three" />
									<label htmlFor="option-three"
										className={`px-2 bg-white text-[12px] text-start font-semibold ${sortOption === 'Price - Low To High' ? 'bg-gray-300' : ''}`}
										onClick={() => handleSortChange('Price - Low To High')}
									>
										Price - Low To High
									</label>
								</div>
					</RadioGroup>		
						</div>
					<div className='flex justify-end px-2 py-6'>
						<button className='px-6 py-1 border text-[12px]'>
							Apply
						</button>
					</div>
				</div>
			</div>
		)}	
		</div>
					
			
			{/* Right side  */}	
			<div className='lg:w-[980.5px] xl:w-[1042.5px] h-auto text-[#030712]'>
					<span className='pb-[25px] font-medium text-[#555555] text-[12px] lg:text-[14px]'>x Clear filters x {selectedCategory}</span>

		{/* banner  */}
			<div className='bg-[url("/assets/banner/banner33.svg")] bg-cover bg-no-repeat bg-center mt-[25px] rounded-sm w-full h-auto'>
				<div className='ml-6 lg:ml-[30px] pb-8 lg:pb-[40px]'>
					<h3 className='inline-flex bg-[#FFEDD5] mt-[37px] px-[10px] py-2 lg:py-[4px] rounded-full font-semibold text-[#7C2D12] text-[8px] lg:text-[12px]'>Only This Week</h3>
					<h1 className='pt-2 lg:pt-[15px] font-bold text-[#111827] text-[18px] lg:text-[30px] leading-6 lg:leading-8 tracking-tight'>Grocery store with different <br /> treasures</h1>
					<h3 className='mt-[9px] text-[#6B7280] text-[11px] lg:text-[13px] leading-4 lg:leading-6 tracking-tighter'>We have prepared special discounts for you on grocery <br /> products...</h3>
					<button className='flex flex-row items-center gap-[6px] bg-[#ffffff] hover:bg-[#634C9F] mt-3 lg:mt-[28px] pt-[9px] pb-[10px] pl-[13px] rounded-full font-bold text-[#212529] text-[10px] lg:text-[12px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
						Shop Now
						<MoveRight className='mr-[15px] w-3 h-3' />	
					</button>
				</div>
			</div>

					{/* sort header  */}

					<div className='bg-[#F3F4F6] mt-[20px] rounded-lg lg:w-[980.5px] xl:w-[1042.5px] h-auto'>
							<div className='flex flex-row justify-between items-center'>
									<h3 className='items-center py-3.5 lg:py-5 pl-[15px] text-[#6B7280] text-[10px] lg:text-[12px]'>Showing all {filteredProducts.length} results</h3>
									
							<div className='flex flex-row gap-8 px-4'>
									<div className="hidden lg:flex flex-row gap-[2px] py-5">
										<h2 className="px-1 pt-0.5 font-semibold text-[12px]">Sort by:</h2>
									<button
												className={`px-2 bg-white text-[12px] font-semibold ${sortOption === 'Relevance' ? 'bg-gray-300' : ''}`}
												onClick={() => handleSortChange('Relevance')}
											>
												Relevance
											</button>
											<button
												className={`px-2 bg-white text-[12px] font-semibold ${sortOption === 'Price - High To Low' ? 'bg-gray-300' : ''}`}
												onClick={() => handleSortChange('Price - High To Low')}
											>
												Price - High To Low
											</button>
											<button
												className={`px-2 bg-white text-[12px] font-semibold ${sortOption === 'Price - Low To High' ? 'bg-gray-300' : ''}`}
												onClick={() => handleSortChange('Price - Low To High')}
											>
												Price - Low To High
									</button>
								</div>
									<div className='flex flex-row gap-2 lg:gap-1'>
										<button className='bg-[#D1D5DB] lg:my-4 p-1 lg:pt-[7.73px] lg:pr-[9.15px] lg:pb-[7.57px] lg:pl-[6.16px] border rounded-sm lg:rounded-lg'>
											<LayoutGrid className='w-[11.69px] lg:w-[14.69px] h-[11.71px] lg:h-[14.71px] text-[#6B7280]' />
										</button>
										<button className='lg:my-4 lg:pt-[7.73px] lg:pr-[9.15px] lg:pb-[7.57px] lg:pl-[6.16px] rounded-lg'>
											<LayoutList className='w-[11.69px] lg:w-[14.69px] h-[11.71px] lg:h-[14.71px]' />
										</button>
									</div>
								</div>
							</div>
					</div>

					{/* Products  */}

					<div className="bg-[#ffff] stroke-[#E5E7EB] mt-[10px] pb-[60.61px] lg:w-[980.5px] xl:w-[1042.5px] h-auto text-[#6B7280]">
          <div className ='grid grid-cols-2 lg:grid-cols-5  border-[#E5E7EB]   '>
            {currentProducts.map((product: Product) => (							
              <div key={product.id}  className='border border-[#E5E7EB] lg:w-[197px] xl:w-[210px] h-auto cursor-pointer'>
                <div className='relative pt-[13px] pl-[25px]'>
                  <h3 className='inline-flex top-3 left-3 absolute bg-[#DC2626] py-[4px] lg:py-[6px] pr-[7px] lg:pr-[9.68px] pl-[6px] lg:pl-[8px] border rounded-full font-extrabold text-[#FEF2F2] text-[8px] lg:text-[10px]'>{product.discount}%</h3>
									<Link href={`/product/${product.id}`}> 
										<Image src={product.image} alt="New Arrival 1" width={152.5} height={152.5} className='mx-auto w-[130px] lg:w-[152.5px] h-[130px] lg:h-[152.5px] object-cover cursor-pointer' />
                  </Link>
									<HeartButton product={product} />
                </div>
                <div>
                  <h3 className='pt-[10px] pr-1.5 pl-[15px] w-auto h-auto font-regular text-[#030712] text-[13px] lg:text-[14px] line-clamp-2'>{product.name}</h3>
    
                  <div className='flex flex-row items-center pt-[8px]'>
                    <Image src="/assets/products/icon.svg" alt="New Arrival 1" width={50.88} height={11} className='ml-[16px] w-[47.88px] lg:w-[50.88px] h-[10px] lg:h-[11px] object-cover' />
                    <Image src="/assets/products/star.svg" alt="New Arrival 1" width={14.35} height={11} className='w-[10.35px] lg:w-[14.35px] h-[10px] lg:h-[11px] object-cover' />
                    <span className='pl-[8px] text-[#6b7280] text-[10px] lg:text-[12px]'>{product.rating}</span>
                  </div>
    
                  <div className='flex flex-row pt-[5px]'>
                      <p className='top-0 mb-[12px] ml-[15px] pr-[6px] font-bold text-[#dc2626] text-[18px] lg:text-[22px]'>${product.price}</p>
                      <p className='pt-2 font-medium text-[#111827] text-[14.1px] lg:text-[16.1px] line-through'>${product.discountPrice}</p>
                  </div>
                </div>
    
                <div >
									<div className='flex flex-row px-[12px] lg:px-0 pb-4 lg:pl-[15px]'>
											<div className='bg-[#16A34A] border border-[#E5E7EB] rounded-lg w-[36px] h-[36px]'>
												<Image src="/assets/header/cart.svg" alt="cart" width={18.6} height={15} className="my-[9.79px] ml-[7.16px] w-[18.6px] h-[15px]" />
											</div>
				
											<h3 className='my-[12.79px] ml-2 font-bold text-[#16A34A] text-[11px]'>In Stock</h3>
										</div>
								</div>
							</div>
						
             ))}
        </div>
       </div>
			</div>	
		</div>



		<div className='items-center lg:mx-[800px] mt-4'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    if (currentPage === 1) {
                      e.preventDefault(); // Prevent the default action if the button should be disabled
                      return;
                    }
                    paginate(currentPage - 1);
                  }}
                  className={`${
                    currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink href="#" onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    if (currentPage === totalPages) {
                      e.preventDefault(); // Prevent the default action if the button should be disabled
                      return;
                    }
                    paginate(currentPage + 1);
                  }}
                  className={`${
                    currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
  </div>

  )
}

export default Shop