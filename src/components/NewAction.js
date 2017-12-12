import React, { Component } from 'react'

class NewAction extends Component {
  render () {
    return (
      <div className = "newAction">
        <button type="button" id = "closeButton" onClick={this.props.toggleAddAction} class="btn btn-danger"><b>X</b></button>
        <form class="form-horizontal">
          <fieldset>
          <legend id = "newLegend">NEW ACTION ITEM</legend>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="contact_id">CONNECTION</label>
            <div class="col-md-8">
              <select id="contact_id" name="contact_id" class="form-control">
                <option value="1">Option one</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="title">ACTION TITLE</label>
            <div class="col-md-8">
            <input id="title" name="title" value="title" type="text" placeholder="" class="form-control input-md" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="due_date">DUE DATE</label>
            <div class="col-md-8">
            <input id="due_date" name="due_date" value="due_date" type="text" placeholder="MM/DD/YYYY" class="form-control input-md" required="" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4 control-label" id="labelForm" for="is_completed">COMPLETED</label>
            <div class="col-md-4">
              <label class="radio-inline" for="is_completed-0">
                <input type="radio" name="is_completed" value="is_completed" id="is_completed-0" value="true" />
                TRUE
              </label>
              <label class="radio-inline" for="is_completed-1">
                <input type="radio" name="is_completed" value="is_completed" id="is_completed-1" checked="checked" value="false" />
                FALSE
              </label>
            </div>
          </div>
          <button type="button" id="newSubmitButton"  className="btn btn-secondary">New Action Item</button><br></br>

          </fieldset>
          </form>

    </div>
    )
  }
}

export default NewAction
