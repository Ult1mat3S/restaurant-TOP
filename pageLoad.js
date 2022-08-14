import { pageTitle, pageParagraph } from "./src";

const pageLoad = function () {
    window.onload = (event) => {
        console.log('page is fully loaded');
        document.body.appendChild(pageTitle());
        document.body.appendChild(pageParagraph());
    };
}


export default pageLoad;
