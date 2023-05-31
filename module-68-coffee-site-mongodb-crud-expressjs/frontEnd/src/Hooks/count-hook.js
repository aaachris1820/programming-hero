import { useState } from "react"

const useCount=()=>{
    const [customCount,setCustomCount]=useState(0);
    return [customCount,setCustomCount];
}
export default useCount;