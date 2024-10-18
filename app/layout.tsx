import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virtual Laboratory: Kinematika Gerak Lurus",
  description: "Generated by create next app",
};

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // const checkIfUserDefault = () : boolean => {
  //   return sessionStorage.getItem('user_name')  === "Pengguna" &&
  //          sessionStorage.getItem('user_class') === "0";
  // }

  // const openModalIfDefault = () => {
  //   setIsModalOpen(!checkIfUserDefault())
  // }

  // useEffect(() => {
  //   //openModalIfDefault();
  // }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
