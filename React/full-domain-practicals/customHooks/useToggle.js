import { useState } from "react"

const useToggle = ()=>{
    const [data,setData] = useState(false);
    const markToggle = ()=> setData(data ? false : true);
    return {data,markToggle};
}

export default useToggle;