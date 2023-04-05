import React, { useState } from 'react';
import {
  MAX_HEIGHT,
  MAX_WIDTH,
  MIN_HEIGHT,
  MIN_WIDTH,
  MAX_INT,
} from '../../helpers/config';
import { getRandomInt } from '../../helpers/helpers';
import Spinner from '../UI/Spinner';
import ImageFormData from '../../models/ImgFormData';

import classes from './ImageForm.module.css';

const ImageForm = () => {
  // states
  const [imageFormData, setImageFormData] = useState<ImageFormData>({
    width: MAX_WIDTH / 2,
    height: MAX_HEIGHT / 2,
    disableBackground: false,
    disableStars: false,
    disableSatellites: false,
    colorMode: '0',
    subColorModePlanets: '0',
    subColorModeStars: '1',
    isElemental: false,
  });

  const [imgUrl, setImgUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const { pathname } = window.location;
  const isPlanets = pathname === '/planets';
  const isStars = pathname === '/stars';

  // handlers

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // flag for rendering spinner
    setIsLoading(true);

    // reset img url
    setImgUrl('');

    let url = 'https://app.pixelencounter.com/api/basic/';

    if (isPlanets) {
      url += 'planets';
    } else {
      url += 'stars';
    }

    // adding random seed to url
    const frame = getRandomInt(MAX_INT);
    url += `?frame=${frame}`;
    url += `&width=${imageFormData.width}`;
    url += `&height=${imageFormData.height}`;

    // adding parameters to url

    if (imageFormData.disableBackground) {
      url += '&disableBackground=true';
    }

    if (imageFormData.disableStars) {
      url += '&disableStars=true';
    }

    if (isPlanets && imageFormData.disableSatellites) {
      url += '&disableSatellites=true';
    }

    if (isPlanets) {
      url += `&colorMode=${imageFormData.colorMode}`;
    }

    if (isPlanets && imageFormData.isElemental) {
      url += `&subColorMode=${imageFormData.subColorModePlanets}`;
    }

    if (isStars) {
      url += `&subColorMode=${imageFormData.subColorModeStars}`;
    }

    setImgUrl(url);
  };

  const inputOnChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { id, value, checked } = e.currentTarget;

    let updatedValue = {};

    if (id === 'width') {
      updatedValue = { width: value };
    }

    if (id === 'height') {
      updatedValue = { height: value };
    }

    if (id === 'disableBackground') {
      updatedValue = { disableBackground: checked };
    }

    if (id === 'disableStars') {
      updatedValue = { disableStars: checked };
    }

    if (id === 'disableSatellites') {
      updatedValue = { disableSatellites: checked };
    }

    setImageFormData(prevImageFormData => ({
      ...prevImageFormData,
      ...updatedValue,
    }));
  };

  const selectOnChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const { id, value } = e.currentTarget;

    let updatedValue = {};

    if (id === 'colorMode') {
      if (value === '6') {
        updatedValue = { colorMode: value, isElemental: true };
      } else {
        updatedValue = { colorMode: value, isElemental: false };
      }
    }

    if (id === 'subColorModePlanets') {
      updatedValue = { subColorModePlanets: value };
    }

    if (id === 'subColorModeStars') {
      updatedValue = { subColorModeStars: value };
    }

    setImageFormData(prevImageFormData => ({
      ...prevImageFormData,
      ...updatedValue,
    }));
  };

  const imgOnLoadHandler = () => {
    // set isLoading flag to false to stop rendering Spinner
    setIsLoading(false);
  };

  // select elements

  const selectElemental = (
    <select
      name="elemental"
      id="subColorModePlanets"
      onChange={selectOnChangeHandler}
      className={classes.select}
      value={imageFormData.subColorModePlanets}
    >
      <option value={'0'}>Fire</option>
      <option value={'1'}>Water</option>
      <option value={'2'}>Earth</option>
      <option value={'3'}>Wind</option>
      <option value={'4'}>Holy</option>
      <option value={'5'}>Dark</option>
      <option value={'6'}>Ice</option>
      <option value={'7'}>Metal</option>
      <option value={'8'}>Lava</option>
      <option value={'9'}>Toxic</option>
    </select>
  );

  // without white option because it is broken
  const selectStars = (
    <select
      name="stars"
      id="subColorModeStars"
      onChange={selectOnChangeHandler}
      className={classes.select}
      value={imageFormData.subColorModeStars}
    >
      {/* <option value={'0'}>White</option> */}
      <option value={'1'}>Blue</option>
      <option value={'2'}>Red</option>
      <option value={'3'}>Brown</option>
    </select>
  );

  const selectPlanets = (
    <select
      name="planets"
      id="colorMode"
      onChange={selectOnChangeHandler}
      className={classes.select}
      value={imageFormData.colorMode}
    >
      <option value={'0'}>Analogous</option>
      <option value={'1'}>Complimentary</option>
      <option value={'2'}>Split Complimentary</option>
      <option value={'3'}>Triad</option>
      <option value={'4'}>Cavity</option>
      <option value={'5'}>Earth</option>
      <option value={'6'}>Elemental</option>
    </select>
  );

  return (
    <>
      {imgUrl !== '' && (
        <img
          src={imgUrl}
          alt="celestial body"
          onLoad={imgOnLoadHandler}
          className={classes.img}
        />
      )}
      {isLoading && <Spinner />}
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="width" className={classes.label}>
          Width
        </label>
        <input
          type="number"
          id="width"
          value={imageFormData.width}
          onChange={inputOnChangeHandler}
          min={MIN_WIDTH}
          max={MAX_WIDTH}
          className={classes.input}
        />
        <label htmlFor="height" className={classes.label}>
          Height
        </label>
        <input
          type="number"
          id="height"
          value={imageFormData.height}
          onChange={inputOnChangeHandler}
          min={MIN_HEIGHT}
          max={MAX_HEIGHT}
          className={classes.input}
        />
        <label htmlFor="disableBackground" className={classes.label}>
          Disable Background
        </label>
        <input
          type="checkbox"
          id="disableBackground"
          checked={imageFormData.disableBackground}
          onChange={inputOnChangeHandler}
          className={classes.input}
        />
        <label htmlFor="disableStars" className={classes.label}>
          Disable Stars
        </label>
        <input
          type="checkbox"
          id="disableStars"
          checked={imageFormData.disableStars}
          onChange={inputOnChangeHandler}
          className={classes.input}
        />
        {isPlanets && (
          <label htmlFor="disableSatellites" className={classes.label}>
            Disable Satelites
          </label>
        )}
        {isPlanets && (
          <input
            type="checkbox"
            id="disableSatellites"
            checked={imageFormData.disableSatellites}
            onChange={inputOnChangeHandler}
            className={classes.input}
          />
        )}
        <label htmlFor="colorMode" className={classes.label}>
          Style
        </label>
        {isPlanets && selectPlanets}
        {isPlanets && imageFormData.isElemental && selectElemental}
        {isStars && selectStars}
        <button type="submit">SUBMIT!</button>
      </form>
    </>
  );
};

export default ImageForm;
