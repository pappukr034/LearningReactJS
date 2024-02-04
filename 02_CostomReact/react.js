

// Root element
const rootElement=document.querySelector("#root");

// My own react element pros
const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Go to GOOGLE"
}

// creating a method that append a reactelement to rooot element

function costomReactRender(reactElement,rootElement){
   /* const reactEle=document.createElement(reactElement.type);
    reactEle.innerHTML=reactElement.children;
    reactEle.setAttribute('href',reactElement.props.href);
    reactEle.setAttribute('target',reactElement.props.target);
    rootElement.appendChild(reactEle); */
    const reactEle=document.createElement(reactElement.type);
    reactEle.innerHTML=reactElement.children;
    for (const key in reactElement.props) {
        if(key==='children') continue;
       reactEle.setAttribute(key,reactElement.props[key]);
    }
    rootElement.appendChild(reactEle);
}


costomReactRender(reactElement,rootElement);