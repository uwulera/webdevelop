function List (){
  const numbers = ["Лазанья", "Помидорки", "Суши", "Мамин борщ", "Онигири"];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

return (<div>
  <ul>{listItems}</ul>
  </div>);
}

export default List;
