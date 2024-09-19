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
      {/* {data?.map(el => {
        return <img src={el.previewURL} alt={el.tags} />;
      })} */}
      {data?.map(el => {
        return <ImageBlock data={el} />;
      })}
    </StyledImageComponent>
  );
};

export default ImageComponent;
