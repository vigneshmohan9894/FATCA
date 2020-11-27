
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

	if(ActivityName=='Draft')
        { 
	setValues({"Deal_Team_Leader": "Vamsi" }, true);
	//setValues({"Expected_ActualDate": "11-10-2020" }, true);
	setValues({"Client_name": "SCB FATCA" }, true);
	setValues({"Deal_id": "CF012345" }, true);
	setValues({"Product_type": "FATCA-process"}, true);
	setValues({"Activity_status": "Draft"}, true);
	setValues({"Decision": "DRAFT"}, true);
	
	setStyle("Submit","visible","true");
	setStyle("Save_draft","visible","true");
	
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

setStyle("label327","visible","false");
setStyle("label328","visible","false");
setStyle("label333","visible","false");
setStyle("label334","visible","false");
setStyle("label325","visible","false");
setStyle("label326","visible","false");
	
	setStyle("label329","visible","false");
	setStyle("label330","visible","false");
	setStyle("label313","visible","false");
	
	//below four lines by k

	setTabStyle("tab4", 2, "visible", "false");
	setTabStyle("tab4", 3, "visible", "false");
	setTabStyle("tab4", 4, "visible", "false");
	
	//document.getElementById('sheet18_link').style.pointerEvents = 'none';
	//document.getElementById('sheet61_link').style.pointerEvents = 'none';
	//document.getElementById('sheet62_link').style.pointerEvents = 'none';
	//document.getElementById('sheet65_link').style.pointerEvents = 'none';
	
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



if(ActivityName=='UnderReview-DTL'){
	
	setValues({"Activity_status": "Under Review"}, true);
	
	if (getValue("Usergroup") == 'DTE') {
		
		
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
			
	}
	if (getValue("Usergroup") == 'DTL') {
		
		setStyle("Submit","visible","true");
		setStyle("Recall","visible","true");
		setTabStyle("tab4", 3, "visible", "false");//here by k
		setValues({"Activity_status": "UnderReview-Deal Team Leader"}, true);
		
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
		option1_liveagency();
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		
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
		
		
	}
	if (getValue("Usergroup") == 'Legal') {
		
		setStyle("Recall","visible","true");
		
		
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
		option1_liveagency();
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
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
		
	}
}


if(ActivityName=='UnderReview-Legal'){
	
	setValues({"Activity_status": "Under Review"}, true);
	
	if (getValue("Usergroup") == 'DTE') {
		
		
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
			
	}
	if (getValue("Usergroup") == 'DTL') {
		
		setStyle("Submit","visible","true");
		setStyle("Recall","visible","true");
		setTabStyle("tab4", 3, "disable", "false");
		setValues({"Activity_status": "UnderReview-Deal Team Leader"}, true);
		
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
		option1_liveagency();
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
		
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
		
		
	}
	if (getValue("Usergroup") == 'Legal') {
		
		setStyle("Recall","visible","true");
		
		
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
		option1_liveagency();
		option2_dealsatisfaction();
		option3_creditdealussource();
		option4_recipientfatca();
		option6_contract();
		
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
		
	}
}


if(ActivityName =='Referback'){
	
	setValues({"Activity_status": "Referback"}, true);
	saveWorkItem();
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
	
	if (getValue("Usergroup") == 'DTE') {
		
		setStyle("Submit","visible","true");
		
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
		option1_liveagency();
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
		option1_liveagency();
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



function Recall(){
	setValues({"Activity_status": "Recalled"}, true);
	var ActivityName=window.parent.stractivityName;
	saveWorkItem();
	 if (ActivityName == 'UnderReview') 
	 {
              if (getValue("Usergroup") == 'DTE') {
							if(getValue('Activity_status') == 'Recalled'){
								setStyle("Recall", "visible", "false");
								setStyle("Save_draft", "visible", "false");
								saveWorkItem();
								completeWorkItem();
							}
	}
						if (getValue("Usergroup") == 'DTL' || getValue("Usergroup") == 'Legal' ) {
							if(getValue('Activity_status') == 'Recalled'){
								setStyle("Recall", "visible", "false");
								setStyle("Save_draft", "visible", "false");
								saveWorkItem();
								completeWorkItem();
							}
	
}
	 }
}

function validateDocumentType(sInputDocName)
{
    try
    {
        var xmlOut = window.parent.getInterfaceData("DLIST");
        var sDocName = "";
        while (xmlOut.indexOf("<DocumentName>") > 0)
        {
            //for multiple Documents
            sDocName = sDocName + xmlOut.substring(xmlOut.indexOf('<DocumentName>') + 14, xmlOut.indexOf('</DocumentName>')) + "||";
            xmlOut = xmlOut.substring(xmlOut.indexOf('</Document>') + 11, xmlOut.length);
        }
        if (sDocName.indexOf(sInputDocName) == -1)
        {
            showMessage("", "Please upload Required documents", "error");
			return false;
        }
    }
    catch (ex) {
    }
    return true;
}

function Legal_action(){
	/*var x = document.getElementById("pets").options[2].visible = true;
	function showonlyone(thechosenone) {
      var newboxes = document.getElementsByTagName("div");
            for(var x=0; x<newboxes.length; x++) {
                  name = newboxes[x].getAttribute("name");
                  if (name == 'newboxes') {
                        if (newboxes[x].id == thechosenone) {
                        newboxes[x].style.display = 'block';
                  }
                  else {
                        newboxes[x].style.display = 'none';
                  }
            }
      }
}
*/
	if ((getValue("Legal_action") == 'Reject')){
		setStyle("Comments", "mandatory", "true");
		
	}
	
	if ((getValue("Legal_action") == 'Referback')){
		setStyle("Comments", "mandatory", "true");
		setStyle("Submit", "visible", "true");
		setCaption("Submit", "Referback");
		
	}
	
	if(getValue("Legal_action") == 'Approve') {
		setStyle("Recall", "mandatory", "false");
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
                case 'Submit':
				
					saveWorkItem();
					completeWorkItem();
					return false;
					
					case 'Recall':
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
	 
	 case 'Save':
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
		
		showMessage("questionnaire","No further action is required. You may proceed to click on the 'Complete' button to complete this FATCA activity","Confirm");
		
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
				
				
				setTabStyle("tab11", 0, "visible", "false");
				
				//disabling
				
					setStyle("label282","visible","true");
					setStyle("Option1_liveagency","visible","true");
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
				 setStyle("label333","visible","false");
                setStyle("label334",'visible','false'); 
                setTabStyle("tab4", 2, "disable", "true")
				}
		}
		
		   function option1_dealussource()
		{
			
			var dealussource= getValue('Option1_dealussource');
			if(dealussource == "Yes, my deal is US source"){
				
				setTabStyle("tab4", 2, "visible", "true");	//for enabling profile report and approvals section
				setTabStyle("tab4", 3, "visible", "true");
				setTabStyle("tab4", 4, "visible", "true");// these three lines by k
				
				    //document.getElementById('sheet61_link').style.pointerEvents = 'auto';
					//document.getElementById('sheet62_link').style.pointerEvents = 'auto';
					//document.getElementById('sheet63_link').style.pointerEvents = 'auto';
					
				
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
				setStyle("label329","visible","false");
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
				
				setTabStyle("tab4", 2, "visible", "true");	//for enabling profile report and approvals section
				setTabStyle("tab4", 3, "visible", "true");//here 2 lines by k
				
				document.getElementById('sheet61_link').style.pointerEvents = 'auto';
					document.getElementById('sheet62_link').style.pointerEvents = 'auto';

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
			
				//	document.getElementById('sheet61_link').style.pointerEvents = 'auto';
					//document.getElementById('sheet62_link').style.pointerEvents = 'auto';
					
					setTabStyle("tab4", 2, "visible", "true");
					setTabStyle("tab4", 3, "visible", "true");
					
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
				 showMessage("Option4_Fatcacompliant","No further action is required. You may proceed to click on the 'Complete' button to complete this FATCA activity","Confirm");
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
					setTabStyle("tab4", 2, "visible", "true");
					setTabStyle("tab4", 3, "visible", "true");// here 2 lines by k
					setStyle("label329","visible","true");  //for displaying the message label
					setValues({"outcome": "FATCA REQUIRED" }, true);
	}
	else 
	{
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
		}
		else if (satisfaction == "No"){
			setStyle("label331","visible","true");  //for displaying the message label
				setValues({"outcome": "FATCA REQUIRED" }, true);
		}
	}
	
	
	
	function option3_creditdealussource()
    {
        var credUs= getValue('Option3_creditdealussource');
            if(credUs == "Yes, my deal is US source"){
                    setStyle("label325","visible","true");//setting msg to be displayed
					setStyle("label326",'visible','false');
					  setStyle("label32","visible","false");
					  setTabStyle("tab4", 1, "visible", "true");// the below 4 lines bt k
					setTabStyle("tab4", 2, "visible", "true");
					setTabStyle("tab4", 3, "visible", "true");
					setTabStyle("tab4", 4, "visible", "true");
					document.getElementById('sheet18_link').style.pointerEvents = 'auto';
					document.getElementById('sheet61_link').style.pointerEvents = 'auto';
					document.getElementById('sheet62_link').style.pointerEvents = 'auto';
					document.getElementById('sheet65_link').style.pointerEvents = 'auto';
			
                    setValues({"outcome": "FATCA REQUIRED" }, true);
            }
           if(credUs == "No, my deal is not US source")
            {
                
					setStyle("label325",'visible','false');
                    setStyle("label326",'visible','true');  //setting msg to be displayed
					
					setTabStyle("tab4", 2, "visible", "false");// here 1 line by k
                     setValues({"outcome": "FATCA Not REQUIRED" }, true);
                    showMessage("Option4_Fatcacompliant","No further action is required. You may proceed to click on the “Complete” button to complete this FATCA activity","Confirm");
					
					
					
            }
           
    }
				
	function option4_recipientfatca(){
		var tb= getValue('Option4_Fatcacompliant');
			if(tb == "Yes, the intended recipient is FATCA compliant"){
				setStyle("label328",'visible','false');
					setStyle("label327","visible","true");//setting msg to be displayed
					
					setTabStyle("tab4", 2, "visible", "true");// here 3 lines
					setTabStyle("tab4", 3, "visible", "true");
					setTabStyle("tab4", 4, "visible", "true");
					document.getElementById('sheet18_link').style.pointerEvents = 'auto';
					document.getElementById('sheet61_link').style.pointerEvents = 'auto';
					document.getElementById('sheet62_link').style.pointerEvents = 'auto';
					document.getElementById('sheet65_link').style.pointerEvents = 'auto';
					setValues({"outcome": "FATCA Not REQUIRED" }, true);
					
					setValues({"outcome": "FATCA Not REQUIRED" }, true);
					showMessage("Option4_Fatcacompliant","No further action is required. You may proceed to click on the “Complete” button to complete this FATCA activity","Confirm");
					
			}
		    if(tb =="No, the intended recipient is not FATCA compliant")
			{
					setTabStyle("tab4", 2, "visible", "true");// here by k
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
					setTabStyle("tab4", 2, "visible", "false");// here by k
                    setValues({"outcome": "FATCA Not REQUIRED" }, true);
					
					setTabStyle("tab4", 1, "visible", "true");//below 4 lines by k
					setTabStyle("tab4", 2, "visible", "true");
					setTabStyle("tab4", 3, "visible", "true");
					setTabStyle("tab4", 4, "visible", "true");
					document.getElementById('sheet18_link').style.pointerEvents = 'auto';
					document.getElementById('sheet61_link').style.pointerEvents = 'auto';
					document.getElementById('sheet62_link').style.pointerEvents = 'auto';
					document.getElementById('sheet65_link').style.pointerEvents = 'auto';
                    
					
                    showMessage("Option6_dealcondition","No further action is required. You may proceed to click on the “Complete” button to complete this FATCA activity","Confirm");
                    
            }
            if(tb == "No. One or more of the above conditions do not apply")
            {
                setTabStyle("tab4", 2, "visible", "true");//here 1 line by k
				setStyle("label333","visible","false");
                    setStyle("label334",'visible','true');  //setting msg to be displayed
                     setValues({"outcome": "FATCA REQUIRED" }, true);
            
            }
           }

		//Fatca_outcome();
