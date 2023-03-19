

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
		<img src="img/img1.jpg" alt="люті козаки" id="img-main" />
	</header>


	<div class="text">
		<p>
			Здоров будь! 
			Люті козаки роблять виступи, шоу, вистави, розваги, свята, кухню, вогняне шоу в козацькому стилі.
		</p>
	</div>
	
	<!-- послуги -->
	<div class="main-poslugi">
		<div>
			<a href="kozakshow.php"> 
				<img src="img/mainpage/show.jpg" alt="виступи та інтерактиви">
			</a>
		</div>
		<div>
			<a href="rozvagi.php"> 
				<img src="img/mainpage/rozvahy.jpg" alt="козацькі розваги">
			</a>
		</div>
		<div>
			<a href="lutakuhnya.php"> 
				<img src="img/mainpage/kuhnya.jpg" alt="козацька кухня">
			</a>
		</div>
		<div>
			<a href="kozakfire.php"> 
				<img src="img/mainpage/vognyane.jpg" alt="вогняна вистава">
			</a>
		</div>
	</div>


	<div class="video">
		<div class="video-container">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/bKSD25ng0kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</div>

	


</div>

	<!-- підключення скриптів Swiper -->
    <script src="script/swiper-bundle.js"></script>	

    <!-- My scripts -->
    <script src="script.js"></script>

		<!-- Вставка footer.php -->
		<?
			include('footer.php')
		?>
		
	</body>

</html>



