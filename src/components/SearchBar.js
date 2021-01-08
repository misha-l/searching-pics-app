import React from 'react';


class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = event =>{
       event.preventDefault();
       this.props.onSubmittt(this.state.term)
    };

    render() {
      return (
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                   <label style={{float: "left", width: "400px", textAlign: "right", fontWeight: "bold"}}>Type here some word to find image<br />(for example type CAR)<br /> and press ENTER</label>
                   <input style={{float: "left", marginLeft: "10px",  marginRight: "10px", marginTop: "16px"}} type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value})}/>
                </div>
            </form>
          </div>
      );
    }
  }

export default SearchBar