import React from 'react'
import styles from './styles.module.css'
import Select from './Select'
import Field from './Field'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component Test: {text}</div>
}

class ReactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            phoneNumber: '',
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
        this.handleOnInputBlur = this.handleOnInputBlur.bind(this);
    }

    handleOnInputChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        
        this.setState({
            [name]: value
        });
    }
    
    handleOnInputBlur(e) {
        this.handleOnInputChange(e);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.state);
    }

    render() {
        // https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
        const self = this;
        const childrenWithProps = React.Children.map(this.props.children, child => {
            if(React.isValidElement(child)) {
                return React.cloneElement(child, { 
                    handleOnInputChange: self.handleOnInputChange,
                    handleOnInputBlur: self.handleOnInputBlur,
                });
            }
            return child;
        });
        return (
            <form onSubmit={this.handleFormSubmit}>
                {childrenWithProps}
            </form>
        )
    }
}

export {ReactForm, Select, Field}