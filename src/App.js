import React from 'react';
import ReactDOM from 'react-dom/client';
import { AllPosts } from "./components";
import "./index.css";

function App() {

  return (
    <div>
    <AllPosts />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);

export default App;
