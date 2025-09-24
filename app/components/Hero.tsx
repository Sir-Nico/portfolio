import Image from "next/image"
import heroImg from "../assets/sivertbbdahls.png"

export const Hero = () => {
  return (
    <div className="flex w-1/2 items-center p-5">
      <div className="grow">
        <p className="text-6xl font-bold bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">John Doe</p>
        <p>Lorem impsum</p>
        <button></button>
      </div>
      <div className="grow">
        <Image src={heroImg} 
        width={512} 
        height={512} 
        alt="An image of me"
        className="rounded-xl"/>
      </div>
    </div>
  )
}