import { useTranslation } from 'react-i18next';

const OptionsPlanets = () => {
  const { t } = useTranslation();

  return (
    <>
      <option value={'1'}>{t('oPlanetsComplimentary')}</option>
      <option value={'2'}>{t('oPlanetsSplitComplimentary')}</option>
      <option value={'3'}>{t('oPlanetsTriad')}</option>
      <option value={'4'}>{t('oPlanetsEarth')}</option>
      <option value={'5'}>{t('oPlanetsCavity')}</option>
      <option value={'6'}>{t('oPlanetsElemental')}</option>
    </>
  );
};

export default OptionsPlanets;
