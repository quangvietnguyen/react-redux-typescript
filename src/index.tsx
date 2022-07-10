import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

// interface AppProps {
//   color?: string;
// }

// App function is a component that renders a div with a color prop
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };

// interface AppState {
//   counter: number;
// }

// class App extends React.Component<AppProps> {
//   // constructor(props: AppProps) {
//   //   super(props);
//   //   this.state = {
//   //     counter: 0,
//   //   };
//   // }
//   state = { counter: 0 };

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
