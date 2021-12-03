import styled from 'styled-components';

const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(
    auto-fill,
    minmax(320px, 1fr)
  );
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 30px 60px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

const Item = styled.li`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px
      rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms
      cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms
      cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0
      10px 5px;
  }
`;
export { GalleryList, Item };
