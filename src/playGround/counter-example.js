  class Counter extends React.Component {
      constructor(props) {
          super(props);
          this.addOne = this.addOne.bind(this);
          this.minesOne = this.minesOne.bind(this);
          this.reset = this.reset.bind(this);
          this.state = {
              count: 0
          };
      }

      componentDidMount() {
          const stringCount = localStorage.getItem('count');
          const count = parseInt(stringCount, 10);
          if (!isNaN(count)){
              this.setState(() => ({count}));
          }
      }
   
      componentDidUpdate(prevProps, prevState) { 
      if (prevState.count !== this.state.count){
          localStorage.setItem('count', this.state.count)
      }
      
    }
      addOne() {
          this.setState((prevState) => {
              return {
                  count: prevState.count + 1
              }
          })
      }

      minesOne() {
          this.setState((prevState) => {
              return {
                  count: prevState.count - 1
              }
          })
      }
      reset() {
          this.setState(() => {
              return {
                  count: 0
              }
          })
      }

      render() {
          return (
              <dive>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minesOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
               </dive>
          );
      }
  }   

  

  ReactDOM.render(<Counter />, document.getElementById('app'))
   
   
   