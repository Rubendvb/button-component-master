import Input from "../components/Input";

import "../assets/css/Inputs.css";

export default function Inputs() {
  return (
    <div className="containerInput">
      <section className="section__input">
        <h1 className="section__input__title">Inputs</h1>

        <div className="section__input__container">
          <div className="container__inputs input-size-three">
            <div>
              <span className="container__inputs__span">{"<Input />"}</span>
              <label>
                Label
                <Input />
              </label>
            </div>
            <div>
              <span className="container__inputs__span-color">&:hover</span>
              <label>
                Label
                <Input className="border-dark-gray" />
              </label>
            </div>
            <div>
              <span className="container__inputs__span-color">&:focus</span>
              <label className="container__inputs__label-color">
                Label
                <Input className="border-blue" />
              </label>
            </div>
          </div>

          <div className="container__inputs input-size-three">
            <div>
              <span className="container__inputs__span">
                {"<Input error />"}
              </span>
              <label className="container__inputs__label-colorError">
                Label
                <Input className="border-error" />
              </label>
            </div>
            <div>
              <span className="container__inputs__span-color">&:hover</span>
              <label>
                Label
                <Input className="border-dark-gray" />
              </label>
            </div>
            <div>
              <span className="container__inputs__span-color">&:focus</span>
              <label className="container__inputs__label-colorError">
                Label
                <Input className="border-error" />
              </label>
            </div>
          </div>

          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">
                {"<Input disabled />"}
              </span>
              <label>
                Label
                <Input className="input-disabled" />
              </label>
            </div>
          </div>

          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">
                {"<Input helperText=”Some interesting text” />"}
              </span>
              <label>
                Label
                <Input />
              </label>
              <span className="container__inputs__span-text">
                Some interesting text
              </span>
            </div>
            <div>
              <span className="container__inputs__span">
                {"<Input helperText=”Some interesting text” error />"}
              </span>
              <label className="container__inputs__label-colorError">
                Label
                <Input className="border-error" />
              </label>
              <span className="container__inputs__span-text container__inputs__label-colorError">
                Some interesting text
              </span>
            </div>
          </div>

          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">
                {"<Input startIcon />"}
              </span>

              <label>
                Label
                <Input iconLeft={true} className="placeholder-icon" />
              </label>
            </div>
            <div>
              <span className="container__inputs__span">
                {"<Input endIcon />"}
              </span>
              <label>
                Label
                <Input iconRight={true} />
              </label>
            </div>
          </div>

          <div className="container__inputs">
            <div>
              <span className="container__inputs__span">
                {"<Input value=”text” />"}
              </span>
              <label>
                Label
                <Input valueExist={true} />
              </label>
            </div>
          </div>

          <div className="container__inputs input-size-three">
            <div>
              <span className="container__inputs__span">
                {"<Input size=”sm” />"}
              </span>
              <label>
                Label
                <Input />
              </label>
            </div>
            <div>
              <span className="container__inputs__span">
                {"<Input size=”md” />"}
              </span>
              <label>
                Label
                <Input />
              </label>
            </div>
          </div>

          <div className="container__inputs input-size-three">
            <div>
              <span className="container__inputs__span">
                {"<Input fullWidth />"}
              </span>
              <label>
                Label
                <Input />
              </label>
            </div>
          </div>

          <div className="container__inputs input-size-three">
            <div>
              <span className="container__inputs__span">
                {"<Input multiline row=”4” />"}
              </span>
              <label>
                Label
                <Input />
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
