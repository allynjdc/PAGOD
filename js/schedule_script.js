$(document).ready(function(){
	$(document).on("click", "#add_constraint", addConstraint)
});

function addConstraint(){
	if($("input:radio[name=priority]:checked").val() == "high"){
		$("#high > .panel-body").html(
				'<div class="priority_entry">'+
					'<p>'+
						'<b>Class Start:</b>&nbsp;9:00 AM MTThF'+
						'<a class="" data-toggle="modal"  href="#remove" ><span class="glyphicon glyphicon-remove pull-right"></span></a>'+
						'<a class="" data-toggle="modal" href="#editconstraint"><span class="glyphicon glyphicon-edit pull-right"></span></a>'+
					'</p>'+
				'</div>'+
				'<div class="priority_entry">'+
					'<p>'+
						'<b>No</b>&nbsp;Comm 3 class'+
						'<a class="" data-toggle="modal"  href="#remove" ><span class="glyphicon glyphicon-remove pull-right"></span></a>'+
						'<a class="" data-toggle="modal" href="#editconstraint"><span class="glyphicon glyphicon-edit pull-right"></span></a>'+
					'</p>'+
				'</div>'+
				'<div class="priority_entry">'+
					'<p>'+
						'<b>No</b>&nbsp;Lit 2 class'+
						'<a class="" data-toggle="modal"  href="#remove" ><span class="glyphicon glyphicon-remove pull-right"></span></a>'+
						'<a class="" data-toggle="modal" href="#editconstraint"><span class="glyphicon glyphicon-edit pull-right"></span></a>'+
					'</p>'+
				'</div>'
			);
		$("#high_badge").html(3)
		$("#high").addClass("in")
	}else if($("input:radio[name=priority]:checked").val() == "medium"){
		$("#medium > .panel-body").html(
				'<div class="priority_entry">'+
					'<p>'+
						'<b>Class Start:</b>&nbsp;9:00 AM W'+
						'<a class="" data-toggle="modal"  href="#remove" ><span class="glyphicon glyphicon-remove pull-right"></span></a>'+
						'<a class="" data-toggle="modal" href="#editconstraint"><span class="glyphicon glyphicon-edit pull-right"></span></a>'+
					'</p>'+
				'</div>'+
				'<div class="priority_entry">'+
					'<p>'+
						'<b>Class End:</b>&nbsp;4:00 PM MTWThF'+
						'<a class="" data-toggle="modal"  href="#remove" ><span class="glyphicon glyphicon-remove pull-right"></span></a>'+
						'<a class="" data-toggle="modal" href="#editconstraint"><span class="glyphicon glyphicon-edit pull-right"></span></a>'+
					'</p>'+
				'</div>'+
				'<div class="priority_entry">'+
					'<p>'+
						'<b>No</b>&nbsp;Lit 3 class'+
						'<a class="" data-toggle="modal"  href="#remove" ><span class="glyphicon glyphicon-remove pull-right"></span></a>'+
						'<a class="" data-toggle="modal" href="#editconstraint"><span class="glyphicon glyphicon-edit pull-right"></span></a>'+
					'</p>'+
				'</div>'
			);
		$("#medium_badge").html(3)
		$("#medium").addClass("in")
	}else if($("input:radio[name=priority]:checked").val() == "low"){
		$("#low > .panel-body").html(
				'<div class="priority_entry">'+
					'<p>'+
						'<b>Class Start:</b>&nbsp;1:00 PM TF'+
						'<a class="" data-toggle="modal"  href="#remove" ><span class="glyphicon glyphicon-remove pull-right"></span></a>'+
						'<a class="" data-toggle="modal" href="#editconstraint"><span class="glyphicon glyphicon-edit pull-right"></span></a>'+
					'</p>'+
				'</div>'+
				'<div class="priority_entry">'+
					'<p>'+
						'<b>No</b>&nbsp;CMSC 162 class'+
						'<a class="" data-toggle="modal"  href="#remove" ><span class="glyphicon glyphicon-remove pull-right"></span></a>'+
						'<a class="" data-toggle="modal" href="#editconstraint"><span class="glyphicon glyphicon-edit pull-right"></span></a>'+
					'</p>'+
				'</div>'
			);
		$("#low_badge").html(2)
		$("#low").addClass("in")
	}
}