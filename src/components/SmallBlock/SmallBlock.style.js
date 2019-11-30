const styles = {
    container: {
        position: 'relative',
        width: '250px',
        height: '250px',
        backgroundColor: '#FFFFFF',
        margin: '10px',
        boxSizing: 'border-box',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flexStart',
    },
    titleContainer: {
        position: 'absolute',
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '-5px'
    },
    titleText: {
        color: '#FFFFFF',
        position: 'absolute',
        fontWeight:'300',
        fontSize: '28px',
        zIndex: '100',
        margin: '0px',
    }
}

export default styles;