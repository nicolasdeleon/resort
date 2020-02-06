import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: 'texto falopa de la falopa'
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: 'texto falopa de la falopa'
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle",
                info: 'texto falopa de la falopa'
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: 'texto falopa de la falopa'
            },
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                {this.state.services.map( (item,index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    )
                })}
                </div>
            </section>
        )
    }
}
