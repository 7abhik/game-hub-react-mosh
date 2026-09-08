import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
const orderingList = [
  { value: "", label: "Relevence" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];
export interface SortList {
  value: string;
  label: string;
}
interface Props {
  onSelectSorting: (list: SortList) => void;
  selectedSort: SortList | null;
}
const SortSelector = ({ onSelectSorting, selectedSort }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSort?.label || "Relevence"}
      </MenuButton>
      <MenuList>
        {orderingList.map((sortList) => (
          <MenuItem
            key={sortList.value}
            onClick={() => onSelectSorting(sortList)}
          >
            {sortList.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
