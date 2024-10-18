import Link from "next/link";
import { ContinueIcon } from "./Icon";

export default function NextButton({href, label}:{href: string, label: string}) : React.ReactElement
{
  return (
    <Link href={href} className="flex items-center justify-end">
      <button className="flex items-center">
        <span className="mr-2 font-medium">{label}</span>
        <ContinueIcon color="stroke-blue-500" width={26} height={26} />
      </button>
    </Link>
  );
}
