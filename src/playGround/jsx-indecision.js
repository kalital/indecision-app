
   //JSX - Javascript XML    
    const app = {
        title: 'Indecision App',
        subtitle: 'Yes i did it',
        options: []
    };

    const onFormSubmit = (e) => {
       e.preventDefault();
      const option = e.target.elements.option.value;
      if (option) {
          app.options.push(option);
          e.target.elements.option.value = '';
           renderApp();
      }
     
    };
    const remove = () => {
         app.options = [];
         renderApp();
    }

    const onMakeDecision = () => {
      const randomNum = Math.floor(Math.random() * app.options.length);
      const option = app.options[randomNum];
      alert(` ${option}`);
    }
        
    const appRoot = document.getElementById('app');

    const renderApp = () => {
      const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle && app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here your options' : 'No Options'}</p>
          <button disabled={app.options.length === 0}  onClick={onMakeDecision}>What should I do?</button>
            <button onClick={remove}>Remove All</button>
            <ol>
            {
              app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form  onSubmit={onFormSubmit}>
              <input type="text" name="option" />
              <button>Add Option</button>
            </form>
            
        </div>
    );
       ReactDOM.render(template, appRoot)
    
    };
    
  
    renderApp();