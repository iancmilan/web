import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: auto;
  height: 4rem;
  overflow-x: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
      display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

export const Tab = styled.a`
  margin-top: 1rem;
  font-size: 20px;
  margin-left: 1rem;
  margin-right: 1rem;

  & + & {
    margin-left: 1.5rem;
  }
`;