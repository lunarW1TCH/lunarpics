import { useTranslation } from 'react-i18next';

const OptionsStars = () => {
  const { t } = useTranslation();

  return (
    <>
      <option value={'1'}>{t('oStarsBlue')}</option>
      <option value={'2'}>{t('oStarsRed')}</option>
      <option value={'3'}>{t('oStarsBrown')}</option>
    </>
  );
};

export default OptionsStars;
