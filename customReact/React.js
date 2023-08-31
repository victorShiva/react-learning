function customRender(reactElement,Container){

    /*               PART-1
    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    console.log(domElement)
    Container.appendChild(domElement)
    */

    const domElement =document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const property in reactElement.props){
        if(property === 'children')continue;
        domElement.setAttribute(property,reactElement.props[property])
    }
    Container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'click me visite google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

