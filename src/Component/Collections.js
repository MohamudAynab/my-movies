import React, {Component} from 'react';
import '../css/Collections.css';
import  Movie from "./Movie";


class Collections extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className='div-collections'>
                    <div className='row'>
                       <Movie  Rank="1"  Title="The Goonies"  Description="A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure." Genre="Adventure/Comedy/Family" Year="1985" />
                       <Movie  Rank="2"  Title="Jerry Maguire"  Description="A fired sports agent decides to put his new philosophy to the test as an independent agent with the only athlete who stays with him and his former colleague." Genre="Comedy" Year="1996" />
                       <Movie  Rank="3"  Title="The Godfather"  Description="The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son." Genre="Crime/Drama" Year="1972" />
                       <Movie  Rank="4"  Title="Scarface"  Description="In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed." Genre="Crime/Drama" Year="1983" />
                       <Movie  Rank="5"  Title="Interstellar"  Description="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." Genre="Sci-Fi/Adventure" Year="2014" />
                       <Movie  Rank="6"  Title="The Departed"  Description="An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston." Genre="Crime/Thriller" Year="2006" />
                    </div>
               </div>
            <div>
                <button className='btn btn-sucesss select-button'>Add</button>
            </div>
        </div>
        );
    }
}

export default Collections;