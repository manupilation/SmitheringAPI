import { OkPacket } from 'mysql2';
import connection from './connection';
import IAddUser from '../interfaces/addUser';

export const addNewUser = async (user: IAddUser) => {
  const [result] = await connection.execute(
    'INSERT INTO Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
    [user.username, user.classe, user.level, user.password],
  );

  const { insertId } = <OkPacket> result;

  return {
    id: insertId,
    username: user.username,
    classe: user.classe,
    level: user.level,
    password: user.password,
  };
};

export const aaa = 2;