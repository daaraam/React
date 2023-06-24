import { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idOnChangeHandler = (event) => {
    setId(event.target.value);
  };

  const pwOnChangeHandler = (event) => {
    setPw(event.target.value);
  };

  return (
    <div>
      <p>
        아이디 :
        <input type="text" value={id} onChange={idOnChangeHandler} />
      </p>
      <p>
        비밀번호 :{" "}
        <input value={pw} onChange={pwOnChangeHandler} type="password" />
      </p>
      <button
        type="button"
        onClick={() => {
          alert(`
        고객님이 입력하신 아이디는 '${id}'이며,
        비밀번호는 '${pw}'입니다.`);
          setId("");
          setPw("");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default Login;
