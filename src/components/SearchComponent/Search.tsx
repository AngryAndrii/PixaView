import { FC, useState } from 'react';
import { changeEvent, changeHandler, submitEvent, submitHandler } from './types';



const SearchComponent: FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleOnChange: changeHandler = (ev: changeEvent) => {
    setQuery(ev.target.value)
  };

  const handleOnSubmit: submitHandler= (
    ev: submitEvent,
  ) => {
    ev.preventDefault();
    setQuery('');
  };

  return (
    <>
      <form
        action=''
        onSubmit={(ev: submitEvent) => {
          handleOnSubmit(ev);
        }}
      >
        <input
          type='text'
          onChange={(ev: changeEvent): void => {
            handleOnChange(ev);
          }}
        />
        <button type='submit'>Search</button>
      </form>
    </>
  );
};

export default SearchComponent;
