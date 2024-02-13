export default function Main(){
  return (
    <div id="container-wrap" className="flex-col h-full text-5xl ">
      <div className="relative
        flex flex-col-reverse justify-items-end
        items-center min-h-96 h-3/4 bg-gray-800 text-gray-200
      ">
        <div className=" shadow-2xl absolute
          overflow-visible w-4/5 h-52 -bottom-24
          bg-gray-100 text-gray-600 rounded-xl
        ">
          box
        </div>
      </div>
      <div className="flex h-3/4 justify-center items-center text-9xl">
        Hello
      </div>
    </div>
  )
}