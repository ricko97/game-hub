import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {}

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>aa</MenuItem>
        <MenuItem>aa</MenuItem>
        <MenuItem>aa</MenuItem>
        <MenuItem>aa</MenuItem>
        <MenuItem>aa</MenuItem>
        <MenuItem>aa</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
