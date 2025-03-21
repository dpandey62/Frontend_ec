import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';


const searchBox = ()=>{
    return (
        <div className="headersearch-box ml-3 mr-3">
        <input type='text' placeholder="Search for Product....."/>
        <Button><IoIosSearch /></Button>
        </div>
    )

}
export default searchBox;