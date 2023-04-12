const root = document.querySelector("#root");

const products = [
  {
    id: 1,
    firstname: "Molly",
    lastname: "Begbie",
    email: "mbegbie0@parallels.com",
    gender: "Non-binary",
    age: 12,
    job: "Tax Accountant",
  },
  {
    id: 2,
    firstname: "Mayer",
    lastname: "Kuhnke",
    email: "mkuhnke1@myspace.com",
    gender: "Agender",
    age: 39,
    job: "Legal Assistant",
  },
  {
    id: 3,
    firstname: "Susy",
    lastname: "Kyneton",
    email: "skyneton2@buzzfeed.com",
    gender: "Male",
    age: 36,
    job: "Director of Sales",
  },
  {
    id: 4,
    firstname: "Raquela",
    lastname: "Littlefield",
    email: "rlittlefield3@google.co.uk",
    gender: "Genderqueer",
    age: 69,
    job: "Business Systems Development Analyst",
  },
  {
    id: 5,
    firstname: "Robinetta",
    lastname: "Loughney",
    email: "rloughney4@typepad.com",
    gender: "Female",
    age: 40,
    job: "Financial Advisor",
  },
  {
    id: 6,
    firstname: "Orelle",
    lastname: "Domanski",
    email: "odomanski5@angelfire.com",
    gender: "Polygender",
    age: 32,
    job: "VP Accounting",
  },
  {
    id: 7,
    firstname: "Brandi",
    lastname: "Haliburton",
    email: "bhaliburton6@baidu.com",
    gender: "Bigender",
    age: 57,
    job: "Engineer IV",
  },
  {
    id: 8,
    firstname: "Ario",
    lastname: "Cormack",
    email: "acormack7@sfgate.com",
    gender: "Bigender",
    age: 43,
    job: "Speech Pathologist",
  },
  {
    id: 9,
    firstname: "Kirsti",
    lastname: "Kimmerling",
    email: "kkimmerling8@statcounter.com",
    gender: "Female",
    age: 27,
    job: "Design Engineer",
  },
  {
    id: 10,
    firstname: "Orton",
    lastname: "Renachowski",
    email: "orenachowski9@amazon.co.uk",
    gender: "Genderfluid",
    age: 55,
    job: "Technical Writer",
  },
];

function Card(props) {
  return React.createElement("div", { className: "shopping-item" }, [
    React.createElement("h1", null, [props.id]),
    React.createElement("p", null, [props.firstname]),
    React.createElement("p", null, [props.lastname]),
    React.createElement("a", null, [props.email]),
    React.createElement("p", null, [props.gender]),
    React.createElement("p", null, [props.age]),
    React.createElement("p", null, [props.job]),
  ]);
}

function App() {
  return React.createElement("main", { className: "container" }, [
    ...products.map((product) => React.createElement(Card, product)),
  ]);
}

ReactDOM.render(App(), document.getElementById("root"));
