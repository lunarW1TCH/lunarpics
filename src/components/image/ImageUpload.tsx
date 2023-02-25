import ImageUploading, { ImageListType } from 'react-images-uploading';
import { useState, useContext } from 'react';

import classes from './ImageUpload.module.css';
import Card from '../UI/Card';
import { ImageContext } from '../providers/image-context';
// import Card from '../UI/Card';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const imageCtx = useContext(ImageContext);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const onUpdate = (url: string | undefined) => {
    imageCtx.uploadImg(url);
  };

  return (
    <Card className={classes.container_card}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          // onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className={classes.container_div}>
            {imageList.length === 0 && (
              <button
                className={classes.dropzone}
                type="button"
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
            )}
            &nbsp;
            {imageList.map((image, index) => (
              <div className={classes.container_div}>
                <img src={image.dataURL} alt="" width={classes.image} />
                <div className={classes.container_btn}>
                  <button
                    className={classes.btn}
                    type="button"
                    onClick={() => {
                      onUpdate(image.dataURL);
                      return onImageUpdate(index);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className={classes.btn}
                    type="button"
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </Card>
  );
};

export default ImageUpload;
