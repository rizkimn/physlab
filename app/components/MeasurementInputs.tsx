export default function MeasurementInputs({children, elClass = ''} : {children: React.ReactNode, elClass?: string}) : React.ReactElement
{
  return (
    <div className={`grid grid-cols-3 gap-4 ${elClass} max-lg:grid-cols-2`}>
      {children}
    </div>
  );
}
