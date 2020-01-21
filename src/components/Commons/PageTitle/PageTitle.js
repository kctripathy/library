import React, { Component } from 'react';
import './PageTitle.css';

class PageTitle extends Component {
    render() {
        console.log(this.props)
        return (            
            <>
                <h2 className="PageTitle">{this.props.title}</h2>
            </>
        );
    }
}

export default PageTitle;