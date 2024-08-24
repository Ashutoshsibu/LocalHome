import React from 'react';
import styled from 'styled-components';
import Background from './../assets/img/Backgroundyellow.jpg'

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, rgb(237, 245, 255), #ffffff);
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const FormWrapper = styled.div`
  background-color: #e1fff6;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 20px;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777777;
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #454545;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333333;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap:10px;
`;

const CheckBoxLabel = styled.label`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333333;
`;

const Button = styled.button`
  background-color: #ea5c49;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #f4260a;
  }
`;

const FormComponent = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>We are a call away!</Title>
        <Description>Discuss Pricing, take a Demo or share your business problems.</Description>
        <Form>
          <Input type="text" placeholder="Full Name" />
          <Input type="tel" placeholder="Phone" />
          <Input type="email" placeholder="Work Email*" required />
          <Input type="text" placeholder="Company Name" />
          <CheckBoxWrapper>
            <CheckBoxLabel>Please select your requirement(s):</CheckBoxLabel>
            <label>
              <input type="checkbox" name="requirement" value="payroll" /> Payroll
            </label>
            <label>
              <input type="checkbox" name="requirement" value="coreHR" /> Core HR
            </label>
            <label>
              <input type="checkbox" name="requirement" value="coreHR" />  Attendance Management
            </label>
            <label>
              <input type="checkbox" name="requirement" value="coreHR" />  Leave Management
            </label>
            <label>
              <input type="checkbox" name="requirement" value="coreHR" />  Performance Management System
            </label>
            <label>
              <input type="checkbox" name="requirement" value="coreHR" /> Geo-Tagging
            </label>
            <label>
              <input type="checkbox" name="requirement" value="coreHR" /> Recruitment
            </label>
            <label>
              <input type="checkbox" name="requirement" value="coreHR" />   Employee Self Service
            </label>
            <label>
              <input type="checkbox" name="requirement" value="coreHR" />  Employee Engagement

            </label>
            <label>
              <input type="checkbox" name="requirement" value="others" /> Others
            </label>
            <label>
              <input type="checkbox" name="requirement" value="all" /> All
            </label>
          </CheckBoxWrapper>
          <TextArea rows="4" placeholder="Are you currently using any HR tools? (Optional)" />
          <Select>
            <option value="">Number of Employees</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </Select>
          <Button type="submit">Book Meeting</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default FormComponent;
