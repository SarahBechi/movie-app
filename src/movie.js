import React, { Component } from 'react';
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <div className="items_list">
                {this.props.list.filter(item => item.name.toUpperCase().includes(this.props.search)
                    || item.rating === this.props.starSearch)


                    .map((item, i) => {
                        return (


                            <div key={i}>


                                <img className="image" src={item.src} alt={"movie"}></img>

                                <div className="name">{item.name}</div>
                                <div className="year">{item.year}</div>
                                <div className="rate">{"".padEnd(item.rating, '*')}</div>

                            </div>)

                    }


                    )

                }



            </div>




        );
    }
}



export default Movie;







 // .filter(item => item.name.toUpperCase().includes(this.props.search) || item.rating === this.props.starSearch)




        //{this.props.list.filter(item=>item.name.toUpperCase().includes(this.props.search.toUpperCase()) || item.rating === this.props.starSearch )








/**  render() {
return (<div className="items_list">

{this.props.list.filter(item => item.name.includes(this.props.search) || item.rating === this.props.starSearch)

        .map((item, i) =>   <div key={i}>

            <img className="image" src={item.src} alt={"movie"}></img>
            <div className="name">{item.name}</div>
            <div className="year">{item.year}</div>
            <div className="rate">{"".padEnd(item.rating, '*')}</div>

        </div>)}
</div>);




}
}
*/