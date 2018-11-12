import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { UtilContextConsumer  } from '../../context/utilContext';
import { PostsContextConsumer  } from '../../context/postsContext';
import PropTypes from 'prop-types';

class CreatePostBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dropdownOpen: false,
      post_title: '',
      post_text: '',
      community_id: 1
    };

    this.toggle = this.toggle.bind(this);
  }

  onTitleChange = (event) => {
    this.setState({post_title: event.target.value})
  };

  onPostTextChange = (event) => {
    this.setState({post_text: event.target.value})
  };

  onPostCreated = (event) => {
    this.setState({post_text: event.target.value})
  };

  onSubmitCreatePost = (postsContext, utilContext) => {
    fetch('http://localhost:3000/submitPost', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: this.state.post_title,
        content: this.state.post_text,
        user_id: utilContext.state.user.id,
        community_id: this.state.community_id
      })
    })
      .then(response => response.json())
      .then(post => {
        postsContext.getAllPosts()
        utilContext.toggleCreatePostModal()
      })
  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal,
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { onRouteChangePost } = this.props;
    return (
        <PostsContextConsumer>
      	 {(postsContext) => (
          <UtilContextConsumer>
          {(utilContext) => (
            <div>
              <Modal isOpen={utilContext.state.showCreatePostModal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={utilContext.toggleCreatePostModal}>Create a post</ModalHeader>
                <ModalBody>
                    <ButtonDropdown direction='left' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle caret>
                        Choose a Community
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Community 1</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Community 2</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                    <div className="form-group">
                      <label>Title</label>
                      <input onChange={this.onTitleChange} lassName="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Text</label>
                      <textarea onChange={this.onPostTextChange} className="form-control" />
                    </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={() => {
                    this.onSubmitCreatePost(postsContext, utilContext)
                  }}>Post</Button>
                  <Button color="secondary" onClick={utilContext.toggleCreatePostModal}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
          )}
    </UtilContextConsumer>
          )}
        </PostsContextConsumer>
    );
  }
}

CreatePostBox.propTypes = {
	onRouteChangePost: PropTypes.func
}

export default CreatePostBox;