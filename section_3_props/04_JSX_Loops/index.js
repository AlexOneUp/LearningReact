class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
          name='Elton'
          hobbies={['Singing', 'Guitar', 'Games']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))