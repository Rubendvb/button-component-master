import Button from "../components/Button";

import "../assets/css/Inputs.css";

export default function Inputs() {
  return (
    <div className="containerInput">
      <section className="section__input">
        <h1 className="section__input__title">Inputs</h1>

        <div className="section__input__container">
          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">{"<Button />"}</span>
              <Button text="Default" className="btn-default" />
            </div>
            <div>
              <span className="container__inputs__span-color">
                &:hover, &:focus
              </span>
              <Button text="Default" className="btn-default-hover" />
            </div>
          </div>

          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">
                {"<Button variant=”outline” />"}
              </span>
              <Button text="Default" className="btn-outline" />
            </div>
            <div>
              <span className="container__inputs__span-color">
                &:hover, &:focus
              </span>
              <Button text="Default" className="btn-outline-hover" />
            </div>
          </div>

          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">
                {"<Button variant=”text” />"}
              </span>
              <Button text="Default" className="btn-variant-text" />
            </div>
            <div>
              <span className="container__inputs__span-color">
                &:hover, &:focus
              </span>
              <Button text="Default" className="btn-variant-text-hover" />
            </div>
          </div>

          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">
                {"<Button disableShadow />"}
              </span>
              <Button text="Default" className="btn-disableShadow" />
            </div>
          </div>

          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">
                {"<Button disabled />"}
              </span>
              <Button text="Default" className="btn-disabled" />
            </div>
            <div>
              <span className="container__inputs__span">
                {"<Button variant=”text” disabled />"}
              </span>
              <Button text="Default" className="btn-disabled-text" />
            </div>
          </div>

          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">
                {"<Button startIcon=”local_grocery_store” />"}
              </span>

              <Button text="Default" iconLeft={true} className="btn-icon" />
            </div>
            <div>
              <span className="container__inputs__span">
                {"<Button endIcon=”local_grocery_store” />"}
              </span>
              <Button text="Default" iconRight={true} className="btn-icon" />
            </div>
          </div>

          <div className="container__inputs btn-size-three">
            <div>
              <span className="container__inputs__span">
                {"<Button size=”sm” />"}
              </span>
              <Button text="Default" className="btn-icon size-sm" />
            </div>
            <div>
              <span className="container__inputs__span">
                {"<Button size=”md” />"}
              </span>
              <Button text="Default" className="btn-icon size-md" />
            </div>
            <div>
              <span className="container__inputs__span">
                {"<Button size=”lg” />"}
              </span>
              <Button text="Default" className="btn-icon size-lg" />
            </div>
          </div>

          <div className="container__inputs btn-size-four">
            <div>
              <div>
                <span className="container__inputs__span">
                  {"<Button color=”default” />"}
                </span>
                <Button text="Default" className="btn-default" />
              </div>
              <div>
                <span className="container__inputs__span-color">
                  &:hover, &:focus
                </span>
                <Button text="Default" className="btn-default-hover" />
              </div>
            </div>

            <div className="container__inputs">
              <div>
                <span className="container__inputs__span">
                  {"<Button color=”primary” />"}
                </span>
                <Button text="Default" className="btn-icon" />
              </div>
              <div>
                <Button text="Default" className="btn-icon btn-icon-hover" />
              </div>
            </div>

            <div className="container__inputs">
              <div>
                <span className="container__inputs__span">
                  {"<Button color=”secondary” />"}
                </span>
                <Button text="Secondary" className="btn-secondary" />
              </div>
              <div>
                <Button text="Secondary" className="btn-secondary-hover" />
              </div>
            </div>

            <div className="container__inputs">
              <div>
                <span className="container__inputs__span">
                  {"<Button color=”danger” />"}
                </span>
                <Button text="Default" className="btn-danger" />
              </div>
              <div>
                <Button text="Default" className="btn-danger-hover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
