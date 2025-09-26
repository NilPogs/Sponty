import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AuthModal from '../AuthModal';

export default function AuthModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTab, setDefaultTab] = useState<'login' | 'signup'>('login');

  const handleAuthSuccess = (user: { id: string; email: string; role: 'user' | 'admin' }) => {
    console.log('Auth success:', user);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-4">
        <Button 
          onClick={() => {
            setDefaultTab('login');
            setIsOpen(true);
          }}
          data-testid="button-open-login"
        >
          Open Login Modal
        </Button>
        <Button 
          variant="outline"
          onClick={() => {
            setDefaultTab('signup');
            setIsOpen(true);
          }}
          data-testid="button-open-signup"
        >
          Open Signup Modal
        </Button>
      </div>
      
      <AuthModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultTab={defaultTab}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
}