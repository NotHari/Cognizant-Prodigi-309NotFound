import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import Dijkstra from "./pages/Dijkstra";
import Dfs from "./pages/Dfs";
import { SnackbarProvider } from "notistack";

function App() {
	return (
		<SnackbarProvider>
			<div className="App">
				<NavBar />
				<Switch>
					<Route path="/dfs" exact component={Dfs} />
					<Route path="/dijkstra" exact component={Dijkstra} />
				</Switch>
			</div>
		</SnackbarProvider>
	);
}

export default App;
