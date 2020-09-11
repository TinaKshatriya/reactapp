import React, { Component ,useState,useEffect} from 'react';

const App = () =>{
  //state
  const [news ,setNews] = useState([]);
  const [searchQuery,setSearchQuery] = useState('react');
  const [url,setUrl]=useState("http://hn.algolia.com/api/v1/search?query=react");
  const [loading,setLoading] = useState(false);

  //fetch news

  const fetchNews = () =>{
    //set loading true
    setLoading(true)
    fetch(url)
    .then(result => result.json() )
    .then(data =>(setNews(data.hits),setLoading(false)))
    .catch(error =>console.log(error));
  };

  useEffect(()=>{
    fetchNews()
  },[url]);

  const handleChange=(e) =>{

    setSearchQuery(e.target.value);

  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);

  };

  

  return(
    <div>
      <h2>News</h2>
      { loading ? <h2>Loading..</h2>: ''}
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button>Search</button>
      </form>
      {news.map((n,i)=>(<p key={i}>{n.title}</p>)
      )}

    </div>
  );



}

// const App = () =>{
//   const [count,setCount]= useState(0);

// const increment = () =>{
//    setCount(count + 1);
// }

// useEffect(()=>{
//   document.title=`clicked ${count} times`;

// })

// return (
//         <div>
//         <h2>counter app</h2>
//       <button onClick={increment}>
//          clicked {count} times</button>
//        </div>
//       );
// };


// class App extends Component {

//   state = {
//     count: 0
//   };

//   increment = () =>{
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   componentDidMount() {
//     document.title =`clicked ${this.state.count} times`;

//   }
//   componentDidUpdate(){
//     document.title =`clicked ${this.state.count} times`;

//   }
//   render() {
//     return (
//       <div>
//       <h2>counter app</h2>
//     <button onClick={this.increment}>
//        clicked {this.state.count} times</button>
//      </div>
//     );
    
//   }
// }

export default App;
