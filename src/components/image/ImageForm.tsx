// import { useState, useEffect } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Dropzone from 'react-dropzone';
import { Form } from 'react-router-dom';

const ImageForm = () => {
  // const [image, setImage] = useState<HTMLImageElement>();

  return (
    <Form>
      <input type="string" />
      <input type="file" />
    </Form>
  );
};

export default ImageForm;
