export default function Header ({children} : {children: React.ReactNode})
{
  return (
    <nav className={"py-2 px-4 grid grid-cols-3"}>
      {children}
    </nav>
  );
}
