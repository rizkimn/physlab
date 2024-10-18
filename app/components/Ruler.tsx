export default function Ruler ({min = -10, max = 10} : {min?: number, max?: number}) : React.ReactElement
{
  const range = max - min;

  return (
    <div className="flex justify-center">
      <div className="flex items-end w-full h-12 bg-[#ffffff60] relative">
        {[...Array(range + 1)].map((_, i) => {
          const value = min + i;

          return (
            <div key={i} className="flex-1 flex justify-center relative">
              {value % 1 === 0 && (
                <div className={value % 5 === 0 ? 'h-8 w-1 bg-black relative' : 'h-5 w-px bg-black'}>
                  <span className={value % 5 === 0 ? "absolute bottom-0 right-[8px] text-xs max-lg:top-0" : "absolute bottom-0 left-[8px] text-xs max-lg:hidden"}>{value}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
