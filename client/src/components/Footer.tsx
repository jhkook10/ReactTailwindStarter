import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-md">
            <Brain className="text-white text-2xl" size={32} />
          </div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">심리 테스트 컬렉션</h4>
          <p className="text-gray-600 dark:text-gray-400">나를 알아가는 12가지 여정</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <a href="#" className="hover:text-primary transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-primary transition-colors">이용약관</a>
          <a href="#" className="hover:text-primary transition-colors">문의하기</a>
          <a href="#" className="hover:text-primary transition-colors">테스트 제안</a>
        </div>
        
        <div className="text-center text-sm text-gray-400 dark:text-gray-500">
          <p>&copy; 2024 심리 테스트 컬렉션. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ for self-discovery</p>
        </div>
      </div>
    </footer>
  );
}
