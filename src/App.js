import React from 'react';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner'

class App extends React.Component {

    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        return (
            !this.state.lat && !this.state.errorMessage ?
                <Spinner message="Please Allow us to get your location..."/>:
            this.state.error ? 
                <div>Error: {this.state.errorMessage}</div>:
            <SeasonDisplay lat={this.state.lat} />
        )
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        ) 
    }
}

export default App;