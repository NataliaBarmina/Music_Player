import { useTranslation } from 'react-i18next';

type TFormButton = {
  isSubmitting: boolean;
};

export const FormButton = ({ isSubmitting }: TFormButton) => {
  const { t } = useTranslation();

  return (
    <button type="submit" className="button" disabled={isSubmitting}>
      {isSubmitting ? t('form.submitting') : t('form.submit')}
    </button>
  );
};
