import React, { Component } from 'react';
import { FLIP_LOADER, GOTO_URL, SHOW_ALERT, SHOW_ALERT_MSG, ALERT_TYPE, ASSET_DETAILS, ADD_ASSETS, ASSIGN_ASSETS,ASSET_DELETION } from 'utils/constants';
import dataService from 'utils/dataservice';
import SearchAndButtonBar from "../searchAndButtonBar";
import ListTable from "../listTable";
import "assets/sass/pages/_listing.scss";
import { confirm } from 'utils/common';
import Heading from "../heading";

export class AssetListing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activePage: 1,
      sortOrder: "",
      sortKey: "",
      searchValue: "",
      recordsPerPage: 10,
      fields: [
        { label: "sl no", key: "index" },
        { label: "Key", key: "assetKey" },
        { label: "category", key: "productCategoryName" },
        { label: "model", key: "model" },
        { label: "owner id", key: "empNo" },
        { label: "action", key: "editDelete" },
        { label: "assign/unassign", key: "status" }
      ],

    }
    this.gettingData = this.gettingData.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleAssign = this.handleAssign.bind(this);
    this.handleUnAssign = this.handleUnAssign.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    app.events.trigger(FLIP_LOADER, { status: false, reset: true });
    this.gettingData();
  }

  gettingData() {

    let urlKey = "";
    const data = {
      page: this.state.activePage - 1,
      searchkey: this.state.searchValue,
      limit: this.state.recordsPerPage,
      sortOrder: this.state.sortOrder,
      sortKey: this.state.sortKey,
      enableStatus:"Active"
    }

    if (this.state.searchValue === "") {
      urlKey = "assetList";
    }
    else {
      urlKey = "assetSearch";
    }
    dataService.postRequest(urlKey, data)
      .then((jsonData) => {
        console.log(jsonData);
        this.setState({
          totalRecords: jsonData.totalElements,
          datas: jsonData.resultSet
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
    // console.log(data);
    app.events.trigger(GOTO_URL, { routerKey: ADD_ASSETS, params: { assetId: data.assetId } });
  }

   handleDelete(data) {
    console.log(data);

    app.events.trigger(GOTO_URL, { routerKey: ASSET_DELETION, params: { assetId: data.assetId } });

    // let isConfirmed = false;
    // isConfirmed = await confirm({
    //   msg: 'Are you sure you want to delete this record?',
    // });
    // if (isConfirmed) {
    //   dataService.deleteRequest("assetDelete", { assetId: data.assetId })
    //     .then(res => {
    //       if (res.status == "deleted successfully") {
    //         app.events.trigger(SHOW_ALERT_MSG, {
    //           visible: true,
    //           type: ALERT_TYPE.SUCESS,
    //           msg: "Successfully Deleted"
    //         });
    //         this.gettingData();
    //       }
    //       else {
    //         app.events.trigger(SHOW_ALERT_MSG, {
    //           visible: true,
    //           type: ALERT_TYPE.DANGER,
    //           msg: `Deletion Failed  ${res.message}`
    //         });
    //         this.gettingData();
    //       }
    //     }).catch(res => {
    //       console.log(res);
    //     });
    // }
  }

  handleDetails(data) {
    console.log("details");
    console.log(data.assetId);
    app.events.trigger(GOTO_URL, { routerKey: ASSET_DETAILS, params: { assetId: data.assetId } });
  }

  handleRegister() {
    app.events.trigger(GOTO_URL, { routerKey: ADD_ASSETS, params: { assetId: -1 } });
  }

  handleAssign(data) {
    console.log("assign");
    console.log(data);
    app.events.trigger(GOTO_URL, { routerKey: ASSIGN_ASSETS, params: { assetId: data.assetId, status: data.status } });
  }

  handleUnAssign(data) {
    console.log("unAssign");
    console.log(data);
    app.events.trigger(GOTO_URL, { routerKey: ASSIGN_ASSETS, params: { assetId: data.assetId, status: data.status } });
  }
  handleSort(fields) {
    console.log(fields);
    if (this.state.sortOrder === "") {
      this.setState({
        sortOrder: "ascending",
        activePage: 1,
        sortKey: fields.key
      }, () => { this.gettingData(); })
    }
    else if (this.state.sortOrder === "ascending") {
      this.setState({
        sortOrder: "descending",
        activePage: 1,
        sortKey: fields.key
      }, () => { this.gettingData(); })
    }
    else if(this.state.sortOrder === "descending") {
      this.setState({
        sortOrder: "ascending",
        activePage: 1,
        sortKey: fields.key
      }, () => { this.gettingData() })
    }
  }

  render() {
    return (
      <div>
        <SearchAndButtonBar
          button1name="Add Asset"
          button2name="export"
          handleRegister={this.handleRegister}
          searchHandler={this.handleSearch} />
        <Heading heading="ACTIVE ASSETS" />
        <ListTable
          totalRecords={this.state.totalRecords}
          fields={this.state.fields}
          datas={this.state.datas}
          pageHandler={this.handlePage}
          editHandler={this.handleEdit}
          deleteHandler={this.handleDelete}
          detailsHandler={this.handleDetails}
          assignHandler={this.handleAssign}
          unAssignHandler={this.handleUnAssign}
          activePage={this.state.activePage}
          sortHandler={this.handleSort}
          sortRequired={true} />
      </div>
    );
  }
}

export default AssetListing;
