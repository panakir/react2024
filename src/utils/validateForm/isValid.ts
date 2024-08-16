import { FILE_TYPES, MAX_UPLOAD_IMAGE_SIZE } from "./constants";

const isValidSize = (size: number): boolean => {
  return size < MAX_UPLOAD_IMAGE_SIZE;
};

const isValidType = (name: string): boolean => {
  const fileExtension = name.split(".").pop();
  if (fileExtension) {
    return FILE_TYPES.includes(fileExtension);
  }
  return false;
};

export { isValidSize, isValidType };
