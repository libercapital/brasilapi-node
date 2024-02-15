import axios, { AxiosRequestConfig } from 'axios';

export const APIBrasil = axios.create({
  baseURL: 'https://brasilapi.com.br/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Bank {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

export const fetchBankList = (config: AxiosRequestConfig = {})  => APIBrasil.get<Bank[]>('/banks/v1', config);
export const fetchBank = (code: number, config: AxiosRequestConfig = {}) => APIBrasil.get<Bank>(`/banks/v1/${code}`, config);

export interface CEP {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  service: string
}

export interface CEPWithLocation {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  service: string
  location: Location
}

export interface Location {
  type: string
  coordinates: Coordinates
}

export interface Coordinates {
  longitude: string
  latitude: string
}

/**
 * @param cep string number only
 */
export const fetchCEP = (cep: string, config: AxiosRequestConfig = {}) => APIBrasil.get<CEP>(`/cep/v1/${cep}`, config);

/**
 * @param cep string number only
 */
export const fetchCEPV2 = (cep: string, config: AxiosRequestConfig = {}) => APIBrasil.get<CEPWithLocation>(`/cep/v2/${cep}`, config);

