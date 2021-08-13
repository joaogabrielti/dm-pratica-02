import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

class StopWatch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            action: 'START',
            timer: 0,
            saved: 0
        }
        this.timer = null
    }

    clear() {
        clearInterval(this.timer)
        this.timer = null
        this.setState({
            action: 'START',
            timer: 0,
            saved: 0
        })
    }

    start() {
        if (this.timer != null) {
            clearInterval(this.timer)
            this.timer = null
            this.setState({
                action: 'START'
            })
        } else {
            this.timer = setInterval(() => {
                this.setState({
                    action: 'STOP',
                    timer: this.state.timer + 0.025
                })
            }, 25)
        }
    }

    save() {
        this.setState({
            saved: this.state.timer
        })
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.background }]}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerButton} onPress={() => this.clear()}>
                        <Text style={styles.headerButtonText}>CLEAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerButton}>
                        <Text style={styles.headerButtonText} onPress={() => this.start()}>{this.state.action}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerButton} onPress={() => this.save()}>
                        <Text style={styles.headerButtonText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.main}>
                    <View style={styles.stopwatch}>
                        <Text style={styles.stopwatchText}>{this.state.timer.toFixed(2)}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{this.state.saved.toFixed(2)}</Text>
                </View>
            </View>
        )
    }
}

export default StopWatch
