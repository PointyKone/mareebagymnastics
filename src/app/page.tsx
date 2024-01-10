import SlideData from "~/carousel.json"
import { Carousel } from "./_components/carousel";

export default async function Home() {
  return (
    <div>
      <header className="h-[30vh] w-full flex justify-between">
        <div className="flex-1 ml-20 flex flex-col text-center justify-center">
          <a className="text-white px-6 mx-auto my-2 py-2 rounded-3xl border-none bg-[#09aeae] cursor-pointer transition-all hover:scale-105  ">Learn More About The Club</a>
          <a className="text-white px-6 mx-auto my-2 py-2 rounded-3xl border-none bg-[#09aeae] cursor-pointer transition-all hover:scale-105  ">View Our Range Of Classes</a>
        </div>
        <div className="flex-1 flex justify-center align-middle">
          <img src="/logo/transparent-black.png" alt="" className="h-full" />
        </div>
        <div className="flex-1 mr-20 flex flex-col justify-centre">
          <a className="flex-1 m-auto py-2 h-1/2" href="https://www.facebook.com/mareebagymnasticsclub"><img className="h-full" src="/logo/find-facebook.png" alt="" /></a>
          <a className="flex-1 m-auto py-2 h-1/2" href="https://www.facebook.com/mareebagymnasticsclub"><img className="h-full mx-auto" src="/logo/qld-gym.svg" alt="" /></a>
        </div>
      </header>

      <Carousel slides={SlideData.slides} />
    </div>
  );
}