import { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  return (
    <div className=" flex justify-center  items-center mt-6">
      <div className="h-[60vh] bg-orange-200 rounded-md m-4 ">
        <form className="font-bold  m-4 p-2  text-xl  ">
          <div>
            <input type="text" className="p-2 mb-3" value={value} />
          </div>
          <div>
            <input
              type="button"
              value="AC"
              className="  bg-red-600  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={() => setValue("")}
            />
            <input
              type="button"
              value="DE"
              className="  bg-red-600  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              // eslint-disable-next-line no-unused-vars
              onClick={(e) => setValue(value.slice(0, -1))}
            />
            <input
              type="button"
              value="."
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              // eslint-disable-next-line no-unused-vars
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="/"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer "
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="8"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer "
              // eslint-disable-next-line no-unused-vars
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="9"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer "
              // eslint-disable-next-line no-unused-vars
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="*"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer "
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer "
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="5"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="6"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="+"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="2"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="3"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="-"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="0"
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 cursor-pointer"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="="
              className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-28 h-12 cursor-pointer"
              onClick={() => setValue(eval(value))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
