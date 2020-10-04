import React from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Albums from "./Albums"
import Pictures from "./Pictures"
import Main from "./Main"

function App() {
  return (
    <Router basename={"/projects/photoalbum"}>
         <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/albums/:id" component={Albums}/>
          <Route path="/pictures/:id" component={Pictures}/>
        </Switch>
    </Router>
  )
}

export default App
