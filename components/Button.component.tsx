import { x } from "@xstyled/styled-components";

export const Button: React.FC = (props) => {
  return <x.button bg="blue-500" display="flex" {...props} />;
};
