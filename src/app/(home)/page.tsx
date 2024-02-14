import apple from '@/asset/logo-apple.png'
import google from '@/asset/logo-google.png'
import iphone from '@/asset/iphones.png'
import Link from "next/link";
import Image from "next/image";
import {Container} from "@/app/components/container";

export default function Main(){
  return (
    <div className="w-screen antialiased">
      <div className="
        relative text-white bg-[#212121]
        p-16 flex flex-col justify-end mb-40
        "
         style={{height: "720px"}}
      >
        {/*상단 화면 두개 컨테이너*/}
        <div className="
          flex justify-between text-black
          mb-24 h-96
        ">
          <div className="
            flex flex-col justify-start
            m-4 p-2 pt-6 text-white
          ">
            <h1
              className="
                text-5xl w-80 leading-tight
              "
            >
              Your Perfect Learning App
            </h1>
            <p
              className="mt-4 text-lg font-light"
              style={{width: "550px"}}
            >
              Our app is here to empower you on your quest for knowledge,
              anytime and anywhere.
            </p>
            <div className="py-9">
              <p>Get the app</p>
              <ul
                className="
                mt-3 pt-2 ml-1 text-black h-16
                text-sm font-semibold
                flex"
                style={{fontSize: "13px"}}
              >
                <Link
                  href="https://www.apple.com/app-store/"
                  className="
                  bg-white mr-2 p-2 w-40 h-full
                  rounded-lg flex justify-around items-center
                ">
                  <Image
                    src={apple} alt="app store"
                    width="25" height="25"
                    className="ml-2"
                  />
                  <p className="mr-3 pb-1">
                    APP STORE
                  </p>
                </Link>
                <Link
                  href="https://play.google.com/"
                  className="
                  bg-white mr-1 p-2 w-48 h-full
                  rounded-lg flex justify-around items-center
                ">
                  <Image
                    src={google} alt="play store"
                    width="25" height="25"
                    className="ml-3"
                  />
                  <p className="mr-4 p-2 mb-1">
                    GOOGLE PLAY
                  </p>
                </Link>
              </ul>
            </div>
          </div>
          <div className="absolute right-24 top-14 mb-48">
            <Image
              src={iphone} alt="iphone image"
              width="470" height="640"
              className="z-30"
            />
          </div>
        </div>
        {/*텍스트 박스 부분*/}
        <div className="
          bg-white shadow-md text-black
          absolute -bottom-36 h-60 w-11/12
          p-14 text-2xl rounded-xl
        ">
          <h1 style={{fontSize: "28px"}}
             className="pt-0.5"
          >
            Learning App
          </h1>
          <p
            className="pt-4 text-sm text-gray-400 "
            style={{
              width: "520px",
              fontSize: "14px",
              lineHeight: "1.75rem",
          }}
          >
            Download our app dive into a vast library of courses, tutorials, and study
            materials on a wide range of subjects - from programming and language
            learning to personal development and beyond
          </p>
        </div>
      </div>
      <div className="
        mt-28 mx-14 h-2/3 px-16
        flex justify-center items-center
      ">
        <div className="
          w-11/12 h-4/5 bg-black rounded-2xl flex
          text-center text-white
          justify-center items-center text-5xl
        ">
          iframe
        </div>
      </div>
      <Container className="items-start
        h-full border-4 text-center text-5xl m-8 p-4
        flex-wrap
        ">
        <div className="h-full w-full">
          <div className="basis-full border-4">
            Head!
          </div>
          <div className="
            flex flex-wrap w-full justify-around
            items-center
          ">
            <div className="basis-5/12 border-4 text-4xl">
              HI1234
            </div>
            <div className="basis-5/12 border-4 text-4xl">
              HI1234
            </div>
            <div className="basis-5/12 border-4 text-4xl">
              HI1234
            </div>
            <div className="basis-5/12 border-4 text-4xl">
              HI1234
            </div>
          </div>
        </div>
      </Container>
      <Container className="
        text-5xl border-4 p-8 m-8
      ">
        Hello
      </Container>
    </div>
  )
}