import _ from 'lodash';
import './style.css'
import pageIcon from './pageIcon';
import pageLoad from '../pageLoad';

const pageTitle = function () {
    let title = document.createElement('h1');
    title.textContent = "Restaurant title";
    title.classList.add('hello');
    console.log('load title')
    return title;
}

const pageParagraph = function () {
    let paragraph = document.createElement('p');
    paragraph.textContent = "Our food and restaurant is so good that everyone should come in to eat here.";
    paragraph.classList.add('hello');
    console.log('load paragraph')
    return paragraph;
}

pageLoad();

export { pageTitle, pageParagraph }
