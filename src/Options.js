import React from 'react';

class Options extends React.Component {
    render(){
        return (
            <div className="OptionNumbers">
                Option 
                <a href={this.props.links} target='_blank' >#{this.props.number+1}</a>
            </div>

        );
    }
}

export default Options;