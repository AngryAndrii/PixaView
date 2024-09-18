import { FC, useState } from 'react';
import { changeEvent, changeHandler, submitEvent, submitHandler } from './types';
import { StyledSearchBar } from './Search.styled';

type Props = {
  getData: (query: string) => void;
};

const SearchComponent: FC<Props> = ({ getData }) => {
  const [query, setQuery] = useState<string>('');

  const handleOnChange: changeHandler = (ev: changeEvent) => {
    setQuery(ev.target.value);
  };

  const handleOnSubmit: submitHandler = (ev: submitEvent) => {
    ev.preventDefault();
    getData(query);
    setQuery('');
  };

  return (
    <StyledSearchBar>
      <form
        className='form'
        action=''
        onSubmit={(ev: submitEvent) => {
          handleOnSubmit(ev);
        }}
      >
        <div className='input-section'>
          <input
            className='input'
            type='text'
            onChange={(ev: changeEvent): void => {
              handleOnChange(ev);
            }}
          />
          <button className='button' type='submit'>
            Search
          </button>
        </div>
      </form>
    </StyledSearchBar>
  );
};

export default SearchComponent;
