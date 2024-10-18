import Image, { StaticImageData } from "next/image";
import Link from "next/link";

/**
 * Components
 */
import { PlayIcon } from "./Icon";

export default function LabCard ({ title, description, cover, link } : {title: string, description: string, cover: StaticImageData, link: string}) : React.ReactElement
{
  return (
    <Link href={link} className={"group relative rounded-3xl overflow-hidden aspect-[3/4] max-lg:aspect-[4/3] flex justify-center items-center hover:shadow-xl transition cursor-pointer"}>
        <div className={"absolute z-10 top-0 left-0 w-full p-4 bg-white/60"}>
          <h2 className={"text-xl font-semibold text-blue-500 underline decoration-yellow-400"}>{title}</h2>
          <p className={"mt-2 hidden md:group-hover:inline-block text-black"}>{description}</p>
        </div>
        <div className={"absolute bg-white p-4 rounded-full z-20 group-hover:flex hidden"}>
          <PlayIcon color="fill-blue-500" width={40} height={40} />
        </div>
        <Image
          src={cover}
          alt="GLBB Lab's cover image"
          className="w-full h-full object-cover"
        />
      </Link>
  );
}
