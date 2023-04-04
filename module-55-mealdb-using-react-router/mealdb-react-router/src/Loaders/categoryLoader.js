const categoriesLoader=async()=>{
    const res=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    
    return res;
}

const categoryLoader=async({params})=>{
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`);

    return res;
}

export {categoryLoader,categoriesLoader};