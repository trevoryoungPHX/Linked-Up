import React, { Component } from 'react'

class NewMeeting extends Component {
  render () {
    return (
      <div className = "newMeeting">
        <button type="button" id = "closeButton" onClick={this.props.toggleAddMeeting} class="btn btn-danger"><b>X</b></button>
        <form class="form-horizontal">
          <fieldset>
          <legend id = "newLegend">NEW MEETING LOG</legend>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="contact_id">CONNECTION</label>
            <div class="col-md-8">
              <select id="contact_id" name="contact_id" class="form-control">
                <option value="1">Option one</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="date">MEETING DATE</label>
            <div class="col-md-8">
            <input id="date" name="date" type="date" value="date" placeholder="" class="form-control input-md" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="type">MEETING TYPE</label>
            <div class="col-md-8">
            <input id="type" name="type" type="text" value="type" placeholder="" class="form-control input-md" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="notes">NOTES</label>
            <div class="col-md-8">
              <textarea class="form-control" id="notes" name="notes" value="notes"></textarea>
            </div>
          </div>
          <button type="button" id="newSubmitButton"  className="btn btn-secondary">LOG MEETING</button>
          </fieldset>
          </form>
      </div>
    );
  }
}

export default NewMeeting
