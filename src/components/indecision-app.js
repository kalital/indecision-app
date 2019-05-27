import React from 'react';
 import AddOption from './AddOption';
 import Options from './Options';
 import Header from './Header';
 import Action from './Action';
 import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handelClear = () => {
    this.setState(() => ({selectedOption: undefined}))
  }

  handelDeletAll = () => {
    this.setState(() => ({options:[]}));
  };
  handelDeleteOption = (optionToremove) => {
    this.setState((prevS) => ({
       options: prevS.options.filter((option) => optionToremove !== option)
    }));
  };
   handelPick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option= this.state.options[randomNum];
       this.setState(() => ({
         selectedOption: option
       }))
   };
   handleAddOption = (option) => {
      if(!option) {
        
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exisit';
      }

     this.setState((prevS) => ({options: prevS.options.concat(option)}));
   };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch(e) {
      //Do nothing at all
    }
      
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options' , json);
    }
    
  };
  componentWillUnmount() {
    console.log('componentWillUnmount!')  
  };
   render() {
    const subTitle = 'Put your life in the hands of a computer.';
    return (
    <div>
     <Header subTitle = {subTitle}  />
       <div className="container">
         <Action 
            hasAction={this.state.options.length > 0} 
            handelPick={this.handelPick}
              />
          <div className="widget">
            <Options 
            options={this.state.options}
            handelDeletAll={this.handelDeletAll}
            handelDeleteOption={this.handelDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
         </div>
            <OptionModal 
              selectedOption={this.state.selectedOption}
              closeModal={this.handelClear}
           />
   </div>
    );
  }
}

