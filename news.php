

		<!-- Include head.php block -->
		<?php 
			include('head.php');
		?>

<body>

		<!-- Include menu.php block -->
		<?php 
			include('menu.php');
		?>

		<!-- Include menu.php block -->
		<?php 
			include('contacts.php');
		?>


<div class="wrapper">

	<header>
		<h1>Козацькі новини</h1>
	</header>

	<div class="news-wrapper">

	<!-- Вставка статті -->
	<?php 
		include('articles/article3/article3title.html');
	?>

	<!-- Вставка статті1 -->
	<?php 
		include('articles/article1/article1title.html');
	?>

	<!-- Вставка статті -->
	<?php 
		include('articles/article2/article2title.html');
	?>
	</div>

</div>

		<!-- Вставка footer.php -->
		<?
			include('footer.php')
		?>


</body>

</html>



