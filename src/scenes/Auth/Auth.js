import React from 'react';
import { Login } from './Login/Login';
import { Signup } from './Signup/Signup';
import { Row, Col, Button } from 'antd';
import { Layout } from 'antd';
import { useTranslation } from "react-i18next";

export const Auth = () => {

  const { Header, Content } = Layout;

  const { i18n } = useTranslation();

  const Selectlanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <Layout style={{ padding: '24px' }}>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <Row>
            <Col span={16} style={{ textAlign: 'center' }}>
              Celagem
            </Col>
            <Col span={4}>
              <Button onClick={() => Selectlanguage("es")} type="link" icon="flag" >
                ESP
              </Button>
            </Col>
            <Col span={4}>
              <Button onClick={() => Selectlanguage("en")} type="link" icon="flag" >
                ENG
              </Button>
            </Col>
          </Row>
        </Header>
      </Layout>

      <Layout style={{ paddingTop: '24px' }}>
        <Content>
          <Row gutter={20}>
            <Col span={12}>
              <Signup />
            </Col>
            <Col span={12}>
              <Login />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}