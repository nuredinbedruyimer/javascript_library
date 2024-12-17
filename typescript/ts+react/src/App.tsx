import "./App.css";
import Button from "./components/Button";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <h1>Ts + React</h1>
      <Button title="checkout" disabled={false} />
      <Section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut
          voluptatum soluta dignissimos ipsum sit quae ad, repellat ducimus
          tempora iusto in cidunt alias. Ipsam eveniet, molestias animi beatae
          eos optio?
        </p>
      </Section>
    </div>
  );
}

export default App;
