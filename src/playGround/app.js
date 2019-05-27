

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handelDeletAll = this.handelDeletAll.bind(this);
    this.handelPick = this.handelPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handelDeleteOption = this.handelDeleteOption.bind(this)
    this.state = {
      options: []
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch(e) {
      //Do nothing at all
    }
      
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options' , json)
    }
    
  }
  componentWillUnmount() {
    console.log('componentWillUnmount!')
  }

  handelDeletAll() {
    this.setState(() => ({options:[]}));
  }
  handelDeleteOption(optionToremove) {
    this.setState((prevS) => ({
       options: prevS.options.filter((option) => optionToremove !== option)
    }));
  }
   handelPick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option= this.state.options[randomNum]
       alert(option)
   }
   handleAddOption(option) {
      if(!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exisit';
      }

     this.setState((prevS) => ({options: prevS.options.concat(option)}))
   }
  render() {
    const subTitle = 'Put your life in the hands of a computer.';
    return (
    <div>
     <Header subTitle = {subTitle}  />
  
     <Action  
     hasAction={this.state.options.length > 0} 
     handelPick={this.handelPick}
      />
     <Options 
     options={this.state.options}
     handelDeletAll={this.handelDeletAll}
     handelDeleteOption={this.handelDeleteOption}
     />
     <AddOption 
      handleAddOption={this.handleAddOption}
     />
   </div>
    );
  }
}


const Header = (props) => {
      return (
        <div>
          <h1>{props.title}</h1>
          {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
      )
    };

Header.defaultProps = {
  title: 'Indecision'
}


const Action = (props) => {
    return (
      <div>
        <button 
        onClick={props.handelPick}
        disabled={!props.hasAction}
        >
        What should I do?
        </button>
      </div>
    )
};





const Options = (props) => {  
    return (
      <div>
        <button onClick={props.handelDeletAll}> Remove All</button>
        {props.options.length === 0 && <p>please add an option to get start</p>}
        {
          props.options.map((option) => (
            <Option
              key={option}
              optionText={option}
              handelDeleteOption={props.handelDeleteOption}
            />
          ))
        }
        
      </div>
    )
  };

const Option = (props) => {
    return (
        <div>
         {props.optionText}
        <button 
        onClick={(e)=> {
            props.handelDeleteOption(props.optionText);
        }}
        >
        remove
        </button>
        </div>
       )
     };



class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
      e.preventDefault();
      const inputVlue = e.target.elements.option.value
      const option = inputVlue.trim();
      const error = this.props.handleAddOption(option);
      
      this.setState(() => ({error}));

      // clearing input field if there is not error
      if (!error) {
         e.target.elements.option.value = '' 
      }
}
  render() {
    return (
      <div>
         {this.state.error && <p>{this.state.error}</p>}
         <form  onSubmit={this.handleAddOption}>
              <input type="text" name="option" />
              <button>Add Option</button>
            </form>
      </div>
    );
  }
}





// const  User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name} </p>
//       <p>Age: {props.age} </p>
//     </div>
//   ) 
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
   

   
 
 