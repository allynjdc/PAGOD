$(document).ready(function(){
	$(document).on("click", "#add_constraint", addConstraint);
	$(document).on("click", ".remove-constraint", removeConstraint);
    $(document).on("click", ".constraint-item", changeBtnName);
    $('[data-toggle="tooltip"]').tooltip();
    $(function(){
    	$('.timepicker3').datetimepicker({
    		format: 'LT'
    	});
    });
});

function changeBtnName(){
	var text = $(this).text()
	var data_text = text.toLowerCase();
	data_text = data_text.replace(" ", "");
	if($(this).hasClass("add-constraint-item")){
		$(".add-constraint-btn").html(text+" <span class='caret'></span>");
		$(".add-constraint-btn").attr("data-constraint", data_text);
	}else{
		$(".edit-constraint-btn").html(text+" <span class='caret'></span>");
		$(".edit-constraint-btn").attr("data-constraint", data_text);
	}
}

function addConstraint(e){
	e.preventDefault();
	var text = "";
	if($("#add_tabs > .active").attr("data-tab") == "addcourserestriction"){
		text = "Must Not Have"
		if($(".add-constraint-btn").attr("data-constraint") == "musthave"){
			text = "Must Have";
		}
		text += (" "+$("#addcourserestriction > div > input:text[name=course]").val());
	}else{
		var start_time = $("#add-start-time").val();
		var end_time = $("#add-end-time").val();
		text = "Classes must start from "+start_time+" to "+end_time;
		if (start_time == end_time){
			text = "No Classes";
		}
		var selected = [];
		$("#addmeetingtime > div > label > input:checkbox[name=days]:checked").each(function(){
			selected.push($(this).val());
		});
		if(selected.length){
			text += " on ";
			for (var i = 0; i < selected.length; i++) {
				text += selected[i];
				if(i != selected.length-1){
					text += ", ";
				}
			}
		}
	}
	var newDiv = '<div class="priority_entry">'+
					'<p>'+
						'<b>'+text+'</b>'+
						'<a class="remove-constraint" data-toggle="modal"  href="#remove" ><span class="glyphicon glyphicon-remove pull-right"></span></a>'+
						'<a class="" data-toggle="modal" href="#editconstraint"><span class="glyphicon glyphicon-edit pull-right"></span></a>'+
					'</p>'+
				'</div>';
	var priority_value = "#"+$("input:radio[name=add_priority]:checked").val();
	if ($(priority_value+" > .panel-body > .no_entry").length){
		$(priority_value+" > .panel-body").html(newDiv);
		$(priority_value+"_badge").html(1);
	}else{
		$(priority_value+" > .panel-body").append(newDiv);
		$(priority_value+"_badge").html($(priority_value+" > .panel-body > .priority_entry").length);
	}
	$(priority_value).addClass("in");
	addConstraintReset();
}

function addConstraintReset(){
	$(".add-constraint-btn").html("Must Not Have <span class='caret'></span>");
	$("input:radio[name=add_priority]").removeAttr("checked");
	$("#addmeetingtime > div > label > input:checkbox[name=days]").removeAttr("checked");
	$("#addcourserestriction > div > input:text[name=course]").val("");
	$("#add-start-time").val("");
	$("#add-end-time").val("");
	$("#add_tabs > li[data-tab=addmeetingtime]").removeClass("active");
	$("#addmeetingtime").removeClass("active");
	$("#addmeetingtime").removeClass("in");
	if(!$("#add_tabs > li[data-tab=addcourserestriction]").hasClass("active")){
		$("#add_tabs > li[data-tab=addcourserestriction]").addClass("active");
		$("#addcourserestriction").addClass("active");
		$("#addcourserestriction").addClass("in");
	}
	$("#addconstraint").modal('hide');
}

function removeConstraint(){
	var priority = $(this).parent().parent().parent().parent()[0].id;
	$(this).closest(".priority_entry").remove();
	$("#"+priority+"_badge").html($("#"+priority+" > .panel-body > .priority_entry").length);
	if($("#"+priority+" > .panel-body > .priority_entry").length == 0){
		$("#"+priority+" > .panel-body").html(
				'<div class="priority_entry no_entry">'+
					'<p>'+
						'<b>No Constraints</b>'+
					'</p>'+
				'</div>'
			);
	}
}