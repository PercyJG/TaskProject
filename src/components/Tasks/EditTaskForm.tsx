import { Component } from "react";
import { createRoot } from "react-dom/client";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/models/actions";
import { AppState } from "../../store/rootStore";
import { Task } from "../../store/task/models/Task";
import { PostAddStatus } from "../../store/task/TaskAction";
interface props {
  onBackdropClick: () => void;
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

class EditTaskForm extends Component<LinkProps> {
  render() {
    const root = createRoot(document.getElementById("editTaskForm")!);
    return root.render(
      <div onClick={this.props.onBackdropClick}>
        <span>this is the form</span>
      </div>
    );
  }
}

export default EditTaskForm;
