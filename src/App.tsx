import { FC, useEffect } from 'react';
import { FetchData } from './axios/fetch';
import SearchComponent from './components/SearchComponent/Search';
import ImageComponent from './components/ImageComponent/ImageComponent';
import { Layout } from './components/Layout/Layout';

const App: FC = () => {
  useEffect(() => {
    FetchData();
  });
  return (
    <Layout>
      <SearchComponent />
      <ImageComponent />
    </Layout>
  );
};

export default App;
