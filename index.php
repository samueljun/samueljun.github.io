<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="utf-8">
		<title>Samuel Jun</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="resources/css/bootstrap-responsive.css">

		<script src="resources/js/jquery-2.0.2.js"></script>
		<script src="resources/js/bootstrap.js"></script>
	</head>

	<body>
		<?php include("header.php"); ?>

		<div class="container">
			<div class="tab-content">
				<div class="tab-pane active" id="home">
					<?php include("tabs/home.php"); ?>
				</div>
				<div class="tab-pane" id="projects">
					<?php include("tabs/projects.php"); ?>
				</div>
				<div class="tab-pane" id="courses">
					<?php include("tabs/courses.php"); ?>
				</div>
				<div class="tab-pane" id="contact">
					<?php include("tabs/contact.php"); ?>
				</div>
			</div>
		</div>

		<script>
			$('#navigation a').click(function(e) {
				e.preventDefault();
				$(this).tab('show');
			})
		</script>
	</body>

</html>
