import React, { useState } from 'react';
import Props from '../../models/Props';

type imageContextObj = {
  url: string | undefined;
  uploadImg: (url: string | undefined) => void;
};

export const ImageContext = React.createContext<imageContextObj>({
  url: '',
  uploadImg: () => {},
});

const ImageContextProvider = (props: Props) => {
  const [img, setImg] = useState<string | undefined>('');

  const uploadImgHandler = (url: string | undefined) => {
    setImg(url);
    console.log('polska', url);
  };

  const removeImgHandler = () => {};

  const contextValue: imageContextObj = {
    url: img,
    uploadImg: uploadImgHandler,
  };

  return (
    <ImageContext.Provider value={contextValue}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
