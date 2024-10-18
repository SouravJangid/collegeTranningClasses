const myContainer = document.querySelector('#root');
let reactElement = {
    type: 'a',
    props: {
        href: 'https://souravjangid.vercel.app/',
        target: '_blank',
    },
    children: 'Click Here'
}
let myRender=(reactElement,myContainer)=>{
    let x = document.createElement(reactElement.type);
    for(let key in reactElement.props){
        x.setAttribute(key,reactElement.props[key]);
    }
    x.innerHTML = reactElement.children;
    myContainer.appendChild(x);
}
myRender(reactElement,myContainer);