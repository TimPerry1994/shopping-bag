import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Item(id) {
	
	var name;
	var cost;
	
	//List of items in the catalog, defaults to unknown item with 0 cost in case of error
	switch(id.value) {
		case 'LN332':
			name = 'Isla Bra';
			cost = 29;
			break;
		case 'LN336':
			name = 'Nordic Rose Bra';
			cost = '30';
			break;
		case 'FY240':
			name = 'Zentangle Bra';
			cost = '34';
			break;
		case 'PN112':
			name = 'Clara Bra';
			cost = 32;
			break;
		case 'FY158':
			name = 'Deco Delight Bra';
			cost = 34;
			break;
		case 'LN328':
			name = 'Sienna Bra';
			cost = 32;
			break;
		default:
			name = 'Not Found';
			cost = 0;
	}
	// Render the name and cost of the item, with a button allowing the item to be added to the shopping bag
	return (
		<div className='item'>{name} - £{cost} <button /*onClick={props.onClick}*/>Add to cart</button></div>
	);
}

class Catalog extends React.Component {
	constructor() {
		super();
		this.state = {
			catalog: ['LN332','LN336','FY240','PN112','FY158','LN328'],
		}
	}
	
	
	renderItem(i) {
		return <Item value={this.state.catalog[i]}/>;
	}
	
	// TODO: Send acknowledgement of "Add to cart" being clicked to ShoppingBag
	
	handleClick(i) {
		//TODO
	}
	
	// Fill the catalog with a list of all available items
	render() {
		return (
			<div>
				<div>{this.renderItem(0)}</div>
				<div>{this.renderItem(1)}</div>
				<div>{this.renderItem(2)}</div>
				<div>{this.renderItem(3)}</div>
				<div>{this.renderItem(4)}</div>
				<div>{this.renderItem(5)}</div>
			</div>
		);
	}
}

class ShoppingBag extends React.Component {
	
	// Initialize the shopping bag as an empty array, item will be used to add to the bag
	constructor() {
		super();
		this.state = {
			item: '',
			catalog: [],
		}
	}
	
	// Adds an item to the catalog array with id corresponding to catalog item
	onItemAdd(id) {
		var item = new Item(id)
		this.setState({
			item: item,
			catalog: [this.state.catalog, this.state.item]
		});
	}
	
	/* TODO: Handle clicks on the "Add to cart button" (Will be sent across from Catalog class)
			 Add a "Remove from cart" button, which will remove an item from the shopping bag
	*/
	
	renderBag() {
		<div>
			//TODO
		</div>
	}
	
	render() {
		return (
			<div>{this.renderBag}</div>
		)
	}
}

ReactDOM.render(
	<Catalog />,
	document.getElementById('root')
)
