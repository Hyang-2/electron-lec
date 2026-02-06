import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onSubmit = async () => {
    const res = await axios.post(
      'https://118.67.135.31:3005/api/it-user/login',
      { id, password: pw },
    );
    console.log(res);
  };

  return (
    <div className="h-screen flex flex-col">
      <form
        className="flex-1 flex flex-col gap-2 items-center justify-center"
        onSubmit={onSubmit}
      >
        <h1 className="text-xl font-bold ">Work-Time-Counter</h1>
        <div className="flex ">
          <p className="bg-gray-200 w-12 border-2 rounded-l-md text-start pl-2 ">
            ID
          </p>
          <input
            className="border-2 rounded-r-md px-1 w-full"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="flex ">
          <p className="bg-gray-200 w-12 border-2 rounded-l-md text-start pl-2 ">
            PW
          </p>
          <input
            className="border-2 rounded-r-md px-1 w-full"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
