import styled from 'styled-components';

export const StyledImageBlock = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 300px;
  border-radius: 10px;
  background-color: var(--color-light);
  overflow: hidden;

  .image-wrapper {
    width: 100%;
    height: 200px;
  }

  .img {
    object-fit: contain;
    width: 100%;
  }
`;
