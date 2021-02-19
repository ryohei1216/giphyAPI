import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import {TodoApp} from './TodoApp';
import axios from 'axios';
import {AddTodo} from './components/AddTodo';
import './App.css'




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {gifUrlList: []} ;
  }

  renderImageList(list){
    const imageList = list.map( (url) => {
      return (
      <li className="item"><img className="image" src = {url} /></li>
      )
    })

    return <ul className="list">{imageList}</ul>;
  }

  //このコンポーネントがDOMにレンダリングされたタイミングでgiphy関数を作動させる
  //→この関数によってstateが変更される
  //→stateが変更されると再レンダリングされてsetStateによって変更した内容がsatateに変換されて表示される
  // componentDidMount(){
  //   this.giphyApi();
  // }

  render(){
    console.log(this.state.gifUrlList)
    return (
      <div>
        <AddTodo search={this.giphyApi}/>
        {this.renderImageList(this.state.gifUrlList)}
      </div>
      ) 
  }

  giphyApi = (target) => {

  const search = target;
  const key = "2WSf5P581m2FPgzSfdwXTdRz7OeFNBNu";
  const limit = 50;

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  axios.get(url).then( res => {
    const data = res.data.data;
    const imageUrlList = data.map((item, index) => {
      return item.images.downsized.url;
    });
    this.setState({gifUrlList: imageUrlList});
  });

  }
}


render(<App />, document.getElementById('root'));

