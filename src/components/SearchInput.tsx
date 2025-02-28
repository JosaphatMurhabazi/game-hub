import { Input } from '@chakra-ui/react';
import { InputGroup } from './ui/input-group';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';

interface Props{
    onSeach:(searchText:string)=>void
}

const SearchInput = ({onSeach}:Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSeach(ref.current.value);
      }}
    >
      <InputGroup
        style={{ width: '100%' }}
        flex={1}
        startElement={<BsSearch />}
      >
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
