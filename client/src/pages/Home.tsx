import { useState } from 'react';
import Header from '@/components/Header';
import TestCard from '@/components/TestCard';
import TestModal from '@/components/TestModal';
import Footer from '@/components/Footer';
import testsData from '@/data/tests.json';
import { Brain, Clock, BarChart3, Share2 } from 'lucide-react';

export default function Home() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTestClick = (testId: string) => {
    setSelectedTest(testId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTest(null);
  };

  const tests = Object.values(testsData);

  return (
    <div className="min-h-screen bg-warm-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-blue-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-float mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl">
              <Brain className="text-white text-3xl" size={48} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            나를 알아가는 <span className="text-primary">12가지 여정</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            현대 사회의 다양한 관점에서 자신의 성향과 특성을 발견해보세요. 
            각 테스트는 과학적 근거를 바탕으로 설계되었습니다.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Clock className="text-primary" size={18} />
              <span>5-10분 소요</span>
            </div>
            <div className="flex items-center space-x-2">
              <BarChart3 className="text-primary" size={18} />
              <span>4가지 결과 유형</span>
            </div>
            <div className="flex items-center space-x-2">
              <Share2 className="text-primary" size={18} />
              <span>결과 공유 가능</span>
            </div>
          </div>
        </div>
      </section>

      {/* Test Grid Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">테스트 컬렉션</h3>
            <p className="text-gray-600 dark:text-gray-400">관심 있는 테스트를 선택해 시작해보세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tests.map((test) => (
              <TestCard
                key={test.id}
                test={test}
                onClick={() => handleTestClick(test.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Test Modal */}
      {selectedTest && (
        <TestModal
          testId={selectedTest}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
