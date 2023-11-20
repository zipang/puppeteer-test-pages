import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import routes from "~react-pages";

const App = () => {
	return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

ReactDOM.createRoot(document.querySelector("#root")).render(
	<Router>
		<App />
	</Router>
);
