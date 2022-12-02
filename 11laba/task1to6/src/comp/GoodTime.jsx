var date = new Date();
var hour = date.getHours();
function GoodTime()
{
    if(hour>=4 && hour <= 11)
    {return(<h2>Доброе утро!</h2>)}
    if(hour>=11 && hour <= 16)
    {return(<h2>Добрый день!</h2>)}
    if(hour>=16 && hour <= 24)
    {return(<h2>Добрый вечер!</h2>)}
    if(hour>=0 && hour <= 4)
    {return(<h2>Доброй ночи!</h2>)}
}

export default GoodTime;