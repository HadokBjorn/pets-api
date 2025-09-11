export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: UserEntity) {
    return Object.assign(this, user);
  }
}
