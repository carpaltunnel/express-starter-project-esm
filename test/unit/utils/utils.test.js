import { jest, expect } from '@jest/globals';
import { validate as uuidValidate } from 'uuid';
import { filename, destination } from '../../../utils/utils.js';
import { Constants } from '../../../utils/constants.js';

test('filename() should generate a filename with uuid.<originalExtension>', () => {
  const fileExtension = 'png';
  const mockFile = {
    originalname: `file.${fileExtension}`,
  };

  const mockCallback = jest.fn(x => x);

  filename(null, mockFile, mockCallback);

  expect(mockCallback).toHaveBeenCalled();
  // is null
  expect(mockCallback.mock.calls[0][0]).toBe(null);
  // is a uuid, keeps original file extension
  const generatedFilename = mockCallback.mock.calls[0][1];
  expect(generatedFilename.slice(generatedFilename.lastIndexOf('.') + 1)).toBe(fileExtension);
  expect(uuidValidate(generatedFilename.slice(0, generatedFilename.lastIndexOf('.')))).toBe(true);
});


test('destination() returns Constant', () => {
  const fileExtension = 'png';
  const mockFile = {
    originalname: `file.${fileExtension}`,
  };

  const mockCallback = jest.fn(x => x);

  destination(null, mockFile, mockCallback);

  expect(mockCallback).toHaveBeenCalled();
  // is null
  expect(mockCallback.mock.calls[0][0]).toBe(null);
  // is the IMAGE_UPLOAD_PATH
  const uploadPath = mockCallback.mock.calls[0][1];
  expect(uploadPath).toEqual(Constants.IMAGE_UPLOAD_PATH);
});