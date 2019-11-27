import React from 'react';
import {
	Form,
	Input,
	Row,
	Col,
	Checkbox,
	Button,
	Select,
	DatePicker
} from 'antd';
import * as moment from 'moment';
import { useTranslation } from "react-i18next";


const Register = ({ form }) => {

	const { t } = useTranslation();
	const { getFieldDecorator, validateFields, getFieldValue, validateFieldsAndScroll } = form
	const { Option } = Select;
	const currentDate = moment();

	const validateToNextPassword = (rule, value, callback) => {
		if (value /*&& this.state.confirmDirty*/) {
			validateFields(['confirm'], { force: true });
		}
		callback();

	};

	const compareToFirstPassword = (rule, value, callback) => {
		if (value && value !== getFieldValue('password')) {
			callback(t('inconsistent_password'));
		} else {
			callback();
		}
	};

	const validateTerms = (rule, value, callback) => {
		if (!value) {
			callback(t('accept_privacy'));
		} else {
			callback();
		}
	};

	const validateLength = (rule, value, callback) => {
		if (value && value.length < 3) {
			callback(t('minimum'));
		} if (value && value.length > 60) {
			callback(t('maximum'));
		} else {
			callback();
		}
	};

	const validateTime = (rule, value, callback) => {
		if (value) {
			const value_format = value.format('DD/MM/YYYY');
			const date_user = moment(value_format, "DD/MM/YYYY");
			if (currentDate.diff(date_user, "years") <= 18) {
				callback(t('not_age'));
			} else {
				callback();
			}
		} else {
			callback();
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			} else {
				console.log('error', err);
			}
		});
	};

	const handleConfirmBlur = e => {
		const { value } = e.target;
		//console.log('handle confir blur', value);
		//this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	const handleChange = (value) => {
		// console.log(`selected ${value}`);
	}

	return (
		<Form onSubmit={handleSubmit}>

			{/*Nombre, Apellido*/}
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label={t('name_first')} hasFeedback>
						{getFieldDecorator('nickname', {
							rules: [
								{
									required: true,
									message: `${t('pleace')}s ${t('name_first')}`,
									whitespace: true,
								},
								{
									validator: validateLength,
								}
							],
						})(<Input />)}
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label={t('name_last')} hasFeedback>
						{getFieldDecorator('lastName', {
							rules: [
								{
									required: true,
									message: `${t('pleace')}s ${t('name_last')}`,
									whitespace: true
								},
								{
									validator: validateLength,
								},
							],
						})(<Input />)}
					</Form.Item>
				</Col>
			</Row>

			{/*correo, telefono*/}
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label={t('mail')} hasFeedback>
						{getFieldDecorator('email', {
							rules: [
								{
									type: 'email',
									message: 'The input is not valid E-mail!',
								},
								{
									required: true,
									message: `${t('pleace')} ${t('mail')}`,
								},
							],
						})(<Input />)}
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label={t('phone')} hasFeedback>
						{getFieldDecorator('phone', {
							rules: [
								{
									required: true,
									message: `${t('pleace')} ${t('phone')}`
								}
							],
						})(<Input />)}
					</Form.Item>
				</Col>
			</Row>

			{/*edad, sexo, estadoc ivil*/}
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label={t('sex')} hasFeedback>
						{getFieldDecorator('sexo', {
							rules: [
								{
									required: true,
									message: `${t('pleace_select')} ${t('sex')}`,
								}
							],
						})(
							<Select onChange={handleChange}>
								<Option value="F">F</Option>
								<Option value="M">M</Option>
							</Select>
						)}
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label={t('status_marital')} hasFeedback>
						{getFieldDecorator('civil', {
							rules: [
								{
									required: true,
									message: `${t('pleace_select')} ${t('status_marital')}`,
								}
							],
						})(
							<Select onChange={handleChange}>
								<Option value="single">{t('single')}</Option>
								<Option value="married">{t('married')}</Option>
							</Select>
						)}
					</Form.Item>
				</Col>
			</Row>

			{/*fecha de nacimiento, lugar de nacimiento*/}
			<Row gutter={16} >
				<Col span={6}>
					<Form.Item label={t('birthdate')} hasFeedback>
						{getFieldDecorator('date-picker', {
							rules: [
								{
									type: 'object',
									required: true,
									message: `${t('pleace_select')} ${t('birthdate')}`
								},
								{
									validator: validateTime,
								},
							]
						}
						)(<DatePicker />)}
					</Form.Item>
				</Col>
				<Col span={18}>
					<Form.Item label={t('place_birth')} hasFeedback>
						{getFieldDecorator('nacimiento', {
							rules: [
								{
									required: true,
									message: `${t('pleace')} ${t('place_birth')}`,
									whitespace: true
								},
								{
									validator: validateLength,
								},
							],
						})(<Input />)}
					</Form.Item>
				</Col>
			</Row>

			{/*pasaporte, numero de pasaporte*/}
			<Row gutter={16}>
				<Col span={8}>
					<Form.Item label={t('passport')} hasFeedback>
						{getFieldDecorator('pasaporte', {
							rules: [
								{
									required: true,
									message: `${t('pleace')} ${t('passport')}`,
									whitespace: true
								}
							],
						})(<Input />)}
					</Form.Item>
				</Col>
				<Col span={16}>
					<Form.Item label={t('passport_number')} hasFeedback>
						{getFieldDecorator('Numeropasaprte', {
							rules: [
								{
									required: true,
									message: `${t('pleace')} ${t('passport_number')}`,
								}
							],
						})(<Input />)}
					</Form.Item>
				</Col>
			</Row>

			{/*contrasena/ confirmacion*/}
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label={t('password')} hasFeedback>
						{getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: `${t('pleace')} ${t('password')}`,
								},
								{
									validator: validateToNextPassword,
								},
							],
						})(<Input.Password />)}
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label={t('confirm_password')} hasFeedback>
						{getFieldDecorator('confirm', {
							rules: [
								{
									required: true,
									message: `${t('pleace_confirm')} ${t('confirm_password')}`,
								},
								{
									validator: compareToFirstPassword,
								},
							],
						})(<Input.Password onBlur={handleConfirmBlur} />)}
					</Form.Item>
				</Col>
			</Row>

			{/*politicas*/}
			<Row gutter={16}>
				<Col span={24}>
					<Form.Item>
						{getFieldDecorator('agreement', {
							rules: [
								{
									validator: validateTerms,
								},
							],
							initialValue: false,
							valuePropName: 'checked'
						})(
							<Checkbox>
								{t('terms')}
							</Checkbox>,
						)}
					</Form.Item>
				</Col>
			</Row>

			{/*subtmit*/}
			<Row type="flex" justify="end">
				<Col span={4}>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							{t('register')}
						</Button>
					</Form.Item>
				</Col>
			</Row>

		</Form>
	);
}

export const FormRegister = Form.create({ name: 'FormRegister' })(Register);