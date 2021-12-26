import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'components';
import { selectActiveCommunication } from 'pages/Communication/selectors';
import { communicationActions } from 'pages/Communication/slice';
import styles from './Title.module.scss';

const Title = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { name, id, isNew, temporary } = useSelector(selectActiveCommunication);

  const handleCommunicationInput = (event) => {
    dispatch(
      communicationActions.updateCommunication({
        id,
        isNew,
        changes: {
          name: event.target.value,
        },
      })
    );
  };

  return (
    <article className={styles.titleWrapper}>
      <Input
        id={id}
        value={name}
        onChange={handleCommunicationInput}
        title={t('max-title')}
        inputLabel={t('title-label')}
        tooltip={t('title-tooltip')}
        placeholder={t('title-placeholder')}
        showLabelOnly={temporary}
        showInputOnly={isNew}
      />
    </article>
  );
};
export default Title;
