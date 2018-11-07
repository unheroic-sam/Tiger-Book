import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { UtilContextConsumer  } from '../../context/utilContext';
import PropTypes from 'prop-types';

class CreatePostBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
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
                    <label>Tittle</label>
                    <input>
                    </input>
                    <label>Text</label>
                    <input>
                    </input>
          			</ModalBody>
          			<ModalFooter>
            			<Button color="primary" onClick={this.toggle}>Post</Button>{' '}
            			<Button color="secondary" onClick={utilContext.toggleCreatePostModal}>Close</Button>
          			</ModalFooter>
        			</Modal>
      			</div>
	      	)}
		</UtilContextConsumer>
    );
  }
}

CreatePostBox.propTypes = {
	onRouteChangePost: PropTypes.func
}

export default CreatePostBox;