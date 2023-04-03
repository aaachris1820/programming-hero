const loadCountryByName=async({params})=>{
    
    const res=await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
    const data=await res.json();
    return data;
    
}
export default loadCountryByName;