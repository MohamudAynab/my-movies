import React, {Component} from 'react';
import '../css/Movie.css';
import PropTypes from 'prop-types'; // be sure to include this!


class Movie extends Component {
    constructor() {
        super();
    }

    render() {
        return (
                <div className="col-sm-6">
                  <div className="card card-view">
                    <div className="card-body">
                      <div className='card-title'>
                      <h5>Rank: {this.props.Rank}</h5>
                      <h3>Title: {this.props.Title}</h3>
                      <p>Description: {this.props.Description}</p>
                      <p>Genre: {this.props.Genre}</p>
                      <p>Year: {this.props.Year}</p>
                      </div>
                    
                     <button className="btn btn-info">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                      
                    
                    </div>
                  </div>
                </div>
              );
            }
          }

          Movie.defaultProps = {
            Title: "",
            Description:"",
            Genre:"",
            Year:""
        };
            
        Movie.propTypes = {
          Title: PropTypes.string
        };

          export default Movie;
    
