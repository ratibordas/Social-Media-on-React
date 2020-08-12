import Sidebar from './Sidebar';
import { connect } from 'react-redux';



// react-redux mapStateToProps
const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData   
     }
}




const SidebarContainer = connect(mapStateToProps)(Sidebar);


export default SidebarContainer