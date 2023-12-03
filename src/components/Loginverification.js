// 페이지 이동 시 토큰을 추출하여 백엔드에 보내는 함수
export function navigateWithToken(path) {
  // 쿠키에서 토큰 추출
  const token = getCookie('token');

  // 토큰을 백엔드에 보내는 API 요청
  fetch('/backend/verify-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: token }),
  })
    .then((response) => {
      // 응답 처리
      if (response.ok) {
        // 토큰이 유효한 경우 페이지 이동
        window.location.href = path;
      } else {
        // 토큰이 유효하지 않은 경우 처리
        console.error('토큰 검증 실패');
        // 적절한 오류 처리 로직을 구현해주세요.
      }
    })
    .catch((error) => {
      console.error('API 요청 실패:', error);
      // 적절한 오류 처리 로직을 구현해주세요.
    });
}

// 쿠키에서 특정 이름의 값 추출하는 함수
export function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
