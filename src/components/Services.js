import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: 'Enjoy high quality cocktails made special for every occassion!'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'Take a casual stroll along some of the most scenic hikes you have ever seen!'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: 'Take the Free shuttle all around town any time of day. This is always included!'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
