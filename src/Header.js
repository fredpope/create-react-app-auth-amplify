import { Image, useTheme } from "@aws-amplify/ui-react";
import logo from './images/ss_horizontal_450.png';

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      src={logo}
      padding={tokens.space.medium}
    />
  );
}
