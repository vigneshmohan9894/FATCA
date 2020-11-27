/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * 13/12/2016       Mohit Sharma            Bug 66247 - Validation on submit button in ibps mobile form required
 * 07/05/2018       Gaurav Sharma           Bug 77543 - Events and webservice functionality not working in iform not getting output.
 * 06/11/2018       Gaurav                  Bug 81232 - Digit Grouping not working in setValues() API
 * 12/12/2018       Aman Khan               Bug 81913 - In style3 TextBox,Label name not aligned properly.
 * 12/02/2019       Aman Khan               Bug 83038 - We need to open the URL in the application on click of labels.
 * 21/02/2019       Gaurav                  Bug 83221 - Not able to set value in editable combo using setValues
 * 26/02/2019       Abhishek                Bug 83310 - Removal of RTE Features
 * 26/04/2019       Aman Khan               Bug 84373 - unable to set date in ipad
 * 30/04/2019       Aman Khan               Bug 84407 - If the type of field in a comboBox is a DropDown then it is not getting populated through code whereas a DropDownList is workking fine. Kindly check this.
 * 28/05/2019       Gaurav                  Bug 84949 - mandatory validation is not removed if data is set using API.
 * 28/05/2019       Abhishek                Bug 84964 - Custom alert on cross icon of grid 
 * 12/07/2019       Abhishek                Bug 85595 - Suppress format tools in Richtext editor Initially 
 */

function customValidation(op){
     switch (op) {
        case 'S':
            
            break;
        case 'I':
            
            break;
        case 'D':
           
            break;
        default:
            break;
    }
    
    return true;
}

function formLoad(){
 FATCA_formLoad();
}


function onClickTab(tabId, sheetindex) {
 
 
var ActivityName=window.parent.stractivityName;

	if(ActivityName=='Draft' || ActivityName=='UnderReview-Legal' || ActivityName=='UnderReview-DTL'|| ActivityName=='Referback'|| ActivityName=='Recalled-DTE')
        {

   if(tabId == "tab4" && (sheetindex == 1 || sheetindex == 2 || sheetindex == 3 || sheetindex == 4))
    {
    setTabStyle("tab11", 0, "visible", "false");
	setTabStyle("tab11", 1, "visible", "false");
	setTabStyle("tab11", 2, "visible", "false");
	setTabStyle("tab11", 3, "visible", "false");
	setTabStyle("tab11", 4, "visible", "false");
	setTabStyle("tab11", 5, "visible", "false");
		
	}
		}	
}


function postServerEventHandler(controlName, eventType, responseData) {
	LCA_postServerEventHandler(controlName, eventType, responseData);
	//document.getElementById("wdesk:placeHolder").style.display = "none";
}

function onRowClick(tableId,rowIndex){
    return true;
}

function customListViewValidation(controlId,flag){
    return true;
}   

function listViewLoad(controlId,action){
    LCA_listViewLoad(controlId,action);
}

function clickLabelLink(labelId){
   
}

function addRowPostHook(tableId){
	LCA_AddRowPostHook(tableId);
}
function deleteRowPostHook(tableId,rowIndices){
	LCA_deleteRowPostHook(tableId,rowIndices);
}
function modifyRowPostHook(tableId){
	LCA_modifyRowPostHook(tableId);
}


function copyRowPosthook(tableId){
//saveWorkItem();
}
function setNavigationForm(opt,tileName){
    
}

function customListViewValidation(controlId){
	if(controlId == "Tbl_Legal"){
		if(activityName == 'Draft')
		{
			if (getValue("FirmName") == "" || getValue("FirmName") == null) {
                showMessage("", "Kindly Select Law Firm Name", "error");
                return false;
            }			
			checkDuplicateFirmName();
			
			if (getValue("FirmType") == "" || getValue("FirmType") == null) {
                showMessage("", "Kindly Select Law Firm Type", "error");
                return false;
            }
			if (getValue("Country") == "" || getValue("Country") == null || getValue("Country") == "Select") {
                showMessage("", "Kindly Select Law Firm Country", "error");
                return false;
            }			
		}
	}
    return true;
}    

function onTableCellChange(rowIndex,colIndex,ref,controlId){
	LCA_onTableCellChange(rowIndex,colIndex,ref,controlId) 
}

function selectFeatureToBeIncludedInRichText(){
    return {
        'bold' :true,
        'italic':true,
        'underline':true,
        'strikeThrough':true,
        'subscript':true,
        'superscript':true,
        'fontFamily':true,
        'fontSize':true,
        'color':true,
        'inlineStyle':true,
        'inlineClass':true,
        'clearFormatting':true,
        'emoticons':false,
        'fontAwesome':true,
        'specialCharacters':false,
        'paragraphFormat':true,
        'lineHeight':true,
        'paragraphStyle':true,
        'align':true,
        'formatOL':true,
        'formatUL':true,
        'outdent':true,
        'indent':true,
        'quote':true,
        'insertLink':false,
        'insertImage':false,
        'insertVideo':false,
        'insertFile':false,
        'insertTable':true,
        'insertHR':true,
        'selectAll':true,
        'getPDF':false,
        'print':false,
        'help':false,
        'html':false,
        'fullscreen':true,
        'undo':true,
        'redo':true
        
    }
}
