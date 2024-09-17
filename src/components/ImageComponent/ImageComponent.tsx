import { FC } from 'react';
import { resData } from '../../axios/types';

interface props {
  data: resData[] | null;
}

const ImageComponent: FC<props> = ({ data }) => {
  return (
    <>
      {data?.map((el) => {
        return <img src={el.previewURL} alt={el.tags} />;
      })}
    </>
  );
};

export default ImageComponent;
