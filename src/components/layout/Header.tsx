import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Search } from '../molecules/Search';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { Button } from '../atoms/Button';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="md:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Cambridge IGCSE CS
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Search />
          <ThemeToggle />
          {/* <Button
            variant="primary"
            size="sm"
            onClick={handleSignOut}
          >
            Sign Out
          </Button> */}
        </div>
      </div>
    </header>
  );
}