import React, {useState} from 'react'
import axios from 'axios'
function DeleteBook()

{
    const [bcode,setBcode]=useState();
    const handleBcodeText=(evt)=>{
        setBcode(evt.target.value);
    }
    const handleDeleteButton=()=>{
        axios.delete("http://localhost:1234/delete/"+bcode).then((res)=>{
            alert("Data Delete")
            setBcode("");
        }).catch((err)=>{
            alert(err);
        })
    }
    return(
        <div>
            <center>
                <h2 style={{color:"rgb(41, 139, 143)", marginBottom:"20px",marginTop:"50px", marginLeft:"20px",borderBottom:"5px solid CadetBlue"}}> Delete Book detail by book Code</h2>
                <table>
                    <tr>
                        <td style={{fontWeight:"bold"}}>Enter Book Code : </td>
                        <td> <input type="number" onChange={handleBcodeText}/></td>
                    </tr>
                    <tr><td></td>
                    <td> <button type="submit" onClick={handleDeleteButton} style={{backgroundColor:"Crimson", fontSize:"20px", color:"white", marginTop:"10px",marginLeft:"40px"}}>Delete</button></td>
                    </tr>
                </table>
            </center>
        </div>
    )
}export default DeleteBook;
