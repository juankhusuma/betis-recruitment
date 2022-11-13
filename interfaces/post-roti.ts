export interface CreateRotiBody {
  name: string;
  description: string;
  expiring_date: Date;
  image: File;
}

export interface CreateRotiResponse {
  status: string;
  date: {
    id: number;
    name: string;
    expired_date: Date;
    description: string;
    image: string;
    owner: number;
  };
}
