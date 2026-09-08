import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
} from "@chakra-ui/react";
import usePlatform, { Platform } from "../hooks/usePlatform";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

interface Props {
  onSelect: (selectedPlatform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformFilter = ({ onSelect, selectedPlatform }: Props) => {
  const { data } = usePlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelect(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformFilter;
