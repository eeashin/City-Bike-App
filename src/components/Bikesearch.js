import React, { Component } from 'react';

class Bikesearch extends Component {

	constructor() {
		super();
		this.state = { 
			bikeList: [],
			filter: "",
			message:[],
			}
	}

	componentDidMount() {
		fetch("http://data.foli.fi/citybike")
			.then(response => response.json())
			.then(responseData => {
				this.setState({
					bikeList: Object.values(responseData.racks)
				});
		});
	}
	  inputChanged = (event) => {
          this.setState({filter: event.target.value})
        }

findBike = ()=> { 
	let msg = this.state.bikeList.filter(item =>
	item.name.toLowerCase()
	.includes(this.state.filter.toLowerCase()))

	this.setState({
					message: msg
				});

if(this.state.message.length <= 0){
	this.setState({
					message: [{bikes_avail: "Search not valid", name: "No match found"}]
				});
}
}

	render() {
	let searchResult = this.state.message.map(result => (
			<tr key={result.name}>
				<td>{result.name}</td>
				<td>{result.bikes_avail}</td>
			</tr>
		))

		return (
			<div className="container">
				<h1>Search Available Bike Here</h1>
				<input
					className="form-control bg-light"
					type="text"
					placeholder="Enter Bike Stop Name"
					name="byBikeStopName"
					value={this.state.filter}
					onChange={this.inputChanged} />
					<button
					className="btn btn-sm btn-outline-success" 
					onClick={this.findBike}>
					Double Click to Search Bike
					</button>
						<table className="table table-striped">
					<tbody>
						<tr>
							<th>Bikestop List</th>
							<th>Bikes Available</th>
						</tr>
						{searchResult}
					</tbody>
				</table>
			</div>
		);
	}
}
export default Bikesearch;
