import type { IUser } from '../types/users.ts';

export const defaultUser: IUser = {
  gender: '',
  name: {
    title: '',
    first: '',
    last: '',
  },
  location: {
    street: {
      number: 0,
      name: '',
    },
    city: '',
    state: '',
    country: '',
    postcode: 0,
    coordinates: {
      latitude: '',
      longitude: '',
    },
    timezone: {
      offset: '',
      description: '',
    },
  },
  email: '',
  login: {
    uuid: '',
    username: '',
    password: '',
    salt: '',
    md5: '',
    sha1: '',
    sha256: '',
  },
  dob: {
    date: '',
    age: 0,
  },
  registered: {
    date: '',
    age: 0,
  },
  phone: '',
  cell: '',
  id: {
    name: '',
    value: '',
  },
  picture: {
    large: '../assets/images/user.png',
    medium: '../assets/images/user.png',
    thumbnail: '../assets/images/user.png',
  },
  nat: '',
};
