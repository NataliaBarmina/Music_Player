import { useRef, useState } from 'react';

export const useSelectedCover = () => {
  const [selectedCover, setSelectedCover] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setSelectedCover(imageUrl);
    setSelectedFile(file);
  };
  return { selectedCover, fileInputRef, handleCoverChange, selectedFile };
};
