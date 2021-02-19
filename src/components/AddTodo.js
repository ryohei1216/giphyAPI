import React from 'react'

export class AddTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {title: ""}
  }

  render () {
    return(
      <div>
        <h2>Find Your Gif</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type ="submit" value="Search!!"  />
        </form>
      </div>
    )
  }

  handleChange = (event) => {
    const title = event.target.value;
    this.setState({title: title});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.search(this.state.title);
    this.setState({title: ""});

  }
}
