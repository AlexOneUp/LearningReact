class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;

    return (
      <div>
        <h1>{name}'s Hobbies</h1>
        <ul>
          {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
      </div>
    )
  }
}