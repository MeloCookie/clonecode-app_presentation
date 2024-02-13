export default function Main(){
  return (
    <div id="container-wrap" className="flex-col h-full text-5xl">
      <div
        className="relative
        flex flex-col-reverse justify-items-end
        items-center bg-[#212121]"
        style={{height: 724}}
      >
        <div className="shadow-xl absolute
          overflow-visible w-11/12 h-60 -bottom-36
          bg-white text-gray-950 rounded-xl z-0
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