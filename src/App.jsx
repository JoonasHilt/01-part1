import { useState } from "react";

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  console.log(name, age);

  /* HOX, JATKA ENSIKERALLA --C OSA _ KOMPONENTIN TILA JA TAPAHTUMAKÄSITTELY, Destrukturointi!!  */

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  );
};
//uusi komponentti
const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href="https://github.com/JoonasHilt"> Joonas</a>
    </div>
  );
};

//----//
const App = () => {
  // counter alkaa
  const [counter, setCounter] = useState(0);
  console.log("Counter is now at", counter);
  //nappien tapahtuma käsittelijät
  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  // counter loppuu
  const nimi = "Pekka";
  const ika = 10;
  const friends = [
    { name: "Levvi", age: 4 },
    { name: "Venla", age: 10 },
  ];
  //palauttaa komponentit//
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>
      <div>{counter} LASKURI</div>
      <button onClick={increaseByOne}>PLUS</button>
      <button onClick={setToZero}>ZERO</button>
      <Footer />
    </div>
  );
};

export default App;
