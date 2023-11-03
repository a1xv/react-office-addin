import React from 'react';
import './App.css';
import {VariablesPage} from "./pages/VariablesPage/VariablesPage";

function App() {

    // function logElement(){
    //     console.log('document', document);
    //     console.log('element', document.querySelector('.NormalTextRun'));
    // }
    //
    // const test = () => {
    //     click().then(() => {
    //         logElement();
    //     })
    // }
    //
    // const click = async () => {
    //     return Word.run( async (context) => {
    //         context.document.body.insertText('variable', Word.InsertLocation.end);
    //     });
    // };

  return (
    <div className="App">
         <VariablesPage />
    </div>
  );
}

export default App;
