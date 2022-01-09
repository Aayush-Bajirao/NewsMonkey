import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let {title, description, imgUrl, newsUrl} = this.props;
         return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={!imgUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCAfVgATBaPFFWX2WWJF6x-gVW4P1mdvfKA&usqp=CAU":imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank"className="btn btn-sm btn-dark">Read more...</a>
                    </div>
                    </div>
                    
            </div>
        )
    }
}

export default NewsItem
