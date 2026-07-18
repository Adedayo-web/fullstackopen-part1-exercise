const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Contentboby = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};
const parts = [
  { part: "Fundamentals of React", exercise: 10 },
  { part: "Using props to pass data", exercise: 7 },
  { part: "State of a component", exercise: 14 },
];
const Content = (props) => {
  return (
    <>
      <Contentboby part={parts[0].part} exercise={parts[0].exercise} />
      <Contentboby part={parts[1].part} exercise={parts[1].exercise} />
      <Contentboby part={parts[2].part} exercise={parts[2].exercise} />
    </>
  );
};

const Total = (props) => {
  return <p> Number of exercises {props.exer1 + props.exer2 + props.exer3}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total
        exer1={parts[0].exercise}
        exer2={parts[1].exercise}
        exer3={parts[2].exercise}
      />
    </div>
  );
};

export default App;
