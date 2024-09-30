import { FC, MutableRefObject } from 'react';
import {
  changeEvent,
  changeHandler,
  submitEvent,
  submitHandler,
} from './types';
import { StyledSearchBar } from './Search.styled';

type Props = {
  getData?: (query: string) => void;
  emptyQuery?: () => void;
  changeQuery: (q: string) => void;
  checkAndGet: () => void;
  query: string;
};

const SearchComponent: FC<Props> = ({query, changeQuery, checkAndGet }) => {
  

  const handleOnChange: changeHandler = (ev: changeEvent) => {
    changeQuery(ev.target.value.trim());
  };

  const handleOnSubmit: submitHandler = (ev: submitEvent) => {
    ev.preventDefault();
    checkAndGet();
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
