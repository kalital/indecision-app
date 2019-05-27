class VisiabilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false
    }

  }
  toggleVisibility() {
    this.setState((prevS) => {
      return {
        visibility: !prevS.visibility
      }
    })
  }
  render() {
        return (
      <div>
       <h1>Visiablity Toggle</h1>
        < button  onClick={this.toggleVisibility} >
          { this.state.visibility ? 'hide details' : 'show details'}
        </button>

        {this.state.visibility && (
      
            <div>
              <p>This is some details now you can see</p>
            </div>

        )}
        
      </div>
);

  }
}

ReactDOM.render(<VisiabilityToggle />, document.getElementById('app'))

