import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;
export const password = 'random_password';
const hash =  bcrypt.hash(password, saltOrRounds);

export { bcrypt, hash };
