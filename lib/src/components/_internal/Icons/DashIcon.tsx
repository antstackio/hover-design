import { Icon } from "src/components/Icon/Icon";
import { IIconProps } from "src/components/Icon/icon.type";

const DashIcon: React.FC<IIconProps> = (props) => {
  return (
    <Icon viewBox="0 0 32 6" {...props}>
      <rect width="32" height="6" fill="currentColor" rx="3" />
    </Icon>
  );
};

export { DashIcon };
