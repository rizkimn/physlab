import Link from "next/link";
import HeaderLayout, { HeaderBack, HeaderLogo } from "@/app/components/HeaderLayout";


export default function GlbbLayout ({children} : {children: React.ReactNode}) : React.ReactElement
{
  return (
    <>
      <HeaderLayout>
        <HeaderBack href="/lab" />
        <HeaderLogo />
      </HeaderLayout>
      <div className="inline-flex my-6 ml-80 max-lg:ml-10 max-sm:ml-4 border border-blue-400 rounded-2xl">
        <Link className="p-3" href={'/lab/glbb/'}>Simulasi</Link>
        <Link className="p-3" href={'/lab/glbb/grafik'}>Grafik</Link>
      </div>
      {children}
    </>
  )
}
