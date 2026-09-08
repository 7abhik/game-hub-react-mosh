import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./InputSearch";

interface Props {
  onKeySearch: (searchValue: string) => void;
}

const NavBar = ({ onKeySearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput
        onKeySearch={(value) => {
          onKeySearch(value);
        }}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
