const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  // const token = '백엔드에서 받은 토큰 값';
  // // 쿠키에 토큰 저장
  // document.cookie = `token=${token}; path=/;`;
  // // 확인을 위해 쿠키 값 출력
  // console.log(document.cookie);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
