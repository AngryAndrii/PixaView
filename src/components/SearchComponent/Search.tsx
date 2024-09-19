import { FC, useState } from 'react';
import {
  changeEvent,
  changeHandler,
  submitEvent,
  submitHandler,
} from './types';
import { StyledSearchBar } from './Search.styled';

type Props = {
  getData: (query: string) => void;
  emptyQuery: () => void;
};

const SearchComponent: FC<Props> = ({ getData, emptyQuery }) => {
  const [query, setQuery] = useState<string>('');

  const handleOnChange: changeHandler = (ev: changeEvent) => {
    setQuery(ev.target.value);
  };

  const handleOnSubmit: submitHandler = (ev: submitEvent) => {
    ev.preventDefault();
    if (query === '') {
      emptyQuery();
    } else {
      getData(query);
      setQuery('');
    }
  };

  return (
    <StyledSearchBar>
      <form
        className="form"
        action=""
        onSubmit={(ev: submitEvent): void => {
          handleOnSubmit(ev);
        }}
      >
        <div className="input-section">
          <input
            className="input"
            type="text"
            value={query}
            onChange={(ev: changeEvent): void => {
              handleOnChange(ev);
            }}
          />
          <button className="button" type="submit">
            Search
          </button>
        </div>
      </form>
    </StyledSearchBar>
  );
};

export default SearchComponent;
