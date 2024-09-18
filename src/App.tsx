import { FC, useState } from 'react';
import SearchComponent from './components/SearchComponent/Search';
import ImageComponent from './components/ImageComponent/ImageComponent';
import { Layout } from './components/Layout/Layout';
import { resData } from './axios/types';
import fetchImage from './axios/fetch';

const App: FC = () => {
  const [images, setImages] = useState<resData[]>([]);

  const getData = async (query: string) => {
    const data: resData[] | null = await fetchImage(query, 1);
    setImages(data !== null ? data : []);
  };

  return (
    <Layout>
      <SearchComponent getData={getData} />
      <ImageComponent data={images} />
    </Layout>
  );
};

export default App;
