import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './comp/App';
import {pi} from "./comp/Math.js";
import  { doublePi, triplePi } from "./comp/Math.js";
import GoodTime from './comp/GoodTime';

//__________Task 1__________//
function List (){
  const numbers = ["Лазанья", "Помидорки с чесноком и майонезом", "Суши", "Мамин борщ", "Пюрешка с гуляшиком....", "Паста с грибочками", "Авокадо (его нужно кушать ложкой)"];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

return (<div>
  <h2>Это моя любимая еда</h2>
  <ul>{listItems}</ul>
  </div>);
}

const food = ReactDOM.createRoot(document.getElementById("food"));
food.render(
  <List />
);


//__________Task 2__________//

const name = 'Бравлер';
  const digit = 1111111111111111111111111111111;

  function TaskTwo ()
  {return(
    <div>
    <h2> Привет, {name}! </h2>
    <a>Твое счастливое число, <span style={{fontWeight: 'bold'}}>{digit}</span></a>
    </div>);
  }

  const hellonum = ReactDOM.createRoot(document.getElementById("hellonum"));
  hellonum.render(
  <TaskTwo />
  );



//__________Task 3__________//


const divStyle = {
  textAlign: 'center', // <-- the magic
  fontWeight: 'bold',
  fontSize: 18,
  marginTop: 0,
  width: 200,
  backgroundColor: 'yellow',
};

function ColorHead () {
  return (<div style={divStyle}>
    <h2>Это задание под номером 3</h2>
    </div>);
}

const task3 = ReactDOM.createRoot(document.getElementById("task3"));
task3.render(
  <ColorHead />
  );


//__________Task 4__________//

const headline = ReactDOM.createRoot(document.getElementById('headline'));
headline.render(
    <App />
);



//5//
const piNum = ReactDOM.createRoot(document.getElementById('piNum'));
piNum.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("piNum")
);

//6//
const timeofday = ReactDOM.createRoot(document.getElementById('timeofday'));
timeofday.render(
    <GoodTime />
);