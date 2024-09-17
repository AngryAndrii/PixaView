import { FC, useState } from 'react';

const SearchComponent: FC = () => {
  const [query, setQuery] = useState('');

  const search = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    console.log(input);
  };

  return (
    <>
      <form
        action=""
        onSubmit={ev => {
          search(ev);
        }}
      >
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchComponent;
