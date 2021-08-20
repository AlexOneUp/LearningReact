class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slots</h1>
        <Slot
          L1='2'
          L2='2'
          L3='2'
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))