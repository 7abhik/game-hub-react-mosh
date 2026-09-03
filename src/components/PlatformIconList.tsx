import {
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
  FaWindows,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    pc: FaWindows,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    mac: FaApple,
    android: FaAndroid,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500"></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
