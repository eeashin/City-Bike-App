import React, { Component } from 'react';

class Bikelist extends Component {
	constructor() {
		super();
		this.state = { bikeList: [] }
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

	render() {
		let bikes = this.state.bikeList.map(bike => (
			<tr key={bike.name}>
				<td>{bike.name}</td>
				<td>{bike.bikes_avail}</td>
			</tr>
		))

		return (
			<div className="container">
				<h1>List of City Bike Stops</h1>
				<table className="table table-striped">
					<tbody>
						<tr>
							<th>Bikestop List</th>
							<th>Bikes Available</th>
						</tr>
						{bikes}
					</tbody>
				</table>
			</div>
		);
	}
}
export default Bikelist;
