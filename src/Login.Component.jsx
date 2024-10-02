import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #00BFFF;
  
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-top: 10px;
`;

const Progress = styled.div`
  height: 10px;
  background-color: #76c7c0;
  border-radius: 5px;
  width: ${(props) => props.progress}%;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [progress, setProgress] = useState(0);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    updateProgress();
  };

  const updateProgress = () => {
    let newProgress = 0;
    if (email) newProgress += 33; 
    if (password) newProgress += 33; 
    if (phone) newProgress += 34; 
    setProgress(newProgress);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert('Login submitted!');
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
          />
        </div>
        <div>
          <Label>Senha:</Label>
          <Input
            type="password"
            value={password}
            onChange={handleInputChange(setPassword)}
            required
          />
        </div>
        <div>
          <Label>Telefone:</Label>
          <Input
            type="tel"
            value={phone}
            onChange={handleInputChange(setPhone)}
            required
          />
        </div>
        <Button type="submit">Entrar</Button>
      </Form>
      <ProgressBarContainer>
        <Progress progress={progress} />
      </ProgressBarContainer>
      <p>{progress}% completo</p>
    </LoginContainer>
  );
};

export default Login;
