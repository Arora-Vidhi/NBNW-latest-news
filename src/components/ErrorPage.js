import React, { Component } from 'react'

export class ErrorPage extends Component {
    render() {
        let headingStyles = {color: "#d0e1fc", fontSize: "5em", textShadow: "5px 5px 13px #e4edfc3c"}
        let contentStyles = {color: "#d0e1fc", fontSize: "1.5em"}
        return (
            <>
                <div className="fullscreen text-center" style={{width: "100%", paddingTop: "5em"}}>
                    <span style={headingStyles}>ERROR...</span>
                    <hr></hr>
                    <span className="content" style={contentStyles}>Sorry, we are facing technical difficulties. Please try again in a while.</span>
                </div>
            </>
        )
    }
}

export default ErrorPage