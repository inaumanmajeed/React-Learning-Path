import './App.css';
import CardUI from './Components/CardUI';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline p-7 bg-slate-300 text-black rounded-xl mb-5">
      Hello Nauman!
    </h1>
    <CardUI productname="Macbook" btnText= "Read More" />
    </>
  )
}

export default App
