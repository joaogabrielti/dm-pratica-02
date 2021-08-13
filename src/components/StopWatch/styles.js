import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column'
    },
    header: {
        padding: 8,
        width: '100%',
        flexDirection: 'row'
    },
    headerButton: {
        marginLeft: 6,
        marginRight: 6,
        flexGrow: 1,
        padding: 8,
        backgroundColor: '#262626',
        borderRadius: 2
    },
    headerButtonText: {
        color: '#fff',
        textAlign: 'center'
    },
    main: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        backgroundColor: '#262626',
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12
    },
    footerText: {
        fontSize: 38,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center'
    },
    stopwatch: {
        backgroundColor: '#262626',
        paddingTop: 48,
        paddingBottom: 48,
        paddingRight: 64,
        paddingLeft: 64,
        borderRadius: 48,
    },
    stopwatchText: {
        fontSize: 48,
        fontWeight: '700',
        color: '#fff'
    }
});

export default styles