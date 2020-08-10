import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import SideContainer from "../containers/SideContainer";
import FormContainer from "../containers/FormContainer";
import SectionLabel from "../components/SectionLabel";

function addCategory() {
  return (
    <DefaultTemplate>
      <SideContainer>
        <SectionLabel>+ ADD CATEGORY</SectionLabel>
        <h1>Add a new Category</h1>
        <ul className="list-form-steps">
          <li>Pick up a name for your new Category</li>
          <li>Add a brief description</li>
          <li>Click submit</li>
        </ul>
      </SideContainer>

      <SideContainer>
        <FormContainer>
          <form>
            <div className="row">
              <div className="col-25">
                <label for="categoryName">Category name</label>
              </div>
              <div className="col-75">
                <input type="text" id="categoryName" name="categoryName" />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label for="categoryDescription">Description</label>
              </div>
              <div className="col-75">
                <textarea
                  type="text"
                  id="categoryDescription"
                  name="categoryDescription"
                />
              </div>
            </div>

            <div class="row">
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </FormContainer>
            </SideContainer>
    </DefaultTemplate>
  );
}

export default addCategory;
