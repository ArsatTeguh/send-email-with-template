import Image from 'next/image';
import React from 'react';

type Props = {
  isLoading: boolean;
};

function LoadingRocket({ isLoading }: Props) {
  return (
    <div className={`fixed inset-0 justify-center items-center z-50 bg-black bg-opacity-80 ${!isLoading ? 'hidden' : 'flex'}`}>
      <div className="">
        <Image src="/loading.gif" alt="GIF" width={150} height={150} />
      </div>
    </div>
  );
}

export default LoadingRocket;
