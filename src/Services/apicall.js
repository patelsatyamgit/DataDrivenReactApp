import { setData } from "../redux/Slices/dataSlice";

export const getApiData=async(category,tab,limit,setLoading,dispatch)=>{
    setLoading(true);
    // console.log("imafsdfsfsd")
        var apiData
      if(limit){
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
      }
      else{
        let d= await fetch(`https://dummyjson.com/${category[tab-1].apicall}`)
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
      }
    console.log(tab,"fsdfsfs",apiData);
    dispatch(setData(apiData));
    setLoading(false);
}
