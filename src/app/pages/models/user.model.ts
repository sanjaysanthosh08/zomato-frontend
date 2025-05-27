// auth.models.ts

export interface LoginDTO {
  username: string;
  password: string;
}

export interface SignupDTO {
  username: string;
  email: string;
  password: string;
}



export interface JwtResponse {
  token: string;
}
