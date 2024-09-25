import { FC, useEffect, useState } from 'react';
import SearchComponent from './components/SearchComponent/Search';
import ImageComponent from './components/ImageComponent/ImageComponent';
import { Layout } from './components/Layout/Layout';
import { resData } from './axios/types';
import fetchImage from './axios/fetch';
import { StyledApp } from './App.styled';

const App: FC = () => {
  const [images, setImages] = useState<resData[]>([]);
  const [emptySearch, setEmptySearch] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const getData = async (query: string) => {
    const data: resData[] | null = await fetchImage(query, page);
    if (data !== null && data?.length == 0) {
      console.log('data null');
      setNotFound(true);
    }
    setImages(prevImages =>
      data !== null ? [...prevImages, ...data] : prevImages
    );
  };

  const emptyQuery = (): void => {
    setEmptySearch(prevstate => !prevstate);
  };
  const setNewPage = () => {
    setPage(prev => (prev += 1));
  };

  const changeQuery = (q: string) => {
    setQuery(q);
  };

  const checkAndGet = () => {
    if (query === '') {
      emptyQuery();
    } else {
      getData(query);
      // changeQuery('');
    }
  };

  useEffect(() => {
    checkAndGet();
  }, [page]);

  return (
    <Layout>
      <StyledApp>
    <SearchComponent
          query={query}
          getData={getData}
          changeQuery={changeQuery}
          checkAndGet={checkAndGet}
          emptyQuery={emptyQuery}
        />
        {notFound ? (
          <>no found, please type valid search</>
        ) : emptySearch ? (
          <>no data</>
        ) : (
          <ImageComponent data={images} />
        )}
        <button
          className="load-more-button"
          onClick={() => {
            setNewPage();
          }}
        >
          Next page
        </button>
      </StyledApp>
    </Layout>
  );
};

export default App;
