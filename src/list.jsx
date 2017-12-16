var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
    render: function() {
        return <div>
        	{this.renderList()}
        </div>
    },
    renderList: function() {
    	if(!this.props.items) {
    		return <div className="well">
    			<h4 className="text-center">What will you do today?</h4>
    		</div>
    	} else {
    		var children = [];


    		for(var key in this.props.items) {
          var item = this.props.items[key];
          item.key = key;

    			children.push(
    				<ListItem
              item={item}
              key={key}>
    				</ListItem>
    			)
    		}
    		return children;
    	}
    }
});