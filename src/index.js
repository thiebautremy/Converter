import React from 'react';
import { render } from 'react-dom';

import Converter from './components/Converter/index';

import './styles/index.scss';

const rootReactElement = <Converter />;
const target = document.getElementById('root');
render(rootReactElement, target);
