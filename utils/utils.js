import { v4 as uuid } from 'uuid';
import { Constants } from './constants.js';

export const filename = (req, file, cb) => {
  cb(null, `${uuid()}${file.originalname.slice(file.originalname.lastIndexOf('.'))}`)
}

export const destination = (req, file, cb) => {
 cb(null, Constants.IMAGE_UPLOAD_PATH);
}