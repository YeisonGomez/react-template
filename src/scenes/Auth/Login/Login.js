import * as React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormLogin } from "./FormLogin/FormLogin"

export const Login = () => {

  const { t } = useTranslation();

  return (
    <div className="component-login">
      <Row>
        <Col>
          <h1>{t('login')}</h1>
        </Col>
      </Row>
      <FormLogin/>
    </div>
  )
}