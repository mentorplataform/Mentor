import jwt from 'jsonwebtoken';
import Users from './models/users';
import { jwtSecret } from './config';

export async function getUser(token: string) {
  if (!token) return { user: null };

   try {
    const decodedToken:any = jwt.verify(token, jwtSecret);

    const item = await Users.findOne({ _id: decodedToken.id });

    return {
      item,
    };
  } catch (err) {
    return { user: null };
  }
}

export type UserType = {
  _id: string,
};

export function generateToken(user: UserType) {
  return jwt.sign({id: user._id}, jwtSecret);
}
