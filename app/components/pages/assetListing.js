import React, { Component } from 'react';
import { FLIP_LOADER, GOTO_URL, SHOW_ALERT, SHOW_ALERT_MSG, ALERT_TYPE,ASSET_DETAILS } from 'utils/constants';
import dataService from 'utils/dataservice';
import SearchAndButtonBar from "../searchAndButtonBar";
import ListTable from "../listTable";
import "assets/sass/pages/_employeeListing.scss"

export class AssetListing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activePage: 1,
      searchValue: "",
      recordsPerPage: 10,
      fields: [
        { label: "si no", key: "index" },
        { label: "asset id", key: "assetKey" },
        { label: "asset category", key: "firstName" },
        { label: "model", key: "model" },
        { label: "asset owner", key: "empNo" },
        { label: "action", key: "editDelete" },
        { label: "assign", key: "status" }
      ],
      datas:[
        {
            "assetId": 10,
            "assetKey": "MDM_001",
            "status": "0",
            "model": "D-Link",
            "empId": 1,
            "empNo": "INT001"
        },
        {
            "assetId": 9,
            "assetKey": "ib1901",
            "status": "1",
            "model": "iBell",
            "empId": 1,
            "empNo": "INT001"
        },
        {
            "assetId": 8,
            "assetKey": "ADO_D001",
            "status": "1",
            "model": "Dell",
            "empId": 1,
            "empNo": "INT001"
        },
        {
            "assetId": 7,
            "assetKey": "JioFi_246468E",
            "status": "0",
            "model": "Jio",
            "empId": 1,
            "empNo": "INT001"
        }
    ]
    }
    this.gettingData = this.gettingData.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
  }

  componentDidMount() {
    app.events.trigger(FLIP_LOADER, { status: false, reset: true });
    // this.gettingData();
  }

  gettingData() {
    const data = { page: this.state.activePage - 1, searchkey: this.state.searchValue, limit: this.state.recordsPerPage }
    // dataService.getRequest("employeeUpdate", { empNo:'123',empId:123 })
    let urlKey = "";
    if (this.state.searchValue === "") {
      urlKey = "employeeList";
    }
    else {
      urlKey = "employeeSearch";
    }
    dataService.getRequest(urlKey, data)
      .then((jsonData) => {
        // jsonData is parsed json object received from url
        console.log(jsonData)
        this.setState({
          totalRecords: jsonData.totalElements,
          datas: jsonData.content
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  handlePage(pagenum) {
    this.setState({
      activePage: pagenum
    }, () => { this.gettingData() })
  }

  handleSearch(value) {
    this.setState({
      activePage: 1,
      searchValue: value
    }, () => { this.gettingData() })
  }

  handleEdit(data) {
    console.log(data);
    // app.events.trigger(GOTO_URL, { routerKey: EMPLOYEE_REG,params:{empId:data.empId} });
  }

  async handleDelete(data) {
    // alert(data);
    console.log(data);
    let isConfirmed = false;
    isConfirmed = await confirm({
      msg: 'Do you sure you want to delete this from emplist',
    });
    if (isConfirmed) {
      // const deleteData = { empNo: data.empNo }
      dataService.putRequest("employee-listing", { empNo: data.empNo })
        .then(res => {
          // console.log(res);
          app.events.trigger(SHOW_ALERT_MSG, {
            visible: true,
            type: ALERT_TYPE.SUCESS,
            msg: "successfully deleted"
          });
          this.gettingData();
        }).catch(res => {
          console.log(res);
        });
    }
  }

  handleDetails(data) {
    console.log("details");
    console.log(data.assetId);
    app.events.trigger(GOTO_URL, { routerKey: ASSET_DETAILS, params: { assetId: data.assetId } });
  }

  handleRegister() {
    // app.events.trigger(GOTO_URL, { routerKey: EMPLOYEE_REG, params: { empId: -1 } });
  }

  render() {
    return (
      <div>
        <SearchAndButtonBar
          button1name="Register employee"
          button2name="export"
          handleRegister={this.handleRegister}
          searchHandler={this.handleSearch} />
        <ListTable
          totalRecords={this.state.totalRecords}
          fields={this.state.fields}
          datas={this.state.datas}
          pageHandler={this.handlePage}
          editHandler={this.handleEdit}
          deleteHandler={this.handleDelete}
          detailsHandler={this.handleDetails} />
      </div>
    );
  }
}

export default AssetListing;
