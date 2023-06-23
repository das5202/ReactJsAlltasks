import React from 'react';
import Child from './components/child'
class App extends React.Component {

	state = {
		name: "",
	}
	handleCallback = (childData) => {
		
		this.setState({ name: childData })
	}
    
    onTrigger = (event) => {
        this.props.ChildCallback(event.target.myname.value);

        event.preventDefault();
    }
	render() {
		const { name } = this.state;
		return (
            
			<div>
                <form onSubmit={this.onTrigger}>
                
                <input type="text" name="myname" placeholder="Enter Name" />
                <br></br><br></br>
                <input type="submit" value="Submit" />
                <br></br><br></br>
                <p>this is the parent componet displays child data  {name}</p>
                <input type="checkbox" id="parent" value="parent"/>
                <label for="child"> this is parent one</label><br></br>
            </form>
            <br></br><br></br>
            <br></br><br></br>
            
				<Child parentCallback={this.handleCallback} />
               
			</div>
		)
	}
    
}
export default App