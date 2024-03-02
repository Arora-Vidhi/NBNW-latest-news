import React, { Component } from 'react'

export class Loader extends Component {
	render() {
		let screenSize = {
			height: "100vh",
			width: "100%"
		}
		let loaderStyles = {
			height: "100px",
			width: "100px",
			borderRadius: "50%",
			borderTop: "10px solid #d0e1fc",
			position: 'absolute',
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			animation: "spin 2s linear infinite"
		}
    	return (
    		<>
				<div className="fullscreen" style={screenSize}>
					<style>{`@keyframes spin {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}`}</style>
					<div className="loader" style={loaderStyles}></div>
				</div>
			</>
    	)
	}
}

export default Loader