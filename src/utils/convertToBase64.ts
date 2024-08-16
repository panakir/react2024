const convertToBase64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (): void => {
      resolve(reader.result as string);
    };
    reader.onerror = (error): void => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

export { convertToBase64 };
