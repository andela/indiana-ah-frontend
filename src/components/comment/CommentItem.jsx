import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Circle } from 'better-react-spinkit';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from '../../styles/styledComponents/Button.jsx';
import Modal from '../common/Modal.jsx';
import { deleteComment } from '../../redux/actions/commentActions';

export class CommentItem extends Component {
  state = {
    modalIsOpen: false
  };

  handleCommentDelete(commentId) {
    this.props.deleteComment(commentId);
  }

  openModal = () => {
    this.setState(() => ({ modalIsOpen: true }));
  }

  closeModal = () => {
    this.setState(() => ({ modalIsOpen: false }));
  }

  render() {
    const { comment, user } = this.props;
    const modalBody = (
      <div>
        <section className='comment-modal'>
          <h2> Are you sure you want to delete this comment?</h2>
        </section>
        <section className='d-flex justify-content-center mb-5'>
          <Button onClick={this.closeModal} sm className='mr-4'>Cancel</Button>
          <Button onClick={this.handleCommentDelete.bind(this, comment.id)} danger sm>
            Delete
            {this.props.isLoading && (
              <span style={{ float: 'right', padding: '3px 3px 0 10px' }}>
                <Circle color={'rgba(255,255,255,1)'} />
              </span>
            )}
          </Button>
        </section>

      </div>
    );
    return (
      <>
      <div className="comment-item-section">
        <div className="row">
          <div className="col-xs-3 ">
              <img
                className="image"
                src={comment.commenter.imageUrl}
                alt=""
              />
          </div>
          <div className="col-xs-5 ml-3">
            <p className="text-center"><b>{comment.commenter.username}</b></p>
          </div>

          <div className="col-xs-4"><i className="far fa-clock 2x"> </i>
            <span className="comment-time"> &nbsp; {moment(comment.createdAt).fromNow()}</span></div>
        </div>
        <div className="row">
          <div className="col-md-11 pl-10">
            <p className="comment-body">{comment.commentBody}</p>
          </div>
            {comment.userId === user.userData.id && (
              <Dropdown>
              <Dropdown.Toggle>
              &#8942;
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu">

                <Dropdown.Item as="div"><span>Edit</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={this.openModal} ><span>Delete</span></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item ><span>Edit History</span></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            )}
        </div>
        <div className="row comment-reaction">
            <div className="col-xs-6 ml-6"> <i className="far fa-thumbs-up"></i></div>
            <div className="col-xs-6 ml-5"><i className="far fa-thumbs-down"></i></div>
        </div>
      </div>
      <Modal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          body={modalBody}
      />
      </>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  isLoading: state.comments.isLoading
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
