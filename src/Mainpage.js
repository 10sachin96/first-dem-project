import React from 'react'
import { Link,Route,Routes} from "react-router-dom";
import SaveBook from './SaveBook';
import SearchBook from './SearchBook';
import ShowAll from './ShowAll';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook';
function Mainpage()
{
    return(
        <div>
            <center>
                <h1 style={{backgroundColor: "rgb(166, 33, 144)"}}>Welcome to the Book Library!</h1><br/><br/>
                <nav>
                <Link to="/SaveBook" style={{padding:"10px",textDecorationColor:"content",color:"rgb(166, 93, 9)"}}> SaveBook </Link>
                <Link to="/SearchBook" style={{padding:"10px",textDecorationColor:"content",color:"rgb(166, 93, 9)"}}> SearchBook </Link>
                <Link to="/ShowAll" style={{padding:"10px",textDecorationColor:"content",color:"rgb(166, 93, 9)"}}> ShowAll </Link>
                <Link to="/DeleteBook" style={{padding:"10px",textDecorationColor:"content",color:"rgb(166, 93, 9)"}}> DeleteBook </Link>
                <Link to="/UpdateBook" style={{padding:"10px",textDecorationColor:"content",color:"rgb(166, 93, 9)"}}> UpdateBook </Link>

                 </nav>

                <Routes>
                    <Route path="/SaveBook" element={<SaveBook></SaveBook>}></Route>
                    <Route path="/SearchBook" element={<SearchBook></SearchBook>}></Route>
                    <Route path="/ShowAll" element={<ShowAll></ShowAll>}></Route>
                    <Route path="/DeleteBook" element={<DeleteBook></DeleteBook>}></Route>
                    <Route path="/UpdateBook" element={<UpdateBook></UpdateBook>}></Route>

                </Routes>
               
            </center>
        </div>
    );
}export default Mainpage;