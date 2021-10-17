import React from 'react';

import { TData } from './MainPage.dto';

interface IProps {
  data: TData;
}

const MainPage: React.FC<IProps> = ({ data }) => {
  console.log(data);
  return <h1>asdf</h1>;
};

export default MainPage;
