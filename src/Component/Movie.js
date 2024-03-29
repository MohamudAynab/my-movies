import React, {Component} from 'react';
import '../css/Movie.css';
import PropTypes from 'prop-types'; 


const MOVIE_TITLE = "Movie Title", MOVIE_RANK =" Movie Rank",  MOVIE_DESCRIPTION="Movie Description", MOVIE_GENRE="Movie Genre", MOVIE_YEAR=" Movie Year";

class Movie extends Component {
    constructor(props) {
        super(props);
        this.rankContent = React.createRef();
          this.titleContent = React.createRef();
          this.descriptionContent = React.createRef();
          this.genreContent = React.createRef();
          this.yearContent = React.createRef();
        this.state = {
                rank: MOVIE_RANK,
                title:  MOVIE_TITLE,
                description: MOVIE_DESCRIPTION,
                genre: MOVIE_GENRE,
                year: MOVIE_YEAR,
                editMode: false
        }
    }

    handleEdit() {
      this.setState( {
        editMode: true
      });
    }

    handleSave() {
      this.setState({
        Rank: this.rankContent.current.value,
        Title: this.titleContent.current.value,
        Description: this.descriptionContent.current.value,
        Genre: this.genreContent.current.value,
        Year: this.yearContent.current.value,
        editMode: false
      });
    }

    handleDelete() {
            this.props.deleteHandler(this.props.id);
    }
    
    render(){
      let rankElement, titleElement, descriptionElement, genreElement, yearElement, buttonArea; 
      if (this.state.editMode){
         rankElement = <textarea ref={this.rankContent} className="rank-textarea" defaultValue={this.state.rank}></textarea>;
         titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
         descriptionElement = <textarea ref={this.descriptionContent} className="description-textarea" defaultValue={this.state.description}></textarea>;
         genreElement = <textarea ref={this.genreContent} className="genre-textarea" defaultValue={this.state.genre}></textarea>;
         yearElement = <textarea ref={this.yearContent} className="year-textarea" defaultValue={this.state.year}></textarea>;
         buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save Movie</button></div>
      }else{
          rankElement=<h5 className="card-body">{this.state.rank}</h5>;
          titleElement = <h5 className="card-body">{this.state.title}</h5>;
          descriptionElement = <p>{this.state.description}</p>; 
          genreElement = <p>{this.state.genre}</p>
          yearElement =<p>{this.state.year}</p>
          
          buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit Movie</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete Movie</button></div>
      }
      //Edit the css for id's below to see if pages looks better..
      return (
          <div className='col-sm-6'>             
              <div className="card card-view">
                  <div className="card-body">
                      {rankElement}
                      {titleElement}
                      {descriptionElement}
                      {genreElement}
                      {yearElement}
                      {buttonArea}
              </div>
          </div>
      </div>
      );
    }
}

Movie.defaultProps = {
  Rank:"",
  Title: "",
  Description: "",
  Genre: "",
  Year: "",
};

Movie.propTypes = {
  title: PropTypes.string
};

export default Movie; 


