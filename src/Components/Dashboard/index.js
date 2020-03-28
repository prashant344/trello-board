import React, { Component } from "react";
import "./index.css";
import Card from "../Card";
import addIcon from "./icon/plus.png";

class DashboardRaw extends Component {
  state = {
    tasks: [
      { id: 1, name: "Learn Vue", categoryId: 1 },
      { id: 2, name: "Learn Angular", categoryId: 1 },
      { id: 3, name: "Learn React", categoryId: 3 }
    ],
    category: [
      { id: 1, name: "toDo", text: "To Do" },
      { id: 2, name: "inProgress", text: "In Progress" },
      { id: 3, name: "done", text: "Done" }
    ]
  };

  onDragover = ev => {
    ev.preventDefault();
  };

  onDrop = (ev, catId) => {
    let id = ev.dataTransfer.getData("id");
    const tasks = this.state.tasks.map(task => {
      if (task.id === parseInt(id)) {
        task.categoryId = catId;
      }
      return task;
    });
    this.setState({ tasks });
  };

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  onTextChange = e => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === parseInt(e.target.id)) {
        task.name = e.target.value;
      }
      return task;
    });
    this.setState({ tasks });
  };

  addTile = cat => {
    this.setState(prevState => {
      const id = prevState.tasks.length + 1;
      const tasks = [...prevState.tasks, { id, name: "", categoryId: cat }];
      return { tasks };
    });
  };

  removeTile = id => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  };

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    const renderCard = catId =>
      this.state.tasks.length
        ? this.state.tasks.map(task =>
            task.categoryId === catId ? (
              <Card
                item={task}
                key={task.id}
                onDragStart={this.onDragStart}
                handleKeyDown={this.handleKeyDown}
                onTextChange={this.onTextChange}
                removeTile={this.removeTile}
              />
            ) : null
          )
        : null;
    const renderCategory = cat => (
      <div
        className={"category"}
        draggable
        key={cat.id}
        onDragOver={e => this.onDragover(e)}
        onDrop={e => this.onDrop(e, cat.id)}
      >
        <div className={"categoryTitle"}>{cat.text}</div>
        {renderCard(cat.id)}
        <button className={"addTileBtn"} onClick={() => this.addTile(cat.id)}>
          <img alt={"add icon"} src={addIcon} className={"addIcon"} />
        </button>
      </div>
    );

    return (
      <div className={"dashboard"}>
        {this.state.category.map(cat => renderCategory(cat))}
      </div>
    );
  }
}

export default DashboardRaw;
