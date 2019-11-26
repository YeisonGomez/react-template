import React from 'react';
import { FormRegister } from "../../../components/FormRegister/FormRegister"
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

export const Signup = () => {

  const { t } = useTranslation();

  return (
    <div >  
      <Row>
        <Col>
          <h1>{t('sing')}</h1>
        </Col>
      </Row>
      <FormRegister />
    </div>
  )
}