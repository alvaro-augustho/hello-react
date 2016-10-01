var GreeterMessage = React.createClass({
   
    
    render: function() {
        
        var name = this.props.name;
        var message = this.props.message;
        
       return (
        <div>
           <h1>Hello {name}!</h1>
               <p>{message}</p>
           </div>
       );
   } 
});

var GreeterForm = React.createClass({
   
    onFormSubmit: function(e) {
      e.preventDefault();
        
        var updates = {};
        
        var name = this.refs.name.value;
        if(name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
            this.props.onNewData(updates); 
            
        }
        
        var message = this.refs.message.value;
        if(message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
            this.props.onNewData(updates);
        }
    },
    
    render: function() {
       return (
        <div>
           <form onSubmit={this.onFormSubmit}>
               <div>     
               <input type="text" ref="name"></input>
                   </div>
               <div>
                   <textarea ref="message"></textarea>
                   </div>
               <div>
                    <button>Submit</button>
                   </div>
                </form>
           </div>
       );
   } 
});

var Greeter = React.createClass({
    
    getDefaultProps: function() {
        return {
            name: 'Alvaro',
            message: 'This is the default message.'
        };
    },
    
    getInitialState: function() {
        return {
          name: this.props.name,
            message: this.props.message
        };
    },
    
    
    
    handleNewData: function(updates) {
        this.setState(updates);
            
    },
    
    render: function() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm 
                    onNewData={this.handleNewData}
                    />
                
            </div>
        );
    }
});

var name = "Alvaro"

ReactDOM.render(
        <Greeter name={name}  />,
        document.getElementById('app')
    )