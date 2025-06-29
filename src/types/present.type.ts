export interface PresentApiResponse {
  success: boolean;
  message: string;
  data: {
    tanggal: string;
    name: string;
    nip: string;
    data: PaginatedData;
  };
}

export interface PaginatedData {
  current_page: number;
  data: PresensiRecord[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface PresensiRecord {
  id: number;
  nip: string;
  tanggal: string;
  brand: string;
  deviceid: string;
  model: string;
  uniqueId: string;
  latitude: string;
  longitude: string;
  fake: string; // you might want to make this `boolean` if API returns actual booleans
  waktu: string;
  dist: number;
  lokasi: string;
  image: string;
  status: number;
  valid: number;
  id_lama: number;
  created_at: string;
  updated_at: string;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}
