
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
   
    onSearchSubmit = async (term) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos',{
        params: { query: term}
      })
      
      this.setState({ images: response.data.results })
    }

    render() {
       return (
           <div className="ui container" >
               <div style={{ float: "left", width: "100%" , paddingBottom: "20px", borderBottom: "1px solid #878787"}}>
               <SearchBar onSubmittt={this.onSearchSubmit}/>
               <p style={{float: "left", marginTop: '18px' }}>Found: {this.state.images.length} images</p>
               </div>
               <div style={{ float: "left", width: "100%", marginTop: "30px"}}>
               <ImageList images={this.state.images}/>
               </div>
           </div>
       );
    }
  }

export default App;