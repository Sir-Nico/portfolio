import Image from "next/image";
import heroImg from "../assets/bking.jpg";
import { Icon } from "@iconify/react";

export const About = () => {
  return (
    <div className="flex flex-col w-4/5 bg-blue-950 p-5 m-10 rounded-xl">
      <div>
        <p className="text-4xl font-bold p-4">About me</p>
      </div>
      <div className="flex items-center">
        <div className="">
          <Image
            src={heroImg}
            width={300}
            height={300}
            alt="An image of me"
            className="rounded-full m-5"
          />
        </div>
        <div className="px-3">
          <div className="flex m-3">
            <div>
              <Icon icon={"tabler:pointer"} className="size-15" />
            </div>
            <div className="flex-col m-2">
              <div className="font-bold text-xl">Frontend Development</div>
              <div>In the beginning God created the heavens and the earth.</div>
            </div>
          </div>
          <div className="flex m-3">
            <div>
              <Icon icon={"tabler:database"} className="size-15" />
            </div>
            <div className="flex-col m-2">
              <div className="font-bold text-xl">Backend Development</div>
              <div>
                Now the earth was formless and empty, darkness was over the
                surface of the deep, and the Spirit of God was hovering over the
                waters.
              </div>
            </div>
          </div>
          <div className="flex m-3">
            <div>
              <Icon icon={"tabler:directions"} className="size-15" />
            </div>
            <div className="flex-col m-2">
              <div className="font-bold text-xl">Fullstack Development</div>
              <div>
                And God said, “Let there be light,” and there was light.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
