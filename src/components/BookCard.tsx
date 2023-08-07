
  
  
  import { Link } from "react-router-dom";
import image from "../assets/made-to-stick-1024x688 1.png";
  
  
  export default function BookCard(props) {
    return (
      <div className="bg-white flex flex-col items-center shadow shadow-gray-100">
        <div>
            <img src={props.image} alt="" className="w-full max-h-[160px]"/>
        </div>
        <h2 className="my-4 text-lg font-bold ">
            {props.title}
        </h2>
        <p className="my-5">
            price - {props.price} $
        </p>
        <button className="text-slate-500 font-bold">
          Add To Card
        </button>
        <Link className="text-cyan-600 underline my-3" to="/book/1" >
            view the book
        </Link>
      </div>
    );
  }