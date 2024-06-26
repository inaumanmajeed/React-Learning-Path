import { useState, useCallback, useEffect, useRef } from "react";
// component to generate password with length, number and special charachter options and copy to clipboard option with a button click.
function App() {
  // state to store password length and set password length with setlength function with default value 8. al numberAllowed and charachterAllowed are set to false by default.
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charachterAllowed, setCharachterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  
  // useCallback to generate password with length, number and special charachter options.
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charachterAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charachterAllowed, setPassword]);
  // useEffect to call PasswordGenerator function when length, numberAllowed and charachterAllowed state changes.
  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charachterAllowed, PasswordGenerator]);
  // useRef to store password input element reference.
  const passwordRef = useRef(null);
// function to copy password to clipboard.
  const copyPassToClip = useCallback(() => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 9999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pb-6 py-1">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPassToClip}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input
            type="range"
            min="8"
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setlength(e.target.value)}
          />
          <label>length: {length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charachterAllowed}
            id="charInput"
            onChange={() => setCharachterAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
