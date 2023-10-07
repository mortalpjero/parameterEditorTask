import React, { Component } from 'react';

interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
}

class ParamEditor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      paramValues: [...props.model.paramValues],
    };
  }

  updateParamValue = (paramId: number, value: string) => {
    this.setState((prevState) => ({
      paramValues: prevState.paramValues.map((paramValue) =>
        paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
      ),
    }));
  };

  getModel = (): Model => {
    return {
      paramValues: [...this.state.paramValues],
      colors: this.props.model.colors,
    };
  };

  render() {
    const { params } = this.props;
    const { paramValues } = this.state;

    return (
      <div>
        {params.map((param) => (
          <div key={param.id}>
            <label>{param.name}</label>
            <input
              type="text"
              value={
                paramValues.find((paramValue) => paramValue.paramId === param.id)?.value || ''
              }
              onChange={(e) => this.updateParamValue(param.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ParamEditor;
