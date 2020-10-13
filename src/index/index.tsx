import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hello from '@comp/Hello/Hello'
import Button from '@comp/Button/Button'
import './index.less'


interface IndexProps { }
interface IndexState {
    time: Date
}

class Index extends Component<IndexProps, IndexState> {
    readonly state: IndexState = {
        time: new Date()
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 500)
    }

    public render() {
        const { time } = this.state
        return (
            <div className='index'>
                <Hello />
                <Button initCount={0} />
                <p className='time'>{time.toLocaleString()}</p>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('content'))