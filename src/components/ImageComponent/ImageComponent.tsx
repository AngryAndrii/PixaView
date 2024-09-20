import { FC } from 'react';
import { resData } from '../../axios/types';
import { StyledImageComponent } from './ImageComponent.styled';
import { ImageBlock } from '../ImageBlock/ImageBlock';

interface props {
  data: resData[] | null;
}

const ImageComponent: FC<props> = ({ data }) => {

  return (
    <StyledImageComponent>
      {data?.map((el, i) => {
        if (i + 1 === data.length) {
          return <ImageBlock data={el}/>;
        }
        return <ImageBlock data={el} />;
      })}
    </StyledImageComponent>
  );
};

export default ImageComponent;
