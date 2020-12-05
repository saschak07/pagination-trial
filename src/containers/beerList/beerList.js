import axios from 'axios'
import React,{Component} from 'react'
import Listitem from '../../components/listItem/listItem'
import ReactPaginate from 'react-paginate';
import './beerList.css'

class beerList extends Component{
    state = {
        beersList : [],
        images: [],
        offset: 0,
        perPage: 10,
        currentPage: 0
    }

    componentDidMount (){
        this.receivedData();
    }
      
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    

    receivedData = async() =>{
        try{
            let beers = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json')
            let photos = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json')
            let beersdata = beers.data.slice(this.state.offset,this.state.offset+this.state.perPage)
            this.setState({images:photos.data})
            this.setState({beersList : beersdata})
        } catch(e){
            console.log(e)
        }
    }

    render(){
        const beers = this.state.beersList.map(beer => {
            return (<Listitem key={beer.id}
            name={beer.name}
            style={beer.style}
            ibu={beer.ibu}
            ounces={beer.ounces}
            image ={this.state.images[beer.id % 5]}
            />)
        })
        return (<div>
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            {beers}
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        </div>)
    }
}

export default beerList