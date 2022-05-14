import { Root } from 'joi';

interface IErroJoi extends Root {
  code: string;
  message: string;
  name: string;
}

export default IErroJoi;