import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type UserInfos = { 
  username: string,
  id: number,
};

const createToken = (user: UserInfos): string => {
  const { username, id } = user;
  const token = jwt.sign({ data: { username, id } }, secret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

  return token;
};

export default createToken;
