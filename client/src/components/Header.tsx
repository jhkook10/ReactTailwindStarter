import { Brain, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <Brain className="text-white text-lg" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">심리 테스트</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">나를 알아가는 여정</p>
            </div>
          </div>
          
          {/* Dark Mode Toggle */}
          <Button
            onClick={toggleTheme}
            className="relative flex items-center w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 border-0 hover:bg-gray-400 dark:hover:bg-gray-500 overflow-hidden"
          >
            <div className={`w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-4' : 'translate-x-0'}`}>
              {theme === 'light' ? (
                <Sun className="text-yellow-500" size={14} />
              ) : (
                <Moon className="text-blue-400" size={14} />
              )}
            </div>
            {/* Background icons */}
            <Sun className={`absolute left-2 top-2 text-yellow-500 transition-opacity duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-30'}`} size={12} />
            <Moon className={`absolute right-2 top-2 text-blue-400 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-30'}`} size={12} />
          </Button>
        </div>
      </div>
    </header>
  );
}
