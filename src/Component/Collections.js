import React, {Component} from 'react';
import '../css/Collections.css';
import  Movie from "./Movie";


class Collections extends Component {
    constructor() {
        super();
        this.state= {
            Movie: []
        }
    }

    addMovie() {
        this.state.Movie.push(
            {
                id: Date.now()
            }
        );
        this.setState (
            {
                Movie: this.state.Movie
            }
        );
    }

    deleteMovie(id)  {
        let newMovieArr = this.state.Movie;
        newMovieArr.map ((Movie, index) => {
            if (id === Movie.id) {
                newMovieArr.splice (index, 1);
            }
        });
        this.setState(
            {
                Movie: newMovieArr
            }
        )
    }

    render() {
        return (
            <div>
                <div className="div-collections">
                    <div className="row">
                        {
                            this.state.Movie.map ( movie => {
                                return <Movie key={movie.id} id={movie.id} deleteHandler={this.deleteMovie.bind(this)}/>
                            })
                        }
                    </div>
                </div>
            <div>
                <button className="btn btn-success add-button" onClick={this.addMovie.bind(this)}>Add</button>
            </div>
        </div>
        );
    }
}
      
export default Collections;