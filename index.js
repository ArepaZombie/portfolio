class App extends React.Component{
  render(){
    return (<h1>Hola React</h1>)}
}

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

const ReactAppFromCDN = ()=>{
  return (
      <div>My React App with CDN</div>
  )
}
 
ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#roots'));
