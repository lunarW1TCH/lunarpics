import { useTranslation } from 'react-i18next';

const OptionsElemental = () => {
  const { t } = useTranslation();

  return (
    <>
      <option value={'1'}>{t('oElementalWater')}</option>
      <option value={'2'}>{t('oElementalEarth')}</option>
      <option value={'3'}>{t('oElementalWind')}</option>
      <option value={'4'}>{t('oElementalHoly')}</option>
      <option value={'5'}>{t('oElementalDark')}</option>
      <option value={'6'}>{t('oElementalIce')}</option>
      <option value={'7'}>{t('oElementalMetal')}</option>
      <option value={'8'}>{t('oElementalLava')}</option>
      <option value={'9'}>{t('oElementalToxic')}</option>
    </>
  );
};

export default OptionsElemental;
