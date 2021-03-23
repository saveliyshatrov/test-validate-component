import React from 'react';
import './App.css';
import ValidateComponent from "./ValidateComponent";
import SomeComponent from "./SomeComponent";

function App() {
  return (
      <ValidateComponent validate={true} text={'1'}>
        <SomeComponent>
          <ValidateComponent text={'2'}/>
        </SomeComponent>
        <SomeComponent>
          <ValidateComponent text={'3'}>
              <ValidateComponent text={'4'}/>
          </ValidateComponent>
        </SomeComponent>
          <ValidateComponent text={'5'}>
              <ValidateComponent text={"6"}/>
          </ValidateComponent>
      </ValidateComponent>
  );
}

export default App;
