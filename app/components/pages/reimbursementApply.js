import React, { Component } from "react";
import {
  FLIP_LOADER,
  GOTO_URL,
  SHOW_ALERT,
  SHOW_ALERT_MSG,
  ALERT_TYPE
} from "utils/constants";
import FormField from "../common/formfield";
import dataService from "utils/dataservice";
// import FormValidator from '../common/formvalidator';
import "assets/sass/pages/_employeeRegister.scss";

class ReimbursementApply extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // ...this.getStateData(this.props)
      reimbursementDetails: [{ index: Math.random(), billDate: "", reimbursementDescription: "", categoryName: "", billNo: "", cost: 0, flag: false }],
      empNo: "",
      date: "",
      empData: [],
      // row: { index: Math.random(), billDate: "", reimbursementDescription: "", categoryName: "", billNo: "", cost: 0 ,flag:false}

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.fieldData = {};
    this.handleInputChange2 = this.handleInputChange2.bind(this);
    this.subTotal=this.subTotal.bind(this);
  }

  componentDidMount() {
    app.events.trigger(FLIP_LOADER, { status: false, reset: true });
    dataService.getRequest("getEmpData")
      .then(result => {
        this.setState({
          empData: result,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  getOptions() {
    let optionData = [];
    optionData = this.state.empData.map(item => ({ value: item.empNo, label: item.firstName }));
    return optionData;
  }

  // handleInputChange(e) {
  //   if(["billDate","reimbursementDescription","categoryName","billNo","cost"].includes(e.target.name)) {
  //     let reimbursementDetails = [this.state.reimbursementDetails];
  //     reimbursementDetails[e.target.dataset.id][e.target.name]=e.target.value;
  //   }
  //   else {
  //     this.setState({[e.target.name]:e.target.value})
  //   }
  // }

  handleInputChange2(event, fieldData) {
    let field = fieldData.field || event.target.name;
    let value = fieldData.value || event.target.value || "";
    let index = fieldData.index;
    console.log(index);
    let reimbursementDetails = this.state.reimbursementDetails;
    let filteredRow = reimbursementDetails.find((detail) => {
      return (
        detail.index == index
      )
    })
    console.log(filteredRow);
    filteredRow[field] = value;
    if (filteredRow.flag == false) {
      filteredRow.flag = true
      reimbursementDetails.push({ index: Math.random(), billDate: "", reimbursementDescription: "", categoryName: "", billNo: "", cost: 0, flag: false });
    }
    this.setState(
      filteredRow
    )
    this.subTotal();
  }

  handleInputChange(event, fieldData = {}) {
    let field = fieldData.field || event.target.name;
    let value = fieldData.value || event.target.value || "";
    this.fieldData[field] = fieldData;
    event &&
      this.setState({
        [field]: event.target.type == "checkbox" ? event.target.checked : value,
      });
  }

  subTotal() {
    let total = 0
    this.state.reimbursementDetails.forEach((row) => {
      total=total+row.cost;
      this.setState({
        total:total
      })
    })
  }

  getStateData(reimburseData) {
    return {
      billDate: reimburseData.billDate || "",
      // totalCost: reimburseData.totalCost || "",
      billDate: reimburseData.billDate || "",
      reimbursementDescription: reimburseData.reimbursementDescription || "",
      categoryName: reimburseData.categoryName || "",
      billNo: reimburseData.billNo || "",
      cost: reimburseData.cost || ""
    };
  }

  handleInputChange1(row) {
    console.log(row);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="container mt-3">
            <div className="row mt-5">
              <div className="d-flex mb-4 flex-row mx-auto">
                <div className="mr-2">
                  <FormField
                    type="select"
                    label="Employee Id"
                    labelClassName="txt-label"
                    fieldClassName="select-input"
                    mandatory
                    name="empNo"
                    nameAlias={"abc_fullName"}
                    onChange={this.handleInputChange}
                    options={this.getOptions()}
                    value={this.state.empNo}
                    placeholder="Empoyee Number"
                  // validator={validation}
                  />
                </div>
                <div>
                  <FormField
                    label="Reimbursement Date"
                    labelClassName="txt-label"
                    fieldClassName="txt-input"
                    mandatory
                    onChange={this.handleInputChange}
                    name="reimbursementDate"
                    type="date"
                    value={this.state.reimbursementDate}
                    placeholder="reimbursementDate"
                  // validator={validation}
                  />
                </div>
              </div>
            </div>

            <div className="row personal-assets mt-5">
              <table className="table single-asset input-style">
                <thead>
                  <tr>
                    <th>Bill Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Bill Number</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>



                  {this.state.reimbursementDetails.map((detail) => {
                    return (
                      <tr>
                        <td>
                          <FormField
                            labelClassName="txt-label"
                            fieldClassName="txt-input"
                            mandatory
                            onChange={() => this.handleInputChange2(event, detail)}
                            name="billDate"
                            type="date"
                            value={detail.billDate}
                            placeholder="Bill Date"
                          // validator={validation}
                          />
                        </td>
                        <td>
                          <FormField
                            labelClassName="txt-label"
                            fieldClassName="txt-input"
                            mandatory
                            onChange={() => this.handleInputChange2(event, detail)}
                            name="reimbursementDescription"
                            value={detail.reimbursementDescription}
                            placeholder="Reimbursement Description"
                          // validator={validation}
                          />
                        </td>
                        <td>
                          <FormField
                            labelClassName="txt-label"
                            fieldClassName="txt-input"
                            mandatory
                            onChange={() => this.handleInputChange2(event, detail)}
                            name="categoryName"
                            value={detail.categoryName}
                            placeholder="Category Name"
                          // validator={validation}
                          />
                        </td>
                        <td>
                          <FormField
                            labelClassName="txt-label"
                            fieldClassName="txt-input"
                            mandatory
                            onChange={() => this.handleInputChange2(event, detail)}
                            name="billNo"
                            value={detail.billNo}
                            placeholder="Bill Number"
                          // validator={validation}
                          />
                        </td>
                        <td>
                          <FormField
                            labelClassName="txt-label"
                            fieldClassName="txt-input"
                            mandatory
                            onChange={() => this.handleInputChange2(event, detail)}
                            name="cost"
                            value={detail.cost}
                            placeholder="Cost"
                            type="number"
                          // validator={validation}
                          />
                        </td>
                        <td>
                          <button className="btn btn-danger">delete</button>
                        </td>
                      </tr>
                    )
                  })}


                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <label className="txt-label d-flex justify-content-center">
                        Total
                      </label>
                    </td>
                    <td>
                      <label className="txt-label d-flex">Rs.</label>
                    </td>
                  </tr>


                </tbody>
              </table>

              <div className="mx-auto">
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ReimbursementApply;
