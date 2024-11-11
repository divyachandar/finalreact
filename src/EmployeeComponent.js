import React from 'react';

class EmployeeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg:"",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5240/api/Values") // Corrected URL
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            msg: result
          });
        }
      );
  }

  render() {
    return (
      <div>
        {/* Display employees data here */}
        {this.state.msg}
      </div>
    );
  }
}

export default EmployeeComponent; // Corrected export syntax