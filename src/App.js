import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import MainSlider from './Components/MainSlider'
import Hamburger from './Components/Hamburger';
import Menu from './Components/Menu';
import Main from './Components/Main';

class App extends React.Component {

	state = {
		menuActive: false,
	}

	handleMenu = () => {
		this.setState({
			menuActive: !this.state.menuActive,
		});
	}

	handleArrow = () => {
		let pageHeight = window.innerHeight;
		window.scrollBy(0, pageHeight);
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Hamburger
						menuActive={this.state.menuActive}
						handleMenu={this.handleMenu}
					/>
					<Menu
						menuActive={this.state.menuActive}
						handleMenu={this.handleMenu}
					/>
					<MainSlider handleArrow={this.handleArrow} />
					<Main />
					<ScrollToTop>
						<Route exact path="/" component={About} />
						{/* <Route path="/contact" component={Contact} /> */}
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
