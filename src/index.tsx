import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('container') as HTMLElement
);

Office.onReady(() => {
    root.render(
        <Provider store={store} >
            <App />
        </Provider>
    );
});
