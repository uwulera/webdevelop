import React from 'react';
import ReactDOM from 'react-dom/client';
import Contacts from './Contacts';

function Person()
{
  return(<div>
  <Contacts name="краш всех времен и народов" link = "https://i.pinimg.com/564x/43/5e/dc/435edc60a42e3b6d069a5a11654bbc89.jpg" phone="+666 666 666" mail="deadinside2010@cool.com" />
  <Contacts name="не отвечать на звонки (постоянно присылает пацанские цитаты про волков)" link = "https://puzzleit.ru/files/puzzles/37/36688/_original.jpg" phone="+8 800 555 35 35" mail="wolftrue@au.com" />
  </div>);
}

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Person />
);
