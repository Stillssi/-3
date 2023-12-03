const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
