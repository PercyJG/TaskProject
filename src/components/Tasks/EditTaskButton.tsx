import { Component } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { AppActions } from "../../store/models/actions";
import { AppState } from "../../store/rootStore";
import { Task } from "../../store/task/models/Task";
import { PostAddStatus } from "../../store/task/TaskAction";
import BaseModalWrapper from "./BaseModalWrapper";

interface props {
  editTask: Task;
}

interface LinkStateProps {
  tasks: Task[];
}

interface LinkDispatchProps {
  PostAddStatus: (task: Task) => void;
}

type LinkProps = props & LinkStateProps & LinkDispatchProps;

const mapStateProps = (state: AppState): LinkStateProps => ({
  tasks: state.TaskReducer.tasks,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  PostAddStatus: bindActionCreators(PostAddStatus, dispatch),
});

class EditTaskButton extends Component<LinkProps, { isModalVisible: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  };
  render() {
    return (
      <>
        <button onClick={this.toggleModal}>Edit Task</button>
        <BaseModalWrapper
          isModalVisible={this.state.isModalVisible}
          onBackdropClick={this.toggleModal}
        />
      </>
    );
  }
}

export default connect(mapStateProps, mapDispatchToProps)(EditTaskButton);
