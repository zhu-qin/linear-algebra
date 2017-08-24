import { h, render, Component } from 'preact';
import { Main } from './matrix/main.jsx'
/** @jsx h */

document.addEventListener('DOMContentLoaded', () => render(<Main />, document.getElementById('root')))
