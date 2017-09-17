import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts, getComments } from '../actions';

class Photogrid extends Component {

  componentDidMount() {
    this.props.getPosts();
    this.props.getComments();
  }

  renderPosts() {
    return _.map(this.props.myposts, mypost => {
      return (
        <li className="list-group-item" key={mypost.code}>
          {mypost.caption}
        </li>
      );
    });
  }


  render() {
    console.log('this.props.myposts ', this.props.myposts);
    return (
      <div>
        <h3>Photo Grid</h3>
        <ul className="list-group">
        { this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    myposts: state.myposts,
    comments: state.comments
  };
}

export default connect(mapStateToProps, { getPosts, getComments } )(Photogrid);
