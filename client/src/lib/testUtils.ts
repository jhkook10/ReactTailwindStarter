export function calculateResult(results: any, totalScore: number) {
  for (const [key, result] of Object.entries(results)) {
    const resultData = result as any;
    if (totalScore >= resultData.minScore && totalScore <= resultData.maxScore) {
      return resultData;
    }
  }
  // Fallback to first result if no match found
  return Object.values(results)[0];
}

export async function shareResult(testData: any, result: any) {
  const shareText = `나의 ${testData.title} 결과: ${result.title} ${result.emoji}\n\n${result.description}`;
  const shareUrl = window.location.href;
  
  if (navigator.share) {
    try {
      await navigator.share({
        title: testData.title,
        text: shareText,
        url: shareUrl
      });
    } catch (error) {
      // Fallback to clipboard if sharing fails
      await copyToClipboard(shareText + '\n\n' + shareUrl);
    }
  } else {
    // Fallback: copy to clipboard
    await copyToClipboard(shareText + '\n\n' + shareUrl);
  }
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    alert('결과가 클립보드에 복사되었습니다!');
  } catch (error) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('결과가 클립보드에 복사되었습니다!');
  }
}

export function formatScore(score: number, maxScore: number): string {
  const percentage = Math.round((score / maxScore) * 100);
  return `${score}/${maxScore} (${percentage}%)`;
}

export function getScoreLevel(score: number, maxScore: number): 'low' | 'medium' | 'high' | 'very-high' {
  const percentage = (score / maxScore) * 100;
  
  if (percentage >= 75) return 'very-high';
  if (percentage >= 50) return 'high';
  if (percentage >= 25) return 'medium';
  return 'low';
}
