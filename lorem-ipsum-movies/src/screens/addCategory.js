import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import SideContainer from "../containers/SideContainer";
import SectionLabel from "../components/SectionLabel";
import FormContainer from "../containers/FormContainer";

function addCategory() {
  return (
    <DefaultTemplate>
      <SideContainer>
        <SectionLabel>DASHBOARD | NEW CATEGORY</SectionLabel>
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
          <div className="form-row">
                <div className="form-col-reference">
                <label for="categoryName">Category name</label>
              </div>
              <div className="form-col-input">
                <input type="text" id="categoryName" name="categoryName" />
              </div>
            </div>

            <div className="form-row">
                <div className="form-col-reference">
                <label for="categoryDescription">Description</label>
              </div>
              <div className="form-col-input">
                <textarea
                  type="text"
                  id="categoryDescription"
                  name="categoryDescription"
                />
              </div>
            </div>

            <div class="form-row">
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </FormContainer>
      </SideContainer>
    </DefaultTemplate>
  );
}

export default addCategory;
