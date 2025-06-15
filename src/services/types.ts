export interface ApiResponse<T = any> {
  message: string;
  data?: T;
  status?: number;
}

export interface ApiError {
  message: string;
  status: number;
}

export interface SendCodeBody {
  email: string;
}

export interface VerifyCodeBody {
  email: string;
  code: string;
}