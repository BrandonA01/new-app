import React from 'react';

class About extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
  }

  getFilms(){

    let filmsDiv = document.getElementById('Films');
    filmsDiv.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Rating</th>
    </tr>`
    fetch(`http://localhost:8080/Home/allFilms?page=${this.state.value}`, {method:'GET'})
    .then(res => res.json())
    .then(films => {
      films.content.forEach(film => {
        filmsDiv.innerHTML += `
        <tr>
          <td>${film.title}</td>
          <td>${film.description}</td>
          <td>${film.star_rating}</td>
        </tr>`
      });
    })
  }

  renderUrl(){
      return (
        <getFilms value={this.state.page}/>
      );
  }
    render(){
      return(
        <div>
          <div id="About">
              <h1>About me</h1>
          </div>
          <table id="Films">
          </table>
          <button id='page1' value="1">1</button>
          <button id='page2' value="2">2</button>
        </div>
      );
    }
  }

  export default About;