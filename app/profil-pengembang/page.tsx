import Image from "next/image";
import HeaderLayout, { HeaderBack, HeaderLogo, HeaderNext } from "../components/HeaderLayout";
import InformationPage, { InformationParagraph } from "../components/InformationPage";

import developer1Pic from "@assets/img/developer1.jpg";
import developer2Pic from "@assets/img/developer2.jpg";

export default function ProfilPengembangPage() : React.ReactElement
{
  return (
    <div className="min-h-[100vh] bg-[url('/assets/img/bg.png')] bg-cover">
      <HeaderLayout>
        <HeaderBack href="/lab" label="Lab" />
        <HeaderLogo />
        <HeaderNext href="/" label="Selesai" />
      </HeaderLayout>
      <InformationPage title="Profil Pengembang">
        <InformationParagraph paragraphTitle="">
          <ul className="flex justify-center items-start">
            <li className="flex">
              <div className="mx-4 flex flex-col">
                <div className="w-80 aspect-[3/4] overflow-hidden mb-2 rounded-xl bg-black">
                  <Image
                    src={developer1Pic}
                    alt="Developer 1's profile"
                    width={333}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">Nurhasanah, S.Pd.</h2>
                </div>
              </div>
              <div className="mx-4 flex flex-col">
                <div className="w-80 aspect-[3/4] overflow-hidden mb-2 rounded-xl bg-black">
                  <Image
                    src={developer2Pic}
                    alt="Developer 2's profile"
                    width={333}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xl">Prof. Dr. Insih Wilujeng, M.Pd.</h2>
                </div>
              </div>
            </li>
          </ul>
        </InformationParagraph>
      </InformationPage>
    </div>
  );
}
