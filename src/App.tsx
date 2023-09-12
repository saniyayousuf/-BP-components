import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicButton from "./components/Button"
import DateComponent from "./components/DatePicker"
import DynamicTable from "./components/Table"
import Selectcomponent from "./components/Select"
import IconButtons from "./components/IconButton"
import BasicSwitches from "./components/Switch"
import Input from "./components/Input"


function App() {

  interface TableColumn {
    key: any;
    heading: string;
  }

  const datasource = [
    { id: 1, name: 'Zuniar', age: 30, isStudent: false },
    { id: 3, name: 'Hammad', age: 35, isStudent: false },
    { id: 4, name: 'Shahzain', age: 22, isStudent: true },
    { id: 5, name: 'Mehroz', age: 28, isStudent: false },
    { id: 2, name: 'Zain', age: 25, isStudent: true },
    { id: 6, name: 'Hassan', age: 29, isStudent: true },

  ];

  const columns: TableColumn[] = [
    { key: 'id', heading: 'ID' },
    { key: 'name', heading: 'Name' },
    { key: 'age', heading: 'Age' },
    { key: 'isStudent', heading: 'Student' },
  ];



  return (
    <div >

      <div className='main'>
        <h2>Button Component</h2>
        <BasicButton label={'CLick here ▶'} variant={'standared'}
          onClick={
            () => { <p>Succesfully submitted</p> }
          } />

      </div>




      <div className='main'>
        <h2>Table Component</h2>
        <DynamicTable data={datasource} columns={columns} />
      </div>

      <div className='main'>
        <h2>Select Component</h2>
        <Selectcomponent />
      </div>

      <div className='main'>
        <h2>IconButton Component</h2>
        <IconButtons />
      </div>

      <div className='main'>
        <h2>Switch Component</h2>
        <BasicSwitches />
      </div>


      <div className='main'>
        <h2>Input Component</h2>
        <Input label={'name'} variant={'outlined'} onChange={() => { console.log("set") }
        } required={false} type={'text'} />
      </div>

      <div className='main'>
        <h2>Date Component</h2>
        <DateComponent />
      </div>


    </div>
  );
}

export default App;
