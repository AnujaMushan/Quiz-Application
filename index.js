import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

function Header() {
  return <header>MCQ</header>;
}

function Footer() {
  return <footer>Thankyou</footer>;
}

function Question(props) {
  return (
    <div>
      <h3>{props.q}</h3>
      <label>
        <input type="radio" name={props.name} value={props.opt1}></input>
        {props.opt1}
      </label>
      <br></br>
      <label>
        <input type="radio" name={props.name} value={props.opt2}></input>
        {props.opt2}
      </label>
      <br></br>
      <label>
        <input type="radio" name={props.name} value={props.opt3}></input>
        {props.opt3}
      </label>
      <br></br>
      <label>
        <input type="radio" name={props.name} value={props.opt4}></input>
        {props.opt4}
      </label>
    </div>
  );
}

function Content(props) {
  function getResults(event) {
    event.preventDefault();
    let marks = 0;
    let q1 = event.target.elements.q1.value;
    let q2 = event.target.elements.q2.value;
    let q3 = event.target.elements.q3.value;
    let q4 = event.target.elements.q4.value;
    let q5 = event.target.elements.q5.value;
    let q6 = event.target.elements.q6.value;
    let q7 = event.target.elements.q7.value;
    let q8 = event.target.elements.q8.value;
    let q9 = event.target.elements.q9.value;
    let q10 = event.target.elements.q10.value;

    // console.log("q1:", q1);

    if (q1 === "D.Java is a platform-independent programming language") {
      marks++;
    }
    if (q2 === "C.SQL stands for Structured Query Language") {
      marks++;
    }
    if (q3 === "C.Modularity") {
      marks++;
    }
    if (q4 === "D.All of the mentioned") {
      marks++;
    }
    if (q5 === "A.Cascading Style Sheets") {
      marks++;
    }
    if (q6 === "D.all of the mentioned") {
      marks++;
    }
    if (q7 === "D.all of the mentioned") {
      marks++;
    }
    if (q8 === "D.All of the mentioned") {
      marks++;
    }
    if (q9 === "D.A type of database") {
      marks++;
    }
    if (q10 === "A.Open-source JavaScript back-end library") {
      marks++;
    }
    alert("Marks: " + marks);
  }
  return (
    <form onSubmit={getResults}>
      <div>
        <Question
          q="1. What is Java?"
          opt1="A.Java is a sequence-dependent programming language"
          opt2="B.Java is a code dependent programming language"
          opt3="C.Java is a platform-dependent programming language"
          opt4="D.Java is a platform-independent programming language"
          name="q1"
        />
        <Question
          q="2. What does SQL stand for?"
          opt1="A.SQL stands for Sample Query Language"
          opt2="B.SQL stands for Structured Query List"
          opt3="C.SQL stands for Structured Query Language"
          opt4="D.SQL stands for Sample Query List"
          name="q2"
        />
        <Question
          q="3. Which is not a feature of OOP in general definitions?"
          opt1="A.Efficient Code"
          opt2="B.Code reusability"
          opt3="C.Modularity"
          opt4="D.Duplicate/Redundant data"
          name="q3"
        />
        <Question
          q="4. What is HTML?"
          opt1="A.HTML describes the structure of a webpage"
          opt2="B.HTML is the standard markup language mainly used to create web pages"
          opt3="C.HTML consists of a set of elements that helps the browser how to view the content"
          opt4="D.All of the mentioned"
          name="q4"
        />
        <Question
          q="5. What is CSS stands for?"
          opt1="A.Cascading Style Sheets"
          opt2="B.Cascade Style Sheet"
          opt3="C.Color Style Sheets"
          opt4="D.Color Style Sheet"
          name="q5"
        />
        <Question
          q="6. Which type of Programming does Python support?"
          opt1="A.object-oriented programming"
          opt2="B.structured programming"
          opt3="C.functional programming"
          opt4="D.all of the mentioned"
          name="q6"
        />
        <Question
          q="7. What is PHP?"
          opt1="A.PHP is an open-source programming language"
          opt2="B.PHP is used to develop dynamic and interactive websites"
          opt3="C.PHP is a server-side scripting language"
          opt4="D.all of the mentioned"
          name="q7"
        />
        <Question
          q="8. What is JavaScript?"
          opt1="A.JavaScript is a scripting language used to make the website interactive"
          opt2="B.JavaScript is an assembly language used to make the website interactive"
          opt3="C.JavaScript is a compiled language used to make the website interactive"
          opt4="D.All of the mentioned"
          name="q8"
        />
        <Question
          q="9. What is Node.js?"
          opt1="A.A front-end framework"
          opt2="B.A back-end framework"
          opt3="C.A JavaScript runtime built on Chrome's V8 JavaScript engine"
          opt4="D.A type of database"
          name="q9"
        />
        <Question
          q="10. What is React.js?"
          opt1="A.Open-source JavaScript back-end library"
          opt2="B.JavaScript front-end library to create a database"
          opt3="C.Free and open-source JavaScript front-end library"
          opt4="D.None of the mentioned"
          name="q10"
        />
      </div>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <input
          type="submit"
          value="Submit the Quiz"
          style={{
            color: "white",
            background: "red",
            padding: "10px 20px",
          }}
        ></input>
      </div>
      <br></br>
    </form>
  );
}
