import { useTranslation } from 'react-i18next';

type TFormButton = {
  isSubmitting: boolean;
  handleSubmit?: () => void;
};

export const FormButton = ({ isSubmitting, handleSubmit }: TFormButton) => {
  const { t } = useTranslation();

  return (
    <button type="submit" className="button" disabled={isSubmitting} onClick={handleSubmit}>
      {isSubmitting ? t('form.submitting') : t('form.submit')}
    </button>
  );
};
