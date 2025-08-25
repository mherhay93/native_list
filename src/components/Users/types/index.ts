export interface IUsersItemProps {
  img: string;
  name: string;
  phone: string;
  email: string;
}

export interface IUsersItem extends IUsersItemProps {
  id: string;
}
