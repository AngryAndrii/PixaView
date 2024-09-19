import { FC } from 'react';
import { resData } from '../../axios/types';
import { Description } from '../DesriptionSection/Description';
import { StyledImageBlock } from './ImageBlock.styled';

interface props {
  data: resData;
}

export const ImageBlock: FC<props> = ({ data }) => {
  return (
    <StyledImageBlock>
      <div className="image-wrapper">
        <img className='img' src={data.largeImageURL} alt={data.tags} />
      </div>
      <Description />
    </StyledImageBlock>
  );
};
