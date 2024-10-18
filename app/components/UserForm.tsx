import Link from "next/link";
import { useState } from "react";

export default function UserForm({handleCloseModal} : {handleCloseModal : VoidFunction}): React.ReactElement {

  const [userName, setUserName] = useState<string>("");
  const [userClass, setUserClass] = useState<string>("");

  const handleUserName = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setUserName(value);
    sessionStorage.setItem("user_name", value);
  }

  const handleUserClass = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setUserClass(value);
    sessionStorage.setItem("user_class", value);
  }

  return (
    <section className="fixed bg-black/30 top-0 left-0 w-[100vw] h-[100vh] z-10 flex flex-col items-center pt-48">
      <div className="bg-white p-6 w-96 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-semibold text-lg">Masukkan Identitas</h1>
          <span className="text-2xl opacity-30 hover:opacity-100 cursor-pointer" onClick={handleCloseModal}>&times;</span>
        </div>
        <div>
          <ul className="grid grid-flow-row gap-2">
            <li>
              <input className="w-full border p-2 rounded-lg" type="text" value={userName} placeholder="Nama" onChange={handleUserName} />
            </li>
            <li>
              <input className="w-full border p-2 rounded-lg" type="text" value={userClass} placeholder="Kelas" onChange={handleUserClass} />
            </li>
            <li className="flex justify-end">
              <Link href={'/capaian-pembelajaran'} className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg">Lanjutkan</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
