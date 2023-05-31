import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useCoffees=()=>{
    const [coffees, setCoffees] = useState([]);

    const loadData = async () => {
        const res = await fetch('https://coffeeshop-backend-rose.vercel.app/coffees');
        const data = await res.json();
        return data;
    }

    const a=useQuery({
        queryKey:['coffees'],
        queryFn: loadData
    })
    return [a.data,a.refetch];
}

export default useCoffees;