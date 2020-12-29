import React from 'react';

export default class Select extends React.Component {

    handleOnOptionSelection(e) {
        this.props.handleOnInputChange(e);
    }
    
    render() {
        const { options, name, placeHolder = 'Select Option' } = this.props;
        
        return (
            <div>
                <select name={name} onChange={(e) =>this.handleOnOptionSelection(e)}>
                    <option value=''>{placeHolder}</option>
                    {options.map((item) => {
                        return (
                            <option value={item}>{item}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}