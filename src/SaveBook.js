import React, {useState} from "react";
import ReactDOM  from "react-dom/client";
import axios from "axios";
function SaveBook()
{
    const [bcode,setBcode]=useState();
    const [bname, setBName]=useState();
    const [bprice, setBprice]=useState();
    const handleBcodeText=(evt)=>{
        setBcode(evt.target.value);
    }
    const handleBNameText = (evt) =>{
        setBName(evt.target.value);
    }
    const handleBpriceText=(evt)=>{
        setBprice(evt.target.value);
    }
    const handleSaveButton=( )=>{
        var obj={
            bcode:bcode,
            bname:bname,
            bprice:bprice
        };
        axios.post("http://localhost:1234/save",obj)
        .then((res)=>{
            alert("Data Saved");
        })
        .catch ((err)=>{
            alert(err);

        })
    }
    return(
        <div >
            <h2 style={{color:"rgb(41, 139, 143)", marginBottom:"20px",marginTop:"50px", marginLeft:"20px",borderBottom:"5px solid CadetBlue"}}> Books detail Entery form</h2>
            <table>
                <tr>
                    <td style={{fontWeight:"bold"}}> Book Code:-</td>
                    <td><input type="number" onChange={handleBcodeText}/></td>
                </tr>
                <tr>
                    <td style={{fontWeight:"bold"}}> Book Name:-</td>
                    <td><input type="text" onChange={handleBNameText}/></td>
                </tr>
                <tr>
                    <td style={{fontWeight:"bold"}}> Book price:-</td>
                    <td><input type="number" onChange={handleBpriceText}/></td>
                </tr>
                <tr>
                    <td></td>
                   
                    <td> <button input type="submit" onClick={handleSaveButton} style={{backgroundColor:"Crimson", fontSize:"25px", color:"white", marginTop:"10px",marginLeft:"20px"}}>save </button></td>
                </tr>
            </table>
        </div>
    );
}export default SaveBook;