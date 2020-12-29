import React from 'react';

export default class Select extends React.Component {

    handleOnOptionSelection(e) {
        if (this.props.handleOnInputChange) {
            this.props.handleOnInputChange(e);
        }
    }
    
    render() {
        const { title, options, name, placeHolder = '--Select Hobby--' } = this.props;
        
        return (
            <div>
                <label>{title}</label>
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