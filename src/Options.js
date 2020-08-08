import React from 'react';

class Options extends React.Component {
    render(){
        return (
            <div className="OptionNumbers">
                Option #{this.props.number+1}
            </div>

        );
    }
}

export default Options;