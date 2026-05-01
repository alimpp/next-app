export interface TUsersParamsRequest {
  per_page: number;
  page: number;
  search: string;
}

export interface TUsersData {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  role: string;
}
