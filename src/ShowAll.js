import React, {useEffect, useState} from 'react';
import axios from 'axios';

function ShowAll()
{
    const [blist, SetBList]= useState([]);
    useEffect(()=>{
        axios.get("http://localhost:1234/Showall").then
        ((res)=>{ 
            SetBList(res.data);
        })
    .catch ((err) =>{
        alert (err);
     })
    }, []);
    return(
        <div>
            <center>
                <h2 style={{color:"rgb(41, 139, 143)", marginBottom:"20px",marginTop:"50px", marginLeft:"20px",borderBottom:"5px solid CadetBlue"}}> List of Book</h2>
                <table border="2" cellPadding="5">
                    <tr>
                        <th> Book Code</th>
                        <th> Book Name</th>
                        <th> Book Price</th>
                        
                    </tr>
                    {
                     blist.map((item)=>(
                        <tr>
                            <td> {item.bcode}</td>
                            <td> {item.bname}</td>
                            <td> {item.bprice}</td>
                        </tr>
                     ))   
                    }
                </table>
            </center>
        </div>
    );

}export default ShowAll;
