var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

// Create component
var TodoComponent = CreateReactClass({
  getInitialState: function(){
    return {
        todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
    }
  },
  render:function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item={item} key={index}/>
      );
    });
    return(
      <div id="todo-list">
        <p onClick={this.clicked}>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
      </div>
    );
  }, // render

  // Custom functions
  clicked: function(){
    console.log('you clicked me!');
  }
});

// Create TodoItem component
var TodoItem = CreateReactClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
});

// Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
