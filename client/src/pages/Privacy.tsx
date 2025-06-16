import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Privacy() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-warm-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              onClick={() => setLocation('/')}
              variant="outline"
              className="mb-6 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <ArrowLeft size={16} className="mr-2" />
              홈으로 돌아가기
            </Button>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">개인정보처리방침</h1>
            <p className="text-gray-600 dark:text-gray-400">심리 테스트 컬렉션 서비스의 개인정보 보호정책입니다.</p>
          </div>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-8">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. 개인정보의 처리목적</h2>
                  <p className="mb-4">
                    심리 테스트 컬렉션(이하 "서비스")은 다음의 목적을 위하여 개인정보를 처리합니다. 
                    처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                    이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>심리 테스트 서비스 제공</li>
                    <li>테스트 결과 분석 및 제공</li>
                    <li>서비스 이용통계 분석</li>
                    <li>서비스 개선 및 개발</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. 개인정보의 처리 및 보유기간</h2>
                  <p className="mb-4">
                    본 서비스는 정보주체로부터 개인정보를 수집하지 않으며, 모든 테스트 결과는 
                    이용자의 브라우저에 로컬 저장됩니다. 서버에는 어떠한 개인정보도 저장되지 않습니다.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>테스트 응답 데이터: 브라우저 로컬 스토리지에 저장 (이용자가 직접 삭제 가능)</li>
                    <li>테스트 결과: 브라우저 세션 동안만 임시 저장</li>
                    <li>서버 로그: 접속 기록은 보안 목적으로 최대 30일간 보관</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. 개인정보의 제3자 제공</h2>
                  <p>
                    본 서비스는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 
                    다만, 아래의 경우에는 예외로 합니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>이용자가 사전에 동의한 경우</li>
                    <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. 개인정보처리의 위탁</h2>
                  <p>
                    본 서비스는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold">현재 위탁업체: 없음</p>
                    <p className="text-sm mt-2">모든 데이터 처리는 클라이언트 사이드에서 이루어지며, 외부 업체에 위탁하지 않습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. 정보주체의 권리·의무 및 행사방법</h2>
                  <p className="mb-4">이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>개인정보 처리정지 요구권</li>
                    <li>개인정보 열람요구권</li>
                    <li>개인정보 정정·삭제요구권</li>
                    <li>개인정보 처리정지 요구권</li>
                  </ul>
                  <p className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    본 서비스는 브라우저 로컬 스토리지를 사용하므로, 
                    이용자가 브라우저 설정에서 직접 데이터를 삭제할 수 있습니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. 개인정보의 안전성 확보조치</h2>
                  <p className="mb-4">
                    본 서비스는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>개인정보 취급 직원의 최소화 및 교육</li>
                    <li>정기적인 자체 감사 실시</li>
                    <li>개인정보에 대한 접근 제한</li>
                    <li>개인정보를 저장하는 데이터베이스 시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치</li>
                    <li>해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. 개인정보 보호책임자</h2>
                  <p className="mb-4">
                    본 서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 
                    개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:
                  </p>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold">개인정보 보호책임자</p>
                    <p>담당부서: 개발팀</p>
                    <p>연락처: 추후 공지 예정</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. 개인정보 처리방침 변경</h2>
                  <p>
                    이 개인정보처리방침은 2024년 1월 1일부터 적용되며, 
                    법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
                    변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                  </p>
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="font-semibold">시행일자: 2024년 1월 1일</p>
                    <p className="text-sm mt-1">최종 수정일: 2024년 12월 16일</p>
                  </div>
                </section>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}