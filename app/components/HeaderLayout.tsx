import Image, { StaticImageData } from "next/image";

import Header from "../components/Header";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

import logoPic from "@assets/img/logo.png";

export function HeaderBack ({href = "/", label = "Kembali"} : {href?: string, label?: string}) : React.ReactElement
{
  return (
    <div className="flex justify-start">
      <BackButton href={href} label={label} />
    </div>
  );
}

export function HeaderNext ({href = "/", label = "Selanjutnya"} : {href?: string, label?: string}) : React.ReactElement
{
  return (
    <div className="flex justify-end">
      <NextButton href={href} label={label} />
    </div>
  );
}

export function UserProfile ({userName = "Nama", userClass = "Kelas"} : {userName?: string, userClass?: string}) : React.ReactElement
{
  return (
    <div className="flex justify-end">
      <span>Hi, {userName} | {userClass}</span>
    </div>
  );
}

export function HeaderLogo ({src = logoPic, alt = "Logo", height = 46} : {src? : StaticImageData, alt? : string, height? : number}) : React.ReactElement
{
  return (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={alt}
        height={height}
      />
    </div>
  );
}

export default function HeaderLayout({children} : {children : React.ReactNode}) : React.ReactElement
{
  return (
    <Header>
      {children}
    </Header>
  );
}
