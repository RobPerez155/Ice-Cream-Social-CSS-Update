import React from "react";

const FlavorInformationComponent = ({ name, description, image_url }) => {
  return (
    <>
      <div class="flavor-information-border">
        <div class="basic-card">
          <div class="grid-x grid-padding-x align-center">
            <div class="cell small-4">
              <div class="basic-card-content">
                <div class="basic-card-image display-image">
                  <img src={image_url} />
                </div>
              </div>
            </div>
          </div>
          <div class="basic-card-content content callout secondary">
            <h5>{name}</h5>
            <p>{description}</p>
          </div>
          <table class="hover">
            <thead>
              <tr>
                <div class="table-top">
                <th width="200">Username</th>
                <th width="450">Review</th>
                </div>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Username</td>
                <td> </td>
                <td>Rating</td>
                <td>
                  <button type="button" class="button">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" class="alert button">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Username</td>
                <td> </td>
                <td>Rating</td>
                <td>
                  <button type="button" class="button">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" class="alert button">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>Username</td>
                <td> </td>
                <td>Rating</td>
                <td>
                  <button type="button" class="button">
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" class="alert button">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FlavorInformationComponent;
