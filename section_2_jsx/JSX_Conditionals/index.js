function getNum() {
    return Math.floor(Math.random() * 10) + 1;
    // return 7;
}
class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let message;
        if (num === 7) {
            message = 
            <div>
                <h2>Congrats, you win</h2>
            </div>
        } else {
            message = 
            <p>Sorry, you lose</p>
        }
        return (
            <div>
                <h1>Your number is : {num}</h1>
                {message}
            </div>
        )
    }
}
ReactDOM.render(<NumPicker />, document.getElementById('root'));