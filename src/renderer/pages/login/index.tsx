import { ChangeEvent, useState } from 'react';
import axios from 'axios';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const onSubmit = async () => {
    const res = await axios.post(
      'http://118.67.135.31:3005/api/it-user/login',
      { id, password: pw },
    );
    console.log(res);
  };

  return (
    <div className="h-screen flex flex-col">
      <form
        className="flex-1 flex flex-col justify-center items-center"
        onSubmit={onSubmit}
      >
        <h1 className="text-xl font-bold">Work-Time-Counter</h1>
        <div className="flex">
          <p className="w-12 border-2">ID</p>
          <input className="border-2 w-full" value={id} onChange={onChangeId} />
        </div>
        <div className="flex">
          <p className="w-12 border-2">PW</p>
          <input
            className="border-2 w-full"
            type="password"
            value={pw}
            onChange={onChangePw}
          />
        </div>
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default Login;
