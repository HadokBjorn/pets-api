import { CreateUserDto } from "../dtos/create-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<UserEntity>;
  abstract find(filter: Partial<UserEntity>): Promise<UserEntity>;
  abstract findAll(filter: Partial<UserEntity>): Promise<UserEntity[]>;
  abstract update(id: string, data: Partial<UserEntity>): Promise<UserEntity>;
  abstract delete(id: string): Promise<void>;
}
