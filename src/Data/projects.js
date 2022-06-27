import BrickBreakerB from '../images/BB.png'
import TodoList from '../images/todolist.png'
import GYRSA from '../images/GYRSA.png'
import Sell from '../images/sell.png'
import JuiceBar from '../images/juicebar.png'


export const projects = [
    {
        id:Math.round(Math.random() * 1000),
        name:'Brick Breaker',
        poster:BrickBreakerB,
        codeURL:'',
        liveVersion:'https://glittery-valkyrie-77595e.netlify.app',
    },
    {
        id:Math.round(Math.random() * 1000),
        name:'Todo List',
        poster:TodoList,
        codeURL:'https://github.com/GiorgiNefaridze/TodoList-Functional-Component',
        liveVersion:'https://todo-app9.netlify.app'
    },
    {
        id:Math.round(Math.random() * 1000),
        name:'GYRSA',
        poster:GYRSA,
        codeURL:'',
        liveVersion:'https://super-hotteok-234642.netlify.app'
    },
    {
        id:Math.round(Math.random() * 1000),
        name:'Sell.',
        poster:Sell,
        codeURL:'https://github.com/GiorgiNefaridze/Sell',
        liveVersion:'https://chimerical-llama-3ebd01.netlify.app'
    },
    {
        id:Math.round(Math.random() * 1000),
        name:'Juice Bar',
        poster:JuiceBar,
        codeURL:'https://app.netlify.com/sites/sleepy-goldstine-88b5c3/overview',
        liveVersion:'https://sleepy-goldstine-88b5c3.netlify.app'
    },
]