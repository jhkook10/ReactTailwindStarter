import { useState } from 'react';
import { useLocation } from 'wouter';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import testsData from '@/data/tests.json';
import { calculateResult, shareResult } from '@/lib/testUtils';
import { ArrowLeft, ArrowRight, RotateCcw, Share2, Home } from 'lucide-react';

interface TestModalProps {
  testId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function TestModal({ testId, isOpen, onClose }: TestModalProps) {
  const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [phase, setPhase] = useState<'start' | 'questions' | 'results'>('start');
  const [result, setResult] = useState<any>(null);

  const testData = testsData[testId as keyof typeof testsData];

  if (!testData) {
    return null;
  }

  const handleStartTest = () => {
    setPhase('questions');
    setCurrentQuestion(0);
    setAnswers([]);
    setCurrentAnswer('');
  };

  const handleAnswerChange = (value: string) => {
    setCurrentAnswer(value);
  };

  const handleNext = () => {
    if (currentAnswer) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = parseInt(currentAnswer);
      setAnswers(newAnswers);

      if (currentQuestion < testData.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentAnswer('');
      } else {
        // Calculate result
        const totalScore = newAnswers.reduce((sum, score) => sum + score, 0);
        const resultType = calculateResult(testData.results, totalScore);
        setResult(resultType);
        setPhase('results');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setCurrentAnswer(answers[currentQuestion - 1]?.toString() || '');
    }
  };

  const handleShare = () => {
    if (result) {
      shareResult(testData, result);
    }
  };

  const handleRetake = () => {
    setPhase('start');
    setCurrentQuestion(0);
    setAnswers([]);
    setCurrentAnswer('');
    setResult(null);
  };

  const handleGoToTest = () => {
    onClose();
    setLocation(`/test/${testId}`);
  };

  const handleClose = () => {
    setPhase('start');
    setCurrentQuestion(0);
    setAnswers([]);
    setCurrentAnswer('');
    setResult(null);
    onClose();
  };

  const progress = ((currentQuestion + 1) / testData.questions.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <DialogTitle className="sr-only">{testData.title}</DialogTitle>
        <DialogDescription className="sr-only">{testData.description}</DialogDescription>
        {phase === 'start' && (
          <div className="p-8 text-center">
            <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${testData.gradient} rounded-3xl flex items-center justify-center shadow-xl`}>
              <span className="text-3xl">{testData.emoji}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{testData.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {testData.detailDescription}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8 text-sm">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                <div className="text-primary mb-2 text-lg">📝</div>
                <div className="font-semibold text-gray-900 dark:text-white">10 문항</div>
                <div className="text-gray-500 dark:text-gray-400">질문 수</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                <div className="text-primary mb-2 text-lg">⏱️</div>
                <div className="font-semibold text-gray-900 dark:text-white">{testData.duration}</div>
                <div className="text-gray-500 dark:text-gray-400">예상 시간</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                <div className="text-primary mb-2 text-lg">📊</div>
                <div className="font-semibold text-gray-900 dark:text-white">4가지</div>
                <div className="text-gray-500 dark:text-gray-400">결과 유형</div>
              </div>
            </div>
            <div className="space-y-3">
              <Button onClick={handleStartTest} className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200">
                테스트 시작하기
              </Button>
              <Button onClick={handleGoToTest} variant="outline" className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
                전체 화면으로 보기
              </Button>
              <Button onClick={handleClose} variant="outline" className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
                닫기
              </Button>
            </div>
          </div>
        )}

        {phase === 'questions' && (
          <div className="p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{testData.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {currentQuestion + 1} / {testData.questions.length}
                </span>
              </div>
              <Progress value={progress} className="w-full h-2" />
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-6 leading-relaxed">
                {testData.questions[currentQuestion].text}
              </h4>
              <RadioGroup value={currentAnswer} onValueChange={handleAnswerChange} className="space-y-3">
                {testData.questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors">
                    <RadioGroupItem value={option.value.toString()} id={`option-${index}`} className="mt-1" />
                    <Label htmlFor={`option-${index}`} className="text-gray-700 dark:text-gray-300 cursor-pointer flex-1">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
              >
                <ArrowLeft className="mr-2" size={16} />
                이전
              </Button>
              <Button
                onClick={handleNext}
                disabled={!currentAnswer}
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-xl transition-colors disabled:opacity-50"
              >
                {currentQuestion === testData.questions.length - 1 ? '결과 보기' : '다음'}
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        )}

        {phase === 'results' && result && (
          <div className="p-8 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-xl">
                <span className="text-white text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">테스트 완료!</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">당신의 결과를 확인해보세요</p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-blue-100 dark:from-primary/20 dark:to-blue-900/20 rounded-2xl p-6 mb-6">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{result.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {result.description}
              </p>
              <div className="text-sm text-primary font-medium">
                "{result.advice}"
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <Button onClick={handleShare} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
                <Share2 size={18} />
                <span>결과 공유하기</span>
              </Button>
              <Button onClick={handleRetake} variant="outline" className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
                <RotateCcw size={18} />
                <span>다시 테스트하기</span>
              </Button>
              <Button onClick={handleClose} className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2">
                <Home size={18} />
                <span>다른 테스트 해보기</span>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
