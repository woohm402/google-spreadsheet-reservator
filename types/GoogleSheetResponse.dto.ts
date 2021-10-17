export type GoogleSheetResponseDto = {
  reqId: string;
  sig: string;
  status: string;
  version: string;
  table: {
    cols: GoogleSheetCol[];
    parsedNumHeaders: number;
    rows: GoogleSheetRow[];
  };
};

type GoogleSheetCol = {
  id: string;
  label: string;
  type: 'string' | 'boolean' | 'datetime';
};

type GoogleSheetRow = {
  c: ({ v: string | boolean; f?: string } | null)[];
};
