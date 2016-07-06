<!DOCTYPE html>
<html>
	<head>
		<script type="text/javascript" src='scripts/script.js'></script>
		<link rel="stylesheet" href="stylesheets/stylesheet.css" />
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<img src="images/cat-pingpong.jpg" alt="catswannahavefun" />
		<ul>
			{% loop taskManager.pending %}
				<li id="{{ index }}"><input type="checkbox">{{ item }}</li>
			{% endloop %}

			any shit

			{% loop taskManager.pending %}
				<li id="{{ index }}"><input type="checkbox">{{ item }}</li>
			{% endloop %}
		</ul>
	</body>
</html>
