#assignment QNA

## What is JSX, and why is it used?
JSX is stands for javasciprt XML. it use to write code's of html, css, and js in one scope.

## What is the difference between State and Props?
boths are like variable. they can store data. but state can store data in a component. and it's manageable or change within this component. otherside, props store can data as component key. and it's pass the data parent to child component. props data just read only. can't change it.

## What is the useState hook, and how does it work?
it's a hook, can store initial value of varriable and callback function. using callback function we can do operation base on this state.
```
const [ticket, setTicket] = useState([]);
```
Here, ticket is like variable . and initial value is [] empty array. by using setTicket function we can add or remove ticket based on this state variable.

## How can you share state between components in React?
using lift state up system. first i need to decleare state in parent component. after this, we can pass the state as props value of child component. then we can access it from child component after desctructuring props of this state.

## How is event handling done in React?
event handling in react, it's similar like html but need to use camelCase name. and the function will be instead of string. example- onClick=(function name as string). onClick is like camel Case.