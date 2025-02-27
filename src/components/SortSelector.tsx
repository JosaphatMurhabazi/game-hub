import { Button } from '@chakra-ui/react';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="...">Relevance </MenuItem>
        <MenuItem value="...">Date added</MenuItem>
        <MenuItem value="...">Name</MenuItem>
        <MenuItem value="...">Release date</MenuItem>
        <MenuItem value="...">Popularity </MenuItem>
        <MenuItem value="...">Average rating </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
