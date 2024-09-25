import { FC } from 'react';
import { resData } from '../../axios/types';
import { StyledImageComponent } from './ImageComponent.styled';
import { ImageBlock } from '../ImageBlock/ImageBlock';
import { uid } from 'uid';

interface props {
  data: resData[] | null;
}

const ImageComponent: FC<props> = ({ data }) => {

  return (
    <StyledImageComponent>
      {data?.map(el => {
        return <ImageBlock key={uid()} data={el}/>
      })}
    </StyledImageComponent>
  );
};

export default ImageComponent;