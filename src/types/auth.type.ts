export type UserProfile = {
  id: number;
  name: string;
  email: string;
  nip: string;
  nik: string;
  jabatan: string;
  img: string;
  saldo: number;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  token: string;
  version: string;
  profile: UserProfile;
};
