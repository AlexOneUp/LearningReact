class Slot extends React.Component {
    render() {
        const { L1, L2, L3 } = this.props;
        const win = (L1 === L2) && (L2 === L3);
        return (
            <div>
                <p>
                    {L1} {L2} {L3}
                </p>
                <p>
                    {win ? 'WIN' : 'LOSE'}
                </p>
            </div>
        )
    }
}