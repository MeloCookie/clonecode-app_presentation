import iphones from '../../../public/iphones.png'
import Image from "next/image";
export default function Main(){
  return (
    <div id="container-wrap" className="flex-col h-full text-5xl">
      <div
        className="relative
        flex flex-col content-end
        items-center bg-[#212121]"
        style={{height: 724}}
      >
        <div className=" mt-16 mx-28 px-6 overflow-visible
          flex w-11/12 text-black
          justify-between
        ">
          <div className="flex flex-col justify-center">
            <div className="text-white text-lg font-light">
              <div className="text-4xl font-normal pb-4">
                <p className="py-3">Your Perfect</p>
                <p className="py-3">Learning App</p>
              </div>
              <p>Our app is here to empower you on your quest for knowledge,</p>
              <p>anytime and anywhere.</p>
              <br/>
              <p className="my-4 text-sm">Get the app</p>
              <button>app store</button>
              <button>google play</button>
            </div>
          </div>
          <Image
            src={iphones} alt="iphone"
            width="465" height="500"
            className="z-50 mr-4"
          />
        </div>
        <div className="shadow-lg absolute
          overflow-visible w-11/12 h-60 -bottom-36
          bg-white rounded-xl
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