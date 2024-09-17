import { FC, useEffect, useState } from 'react';
import fetchImeage from './axios/fetch';
import SearchComponent from './components/SearchComponent/Search';
import ImageComponent from './components/ImageComponent/ImageComponent';
import { Layout } from './components/Layout/Layout';
import { resData } from './axios/types';

const App: FC = () => {
  const [isError, setIsError] = useState(false);
  const [images, setImages] = useState<null | resData[]>(null);
  // const [query, setQuery] = useState('');

  // useEffect((): void => {
  //   const lol = async () => {
  //     const resp = await fetchImeage('flowers', 1);
  //     if (resp === null) {
  //       setIsError(true);
  //       return;
  //     }
  //     console.log(resp);
  //     setImages(resp);
  //   };
  //   lol();
  // }, []);

  // if (isError === true) {
  //   return <>error</>;
  // }
  return (
    <Layout>
      <SearchComponent />
      <ImageComponent data={images} />
    </Layout>
  );
};

export default App;
