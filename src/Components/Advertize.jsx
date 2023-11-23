import React, { useState ,useRef} from 'react'

const Advertize = () => {
    const textareaRef=useRef();
    const gt=">";
    const [product1data,setProduct1Data]=useState(); 
    const dummydata={
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
      }
      const copyToClipboard =()=>{
        if(textareaRef.current){
            textareaRef.current.select();
            document.execCommand("copy");
        }
      };
  return (
   <div className='bg-gray-200 w-full py-10'>
     <div className='w-[95%] md:w-11/12 mx-auto flex flex-col gap-4 '>
        <h1 className=' text-black font-bold text-3xl text-center font-serif'>Got tired of Lorem ipsum data?</h1>
        <p className=' text-lg sm:text-xl sm:text-center'>With DummyJSON, what you get is different types of REST Endpoints filled with JSON data which you can use in developing the frontend with your favorite framework and library without worrying about writing a backend.
        </p>
        <div>
            <h3 className='text-black font-bold text-xl'>Example Code</h3>
            <div className='bg-gray-800 text-gray-100 py-3 px-3 rounded-lg my-1 text-sm md:text-lg'>
                        
            <p>1. fetch('https://dummyjson.com/products/1')</p>
            <p>2. .then(res = {gt} res.json())</p>
            3. .then(json = {gt} console.log(json))

            </div>
            <div className='flex  gap-6 my-4'>
                <button className='bg-gray-900 text-white font-thin font-serif text-sm px-2 py-2 border-[2px] border-gray-800 rounded-lg' onClick={()=>{
                    setProduct1Data(dummydata)
                }}>Try it now 😍</button>
                <button className='  text-black font-thin font-serif text-sm px-2 py-2 border-[2px] border-gray-800 rounded-lg' onClick={copyToClipboard}>Copy Code</button>
            </div>

            <div>
                <textarea ref={textareaRef} value={JSON.stringify(product1data,null,4)} cols="30"  className={ `w-full bg-gray-900 rounded-md py-1 px-3 h-[500px] md:h-[300px]  text-yellow-400 whitespace-pre `} placeholder='
{
  💬: 🤔,
}
   '></textarea>
            </div>
        </div>
    </div>
   </div>
  )
}
export default Advertize;
