import ToyHeader from './components/ToyHeader';
import ToyCard from './components/ToyCard';
import toys from './toys';

function App() {
  return (
    <>
      {/* ToyHeader Component */}
      <ToyHeader />

      {/* Container Component */}
      <div className="container">
        {/* AddToyForm */}
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          {/* Input Component */}
          <input
            type="text"
            name="name"
            value=""
            placeholder="Enter a toy's name..."
            className="input-text"
          />
          <br />
          {/* Input Component */}
          <input
            type="text"
            name="image"
            value=""
            placeholder="Enter a toy's image URL..."
            className="input-text"
          />
          <br />
          {/* Input Component */}
          <input
            type="submit"
            name="submit"
            value="Create Toy"
            className="submit"
          />
        </form>
      </div>
        
      <p style={{ textAlign:"center"}}>
      Andy needs your help! <button id="new-toy-btn">Add a new toy!</button>
      </p>
      
      {/* Collection Container */}
      <div id="toy-collection">
        {toys.map(toy => {
          return <ToyCard key={toy.id} toy={toy}/>
        })}
      </div>
    </>
  );
}

/* 
Outline
- Take HTML from Toy Tales lab and turn it into JSX
  - https://github.com/learn-co-curriculum/phase-1-challenge-toy-tale/blob/master/index.html
  - What needs to change? What's the same?
- Refactor HTML into separate components
- JSX Syntax
- Pass in props

Exercises
- create a ToyCard component
- start by hard-coding the JSX in your component return statement
- then use props to make your component reusable
- you can copy/paste data from the toys.js file as props
- as a bonus, try importing data from the toys.js file
*/

export default App;
