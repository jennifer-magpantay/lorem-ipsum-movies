import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import SectionLabel from "../components/SectionLabel";
import FormContainer from '../containers/FormContainer';
import SideContainer from "../containers/SideContainer";

class addArticle extends React.Component {
  //using controlled component
  //set the state as empty ''
  //set events when any changes or submission happens
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: "",
      category: "",
      articleContent: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //set an event when the state/handle changes
  handleChange = (event) => {
    this.setState({
      articleTitle: event.target.value,
      category: event.target.value,
      articleContent: event.target.value,
    });
  };

  //set an alert to confirm the change
  handleSubmit = (event) => {
    console.log(
      "Article Registered: " + this.state.articleTitle,
      this.state.category,
      this.state.articleContent
    );
    alert(
      "Article Registered: " + this.state.articleTitle,
      this.state.category,
      this.state.articleContent
    );
    event.preventDefault();
  };
  //"Article Registered: " + this.state.value

  render() {
    return (
      //to activate and validate the changes, add onSubmit to the form
      //also, specify each element/input will receive the changes
      <DefaultTemplate>
        <SideContainer>
          <SectionLabel>DASHBOARD | NEW ARTICLE</SectionLabel>
          <h1>Add a new Article</h1>
          <ul className="list-form-steps">
            <li>Pick up a title for your new Article</li>
            <li>Choose a category that best fits</li>
            <li>Add a brief description</li>
            <li>Click submit</li>
          </ul>
        </SideContainer>
        <SideContainer>
        <FormContainer>                 
          <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-col-reference">
                  <label htmlFor="articleTitle">Title</label>
                </div>
                <div className="form-col-input">
                  <input
                    type="text"
                    id="articleTitle"
                    name="articleTitle"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-col-reference">
                  <label htmlFor="categoryName">Category</label>
                </div>
                <div className="form-col-input">
                  <select
                    id="category"
                    className="category"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <option value="Books">Books</option>{" "}
                    <option value="Food">Food</option>
                    <option value="Movies">Movies</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-col-reference">
                  <label htmlFor="articleContent">Content</label>
                </div>
                <div className="form-col-input">
                  <textarea
                    type="text"
                    id="articleContent"
                    name="articleContent"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <input type="submit" value="SUBMIT" />
              </div>
            </form>  
            </FormContainer>
        </SideContainer>
      </DefaultTemplate>
    );
  }
}

export default addArticle;
