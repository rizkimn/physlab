export default function LabList ({children} : {children : React.ReactNode}) : React.ReactElement
{
  return (
    <div className={"grid lg:grid-cols-2 gap-4 px-96 mt-6 max-xl:px-24 max-lg:px-16 max-md:10"}>
      {children}
    </div>
  );
}
