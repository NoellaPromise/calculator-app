function App() {
  return (
    <div className=" flex justify-center  items-center">
      <div className="h-[60vh] bg-orange-200 rounded-md m-4 ">
        <form className="font-bold  m-4 p-2  text-xl  ">
          <div>
            <input type="text" className="p-2 mb-3" />
          </div>
          <div >
            <input type="button" value="AC"className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "  />
            <input type="button" value="DE"className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 " />
            <input type="button" value="." className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "/>
            <input type="button" value="/" className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "/>
          </div>
          <div >
            <input type="button" value="7"className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 " />
            <input type="button" value="8"className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 " />
            <input type="button" value="9"className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 " />
            <input type="button" value="*"className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 " />
          </div>
          <div >
            <input type="button" value="4" className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "/>
            <input type="button" value="5" className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 " />
            <input type="button" value="6"className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 " />
            <input type="button" value="+"className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 " />
          </div>
          <div >
            <input type="button" value="1" className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "/>
            <input type="button" value="2" className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "/>
            <input type="button" value="3" className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "/>
            <input type="button" value="-" className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "/>
          </div>
          <div >
            <input type="button" value="00"className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 " />
            <input type="button" value="0" className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "/>
            <input type="button" value="=" className="  bg-blue-400  border-black rounded-sm m-2 border-none outline-0 w-12 h-12 "/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
