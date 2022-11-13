export interface GetRoti {
  data: GetRotiData;
}

export interface GetRotiData {
  status: number;
  message: string;
  username: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  expired_date: Date;
  description: string;
  image: string;
  owner: number;
}
