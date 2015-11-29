$(document).ready(function(){


var currDate = new Date();
var timeStamp= (currDate.getFullYear()+ '_' + ( currDate.getMonth()+ 1) + '_' + currDate.getDate() ) ;

/* base array to hold all the section`s 
	user input data 
	settings 
	commands
	output
 */	
var sections = {
sectionA:'Project_create',
sectionB:'validate_mapping_file'

};
var inputData = {
	name:'',
	cmd:'',
	pyfile:'',

};

var mainData = {
sectionA:{
		sectionInput:'',
		sectionConfig:{
				projectName:'',
				folderName:   'ProjectName_'+ timeStamp ,
				folderSource : '/data/username',
				
			},
		sectionOutput:''
	},
sectionB:{
		sectionInput:'',
		sectionConfig:'',
		sectionOutput:''
	}
};
var basePath = mainData.sectionA.sectionConfig.folderSource+'/';
/* init for form values  */
$('#sectionA #folderName').attr('value', mainData.sectionA.sectionConfig.folderName);
$('#sectionA #folderSource').attr('value',basePath );

 
/* alert($mainData.sectionA.sectionConfig.folderName); */

/* Click events for form submit elements  */


/* section home */
$('#submit_sectionA').click(function(){
	var command = "";
	var sectionId = 'sectionA';
	basePath = $('#'+sectionId+' #folderSource').val();
	var folderName = $('#'+sectionId+' #folderName').val();
	var cdPath = basePath  + folderName;
	command+= "mkdir -p " + cdPath + "/{input,backup} && cd "+ cdPath +" && touch "+ mainData.sectionA.sectionConfig.folderName +'_commands.txt';	
	var elm = '#'+sectionId+' .result';	
	
	$(elm).html(command);
	

});

/* section validate file  */
$('#submit_sectionB').click(function(){

	var command = "";
	var sectionId = 'sectionB';
	var inputFile = $('#'+sectionId+' #inputFile').val();	
	var folderName = mainData.sectionA.sectionConfig.folderName;
	var cdPath = basePath + '/' + folderName;
	var sectionName = sections[sectionId];
	command+= "mkdir -p " + basePath + sections[sectionId]+ "/output";
	command+= " && validate_mapping_file.py -m "+basePath+ "input/"+ inputFile + " -o output/ ";
	var inputData = {
		name: sectionName.replace(/_/g, ' '),
		cmd: command,
		pyfile:sectionName
	
	};
	
	var result = {script:generateScript(inputData),
	cmd:command
	};
	console.log(result);
	var elm = 'sectionB';
	updateResult(elm ,result);

});

 $("#sectionA #download").click(function() {
 var content = $('#sectionA .result').text();
        window.location.href = 'data:application/download,' + encodeURIComponent(
		content
	)
    });







})



/* Common function list */


function updateResult(elm , data){
	var cmd = data.cmd;
	var script = data.script;
	var section = elm ;
	//update the command tab
	$('#'+section+'_cmd .result').html(cmd);
	$('#'+section+'_script .result').html(script);
	
}

function generateScript(inputData){
	var script = "";
	var sName = inputData.name;
	var sCmd = inputData.cmd;
	var sPyfile = inputData.pyfile;
	var result = "echo 'RESULT#  ' >> log.txt  ";
	var output = "echo 'OUTPUT#  ' >> log.txt && ls  output/  &>> log.txt";
	script+= " echo -e '*****************STEP:# START "+ sName.toUpperCase()+" **************************************** \r\n COMMAND# "+sCmd+" \r\n RUNNING ON#CLUSTER ' >log.txt \r\n";
	script+= " &&  date 'DATE# %m/%d/%y  TIME#%H:%M:%S'  >> log.txt "  ;
	script+= " && "+result  ;
	script+= " && "+sCmd+" &>> log.txt";
	script+= " && "+output  ;
	script+= " && echo -e '*****************STEP:# END "+ sName.toUpperCase()+"************' >>log.txt";
	script+= " && grep 'COMMAND#' log.txt > ../ "+ sName.toUpperCase()+"************' >>log.txt";

	return script;
}
