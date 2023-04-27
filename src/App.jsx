import { useState, useEffect } from 'react';
import {featchDataForApi} from "./utils/api";
function App() {
  useEffect(() => {
    apitest();
  }, []);
  const apitest = () => {
    featchDataForApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      hi
    </div>
  )
}

export default App
