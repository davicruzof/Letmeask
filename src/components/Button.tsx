import { useState } from "react";

// type ButtonsProps = {
//   children: String;
//   // text?: String; Quando a propriedade é opcional antes dos : coloca uma ?
// }

export const Button = () => {
// let  => let it change
  const [counter, setCounter] = useState(0);
  function increment () {
    setCounter(counter + 1);
    
  }
  return (
  <button onClick={increment}>
    {counter}
  </button>
  )
}