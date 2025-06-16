import { ApiResponse, ApiError } from './types';

// const BASE_URL = 'http://10.0.2.2:8080';
const BASE_URL = 'https://authcode-api-77008956635.us-central1.run.app';

const handleResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || `Erro na requisição: ${response.status}`;
    console.error('Erro na API:', errorMessage);
    throw {
      message: errorMessage,
      status: response.status,
    } as ApiError;
  }

  const responseData = await response.json();
  return {
    message: responseData.message,
    data: responseData.data,
    status: response.status,
  };
};

export const request = async <T>(
  endpoint: string,
  method: string,
  body: unknown,
): Promise<ApiResponse<T>> => {
  try {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return handleResponse<T>(response);
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
};

export const post = <T>(endpoint: string, data: unknown) =>
request<T>(endpoint, "POST", data);

export const patch = <T>(endpoint: string, data: unknown) =>
  request<T>(endpoint, "PATCH", data);
