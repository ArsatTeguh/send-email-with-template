function dataURItoBlob(dataURI: string, mimeType: string): Blob {
  // Pisahkan data URI menjadi metadata dan data aktual
  const [_metadata, actualData] = dataURI.split(',');

  // Convert base64 ke data biner
  const byteString = atob(actualData);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }

  // Buat Blob dengan data biner dan tipe MIME yang ditentukan
  return new Blob([int8Array], { type: mimeType });
}

export function convertFileToBase64(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64Data = reader.result as string;
      const blob = dataURItoBlob(base64Data, 'application/pdf'); // Ganti dengan tipe MIME yang sesuai
      resolve(blob);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}
