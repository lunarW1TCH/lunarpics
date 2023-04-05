import React, { useState } from 'react';
import {
  MAX_HEIGHT,
  MAX_WIDTH,
  MIN_HEIGHT,
  MIN_WIDTH,
  MAX_INT,
} from '../../helpers/config';
import { getRandomInt, clamp } from '../../helpers/helpers';
import Spinner from '../UI/Spinner';
import ImageFormData from '../../models/ImgFormData';

import classes from './ImageForm.module.scss';
import Select from '../Select';
import OptionsElemental from '../options/OptionsElemental';
import OptionsStars from '../options/OptionsStars';
import OptionsPlanets from '../options/OptionsPlanets';

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

    // adding random seed to url
    const frame = getRandomInt(MAX_INT);

    const url = `https://app.pixelencounter.com/api/basic/${
      isPlanets ? 'planets' : 'stars'
    }?frame=${frame}&width=${imageFormData.width}&height=${
      imageFormData.height
    }&disableBackground=${imageFormData.disableBackground}&disableStars=${
      imageFormData.disableStars
    }${
      isPlanets && imageFormData.disableSatellites
        ? '&disableBackground=true'
        : ''
    }${
      isPlanets
        ? '&colorMode=' + imageFormData.colorMode
        : '&subColorMode=' + imageFormData.subColorModeStars
    }${
      isPlanets && imageFormData.isElemental
        ? '&subColorMode=' + imageFormData.subColorModePlanets
        : ''
    }`;

    setImgUrl(url);
  };

  const inputOnBlurHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { id } = e.currentTarget;
    let { value } = e.currentTarget;
    let updatedValue = {};

    const n = Number(value);

    // on blur sets values to their min or max

    if (id === 'width') {
      const clamped = clamp(n, MIN_WIDTH, MAX_WIDTH);
      value = String(clamped);
      updatedValue = { width: value };
    }

    if (id === 'height') {
      const clamped = clamp(n, MIN_HEIGHT, MAX_HEIGHT);
      value = String(clamped);
      updatedValue = { height: value };
    }

    setImageFormData(prevImageFormData => ({
      ...prevImageFormData,
      ...updatedValue,
    }));
  };

  const inputOnChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    const { id, checked, value } = e.currentTarget;

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
    <Select
      name="elemental"
      id="subColorModePlanets"
      onChange={selectOnChangeHandler}
      className={classes.select}
      value={imageFormData.subColorModePlanets}
    >
      <OptionsElemental />
    </Select>
  );

  const selectStars = (
    <Select
      name="stars"
      id="subColorModeStars"
      onChange={selectOnChangeHandler}
      className={classes.select}
      value={imageFormData.subColorModeStars}
    >
      <OptionsStars />
    </Select>
  );

  const selectPlanets = (
    <Select
      name="planets"
      id="colorMode"
      onChange={selectOnChangeHandler}
      className={classes.select}
      value={imageFormData.colorMode}
    >
      <OptionsPlanets />
    </Select>
  );

  const imgDiv = (
    <div className={classes.containerImage}>
      <img
        src={imgUrl}
        alt="celestial body"
        onLoad={imgOnLoadHandler}
        className={classes.image}
      />
      <span>'Right click' and 'Save image as' to download</span>
    </div>
  );

  return (
    <>
      {imgUrl !== '' && imgDiv}
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
          onBlur={inputOnBlurHandler}
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
          onBlur={inputOnBlurHandler}
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
          className={classes.checkbox}
        />
        <label htmlFor="disableStars" className={classes.label}>
          Disable Stars
        </label>
        <input
          type="checkbox"
          id="disableStars"
          checked={imageFormData.disableStars}
          onChange={inputOnChangeHandler}
          className={classes.checkbox}
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
            className={classes.checkbox}
          />
        )}
        <label htmlFor="colorMode" className={classes.label}>
          Style
        </label>
        {isPlanets && selectPlanets}
        {isPlanets && imageFormData.isElemental && (
          <label htmlFor="subColorMode" className={classes.label}>
            Substyle
          </label>
        )}
        {isPlanets && imageFormData.isElemental && selectElemental}
        {isStars && selectStars}
        <button className={classes.button} type="submit">
          SUBMIT!
        </button>
      </form>
    </>
  );
};

export default ImageForm;
