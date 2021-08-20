class Hello extends React.Component {
    render() {
        const tP = this.props;
        return <h1>Hello {tP.to} from {tP.from}</h1>
    }
}

