import Menu from "./components/Menu";

import "./assets/css/App.css";

function App() {
  return (
    <div className="container">
      <Menu />

      <section>
        <h1>Buttons</h1>

        <div>
          <div>
            <span>{"<Button />"}</span>
            <button>Default</button>
          </div>
          <div>
            <span>&:hover, &:focus</span>
            <button>Default</button>
          </div>
        </div>

        <div>
          <div>
            <span>{"<Button variant=”outline” />"}</span>
            <button>Default</button>
          </div>
          <div>
            <span>&:hover, &:focus</span>
            <button>Default</button>
          </div>
        </div>

        <div>
          <div>
            <span>{"<Button variant=”text” />"}</span>
            <button>Default</button>
          </div>
          <div>
            <span>&:hover, &:focus</span>
            <button>Default</button>
          </div>
        </div>

        <div>
          <span>{"<Button disableShadow />"}</span>
          <button>Default</button>
        </div>

        <div>
          <div>
            <span>{"<Button disabled />"}</span>
            <button>Default</button>
          </div>
          <div>
            <span>{"<Button variant=”text” disabled />"}</span>
            <button>Default</button>
          </div>
        </div>

        <div>
          <div>
            <span>{"<Button startIcon=”local_grocery_store” />"}</span>
            <button>Default</button>
          </div>
          <div>
            <span>{"<Button endIcon=”local_grocery_store” />"}</span>
            <button>Default</button>
          </div>
        </div>

        <div>
          <div>
            <span>{"<Button size=”sm” />"}</span>
            <button>Default</button>
          </div>
          <div>
            <span>{"<Button size=”md” />"}</span>
            <button>Default</button>
          </div>
          <div>
            <span>{"<Button size=”lg” />"}</span>
            <button>Default</button>
          </div>
        </div>

        <div>
          <div>
            <div>
              <span>{"<Button color=”default” />"}</span>
              <button>Default</button>
            </div>
            <div>
              <span>{"&:hover, &:focus"}</span>
              <button>Default</button>
            </div>
          </div>

          <div>
            <div>
              <span>{"<Button color=”primary” />"}</span>
              <button>Default</button>
            </div>
            <div>
              <button>Default</button>
            </div>
          </div>

          <div>
            <div>
              <span>{"<Button color=”secondary” />"}</span>
              <button>Default</button>
            </div>
            <div>
              <button>Default</button>
            </div>
          </div>

          <div>
            <div>
              <span>{"<Button color=”danger” />"}</span>
              <button>Default</button>
            </div>
            <div>
              <button>Default</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
