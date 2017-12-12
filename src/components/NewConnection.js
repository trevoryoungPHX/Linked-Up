import React, { Component } from 'react'

class NewConnection extends Component {
  render () {
    return (
      <div className = "newConnection">
        <button type="button" id = "closeButton" onClick={this.props.toggleAddConnection} class="btn btn-danger"><b>X</b></button>
        <div class = "center">
        <form class="form-horizontal">
          <fieldset>
            <legend id = "newLegend">NEW CONNECTION</legend>
            <div class="form-group">
              <label class="col-md-4 control-label" id="labelForm" for="first_name">FIRST NAME</label>
              <div class="col-md-8">
              <input id="first_name" name="first_name" value="first_name" type="text" placeholder="" class="form-control input-md" required="" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" id="labelForm" id="labelForm" for="last_name">LAST NAME</label>
              <div class="col-md-8">
              <input id="last_name" name="last_name" value="last_name" type="text" placeholder="" class="form-control input-md" required="" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" id="labelForm" for="company">COMPANY NAME</label>
              <div class="col-md-8">
              <input id="company" name="company" value="company" type="text" placeholder="" class="form-control input-md" required="" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" id="labelForm" for="profession">PROFESSION</label>
              <div class="col-md-8">
              <input id="profession" name="profession" value="profession" type="text" placeholder="" class="form-control input-md" required="" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" id="labelForm" for="phone">PHONE NUMBER</label>
              <div class="col-md-8">
              <input id="phone" name="phone" value="phone" type="text" placeholder="" class="form-control input-md" required="" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" id="labelForm" for="email">EMAIL ADDRESS</label>
              <div class="col-md-8">
              <input id="email" name="email" type="email" value="email" placeholder="" class="form-control input-md" required="" />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-4 control-label" id="labelForm" for="photo_url">PHOTO URL</label>
              <div class="col-md-8">
              <input id="photo_url" name="photo_url" value="photo_url" type="text" placeholder="" class="form-control input-md" required="" />
              </div>
            </div>
            <button type="button" id="newSubmitButton" className="btn btn-secondary">Add Connection</button><br></br>
          </fieldset>
        </form>
    </div>
  </div>
    )
  }
}

export default NewConnection
