import HeaderLayout, { HeaderBack, HeaderLogo, HeaderNext } from "../components/HeaderLayout";
import InformationPage, { InformationParagraph } from "../components/InformationPage";

export default function CapaianPembelajaranPage() : React.ReactElement
{
  return (
    <div className="min-h-[100vh] bg-[url('/assets/img/bg.png')] bg-cover">
      <HeaderLayout>
        <HeaderBack href="/" label="Cover" />
        <HeaderLogo />
        <HeaderNext href="/petunjuk-penggunaan" label="Petunjuk Penggunaan" />
      </HeaderLayout>
      <InformationPage title="Capaian Pembelajaran">
        <InformationParagraph paragraphTitle="Capaian Pembelajaran">
          <p>Peserta didik mampu menerapkan konsep dan prinsip vektor kedalam kinematika dan dinamika gerak.</p>
        </InformationParagraph>
        <InformationParagraph paragraphTitle="Alur Tujuan Pembelajaran">
          <p>Menganalisis besaran fisis pada gerak lurus dengan kecepatan tetap dan percepatan tetap, serta mengkomunikasikan data gerakdalam bentuk tabel atau grafik</p>
        </InformationParagraph>
        <InformationParagraph paragraphTitle="Tujuan Pembelajaran">
          <ol className="list-decimal list-inside">
            <li>Peserta didik dapat mengidentifikasi besaran-besaran fisis pada GLB & GLBB</li>
            <li>Peserta didik dapat memahami konsep pada GLB & GLBB</li>
            <li>Peserta didik dapat mengolah data dan grafik hasil percobaan GLB & GLBB</li>
            <li>Peserta didik dapat menyajikan data dan grafik hasil percobaan GLB & GLBB dengan tepat dan sistematis</li>
            <li>Peserta didik dapat mempresentasikan hasil percobaan terkait GLB & GLBB pada V-lab Kinematika Gerak Lurus</li>
          </ol>
        </InformationParagraph>
      </InformationPage>
    </div>
  );
}
