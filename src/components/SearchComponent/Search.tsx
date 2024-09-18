import { FC, useState } from 'react';
import {
  changeEvent,
  changeHandler,
  submitEvent,
  submitHandler,
} from './types';

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
    <>
      <form
        action=""
        onSubmit={(ev: submitEvent) => {
          handleOnSubmit(ev);
        }}
      >
        <input
          type="text"
          onChange={(ev: changeEvent): void => {
            handleOnChange(ev);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchComponent;
