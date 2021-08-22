function getMood() {
    const moods = ['Angry', 'Hungry', 'Happy']
    return moods[Math.floor(Math.random() * moods.length)]
}
class JSXDemo extends React.Component {
    render() {
        return (
            // <div>

            //     <h1>
            //         My Image
            // <img src='https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'></img>
            //     </h1>
            // </div>
            <div>
                <h1>My current mood is: {getMood()}</h1>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))