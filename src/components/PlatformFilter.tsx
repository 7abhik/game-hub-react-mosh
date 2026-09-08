import { Select, Stack } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelect: (selectedPlatformId: number) => void;
}

const PlatformFilter = ({ onSelect }: Props) => {
  const { data } = usePlatform();
  return (
    <Stack paddingLeft="10px" spacing={3} width="315px">
      <Select
        placeholder="Select Platform"
        size="lg"
        onChange={(event) => {
          onSelect(parseInt(event.target.value));
        }}
      >
        {data.map((platform) => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))}
      </Select>
    </Stack>
  );
};

export default PlatformFilter;
