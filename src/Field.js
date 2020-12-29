import React from 'react';
import styles from './styles.module.css'


export default class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false
        }
    }

    onInputChange(e, customValidation, pattern) {
        if(this.props.handleOnInputChange){
            this.props.handleOnInputChange(e);
        }
        
        const value = e.target.value;
        
        if(customValidation ) {
            this.setState({
                error: !customValidation(value) ? true : false
            })

            return;
        }

        this.setState({
            error: !(value.match(pattern) !== null) ? true: false
        })
    }
    
    render() {
        const { title, type, name, handleOnInputBlur, customValidation, pattern, placeholder } = this.props;
        
        return (
            <div>
                <label>{title}</label>
                <input 
                    name={name} 
                    type={type} 
                    onChange={(e) => this.onInputChange(e, customValidation, pattern)} 
                    onBlur={handleOnInputBlur}
                    pattern={pattern}
                    placeholder={placeholder}
                    required
                />
                {this.state.error ? <div className={styles.errormsg}> * Please enter valid input</div> : null }
            </div>
        )
    }
}