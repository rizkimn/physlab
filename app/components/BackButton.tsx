import Link from "next/link";
import { TurnBackIcon } from "./Icon";

export default function BackButton({href, label}:{href: string, label: string}) : React.ReactElement
{
  return (
    <Link href={href} className="flex items-center">
      <button className="flex items-center">
        <TurnBackIcon color="stroke-blue-500" width={26} height={26} />
        <span className="ml-2 font-medium">{label}</span>
      </button>
    </Link>
  );
}
