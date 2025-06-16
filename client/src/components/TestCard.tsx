import { Clock, HelpCircle } from 'lucide-react';

interface TestCardProps {
  test: {
    id: string;
    title: string;
    emoji: string;
    category: string;
    description: string;
    duration: string;
    gradient: string;
    categoryColor: string;
  };
  onClick: () => void;
}

const categoryColorMap = {
  purple: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
  pink: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300',
  blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
  yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
  green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
  red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
  indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300',
  cyan: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300',
  orange: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
  teal: 'bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300',
  violet: 'bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300',
  emerald: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300',
};

export default function TestCard({ test, onClick }: TestCardProps) {
  const categoryColorClass = categoryColorMap[test.categoryColor as keyof typeof categoryColorMap] || categoryColorMap.blue;

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 hover:-translate-y-2 group"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${test.gradient} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
          {test.emoji}
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${categoryColorClass}`}>
          {test.category}
        </span>
      </div>
      
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
        {test.title}
      </h4>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
        {test.description}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
        <span className="flex items-center">
          <HelpCircle size={14} className="mr-1" />
          10 문항
        </span>
        <span className="flex items-center">
          <Clock size={14} className="mr-1" />
          {test.duration}
        </span>
      </div>
    </div>
  );
}
