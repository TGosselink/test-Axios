import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            compenent: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({compenent: cmp.default});
                });
        }

        render () {
            const C = this.state.compenent;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;