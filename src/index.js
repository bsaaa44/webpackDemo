import _ from 'lodash'
// import './style.css'
// import testImage from './test.png'
// import Data from './data.xml'
// import printMe from './print.js'
// import { cube } from './math.js'

function component() {
    let element = document.createElement('div')
//     // element.innerHTML = [
//     //     'hello webpack',
//     //     '5 cubed is equal to ' + cube(5)
//     // ].join('\n\n')
//     // return element
    let btn = document.createElement('button')
    let br = document.createElement('br')
    btn.innerHTML ='click me'
    element.innerHTML = _.join(['Hello,webpack'],' ')
    element.appendChild(br)
    element.appendChild(btn)
    btn.onclick = e=>import(/* webpackChunkName: "print" */ './print').then(module=>{
        let print = module.default;
        print()
    })
    return element
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//     // btn.innerHTML = 'click me'
//     // btn.onclick = printMe
//     // // element.classList.add('hello')
//     // // let myImage = new Image()
//     // // myImage.src = testImage
//     // // element.appendChild(myImage)
//     // // console.log(Data)
//     return element
}
// // document.body.appendChild(component())
// let element = component()
// document.body.appendChild(element)

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('testtesttest')
//         // printMe()
//         document.body.removeChild(element)
//         element = component()
//         document.body.appendChild(element)
//     })
// }

// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         // console.log('_',_)
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//         console.log('testtest')
//         return element
//     }).catch(error => 'an error')
// }

// getComponent().then(component => {
//     console.log('component',component)
//     document.body.appendChild(component)
// })
document.body.appendChild(component())