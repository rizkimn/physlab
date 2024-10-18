import HeaderLayout, { HeaderBack, HeaderLogo, HeaderNext } from "../components/HeaderLayout";
import { ContinueIcon, TurnBackIcon } from "../components/Icon";
import InformationPage, { InformationParagraph } from "../components/InformationPage";

export default function PetunjukPenggunaanPage() : React.ReactElement
{
  return (
    <div className="min-h-[100vh] bg-[url('/assets/img/bg.png')] bg-cover">
      <HeaderLayout>
        <HeaderBack href="/capaian-pembelajaran" label="Capaian Pembelajaran" />
        <HeaderLogo />
        <HeaderNext href="/lab" label="Lab" />
      </HeaderLayout>
      <InformationPage title="Petunjuk Penggunaan Aplikasi">
        <InformationParagraph paragraphTitle="Fungsi Tombol">
          <ul>
            <li className="flex">
              <span className="flex items-start mr-2">
                <TurnBackIcon color="stroke-blue-500" width={25} height={25} /> /
                <ContinueIcon color="stroke-blue-500" width={25} height={25} />
              </span>
              <p>
                Tombol Navigasi: Gunakan tombol ini untuk berpindah ke halaman lain.
              </p>
            </li>
          </ul>
        </InformationParagraph>
      </InformationPage>
    </div>
  );
}
