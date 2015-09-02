import "./style.css";
import "./katex.min.css";
import "./asciidoctor.css";
import "./coderay-asciidoctor.css";
import React from 'react'; 
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';
// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
{/*// Redux DevTools store enhancers
//import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
//import { thunk } from "redux-thunk";

const finalCreateStore = compose(
		  // Enables your middleware:
		  applyMiddleware(thunk),
		  // Provides support for DevTools:
		  devTools(),
		  // Lets you write ?debug_session=<name> in address bar to persist
			// debug sessions
		  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
		)(createStore);




let store = finalCreateStore(todoApp);
*/}

let store=createStore(todoApp);

let rootElement = document.getElementById('root');


React.render(
		<div>
  
  <Provider store={store}>
    {() => <App />}
  </Provider>
  {/*<DebugPanel top right bottom>
  <DevTools store={store} monitor={LogMonitor} />
</DebugPanel>
*/}  </div>
  ,
  rootElement
);

