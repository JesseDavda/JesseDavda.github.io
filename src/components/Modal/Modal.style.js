const styles = {
    modalContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0px',
        left: '0px',
        zIndex: '10000'
    },
    modalBackground: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: '0px',
        left: '0px',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: '10001'
    },
    modalContent: {
        width: '1100px',
        height: '98vh',
        backgroundColor: '#FFFFFF',
        zIndex: '10002',
        overflowX: 'hidden',
        overflowY: 'scroll',
        boxSizing: 'border-box',
    },
    modalExitContainer: {
        height: '65px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative'
    },
    exitIcon: {
        color: '#000000',
        margin: '20px'
    },
    modalTitle: {
        position: 'absolute',
        left: '50px',
        color: '#000000',
        margin: '0px',
        fontWeight: '300',
        fontSize: '30px'
    }
}

export default styles;