import md5 from 'md5-hash';
import { UserDto } from 'src/users/user.dto';

export const hashUser = (user: UserDto): UserDto => {
    user.password = md5(user.password);
    return user;
};
