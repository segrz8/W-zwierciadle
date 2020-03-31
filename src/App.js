import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Hamburger from './Components/Hamburger';
import Menu from './Components/Menu';

import MainPage from './Components/MainPage'
import About from './Components/About'
import Offer from './Components/Offer'
import Dogs from './Components/Dogs'
import Family from './Components/Family'
import Portraits from './Components/Portraits'
import Blog from './Components/Blog'
import Contact from './Components/Contact'

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
					<ScrollToTop>
						<Route exact path="/"
							render={(props) => <MainPage {...props}
								handleArrow={this.handleArrow} />}
						/>
						<Route path="/about" component={About} />
						<Route path="/offer" component={Offer} />
						<Route path="/dogs" component={Dogs} />
						<Route path="/family" component={Family} />
						<Route path="/portraits" component={Portraits} />
						<Route path="/blog" component={Blog} />
						<Route path="/contact" component={Contact} />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
