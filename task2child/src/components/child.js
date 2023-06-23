import React from 'react';
//import App from '../App.js'


class Child extends React.Component {
    
	state = {name: "",
		
	}
	handleCallback = (ParentData) => {
		 
		this.setState({ name: ParentData })
	}
	onTrigger = (event) => {
		
		this.props.parentCallback(event.target.myname.value);
		event.preventDefault();
	}

	render() {
        const { name } = this.state;
		return (
			<div>
				<form onSubmit={this.onTrigger}>
                
					<input type="text"
							name="myname"
							placeholder="Enter Name" />
					<br></br><br></br>
					<input type="submit" value="Submit" />
					<br></br><br></br>
                    <input type="checkbox" id="child" value="child"/>
                    <label for="child"> this is child one</label><br></br>
				</form>
                <p>this is the child componet displays parent data  {name}</p>
				
               
			</div>
		)
	}
}
export default Child