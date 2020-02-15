import React, { Component } from 'react';
import Movie from './movie';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          src: "https://trailers.apple.com/trailers/disney/mulan/images/poster_2x.jpg",
          name: "Mulan",
          year: "2020", "rating": 2
        },


        {
          src: "https://resizing.flixster.com/WxaxY9pem8lRU6wUi9bB6Tbo268=/fit-in/278x400/v1.bTsxMzI3ODg1OTtqOzE4Mzc4OzEyMDA7NjA3Mjs5MDAw",
          name: "Bad Boys For Life", "year": "2017", "rating": 3
        },
        {
          src: "https://assets.mubi.com/images/notebook/post_images/19893/images-w1400.jpg?1449196747",
          name: "The Assaassin", "year": "2019", "rating": 3
        }],

      classModel: "modal",
      search: "",
      starSearch: "0",
      name: "",
      rating: 0,
      img: "",
      year: 0,

    }
  }


  addMov = () => {
    this.setState({
      list: [...this.state.list,
      {
        "src": this.state.img,
        "name": this.state.name, "year": this.state.year, "rating": this.state.rating
      }
      ],
    });

  }


  modalChange = () => {
    this.setState({
      classModel: "show-modal"

    })
  }

  closeModal = () => {
    this.setState({
      classModel: "modal"
    })
  }

  changeHandler = e => {

    this.setState({ search: e.target.value.toUpperCase() });
  }

  changeStar = (s) => {
    this.setState({ starSearch: s })
  }
  render() {
    return (<div className="App">
      <div className="SearchAndRate">
        <div>
          <input className="SearchBar" placeholder="Type movie name to search" onChange={this.changeHandler}></input>
          <span className="SearchBtn">Search</span>
          <span>Minimum Rating
          <i className="fas fa-star" onClick={() => { this.changeStar(1) }}></i>
            <i className="fas fa-star" onClick={() => { this.changeStar(2) }}></i>
            <i className="fas fa-star" onClick={() => { this.changeStar(3) }}></i>
            <i className="fas fa-star" onClick={() => { this.changeStar(4) }}></i>
            <i className="fas fa-star" onClick={() => { this.changeStar(5) }}></i></span>

        </div>
      </div>
      <Movie list={this.state.list} />

      <div className="MovieAdd">
        <span className="AddBtn trigger" onClick={this.modalChange}>+</span>
        <div className={this.state.classModel}>
          <div className="modal-content">
            <span className="close-button" onClick={this.closeModal}>&times;</span>
            <span>Please enter movie information</span>
            <span className="movieName">Movie Name</span>
            <input onChange={(e => this.setState({ name: e.target.value }))} className="searchByName"></input>
            <span className="movieRate">Rating</span>
            <input onChange={(e => this.setState({ rating: e.target.value }))} className="searchByRate"></input>
            <span className="MovieYear">Year of release</span>
            <input onChange={(e => this.setState({ year: e.target.value }))} className="searchByYear"></input>
            <span className="MovieSource">Movie Source</span>
            <input onChange={(e => this.setState({ img: e.target.value }))} className="searchBySource"></input>
            <button className="addMovie" onClick={this.addMov}>+</button>
          </div>
        </div>


      </div >

    </div >);
  }
}

export default App;
