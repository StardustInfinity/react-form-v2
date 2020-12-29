import React from 'react';

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
        const { type, name, handleOnInputBlur, customValidation, pattern } = this.props;
        
        return (
            <div>
                <input 
                    name={name} 
                    type={type} 
                    onChange={(e) => this.onInputChange(e, customValidation, pattern)} 
                    onBlur={handleOnInputBlur}
                    pattern={pattern}
                />
                {this.state.error ? <div>Some error message</div> : null }
            </div>
        )
    }
}