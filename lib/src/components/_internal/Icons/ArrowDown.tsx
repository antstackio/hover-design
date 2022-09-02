export const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1={12} y1={5} x2={12} y2={19}></line>
      <line x1={18} y1={13} x2={12} y2={19}></line>
      <line x1={6} y1={13} x2={12} y2={19}></line>
    </svg>
  );
};
