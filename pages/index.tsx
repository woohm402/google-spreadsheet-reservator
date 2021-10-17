import React, { useMemo } from 'react';

import axios from 'axios';

import MainPage from '../src/components/MainPage/MainPage';
import { TData } from '../src/components/MainPage/MainPage.dto';
import { GoogleSheetResponseDto } from '../types/GoogleSheetResponse.dto';

interface IProps {
  data: string;
}

const Page: React.FC<IProps> = ({ data }) => {
  const parsed = useMemo(() => {
    const prefixRemoved = data.replace(
      '/*O_o*/\ngoogle.visualization.Query.setResponse(',
      '',
    );
    return JSON.parse(
      prefixRemoved.substr(0, prefixRemoved.length - 2),
    ) as GoogleSheetResponseDto;
  }, [data]);

  const dataProp: TData = parsed.table.rows.map((row) => ({
    start: row.c[0]?.v as string,
    end: row.c[1]?.v as string,
    requester: row.c[2]?.v as string | null,
  }));

  return <MainPage data={dataProp} />;
};

export default Page;

export async function getServerSideProps() {
  const key = process.env.SPREADSHEET_KEY;
  const { data } = await axios.get<string>(
    `https://docs.google.com/spreadsheets/d/${key}/gviz/tq?`,
  );

  return {
    props: {
      data,
    },
  };
}
