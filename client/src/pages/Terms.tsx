import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Terms() {
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
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">이용약관</h1>
            <p className="text-gray-600 dark:text-gray-400">심리 테스트 컬렉션 서비스 이용약관입니다.</p>
          </div>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-8">
              <div className="space-y-8 text-gray-700 dark:text-gray-300">
                
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제1조 (목적)</h2>
                  <p>
                    이 약관은 심리 테스트 컬렉션(이하 "서비스")이 제공하는 심리 테스트 서비스의 이용조건 및 절차, 
                    회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제2조 (정의)</h2>
                  <p className="mb-4">이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>"서비스"란 심리 테스트 컬렉션이 제공하는 온라인 심리 테스트 및 관련 서비스를 의미합니다.</li>
                    <li>"이용자"란 이 약관에 따라 서비스를 이용하는 자를 의미합니다.</li>
                    <li>"콘텐츠"란 서비스를 통해 제공되는 심리 테스트, 결과 분석, 텍스트, 이미지 등 모든 정보를 의미합니다.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제3조 (약관의 효력 및 변경)</h2>
                  <div className="space-y-4">
                    <p>① 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.</p>
                    <p>② 회사는 합리적인 사유가 발생할 경우 이 약관을 변경할 수 있으며, 약관이 변경되는 경우 변경된 약관의 적용일자 및 변경사유를 명시하여 현행약관과 함께 서비스의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</p>
                    <p>③ 이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제4조 (서비스의 제공)</h2>
                  <div className="space-y-4">
                    <p>① 회사는 다음과 같은 서비스를 제공합니다:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>다양한 심리 테스트 제공</li>
                      <li>테스트 결과 분석 및 해석</li>
                      <li>결과 공유 기능</li>
                      <li>기타 회사가 정하는 서비스</li>
                    </ul>
                    <p>② 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 단, 회사의 업무상이나 기술상의 이유로 서비스가 일시 중단될 수 있습니다.</p>
                    <p>③ 회사는 서비스의 품질 향상을 위해 서비스의 내용을 수정하거나 변경할 수 있습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제5조 (서비스 이용)</h2>
                  <div className="space-y-4">
                    <p>① 서비스는 무료로 제공되며, 별도의 회원가입 없이 이용할 수 있습니다.</p>
                    <p>② 이용자는 다음 행위를 하여서는 안 됩니다:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제하거나 유통시키는 행위</li>
                      <li>회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</li>
                      <li>공공질서 및 미풍양속에 위반되는 내용의 정보를 타인에게 유포하는 행위</li>
                      <li>범죄와 결부된다고 객관적으로 판단되는 행위</li>
                      <li>기타 관계법령에 위배되는 행위</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제6조 (개인정보보호)</h2>
                  <div className="space-y-4">
                    <p>① 회사는 이용자의 개인정보보호를 위해 개인정보보호법 등 관련 법령을 준수합니다.</p>
                    <p>② 서비스는 별도의 개인정보를 수집하지 않으며, 모든 테스트 데이터는 이용자의 브라우저에 로컬 저장됩니다.</p>
                    <p>③ 개인정보의 보호 및 사용에 대해서는 별도의 개인정보처리방침이 적용됩니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제7조 (저작권 및 지적재산권)</h2>
                  <div className="space-y-4">
                    <p>① 서비스에 포함된 모든 콘텐츠(텍스트, 이미지, 로고, 심리 테스트 문항 등)의 저작권 및 기타 지적재산권은 회사에 귀속됩니다.</p>
                    <p>② 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제8조 (서비스의 중단)</h2>
                  <div className="space-y-4">
                    <p>① 회사는 다음의 경우 서비스 제공을 중단할 수 있습니다:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>서비스용 설비의 보수 등 공사로 인한 부득이한 경우</li>
                      <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우</li>
                      <li>기타 불가항력적 사유가 있는 경우</li>
                    </ul>
                    <p>② 회사는 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 때에는 서비스의 전부 또는 일부를 제한하거나 정지할 수 있습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제9조 (책임제한)</h2>
                  <div className="space-y-4">
                    <p>① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                    <p>② 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
                    <p>③ 회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖에 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</p>
                    <p>④ 서비스의 심리 테스트 결과는 참고용이며, 의학적 진단이나 치료를 대체할 수 없습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">제10조 (준거법 및 관할법원)</h2>
                  <div className="space-y-4">
                    <p>① 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 대한민국 법을 적용하며, 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">부칙</h2>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="font-semibold">시행일자</p>
                    <p>이 약관은 2024년 1월 1일부터 적용됩니다.</p>
                    <p className="text-sm mt-2">최종 수정일: 2024년 12월 16일</p>
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