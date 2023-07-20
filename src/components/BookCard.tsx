
  
  
  import image from "../assets/made-to-stick-1024x688 1.png";
  
  
  export default function BookCard() {
    return (
      <div className="bg-white flex flex-col items-center shadow shadow-gray-100">
        <div>
            <img src={image} alt="" className="max-w-[160px]"/>
        </div>
        <h2 className="my-4 text-lg font-bold ">
            Title
        </h2>
        <p className="my-5">
            price - 45 $
        </p>
        <p className="text-cyan-600 underline my-3">
            view the book
        </p>
      </div>
    );
  }