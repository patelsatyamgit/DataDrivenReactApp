import { useEffect } from "react";
import { toast } from "react-hot-toast";

// import "react-toastify/dist/ReactToastify.css"

const Product = (props) => {
  
  const product=props.product;
  const tab=props.tab;

  return 
         <div>
          {
            tab==1 &&  <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
            <div>
              <h1 className="font-semibold text-center text-lg">{ product.title.substring(0,17)}...</h1>
            </div>
            <div>
              <p className="text-[12px] text-gray-400">
                { product.description.substring(0,100)}...
              </p>
            </div>
            <div>
              <img src={ product.thumbnail} className=" h-[180px]" alt="" />
            </div>
            <div className="flex justify-between gap-8">
              <p className="text-green-500 items-center ">${product.price}</p>
            </div>
        
          </div>
          }
         </div>
};

export default Product;
