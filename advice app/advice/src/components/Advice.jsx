
import { useEffect, useState } from 'react';
import './Advice.css'

const Advice = () => {
  const [msg, setMsg] = useState("plz click button to get some advice");
  const [count, setCount] = useState(null);



  async function Handler() {
    // console.log("working");
    const res = await fetch("https://api.adviceslip.com/advice");
    // console.log(res);
    const data = await res.json();
    setMsg(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    Handler();
    // console.log("hi")
  }, []);

  return (
    <div>
      <h3>{msg}</h3>
      <button onClick={Handler} >Get Advice</button>
      <Counter count={count} />
      {/* <p>you got advice of <b>{count}</b> times</p> */}
    </div>
  );
};
export default Advice


function Counter(props) {
  return (
    <p>you got advice of <b>{props.count}</b> times</p>
  );
};
