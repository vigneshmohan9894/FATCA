
var ActivityName=window.parent.stractivityName;

function FATCA_formLoad(){
var ActivityName=window.parent.stractivityName;
var userName = getWorkItemData("userName");
    if (userName == "swathi" || userName == "kapilan") {
        setValues({"Usergroup": "DTE"}, true);
    }
    if (userName == "legaluser") {
        setValues({"Usergroup": "Legal"}, true);
    }if (userName == "dealuser") {
        setValues({"Usergroup": "DTL"}, true);
    }
											 setCaption("Btn_Reject", "Save Draft");
											 setCaption("Btn_Save", "Submit");
											 setCaption("Btn_Submit", "Delete");
											 setCaption("Btn_History", "Workflow history");
											
				iframeWindow.document.getElementById("StatusTag").innerHTML = "New";							 
	if(ActivityName=='Draft')
        { 
	
iframeWindow.document.getElementById('IFrame_Submit').style.visibility = 'visible';
iframeWindow.document.getElementById('IFrame_Save').style.visibility = 'visible';
iframeWindow.document.getElementById('IFrame_History').style.visibility = 'visible';
							
	setValues({"Deal_Team_Leader": "Vamshidhar" }, true);
	//setValues({"Expected_ActualDate": "11-10-2020" }, true);
	setValues({"Client_name": "SCB FATCA" }, true);
	setValues({"Deal_id": "CF012345" }, true);
	setValues({"Product_type": "FATCA-process"}, true);
	setValues({"Activity_status": "Draft"}, true);
	
	setStyle("Submit","visible","true");
	setStyle("Save_draft","visible","true");
	setStyle("Legal_action","visible","false");
	setStyle("Recall","visible","false");
	
	setStyle("label162","visible","false");
	setStyle("label277","visible","false");
	setStyle("label278","visible","false");
	setStyle("label279","visible","false");
	setStyle("label323","visible","false");
	setStyle("label280","visible","false");
	setStyle("label281","visible","false");
	setStyle("label282","visible","false");
	setStyle("label283","visible","false");
	setStyle("label319","visible","false");
	setStyle("label320","visible","false");
	setStyle("label321","visible","false");
	setStyle("label322","visible","false");
	setStyle("label337","visible","false");
	setStyle("Option1_dealussource","visible","false");
	setStyle("Option1_liveagency","visible","false");
	setStyle("Option1_transaction","visible","false");
	setStyle("Option1_payeejurisdiction","visible","false");
	setStyle("Option1_transactionussource","visible","false");
	setStyle("Self_declaration","visible","false");

setStyle("label327","visible","false");
setStyle("label328","visible","false");
setStyle("label333","visible","false");
setStyle("label334","visible","false");
setStyle("label325","visible","false");
setStyle("label326","visible","false");
	
	setStyle("label329","visible","false");
	setStyle("label330","visible","false");
	setStyle("label313","visible","false");
	
	setTabStyle("tab4", 1, "visible", "false");
	setTabStyle("tab4", 2, "visible", "false");
	
	setTabStyle("tab11", 0, "visible", "false");
	setTabStyle("tab11", 1, "visible", "false");
	setTabStyle("tab11", 2, "visible", "false");
	setTabStyle("tab11", 3, "visible", "false");
	setTabStyle("tab11", 4, "visible", "false");
	setTabStyle("tab11", 5, "visible", "false");

		setStyle("label62","visible","false");
		setStyle("Option1_checkbox","visible","false");
		setStyle("Option2_checkbox","visible","false");
		setStyle("Option3_checkbox","visible","false");
		setStyle("Option4_checkbox","visible","false");
		setStyle("Option5_checkbox","visible","false");
		setStyle("Option6_checkbox","visible","false");
			
	}
	
	if(ActivityName=='Recalled-DTE')
        { 
	
	if (getValue("Usergroup") == 'DTE'){
		
		setValues({"Activity_status": "Recalled"}, true);
		iframeWindow.document.getElementById("StatusTag").innerHTML = "Recalled";
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
	}
	
		}
if(ActivityName=='UnderReview-DTL'){
	
	setValues({"Activity_status": "Under Review"}, true);
	iframeWindow.document.getElementById("StatusTag").innerHTML = "Under Review";
	
	if (getValue("Usergroup") == 'DTE') {
		
		setTabStyle("tab4", 1, "visible", "false");
		setTabStyle("tab4", 2, "visible", "false");
		//setStyle("Recall","visible","true");
		iframeWindow.document.getElementById('IFrame_Recall').style.visibility = 'visible';
		
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
		
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		setStyle("questionnaire","disable","true");
		setStyle("Legal_action","disable","true");
		setStyle("Option1_dealinvolve","disable","true");
		setStyle("Option1_dealussource","disable","true");
		setStyle("Option1_liveagency","disable","true");
		setStyle("Option1_transactionussource","disable","true");
		setStyle("Option1_transaction","disable","true");
		setStyle("Option1_payeejurisdiction","disable","true");
		setStyle("Option2_existingdealussource","disable","true");
		setStyle("Option2_dealsatisfy","disable","true");
		setStyle("Option3_creditussource","disable","true");
		setStyle("Option4_Fatcacompliant","disable","true");
		setStyle("Option6_dealcondition","disable","true");
		setStyle("Option1_checkbox","disable","true");
		setStyle("Option2_checkbox","disable","true");
		setStyle("Option3_checkbox","disable","true");
		setStyle("Option4_checkbox","disable","true");
		setStyle("Option5_checkbox","disable","true");
		setStyle("Option6_checkbox","disable","true");
		setStyle("Self_declaration","disable","true");
			
	}
	if (getValue("Usergroup") == 'DTL') {
		
		setTabStyle("tab4", 1, "visible", "false");
		setTabStyle("tab4", 2, "visible", "false");
	
		iframeWindow.document.getElementById('IFrame_Recall').style.visibility = 'hidden';
		iframeWindow.document.getElementById('IFrame_Submit').style.visibility = 'visible';
		iframeWindow.document.getElementById('IFrame_Action').style.visibility = 'hidden';
		iframeWindow.document.getElementById('IFrame_Save').style.visibility = 'hidden';
		
		setValues({"Activity_status": "UnderReview-Deal Team Leader"}, true);
		iframeWindow.document.getElementById("StatusTag").innerHTML = "Under Review-DTL";
		
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
		
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		/*setStyle("questionnaire","disable","true");
		setStyle("Legal_action","disable","false");
		setStyle("Option1_dealinvolve","disable","true");
		setStyle("Option1_dealussource","disable","true");
		setStyle("Option1_liveagency","disable","true");
		setStyle("Option1_transactionussource","disable","true");
		setStyle("Option1_transaction","disable","true");
		setStyle("Option1_payeejurisdiction","disable","true");
		setStyle("Option2_existingdealussource","disable","true");
		setStyle("Option2_dealsatisfy","disable","true");
		setStyle("Option3_creditussource","disable","true");
		setStyle("Option4_Fatcacompliant","disable","true");
		setStyle("Option6_dealcondition","disable","true");
		setStyle("Option1_checkbox","disable","true");
		setStyle("Option2_checkbox","disable","true");
		setStyle("Option3_checkbox","disable","true");
		setStyle("Option4_checkbox","disable","true");
		setStyle("Option5_checkbox","disable","true");
		setStyle("Option6_checkbox","disable","true");
		setStyle("Self_declaration","disable","true");   //disabling according to new requirement*/
		
		
	}
	if (getValue("Usergroup") == 'Legal') {
		
		iframeWindow.document.getElementById('IFrame_Recall').style.visibility = 'hidden';
		
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		setStyle("questionnaire","disable","true");
		setStyle("Option1_dealinvolve","disable","true");
		setStyle("Option1_dealussource","disable","true");
		setStyle("Option1_liveagency","disable","true");
		setStyle("Option1_transactionussource","disable","true");
		setStyle("Option1_transaction","disable","true");
		setStyle("Option1_payeejurisdiction","disable","true");
		setStyle("Option2_existingdealussource","disable","true");
		setStyle("Option2_dealsatisfy","disable","true");
		setStyle("Option3_creditussource","disable","true");
		setStyle("Option4_Fatcacompliant","disable","true");
		setStyle("Option6_dealcondition","disable","true");
		setStyle("Option1_checkbox","disable","true");
		setStyle("Option2_checkbox","disable","true");
		setStyle("Option3_checkbox","disable","true");
		setStyle("Option4_checkbox","disable","true");
		setStyle("Option5_checkbox","disable","true");
		setStyle("Option6_checkbox","disable","true");
		setStyle("Self_declaration","disable","true");
		
	}
}


if(ActivityName=='UnderReview-Legal'){
	
	setValues({"Activity_status": "Under Review-Legal"}, true);
	iframeWindow.document.getElementById("StatusTag").innerHTML = "Under Review-Legal";
	
	if (getValue("Usergroup") == 'DTE') {
		
		iframeWindow.document.getElementById('IFrame_Recall').style.visibility = 'visible';
		
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
		
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		setStyle("questionnaire","disable","true");
		setStyle("Legal_action","disable","false");
		setStyle("Option1_dealinvolve","disable","true");
		setStyle("Option1_dealussource","disable","true");
		setStyle("Option1_liveagency","disable","true");
		setStyle("Option1_transactionussource","disable","true");
		setStyle("Option1_transaction","disable","true");
		setStyle("Option1_payeejurisdiction","disable","true");
		setStyle("Option2_existingdealussource","disable","true");
		setStyle("Option2_dealsatisfy","disable","true");
		setStyle("Option3_creditussource","disable","true");
		setStyle("Option4_Fatcacompliant","disable","true");
		setStyle("Option6_dealcondition","disable","true");
		setStyle("Option1_checkbox","disable","true");
		setStyle("Option2_checkbox","disable","true");
		setStyle("Option3_checkbox","disable","true");
		setStyle("Option4_checkbox","disable","true");
		setStyle("Option5_checkbox","disable","true");
		setStyle("Option6_checkbox","disable","true");
		setStyle("Self_declaration","disable","true");
			
	}
	if (getValue("Usergroup") == 'DTL') {
		
	
		iframeWindow.document.getElementById('IFrame_Recall').style.visibility = 'visible';
		
		// setValues({"Activity_status": "UnderReview-Deal Team Leader"}, true);
		
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
		
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		setStyle("questionnaire","disable","true");
		setStyle("Legal_action","disable","false");
		setStyle("Option1_dealinvolve","disable","true");
		setStyle("Option1_dealussource","disable","true");
		setStyle("Option1_liveagency","disable","true");
		setStyle("Option1_transactionussource","disable","true");
		setStyle("Option1_transaction","disable","true");
		setStyle("Option1_payeejurisdiction","disable","true");
		setStyle("Option2_existingdealussource","disable","true");
		setStyle("Option2_dealsatisfy","disable","true");
		setStyle("Option3_creditussource","disable","true");
		setStyle("Option4_Fatcacompliant","disable","true");
		setStyle("Option6_dealcondition","disable","true");
		setStyle("Option1_checkbox","disable","true");
		setStyle("Option2_checkbox","disable","true");
		setStyle("Option3_checkbox","disable","true");
		setStyle("Option4_checkbox","disable","true");
		setStyle("Option5_checkbox","disable","true");
		setStyle("Option6_checkbox","disable","true");
		setStyle("Self_declaration","disable","true");
		
		
	}
	if (getValue("Usergroup") == 'Legal') {
		
		iframeWindow.document.getElementById('IFrame_Action').style.visibility = 'visible';
		iframeWindow.document.getElementById('IFrame_Submit').style.visibility = 'visible';
	
		
		setValues({"Activity_status": "UnderReview-Legal"}, true);
		iframeWindow.document.getElementById("StatusTag").innerHTML = "Under Review-Legal";
		
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
	
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		setStyle("questionnaire","disable","true");
		setStyle("Legal_action","disable","false");
		setStyle("Option1_dealinvolve","disable","true");
		setStyle("Option1_dealussource","disable","true");
		setStyle("Option1_liveagency","disable","true");
		setStyle("Option1_transactionussource","disable","true");
		setStyle("Option1_transaction","disable","true");
		setStyle("Option1_payeejurisdiction","disable","true");
		setStyle("Option2_existingdealussource","disable","true");
		setStyle("Option2_dealsatisfy","disable","true");
		setStyle("Option3_creditussource","disable","true");
		setStyle("Option4_Fatcacompliant","disable","true");
		setStyle("Option6_dealcondition","disable","true");
		setStyle("Option1_checkbox","disable","true");
		setStyle("Option2_checkbox","disable","true");
		setStyle("Option3_checkbox","disable","true");
		setStyle("Option4_checkbox","disable","true");
		setStyle("Option5_checkbox","disable","true");
		setStyle("Option6_checkbox","disable","true");
		setStyle("Self_declaration","disable","true");
		
	}
}


if(ActivityName =='Referback'){
	
	setValues({"Activity_status": "Referback"}, true);
	iframeWindow.document.getElementById("StatusTag").innerHTML = "Referback";
	saveWorkItem();
	if (getValue("Usergroup") == 'DTE') {
		
		iframeWindow.document.getElementById('IFrame_Submit').style.visibility = 'visible';
	 iframeWindow.document.getElementById('IFrame_Save').style.visibility = 'visible';		
	var confirmDoneResponse = confirm("FATCA Questionarie to be Updated?");
	if(confirmDoneResponse ==  true)
		{
	setValues({"Outcome_changed": "Yes"}, true);
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
	
		return true;
		}
		
		else{
			setValues({"Outcome_changed": "No"}, true);
			saveWorkItem();
			completeWorkItem();
			
			return true;
		}
	
	}
	if (getValue("Usergroup") == 'DTL') {
		
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
		
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		
		setStyle("questionnaire","disable","true");
		setStyle("Option1_dealinvolve","disable","true");
		setStyle("option1_dealussource","disable","true");
		setStyle("Option1_liveagency","disable","true");
		setStyle("Option1_transactionussource","disable","true");
		setStyle("Option1_transaction","disable","true");
		setStyle("Option1_payeejurisdiction","disable","true");
		setStyle("Option2_existingdealussource","disable","true");
		setStyle("Option2_dealsatisfy","disable","true");
		setStyle("Option3_creditussource","disable","true");
		setStyle("Option4_Fatcacompliant","disable","true");
		setStyle("Option6_dealcondition","disable","true");
		setStyle("Option1_checkbox","disable","true");
		setStyle("Option2_checkbox","disable","true");
		setStyle("Option3_checkbox","disable","true");
		setStyle("Option4_checkbox","disable","true");
		setStyle("Option5_checkbox","disable","true");
		setStyle("Option6_checkbox","disable","true");
		
		
		
	}
	if (getValue("Usergroup") == 'Legal') {
		
		option1();
		option2();
		option3();
		option4();
		option5();
		option6();
		
		Questionarie();
		option1_aviationshipleasing();
		option1_dealussource();
		option1_liveagency();
		option2_dealussource();
		option1_transactionaviation();
		option1_jurisdiction();
		option1_payeejurisdiction();
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		setStyle("Option1_dealinvolve","disable","true");
		setStyle("option1_dealussource","disable","true");
		setStyle("Option1_liveagency","disable","true");
		setStyle("Option1_transactionussource","disable","true");
		setStyle("Option1_transaction","disable","true");
		setStyle("Option1_payeejurisdiction","disable","true");
		setStyle("Option2_existingdealussource","disable","true");
		setStyle("Option2_dealsatisfy","disable","true");
		setStyle("Option3_creditussource","disable","true");
		setStyle("Option4_Fatcacompliant","disable","true");
		setStyle("Option6_dealcondition","disable","true");
		setStyle("Option1_checkbox","disable","true");
		setStyle("Option2_checkbox","disable","true");
		setStyle("Option3_checkbox","disable","true");
		setStyle("Option4_checkbox","disable","true");
		setStyle("Option5_checkbox","disable","true");
		setStyle("Option6_checkbox","disable","true");
		
	}
	
}

}
function setCaption(Control, Value)
{
    //document.getElementById(Control).innerHTML = Value;
	if(Control == "Btn_Save"){
		Control = "IFrame_Save";
	}else if(Control == "Btn_Reject"){
		Control = "IFrame_Delete";
	}else if(Control == "Btn_Submit"){
		Control = "IFrame_Submit";
	}
	else if(Control == "Legal_action"){
		Control = "IFrame_Action";
	}
	iframeWindow.document.getElementById(Control).innerHTML = Value;
}

											

function Recall(){
	setValues({"Activity_status": "Recalled"}, true);
	iframeWindow.document.getElementById("StatusTag").innerHTML = "Recalled";
	var ActivityName=window.parent.stractivityName;
	saveWorkItem();
	 if (ActivityName == 'UnderReview-Legal') 
	 {
              if (getValue("Usergroup") == 'DTE') {
					
							if(getValue('Activity_status') == 'Recalled'){
								iframeWindow.document.getElementById('IFrame_Recall').style.visibility = 'hidden';
								iframeWindow.document.getElementById('IFrame_Save').style.visibility = 'hidden';
								setValues({"Recalled_by": "DTE"}, true);
								saveWorkItem();
								completeWorkItem();
							}
	}
						if (getValue("Usergroup") == 'DTL') {
							if(getValue('Activity_status') == 'Recalled'){
							
								iframeWindow.document.getElementById('IFrame_Recall').style.visibility = 'hidden';
								iframeWindow.document.getElementById('IFrame_Save').style.visibility = 'hidden';
								setStyle("Save_draft", "visible", "false");
								setValues({"Recalled_by": "DTL"}, true);
								saveWorkItem();
								completeWorkItem();
							}
	
}
	 }
}
function Legal_action(){

	if ((getValue("Legal_action") == 'Reject')){
		setStyle("Comments", "mandatory", "true");
		setStyle("Recall", "visible", "false");
		
	}
	
	if ((getValue("Legal_action") == 'Referback')){
		setStyle("Comments", "mandatory", "true");
		setStyle("Submit", "visible", "true");
		setCaption("Submit", "Referback");
		
	}
	
	if(getValue("Legal_action") == 'Approve') {
		
		setStyle("Recall", "visible", "false");
	}
	else{
		setStyle("Recall", "visible", "true");
	}
}



function Fatca_outcome(){
	var outcome= getValue('outcome');
	if(outcome == "FATCA NOT REQUIRED")
	{
		setStyle("outcome","fontcolor","white");
		setStyle("outcome","backcolor","green");
	}
	
	else if (outcome == "FATCA REQUIRED"){
		
		setStyle("outcome","fontcolor","white");
		setStyle("outcome","backcolor","green");
	}
}


function FATCA_EventCall(pId, pEvent) {
	
    switch (pEvent.type) {
		
		 case 'click':
        {
			switch (pEvent.srcElement.id) {
               
				 case 'Btn_Submit':
				
					saveWorkItem();
					completeWorkItem();
					return false;
					
					
					case 'Btn_Recall':
					setValues({"Activity_status": "Recalled"}, true);
					var ActivityName=window.parent.stractivityName;
					saveWorkItem();
	 if (ActivityName == 'UnderReview-DTL') 
	 {
              if (getValue("Usergroup") == 'DTE') {
							if(getValue('Activity_status') == 'Recalled'){
								setStyle("Recall", "visible", "false");
								setStyle("Save_draft", "visible", "false");
								saveWorkItem();
								completeWorkItem();
							}
	}if (getValue("Usergroup") == 'DTL' || getValue("Usergroup") == 'Legal' ) {
							if(getValue('Activity_status') == 'Recalled'){
								setStyle("Recall", "visible", "false");
								setStyle("Save_draft", "visible", "false");
								saveWorkItem();
								completeWorkItem();
							}} }
	 if (ActivityName == 'UnderReview-Legal') 
	 {
              if (getValue("Usergroup") == 'DTE') {
							if(getValue('Activity_status') == 'Recalled'){
								setStyle("Recall", "visible", "false");
								setStyle("Save_draft", "visible", "false");
								saveWorkItem();
								completeWorkItem();
							}
	}if (getValue("Usergroup") == 'DTL' || getValue("Usergroup") == 'Legal' ) {
							if(getValue('Activity_status') == 'Recalled'){
								setStyle("Recall", "visible", "false");
								setStyle("Save_draft", "visible", "false");
								saveWorkItem();
								completeWorkItem();
							}} }
	 
	 case 'Btn_Save':
				saveWorkItem();	
			case 'Btn_History':
				saveWorkItem();	
					
					
	}
	
}
	}
}



function Questionarie(){
	
	var Question= getValue('questionnaire');
	if(Question == "No")
	{	
		setValues({"outcome": " " }, true);
		setStyle("label337","visible","false");
		setStyle("label62","visible","true");
		setStyle("Option1_checkbox","visible","true");
		setStyle("Option2_checkbox","visible","true");
		setStyle("Option3_checkbox","visible","true");
		setStyle("Option4_checkbox","visible","true");
		setStyle("Option5_checkbox","visible","true");
		setStyle("Option6_checkbox","visible","true");
		
	}
	else if(Question == "Yes")
	{
		setValues({"outcome": "FATCA NOT REQUIRED" }, true);
		setTabStyle("tab4", 3, "visible", "false");
		
		if (getValue("Usergroup") == 'DTE'){
		showMessage("questionnaire","No further action is required. You may proceed to click on the 'Complete' button to complete this FATCA activity","Confirm");
		}
		
		setStyle("label62","visible","false");
		setStyle("label337","visible","true");
		setStyle("Option1_checkbox","visible","false");
		setStyle("Option2_checkbox","visible","false");
		setStyle("Option3_checkbox","visible","false");
		setStyle("Option4_checkbox","visible","false");
		setStyle("Option5_checkbox","visible","false");
		setStyle("Option6_checkbox","visible","false");
		
		document.getElementById("Option1_checkbox").checked = false;
		document.getElementById("Option2_checkbox").checked = false;
		document.getElementById("Option3_checkbox").checked = false;
		document.getElementById("Option4_checkbox").checked = false;
		document.getElementById("Option5_checkbox").checked = false;
		document.getElementById("Option6_checkbox").checked = false;
	
	setTabStyle("tab11", 0, "visible", "false");
	setTabStyle("tab11", 1, "visible", "false");
	setTabStyle("tab11", 2, "visible", "false");
	setTabStyle("tab11", 3, "visible", "false");
	setTabStyle("tab11", 4, "visible", "false");
	setTabStyle("tab11", 5, "visible", "false");
	
				var ele = document.getElementsByName("Option1_transactionussource");
				for(var i=0;i<ele.length;i++)
				{ ele[i].checked = false;
				}
				var mes = document.getElementsByName("Option1_transaction");
				for(var i=0;i<mes.length;i++)
				{ mes[i].checked = false;
				}
				var fre = document.getElementsByName("Option1_payeejurisdiction");
				for(var i=0;i<fre.length;i++)
				{ fre[i].checked = false;
				}
				var tri = document.getElementsByName("Option1_dealussource");
				for(var i=0;i<tri.length;i++)
				{ tri[i].checked = false;
				}
				var tri = document.getElementsByName("Option1_liveagency");
				for(var i=0;i<tri.length;i++)
				{ tri[i].checked = false;
				}
		
	}
}

		function option1(){
			if (getValue('Option1_checkbox') == true)
			{
				
				setTabStyle("tab11", 0, "visible", "true");
				
			}
			else {
				
				var ele = document.getElementsByName("Option1_dealinvolve");
                for(var i=0;i<ele.length;i++)
                { ele[i].checked = false;
                }
				setTabStyle("tab11", 0, "visible", "false");
				
				//disabling
				
					setStyle("label282","visible","false");
					setStyle("Option1_liveagency","visible","false");
					setStyle("label281","visible","false");
				setStyle("label319","visible","false");
				setStyle("label320","visible","false");
				setStyle("label321","visible","false");
				setStyle("label322","visible","false");
					setStyle("label323","visible","false");
			    setStyle("Option1_transactionussource","visible","false");
				
				setStyle("Option1_transaction","visible","false");
				
				setStyle("label277","visible","false");
				setStyle("label278","visible","false");
				setStyle("label279","visible","false");
				setStyle("label280","visible","false");
				setStyle("Option1_dealussource","visible","false");
				setStyle("label281","visible","false");
				setStyle("label319","visible","false");
				setStyle("label320","visible","false");
				setStyle("label321","visible","false");
				setStyle("label322","visible","false");
				setStyle("label323","visible","false");
			    setStyle("Option1_transactionussource","visible","false");
				setStyle("label283","visible","false");
				setStyle("Option1_payeejurisdiction","visible","false");
				setStyle("label335","visible","false");
					
			}
		}
		function option2(){
			if (getValue('Option2_checkbox') == true)
			{
				setTabStyle("tab11", 1, "visible", "true");
			}
			else{
				setTabStyle("tab11", 1, "visible", "false");
				var ele = document.getElementsByName("Option2_existingdealussource");
                for(var i=0;i<ele.length;i++)
                { ele[i].checked = false;
                }
				 setStyle("label314","visible","false");
	                setStyle("label315","visible","false");
					setStyle("label316","visible","false");
					setStyle("label317","visible","false");
			
					setStyle("label281","visible","false");
					setStyle("Option1_liveagency","visible","false");
					setStyle("Option2_dealsatisfy","visible","false");
				}
		}
		function option3(){
			if (getValue('Option3_checkbox') == true)
			{
				setTabStyle("tab11", 2, "visible", "true");
			}
			else{
				setTabStyle("tab11", 2, "visible", "false");
				//setTabStyle("tab11", 1, "visible", "false");
				var ele = document.getElementsByName("Option3_creditdealussource");
                for(var i=0;i<ele.length;i++)
                { ele[i].checked = false;
                }
					
					//invisible
					setStyle("label325","visible","false");
					setStyle("label326",'visible','false');	
					
				}
				
		}
		function option4(){
			if (getValue('Option4_checkbox') == true)
			{
				setTabStyle("tab11", 3, "visible", "true");
			}
			else{
				setTabStyle("tab11", 3, "visible", "false");
				var ele = document.getElementsByName("Option4_Fatcacompliant");
                for(var i=0;i<ele.length;i++)
                { ele[i].checked = false;
                }
				
				Option4_Fatcacompliant
				setStyle("label327","visible","false");
				setStyle("label328",'visible','false');
				}
		}
		function option5(){
			if (getValue('Option5_checkbox') == true)
			{
				setTabStyle("tab11", 4, "visible", "true");
			}
			else{
				setTabStyle("tab11", 4, "visible", "false");
				}
		}
		
		function option6(){
		if (getValue('Option6_checkbox') == true)
			{
				setTabStyle("tab11", 5, "visible", "true");
			}
			else{
				setTabStyle("tab11", 5, "visible", "false");
				var ele = document.getElementsByName("Option6_dealcondition");
                for(var i=0;i<ele.length;i++)
                { ele[i].checked = false;
                }
				
				 setStyle("label333","visible","false");
                setStyle("label334",'visible','false'); 
				
				}
		}
		
		   function option1_dealussource()
		{
			
			var dealussource= getValue('Option1_dealussource');
			if(dealussource == "Yes, my deal is US source"){
				
				if (getValue("Usergroup") == 'Legal') {
				setTabStyle("tab4", 2, "visible", "true");	//Approvals section
				}
				
					setStyle("label281","visible","true");
					setStyle("Option1_liveagency","visible","true");
					setStyle("label330","visible","false"); //for hiding the message label
					clearValue("outcome");
					//setStyle("label330","visible","true");	//why again making it visible?????
					setStyle("label329","visible","false");
			}
			if(dealussource == "No, my deal is not US source") {
				
				setValues({"outcome": "FATCA NOT REQUIRED" }, true);
				setStyle("label281","visible","false");
				
				setStyle("label282","visible","false");
				setStyle("label282","visible","false");
				
				
					setStyle("Option1_liveagency","visible","false");
					setStyle("label329","visible","true");
					setStyle("label330","visible","false");
					setStyle("label335","visible","false");
			}
		}
		
		function option1_aviationshipleasing()
		{
			var aviationshipleasing= getValue('Option1_dealinvolve');
			if (aviationshipleasing == "My deal involves Aviation Leasing") 
			{
   			    setStyle("label329","visible","false");

				setStyle("label319","visible","true");
				setStyle("label320","visible","true");
				setStyle("label321","visible","true");
				setStyle("label322","visible","true");
				setStyle("label323","visible","true");
				setStyle("Option1_transactionussource","visible","true");
				setValues({"outcome": "FATCA REQUIRED" }, true);
				
				setStyle("label277","visible","false");
				setStyle("label278","visible","false");
				setStyle("label279","visible","false");
				setStyle("label280","visible","false");
				setStyle("label330","visible","false");
				setStyle("Option1_dealussource","visible","false");
				setStyle("Option1_liveagency","visible","false");
			}
			if(aviationshipleasing == "My deal involves Ship Leasing"){
				//|| getValue('Option5_checkbox') == true
			
				setStyle("label277","visible","true");
				setStyle("label278","visible","true");
				setStyle("label279","visible","true");
				setStyle("label280","visible","true");
				setStyle("Option1_dealussource","visible","true");
				setValues({"outcome": "FATCA REQUIRED" }, true);
				
				setStyle("label319","visible","false");
				setStyle("label320","visible","false");
				setStyle("label321","visible","false");
				setStyle("label322","visible","false");
				setStyle("label323","visible","false");
				setStyle("Option1_transactionussource","visible","false");
				setStyle("Option1_liveagency","visible","false");
			}
			
			if(aviationshipleasing == "My deal does not involve Aviation or Ship Leasing."){
				setStyle("label277","visible","false");
				setStyle("label278","visible","false");
				setStyle("label279","visible","false");
				setStyle("label280","visible","false");
				setStyle("Option1_dealussource","visible","false");
				setStyle("label281","visible","false");
				setStyle("label319","visible","false");
				setStyle("label320","visible","false");
				setStyle("label321","visible","false");
				setStyle("label322","visible","false");
				setStyle("label323","visible","false");
			    setStyle("Option1_transactionussource","visible","false");
				setStyle("Option1_liveagency","visible","false");
			}
		}
		
		function option2_dealussource()
		{
			var dealussource= getValue('Option2_existingdealussource');
			if(dealussource == "Yes, my deal is US source"){
				
				if (getValue("Usergroup") == 'DTE') {
				setTabStyle("tab4", 3, "visible", "true");	//for enabling Approver tab
				}
				
				if (getValue("Usergroup") == 'Legal') {
				setTabStyle("tab4", 2, "visible", "true");	//for enabling profile report 
				}
				
			
				setStyle("label314","visible","false");
				setStyle("label315","visible","false");
				setStyle("label316","visible","false");
				setStyle("label317","visible","false");
					setStyle("Option2_dealsatisfy","visible","false");
					
				    setStyle("label281","visible","true");
					
					setValues({"outcome": "FATCA REQUIRED" }, true);
			}
			if(dealussource == "No, my deal is not US source") {
				setStyle("label281","visible","false");
					
					setValues({"outcome": "FATCA NOT REQUIRED" }, true);
					setStyle("label314","visible","true");
				setStyle("label315","visible","true");
				setStyle("label316","visible","true");
				setStyle("label317","visible","true");
					setStyle("Option2_dealsatisfy","visible","true");
			}
		}
		
		function option5_dealussource()
		{
			var dealussource= getValue('questionnaire');
			if(dealussource == "Yes"){
				setStyle("label281","visible","true");
					setStyle("Option1_liveagency","visible","true");
					setValues({"outcome": "FATCA REQUIRED" }, true);
			}
			else {
				setStyle("label281","visible","false");
					setStyle("Option1_liveagency","visible","false");
			}
		}
		
		
		//Is your transaction Aviation or Ship Leasing -op1
		function option1_transactionaviation(){
			
			var transactionaviation = getValue('Option1_transactionussource');
			if (transactionaviation == "No, my deal is not US source")
			{
				setStyle("label282","visible","true");
				setStyle("Option1_transaction","visible","true");
			}
			if(transactionaviation == "Yes, my deal is US source"){
			
			
			if (getValue("Usergroup") == 'DTE') {
				setTabStyle("tab4", 3, "visible", "true"); // Approvers Report
				}
				
				if (getValue("Usergroup") == 'DTL') {
				setTabStyle("tab4", 2, "visible", "false");
				setTabStyle("tab4", 3, "visible", "true");					//profile section
				}
				
				if (getValue("Usergroup") == 'Legal') {
					setTabStyle("tab4", 2, "visible", "true");
				setTabStyle("tab4", 3, "visible", "true"); // Approvers Report
				setStyle("Approver","visible","false");
				}
				
				setStyle("label282","visible","false");
				setStyle("Option1_transaction","visible","false");
				
			}
		}
		function option1_jurisdiction(){
			var jurisdiction = getValue('Option1_transaction');
			if (jurisdiction == "Aviation Leasing")
			{ 
				setStyle("label283","visible","true");
				setStyle("Option1_payeejurisdiction","visible","true");
			}
			else{
				setStyle("label283","visible","false");
				setStyle("Option1_payeejurisdiction","visible","false");
			}
		
		}
		function option1_payeejurisdiction(){
			var jurisdiction = getValue('Option1_payeejurisdiction');
			if (jurisdiction == "Yes")
			{ 
				setStyle("label283","visible","true");
				setStyle("Option1_payeejurisdiction","visible","true");
				setValues({"outcome": "FATCA NOT REQUIRED" }, true);
				if (getValue("Usergroup") == 'DTE'){
				 showMessage("Option4_Fatcacompliant","No further action is required. You may proceed to click on the 'Complete' button to complete this FATCA activity","Confirm");
				}
				 setStyle("label335","visible","true");
			}
			else{
				setStyle("label283","visible","false");
				setStyle("Option1_payeejurisdiction","visible","true");//changed this to true
				setValues({"outcome": "FATCA REQUIRED" }, true);
				setStyle("label283","visible","true");
				}
			
			
			
			
		}
function option1_liveagency(){
		var questionnaire= getValue('questionnaire');
			if(questionnaire == "Yes" || getValue('Option2_existingdealussource') == "Yes, my deal is US source")
			{
				if (getValue("Usergroup") == 'DTE'){
					
				alert("1.Complete the approvers Section and click the 'Notify legal' to send an early notification of this deal to Legal, and where applicable,Corporate agency and trust 2.Ensure the appropriate FATCA procedures are followed by visiting CIB Fatca page and complete the profile report. Once completed,Submit to the Deal team leader for confirmation"); }
					document.getElementById('sheet18_link').style.pointerEvents = 'auto';
					if (getValue("Usergroup") == 'Legal') {
				setTabStyle("tab4", 2, "visible", "true");	//Approvals section
				}
					setStyle("label335","visible","false");
				setStyle("label329","visible","true");  //for displaying the message label
					setValues({"outcome": "FATCA REQUIRED" }, true);
	}
	else 
	{
					setStyle("label335","visible","false"); 
					setTabStyle("tab4", 1, "visible", "false");
					setTabStyle("tab4", 2, "visible", "false");
					setTabStyle("tab4", 3, "visible", "false");// these 3 lines
					setStyle("label329","visible","true");  //for displaying the message label
					setValues({"outcome": "FATCA REQUIRED" }, true);
	}
	}
	
	
	
	function option2_dealsatisfaction(){
		var satisfaction= getValue('Option2_dealsatisfy');
	if(satisfaction == "Yes"){
			setStyle("label331","visible","true");  //for displaying the message label
				setValues({"outcome": "FATCA NOT REQUIRED" }, true);
				setStyle("Self_declaration","visible","true");
		}
	 if (satisfaction == "No"){
			setStyle("label331","visible","true");  //for displaying the message label
				setValues({"outcome": "FATCA REQUIRED" }, true);
				setStyle("label331","visible","true");
				setStyle("Self_declaration","visible","false");		//Self_declaration 
		}
	}
	
	
	
	function option3_creditdealussource()
    {
        var credUs= getValue('Option3_creditdealussource');
            if(credUs == "Yes, my deal is US source"){
                    setStyle("label325","visible","true");//setting msg to be displayed
					setStyle("label326",'visible','false');
					  setStyle("label32","visible","false");
					  
					  
					  if (getValue("Usergroup") == 'DTL') {
					setTabStyle("tab4", 1, "visible", "true");  }
					
					  if (getValue("Usergroup") == 'Legal') {
						  setTabStyle("tab4", 1, "visible", "true"); //Comments
						  setStyle("Comments", "mandatory", "true");
					setTabStyle("tab4", 2, "visible", "true");	//Profile section
				}
					
                    setValues({"outcome": "FATCA REQUIRED" }, true);
            }
           if(credUs == "No, my deal is not US source")
            {
					setStyle("label325",'visible','false');
                    setStyle("label326",'visible','true');  //setting msg to be displayed
					
                     setValues({"outcome": "FATCA Not REQUIRED" }, true);
					 if ((getValue("Usergroup") == 'DTE') ) {
					 showMessage("Option4_Fatcacompliant","No further action is required. You may proceed to click on the “Complete” button to complete this FATCA activity","Confirm");
					 }
					
            }
           
    }
				
	function option4_recipientfatca(){
		var tb= getValue('Option4_Fatcacompliant');
			if(tb == "Yes, the intended recipient is FATCA compliant."){
				setStyle("label328",'visible','false');
					setStyle("label327","visible","true");//setting msg to be displayed
					
				if ((getValue("Usergroup") == 'Legal') ) {
				setTabStyle("tab4", 2, "visible", "false"); // Profile Report
				}
				
					setValues({"outcome": "FATCA Not REQUIRED" }, true);
					if ((getValue("Usergroup") == 'DTE') ) {
				showMessage("Option4_Fatcacompliant","No further action is required. You may proceed to click on the “Complete” button to complete this FATCA activity","Confirm");
				}
					
					
			}
		    if(tb =="No, the intended recipient is not FATCA compliant.")
			{
					if ((getValue("Usergroup") == 'Legal') ) {
				setTabStyle("tab4", 2, "visible", "true"); // Profile Report
				}
				
					setStyle("label327","visible","false");
					setStyle("label328",'visible','true');  //setting msg to be displayed
			 	    setValues({"outcome": "FATCA REQUIRED" }, true);
			
			}
			
			

	}
	
	    function option6_contract(){
			
        var tb= getValue('Option6_dealcondition');
            if(tb == "Yes, ALL of the above conditions apply"){
				setStyle("label334",'visible','false'); 
                    setStyle("label333","visible","true");     //setting message to be displayed
					
                    setValues({"outcome": "FATCA Not REQUIRED" }, true);
					if ((getValue("Usergroup") == 'DTE') ) {
                    showMessage("Option6_dealcondition","No further action is required. You may proceed to click on the “Complete” button to complete this FATCA activity","Confirm");}
				   
            }
            if(tb == "No. One or more of the above conditions do not apply")
            {	
				if ((getValue("Usergroup") == 'DTL') ) {
                setTabStyle("tab4", 1, "visible", "true");}
				setStyle("label333","visible","false");
                    setStyle("label334",'visible','true');  //setting msg to be displayed
                     setValues({"outcome": "FATCA REQUIRED" }, true);
            
            }
           }

		//Fatca_outcome();
