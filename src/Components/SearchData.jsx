import React,{useState} from 'react'
import JSONDATA from "../Assets/MOCK_DATA.json";




function SearchData() {
const [searchTerm,setSearchTerm]=useState("")
return (
    <div className="App">
        <input type="text" placeholder='Search...' onChange={(event)=>{
            setSearchTerm(event.target.value);
        }}
        />
        {JSONDATA.filter((value)=>{
            if (searchTerm === ""){
                return value
            } else if (value.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
            return value
            }
        }).map((value, key)=>{
            return(
            <div className="user" key={key}>
            {value.first_name}
            </div>
            );
        })}
    </div>
)
}

export default SearchData