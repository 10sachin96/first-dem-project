import React from "react";
import axios from "axios";
import { useState } from "react";
function SearchBook()
{
    const [bcode, setBcode]=useState();
    const [bname, setBName]=useState();
    const [bprice, setBprice]=useState();
    const [scode, setScode]=useState(); // search karne ke liye use hota hai
    
    const handleBcodeText=(evt)=>{
        setBcode(evt.target.value);
    }
    const handleBNameText=(evt)=>{
        setBName(evt.target.value);
    }
    const handleBpriceText=(evt)=>{
        setBprice(evt.target.value);
    }
    const handleScodeText=(evt)=>{
        setScode(evt.target.value);
    }
    const handleSearchButton=()=>{
        axios.get("http://localhost:1234/search/" + scode).then((res)=>{
            setBcode(res.data.bcode);
            setBName(res.data.bname);
            setBprice(res.data.bprice);
    }).catch((err)=>{
       alert(err);

    })
    }
    return(
        <div>
            <h2 style={{color:"rgb(41, 139, 143)", marginBottom:"20px",marginTop:"50px", marginLeft:"20px",borderBottom:"5px solid CadetBlue"}}> Search Book Detail by Code </h2>
            <table>
                <tr>
                    <td style={{fontWeight:"bold"}}>Enter book code:-</td>
                    <td><input type="number" onChange={handleScodeText}/></td>
                    <button type="submit" onClick={handleSearchButton}>search</button>
                </tr>
                <tr>
                    <td style={{fontWeight:"bold"}}> Book Code:-</td>
                    <td> {bcode}</td>
                </tr>
                <tr>
                    <td style={{fontWeight:"bold"}}> Book Name:-</td>
                    <td>  {bname} </td>
                </tr>
                <tr> <td style={{fontWeight:"bold"}}> book price:-</td>
                <td> {bprice} </td></tr>

            </table>
        </div>
    );
    
}export default SearchBook;