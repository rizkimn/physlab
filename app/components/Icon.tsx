export function PlayIcon ({ color = "fill-neutral-500", width, height } : { color?: string, width: number, height: number }) : React.ReactElement
{
  return (
    <span className={"flex"}>
      <svg width={`${width}`} height={`${height}`} viewBox="-4 -3 24 24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
        <path className={`${color}`} d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.03 1.03 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.9 2.9 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088-.246.386-.58.712-.975.952"/>
      </svg>
    </span>
  );
}

export function TurnBackIcon ({ color = "fill-neutral-500", width, height } : { color?: string, width: number, height: number }) : React.ReactElement
{
  return (
    <span className={"flex"}>
      <svg width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`${color}`} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={`${color}`} d="M9 15.38h4.92c1.7 0 3.08-1.38 3.08-3.08s-1.38-3.08-3.08-3.08H7.15" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={`${color}`} d="M8.57 10.77 7 9.19l1.57-1.57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export function ContinueIcon ({ color = "fill-neutral-500", width, height } : { color?: string, width: number, height: number }) : React.ReactElement
{
  return (
    <span className={"flex rotate-180"}>
      <svg width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`${color}`} d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={`${color}`} d="M9 15.38h4.92c1.7 0 3.08-1.38 3.08-3.08s-1.38-3.08-3.08-3.08H7.15" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path className={`${color}`} d="M8.57 10.77 7 9.19l1.57-1.57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export function ResetIcon ({ color = "fill-neutral-500", width, height } : { color?: string, width: number, height: number }) : React.ReactElement
{
  return (
    <span className={"flex"}>
      <svg width={`${width}`} height={`${height}`} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={`${color}`} d="m4.562 13.5-.42.43.43.419.42-.43zm5.362 2.424 6-6-.848-.848-6 6zm-.848-6 6 6 .848-.848-6-6zM19.9 12.5a7.4 7.4 0 0 1-7.4 7.4v1.2a8.6 8.6 0 0 0 8.6-8.6zm-14.8 0a7.4 7.4 0 0 1 7.4-7.4V3.9a8.6 8.6 0 0 0-8.6 8.6zm7.4-7.4a7.4 7.4 0 0 1 7.4 7.4h1.2a8.6 8.6 0 0 0-8.6-8.6zm-7.343 8.326A8 8 0 0 1 5.1 12.5H3.9q0 .546.067 1.074zM12.5 19.9a7.39 7.39 0 0 1-6.12-3.238l-.991.676A8.59 8.59 0 0 0 12.5 21.1zm-7.509-5.981 2.439-2.5-.86-.838-2.438 2.5zm-.01-.848-2.562-2.5-.838.858 2.562 2.5z" />
      </svg>
    </span>
  );
}
