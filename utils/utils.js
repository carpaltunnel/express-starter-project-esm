export const filename = (req, file, cb) => {
  cb(null, 'uploaded-gem-file.svg')
}

export const destination = (req, file, cb) => {
 cb(null, 'static/chickens/');
}