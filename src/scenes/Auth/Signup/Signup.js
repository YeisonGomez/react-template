import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useTranslation } from "react-i18next";

export const Signup = () => {

  const { t } = useTranslation();

  useEffect(() => {
  }, [])

  return (
    <div>
      {t('test')}
      <Button type="primary">Signup</Button>
    </div>
  )
}