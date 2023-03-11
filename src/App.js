/*

Creative uses for this project beyond keeping dates straight for the near future:
-Make notes for certain historical dates for school or hobby
-Keep a log events (soon with images, so that will be worth more)
-






*/

import './App.css';
// import Note from './components/Note/Note';
import NotePad from './components/NotePad/NotePad';
import Calendar from './components/Calendar/Calendar';

//const templateNote = <Note title={'Note Title'} text={'Note text.'} color={'#0094d8'} />;


function App() {

  return (
    <div className="App">
      <NotePad notes={[]}/>
      <Calendar />
    </div>
  );
}

export default App;
