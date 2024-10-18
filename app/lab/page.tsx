import { ReactElement } from "react";;

/**
 * Components
 */
import LabList from "../components/LabList";
import LabCard from "../components/LabCard";

/**
 * Assets
 */
import glb_cover from "@assets/img/glb_lab_image.jpg";
import glbb_cover from "@assets/img/glbb_lab_image.jpg";
import HeaderLayout, { HeaderBack, HeaderLogo, HeaderNext } from "../components/HeaderLayout";

export default function LabPage () : ReactElement
{
  return (
    <div className="min-h-[100vh] bg-[url('/assets/img/bg.png')] bg-cover">
      <HeaderLayout>
        <HeaderBack href="/petunjuk-penggunaan" label="Petunjuk Penggunaan" />
        <HeaderLogo />
        <HeaderNext href="/profil-pengembang" label="Profil Pengembang" />
      </HeaderLayout>
      <LabList>
        <LabCard
          link="/lab/glb"
          title="Lab GLB"
          description="Gerak lurus beraturan atau GLB adalah gerak suatu benda pada lintasan lurus dengan kelajuan atau kecepatan tetap"
          cover={glb_cover}
        />
        <LabCard
          link="/lab/glbb"
          title="Lab GLBB"
          description="Gerak Lurus Berubah Beraturan (GLBB) adalah salah satu gerak dalam fisika yang lintasannya berupa garis lurus yang kecepatannya berubah secara konstan terhadap waktu sehingga menimbulkan adanya perubahan kecepatan (percepatan atau perlambatan) yang tetap."
          cover={glbb_cover}
        />
      </LabList>
    </div>
  );
}
