import { Icon } from "src/components/Icon";
import { IIconProps } from "src/components/Icon/icon.type";

const CheckIcon: React.FC<IIconProps> = (props) => {
  return (
    <Icon
      width="24"
      height="24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 12 10"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="none"
        d="M11.915 1.548 10.367 0 4.045 6.315 1.557 3.827 0 5.373l4.045 4.046 7.87-7.871Z"
      ></path>
    </Icon>
  );
};

export { CheckIcon };
