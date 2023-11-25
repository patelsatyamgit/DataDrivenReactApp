import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import Spinner from '../Components/Spinner';


import Product from '../Components/Product';
import {productCategory} from '../utils/productCategory';

const DisplayProduct = () => {
 
    const [loading,setLoading]=useState(false);
    const [finalData,setfinaldata]=useState([]);
    const [category,setCategory]=useState("smartphones");
    const [filteredData,setFilteredData]=useState([]);
    const getData=async()=>{
        setLoading(true);
        await fetch(`https://dummyjson.com/products?limit=100`)
        .then(res => res.json())
        .then((json) => {
            setfinaldata(json.products);
            const data=json?.products?.filter((item)=>item.category == category);
            setFilteredData(data);
        });

      
        
        setLoading(false);

       
      }
      const filterData=()=>{
        setLoading(true);
        const data=finalData.filter((item)=>item.category == category);
        setFilteredData(data);
        setLoading(false);
      }

      useEffect(()=>{
        getData();
      },[])

      useEffect(()=>{
          filterData();
        // console.log(category);
      },[category])
      useEffect(()=>{
              console.log("filter",filteredData)
      },[filteredData])

  return (
    <div>
     

     <div>
     <div className='bg-gray-200 px-3 py-5 rounded-xl flex flex-col gap-4 font-bold'>
          <p>  Filtered Product</p>
          <div>
            <select onChange={(e)=> setCategory(e.target.value)} className='text-gray-500 px-2 py-2'>
                {
                    productCategory.map((item,index)=>(
                        <option value={item.category} key={index} className='text-gray-600' >{item.name}</option>
                    )

                    )
                }
            </select>
          </div>
        </div>
        {/* items  */}
        <div>
        <div className="w-3/4 min-w-[350px] mx-auto grid grid-cols-1 min-h-screen relative  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {
                loading? <Spinner/>:(

                  filteredData.length < 0 ? (
                    <div>
                      No data found
                    </div>
                  ):
                  (
                    filteredData.map((product)=>{

                     return <div key={product.id}>
                         {
                              <Product product={product} />
                        }
                        
                      </div>
                    

                  })
                  )

                )
            }
     </div>;
        </div>
     </div>

     <div>
     <div className='bg-gray-200 px-3 py-5 rounded-xl flex flex-col gap-4 font-bold'>
            All Products
        </div>
        {/* items  */}
        <div>
        <div className="w-3/4 min-w-[350px] mx-auto grid grid-cols-1 min-h-screen relative  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {
                loading? <Spinner/>:(

                  finalData.length < 0 ? (
                    <div>
                      No data found
                    </div>
                  ):
                  (
                    finalData.map((product)=>{

                     return <div key={product.id}>
                         {
                              <Product product={product} />
                        }
                        
                      </div>
                    

                  })
                  )

                )
            }
     </div>;
        </div>
     </div>
        
    </div>
  )
}

export default DisplayProduct;