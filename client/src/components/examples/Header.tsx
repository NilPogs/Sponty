import Header from '../Header';

export default function HeaderExample() {
  const handleLoginClick = () => {
    console.log('Login clicked');
  };

  const handleSignupClick = () => {
    console.log('Signup clicked');
  };

  return (
    <Header 
      onLoginClick={handleLoginClick} 
      onSignupClick={handleSignupClick} 
      isLoggedIn={false}
    />
  );
}