import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 1;
  position: relative;
  background-color: #fff;
  margin-top: -8rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
`;

export const STabs = styled(Tabs)`
  -webkit-tap-highlight-color: transparent;
  flex: 1;
  padding: 1rem;
`;

export const STabList = styled(TabList)`
  display: flex;
  justify-content: space-evenly;
  margin: 0 0 10px;
  padding: 0;
  color: #20B25D;
  margin-bottom: 3rem;
`;

export const STab = styled(Tab)`
  display: inline-block;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
  font-weight: 600;
  opacity: 50%;

  &.is-selected {
    border-color: #aaa;
    opacity: 100%;
  }

  &:focus {
    box-shadow: 0 0 5px hsl(208, 99%, 50%);
    border-color: hsl(208, 99%, 50%);
    outline: none;
  }
`;

export const STabPanel = styled(TabPanel)`
  display: none;

  &.is-selected {
    display: block;
  }
`;

export const Circle = styled.div`
    width: 50px;
    height: 50px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
`;