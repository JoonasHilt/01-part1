const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
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
      <Footer />
    </div>
  );
};

export default App;
