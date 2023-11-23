import React, { useEffect, useState } from 'react'
import { category } from '../utils/category';
import DisplayData from './DisplayData';
import DifferentsFields from './DifferentsFields';
import toast from 'react-hot-toast';

const DataGeneratePage = () => {
    const [tab,setTab]=useState(0);
    const [unSelectedfields,setUnSelectedFields]=useState([]);
    const [limit,setLimit]=useState(10);
    const [finalData,setFinalData]=useState([]);
    const [edit,setEdit]=useState(false);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
            setUnSelectedFields([]);
    },[tab])


    const handleDownload = () => {
       
        if(finalData.length===0){
            
             toast.error("Firts Generate date")
        }else{
            const filename = prompt('Enter file name') || 'data.json'; // Prompt user for filename
            downloadJsonFile(filename);
            toast.success("File downloaded successfully")
        }
      };
    const downloadJsonFile = (filename) => {
        const contentType = 'application/json;charset=utf-8;';
    
        const blob = new Blob([finalData], { type: contentType });
    
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          // For IE and Edge browsers
          window.navigator.msSaveOrOpenBlob(blob, filename);
        } else {
          // For other browsers
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
      };
    const getData= async()=>{
        setLoading(true);
        var apiData
        let oop=category[tab-1].apicall;
        let d= await fetch(`https://dummyjson.com/${category[tab-1].apicall}?limit=${limit}`)
.then(res => res.json())
.then(json => 
    {
        if(category[tab-1].apicall=="users"){
           apiData=[...json.users]
        }
        else if(category[tab-1].apicall=="carts"){
            apiData=json.carts;
        }
        else if(category[tab-1].apicall=="products"){
            apiData=json.products;
        }
        else if(category[tab-1].apicall==="todos"){
            apiData=json.todos;
        }
    })

        const filteredArray = apiData.map(obj => {
                        const filteredObject = Object.fromEntries(
                          Object.entries(obj).filter(([key]) => !unSelectedfields.includes(key))
                        );
                        return filteredObject;
                      });
                      
            setFinalData(JSON.stringify(filteredArray,null,4));
            setLoading(false);
    }
  
  return (
    <div className='w-[95%] md:w-11/12 mx-auto py-5'>
        <div className='bg-gray-200 px-3 py-5 rounded-xl flex flex-col gap-4'>
            <div className='text-3xl font-bold text-gray-600 font-serif'> Customise Data</div>
            <div className=' bg-gray-400 flex rounded-lg w-fit gap-2 md:gap-7 px-6 py-2 flex-wrap'>
                {
                    category.map((item,index)=>{
                        return <button className={`rounded-lg border-[1px] border-gray-500 px-2 py-1 ${item.id==tab ?"bg-gray-900 text-white":"text-gray-900"}`} onClick={()=>setTab(item.id)}>
                            {item.name}
                        </button>
                    })
                }
            </div>

            {
                tab!=0 && <div>
                    <div>
                   <div className='flex gap-5'>
                   <label htmlFor="limit" className='text-gray-700'>Number of Item</label>
                        <div>
                        <input type="number" value={limit} id='limit' onChange={(e)=>{
                                  if(+e.target.value < 0)
                                  {
                                    setLimit(10);
                                  }
                                  else if(+e.target.value > category[tab-1].count){
                                    setLimit(category[tab-1].count)
                                  }
                                  else{
                                    setLimit(+e.target.value)
                                  }
                                  
                        }} max={100} className='w-[63px] outline-none bg-gray-500 text-white px-2 rounded-sm' />
                       {
                     category && category[tab-1].count < limit && <p className='text-sm text-red-500 pl-1'>
                            There is only {category[tab-1].count }..
                             fields
                        </p>
                     
                       
                       }
                        </div>
                   </div>
                   <DifferentsFields category={category} tab={tab} unSelectedfields={unSelectedfields} setUnSelectedFields={setUnSelectedFields}/>
                    </div>
                    
                    <button className='bg-yellow-500 px-3 py-1 text-white font-bold rounded-lg' onClick={()=>{
                        getData();
                    }}>Get Data</button>
                </div>
            }

        </div>
        <div>
            <DisplayData edit={edit} setEdit={setEdit} finalData={finalData} setFinalData={setFinalData} handleDownload={handleDownload} loading={loading}/>
        </div>
        
    </div>
  )
}

export default DataGeneratePage;



<style>
 
</style>
