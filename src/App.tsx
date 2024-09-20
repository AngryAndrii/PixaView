import { FC, useEffect, useState } from 'react';
import SearchComponent from './components/SearchComponent/Search';
import ImageComponent from './components/ImageComponent/ImageComponent';
import { Layout } from './components/Layout/Layout';
import { resData } from './axios/types';
import fetchImage from './axios/fetch';

const App: FC = () => {
  const [images, setImages] = useState<resData[]>([]);
  const [emptySearch, setEmptySearch] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const getData = async (query: string) => {
    const data: resData[] | null = await fetchImage(query, page);
    if (data !== null && data?.length == 0) {
      console.log('data null')
      setNotFound(true)
    }
    setImages(data !== null ? data : []);
  };

  const emptyQuery = (): void => {
    setEmptySearch(prevstate => !prevstate);
  };

  const setNewPage = () => {
    setPage(prev => prev += 1)
  }

  useEffect(() => {
    getData()
  }, [page]);

  return (
    <Layout>
      <SearchComponent getData={getData} emptyQuery={emptyQuery} />
      {notFound ? <>no found, please type valid search</> : <ImageComponent data={images} />}
      {emptySearch ? <>no data</> : <ImageComponent data={images} />}
      <button className='load-more-button' onClick={() => {
        setNewPage();
      }}>Next page</button>
    </Layout>
  );
};

export default App;
