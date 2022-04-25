import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const operation = {
    add: () => setResult(num1 + num2),
    sub: () => setResult(num1 - num2),
    mul: () => setResult(num1 * num2),
    div: () => setResult(num1 / num2),
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-blue-700 text-white">
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col justify-center items-center px-8">
        <div
          className="text-2xl font-bold mb-4"
          data-testid="result"
        >
          { result }
        </div>

        <input
          type="number"
          inputMode="numeric"
          className="my-2 p-2 w-52 bg-zinc-100 border border-zinc-400 text-blue-900 rounded text-xl"
          data-testid="num1"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />

        <input
          type="number"
          inputMode="numeric"
          className="my-2 p-2 w-52 bg-zinc-100 border border-zinc-400 text-blue-900 rounded text-xl"
          data-testid="num2"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />

        <div className="grid grid-cols-2 grid-rows-2 w-52 gap-4">
          <button
            type="button"
            onClick={operation.add}
            className="text-xl p-2 border border-blue-900 bg-blue-800 rounded text-white"
            data-testid="add"
          >
            +
          </button>

          <button
            type="button"
            onClick={operation.sub}
            className="text-xl p-2 border border-blue-900 bg-blue-800 rounded text-white"
            data-testid="sub"
          >
            -
          </button>

          <button
            type="button"
            onClick={operation.mul}
            className="text-xl p-2 border border-blue-900 bg-blue-800 rounded text-white"
            data-testid="mul"
          >
            ×
          </button>
          
          <button
            type="button"
            onClick={operation.div}
            className="text-xl p-2 border border-blue-900 bg-blue-800 rounded text-white"
            data-testid="div"
          >
            ÷
          </button>
        </div>
      </main>

      <footer
        className="bg-blue-900 w-full px-8 py-4 text-center flex justify-center"
        data-testid="footer"
      >
        <p>Made in boredom 🥱 by <a href="https://atifaiman.dev" target="_blank" rel="noreferrer">Atif Aiman</a> | { new Intl.DateTimeFormat('ms-MY', { year: "numeric" }).format(new Date()) }</p>
      </footer>
    </div>
  );
};

export default Home;