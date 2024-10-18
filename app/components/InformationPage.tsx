export function InformationParagraph({children, paragraphTitle} : {children: React.ReactNode, paragraphTitle: string}) : React.ReactElement
{
  return (
    <div className="my-4">
      <h2 className="text-lg font-medium mb-2 text-blue-500 underline decoration-yellow-300">{paragraphTitle}</h2>
      {children}
    </div>
  );
}

export default function InformationPage({title, children} : {title: string, children: React.ReactNode}) : React.ReactElement
{
  return (
    <div className="bg-white/60 backdrop-blur mt-6 w-[80%] mx-auto px-8 py-4 rounded-3xl shadow-lg">
      <h1 className="text-2xl text-blue-300 underline decoration-yellow-400 text-center font-semibold">{title}</h1>
      {children}
    </div>
  );
}
