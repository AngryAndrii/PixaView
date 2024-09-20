import { createRef, FC, RefObject, useEffect, useRef } from 'react';
import { resData } from '../../axios/types';
import { StyledImageComponent } from './ImageComponent.styled';
import { ImageBlock } from '../ImageBlock/ImageBlock';

interface props {
  data: resData[] | null;
}

const ImageComponent: FC<props> = ({ data }) => {
  const lastItem: RefObject<HTMLDivElement> = createRef();

  const actionInSight = (entries) => {
    if (entries[0].isIntersecting && posts.page <= totalPages) {
      getNewPosts();
    }
  };

  //константа для хранения идентификатора наблюдателя
  const observerLoader = useRef();

  //действия при изменении последнего элемента списка
  useEffect(() => {
    //удаляем старый объект наблюдателя
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }

    //создаём новый объект наблюдателя
    observerLoader.current = new IntersectionObserver(actionInSight);

    //вешаем наблюдателя на новый последний элемент
    if (lastItem.current) {
      observerLoader.current.observe(lastItem.current);
    }
  }, [lastItem]);

  return (
    <StyledImageComponent>
      {data?.map((el, i) => {
        if (i + 1 === data.length) {
          return <ImageBlock data={el} ref={lastItem} />;
        }
        return <ImageBlock data={el} />;
      })}
    </StyledImageComponent>
  );
};

export default ImageComponent;
