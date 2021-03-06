import {PATH_PREFIX,LANDING,APP_INFO,UPPER_BAR,EMPLOYEE_REG,EMPLOYEE_LISTING} from 'utils/constants';
const routes = [
    {
        name:LANDING,
        path:PATH_PREFIX,
        samplePath:PATH_PREFIX,
        componentId:'pages/home',
        title:'Home',
        className:'home-page',
        exact:true,
        nowrap:false
    },
    {
        name:APP_INFO,
        path:PATH_PREFIX+APP_INFO,
        samplePath:PATH_PREFIX+APP_INFO,
        componentId:'pages/appinfo',
        title:'App Info',
        className:'app-info-page',
        exact:true,
        nowrap:false
    },
    {
        name:EMPLOYEE_REG,
        path:PATH_PREFIX+EMPLOYEE_REG,
        samplePath:PATH_PREFIX+EMPLOYEE_REG,
        componentId:'pages/registerEmployee',
        title:'register employee',
        className:'register-employee-page',
        exact:true,
        nowrap:false
    },
    {
        name:UPPER_BAR,
        path:PATH_PREFIX+UPPER_BAR,
        samplePath:PATH_PREFIX+UPPER_BAR,
        componentId:'pages/upperbar',
        title:'upper bar',
        className:'upper-bar-page',
        exact:true,
        nowrap:false
    },
    {
        name:EMPLOYEE_LISTING,
        path:PATH_PREFIX+EMPLOYEE_LISTING,
        samplePath:PATH_PREFIX+EMPLOYEE_LISTING,
        componentId:'pages/employeeListing',
        title:'Employee Listing',
        className:'employee-listing-page',
        exact:true,
        nowrap:false
    }
];

export default routes;

