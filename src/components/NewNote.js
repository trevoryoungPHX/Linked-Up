import React, { Component } from 'react'

class NewNote extends Component {
  render () {
    return (
      <div className = "newConnection">
        <button type="button" onClick={this.props.toggleAddNote} id = "closeButton" class="btn btn-danger"><b>X</b></button>
        <form class="form-horizontal">
          <fieldset>
          <legend id = "newLegend">NEW NOTE</legend>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="contact_id">CONNECTION</label>
            <div class="col-md-8">
              <select id="contact_id" name="contact_id" class="form-control">
                <option value="1">Option one</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="description">DESCRIPTION</label>
            <div class="col-md-8">
              <textarea class="form-control" id="description" value="description" name="description"></textarea>
            </div>
          </div>
          <button type="button" id="newSubmitButton"  className="btn btn-secondary">SUBMIT CONNECTION NOTE</button><br></br>
          </fieldset>
          </form>
      </div>
    )
  }
}

export default NewNote
