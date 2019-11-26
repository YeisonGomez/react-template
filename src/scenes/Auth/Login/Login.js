import * as React from 'react';
import { useDispatch } from 'react-redux'

import { auth } from '../../../services/Auth/AuthActions'
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

export const Login = () => {

  const dispatch = useDispatch()
  const { login } = auth;
  const { t, i18n } = useTranslation();

  const handleLogin = () => {
    dispatch(login('yeisom40@gmail.com', '12345'))
  }

  return (
    <div className="component-login">
      <Row>
        <Col>
          <h1>{t('login')}</h1>
        </Col>
      </Row>
      {/*<button onClick={handleLogin}>Iniciar sesión</button>*/}
    </div>
  )
}