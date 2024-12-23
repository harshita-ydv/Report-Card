import React, { useState } from 'react';
import ForgotPassword from './ForgotPassword';
import VerifyCode from './VerifyCode';
import ResetPassword from './ResetPassword';
import { useNavigate } from 'react-router-dom';

const PasswordRecovery = () => {
  const [step, setStep] = useState(1);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const handleCodeSent = (email) => {
    setUserEmail(email);
    setStep(2);
  };

  const handleCodeVerified = () => {
    setStep(3);
  };

  const handlePasswordResetSuccess = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div>
      {step === 1 && (
        <ForgotPassword
          onCodeSent={handleCodeSent}
        />
      )}

      {step === 2 && (
        <VerifyCode
          email={userEmail}
          onCodeVerified={handleCodeVerified}
        />
      )}

      {step === 3 && (
        <ResetPassword 
          email={userEmail} 
          onSuccess={handlePasswordResetSuccess} 
        />
      )}
    </div>
  );
};

export default PasswordRecovery;
