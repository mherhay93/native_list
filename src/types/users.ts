import type { IRequest } from './axios.ts';

export interface IName {
  last: string;
  title: string;
  first: string;
}

export interface IStreet {
  name: string;
  number: number;
}

export interface ICoordinates {
  latitude: string;
  longitude: string;
}

export interface ITimezone {
  offset: string;
  description: string;
}

export interface ILocation {
  city: string;
  state: string;
  country: string;
  street: IStreet;
  timezone: ITimezone;
  postcode: string | number;
  coordinates: ICoordinates;
}

export interface ILogin {
  md5: string;
  sha1: string;
  uuid: string;
  salt: string;
  sha256: string;
  username: string;
  password: string;
}

export interface IDob {
  age: number;
  date: string;
}

export interface IRegistered {
  age: number;
  date: string;
}

export interface IID {
  name: string;
  value: string;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUser {
  id: IID;
  dob: IDob;
  name: IName;
  nat: string;
  cell: string;
  email: string;
  login: ILogin;
  phone: string;
  gender: string;
  picture: IPicture;
  location: ILocation;
  registered: IRegistered;
}

export interface IQueryUsers<B, P> extends Partial<IRequest<B, P>> {
  results?: number;
}
