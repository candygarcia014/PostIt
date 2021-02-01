import React from 'react';
import Signup from '../components/Signup/Signup';


const Register = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <Signup/>
    </div>
  );
};

export default Register;
