import React, {useState} from 'react';
import axios from 'axios';
function UpdateBook()
{
    const [bcode, setBcode]=useState();
    const [bname,setBName]=useState();
    const [bprice, setBprice]=useState();
    
    const handleBcodeText=(evt)=>{
        setBcode(evt.target.value);
    }
    const handleBNameText=(evt)=> {
        setBName(evt.target.value);
    }
    const handleBpriceText=(evt)=>{
        setBprice(evt.target.value);
        }
        const handleShowButton=()=>{
            axios.get("http://localhost:1234/search/"+ bcode).then((res)=>{
                setBcode(res.data.bcode);
                setBName(res.data.bname);
                setBprice(res.data.bprice);
            }).catch((err)=>{
                alert(err);
            })
        }
        const handleUpdateButton=()=>{
            axios.put("http://localhost:1234/update/"+ bcode+"/"+ bname+ "/" +bprice).then((res)=>{
                alert("data update");
            }).catch((err)=>{
                alert(err);
            })
        }
        return(
            <div>
                <center>
                    <h2 style={{color:"rgb(41, 139, 143)", marginBottom:"20px",marginTop:"50px", marginLeft:"20px",borderBottom:"5px solid CadetBlue"}}> Update Book</h2>
                    <table>
                        <tr>
                            <td style={{fontWeight:"bold"}}>
                                Enter Book Name:-
                            </td>
                            <td> <input type="number" onChange={handleBcodeText}/></td>
                            <td><button type="submit" onClick={handleShowButton} style={{backgroundColor:"Crimson",color:"white"}}> Show </button></td>
                        </tr>
                        <tr>
                            <td style={{fontWeight:"bold"}}>Book Name:-</td>
                            <td> <input type="text" onChange={handleBNameText} value={bname}></input></td>
                        </tr>
                        <tr>
                            <td style={{fontWeight:"bold"}}> Book Price:-</td>
                            <td>  <input type="number" onChange={handleBpriceText} value={bprice}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td> <button type="submit" onClick={handleUpdateButton} style={{backgroundColor:"Crimson", fontSize:"20px", color:"white", marginTop:"10px",marginLeft:"50px"}}> Update</button></td>
                            </tr>
                    </table>
                </center>
            </div>
        );
}export default UpdateBook;
