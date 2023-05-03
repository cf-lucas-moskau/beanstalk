<script lang="ts">
	export let title: string = 'Beanstalk Accelerator';
	export let logoSrc: string = 'https://github.com/cf-lucas-moskau/beanstalk/blob/main/Sophia/Frontend/beanstalk/src/lib/images/beanstalk_logo.png?raw=true';
	export let aboutLink: string = '/about';
  </script>
  
  <header class="header">
	<div class="logo">
		<a href="/">
			<img src={logoSrc} alt="Logo" />
		</a>
	</div>
	<div class="title">
	  <h1>{title}</h1>
	</div>
	<div class="about-link">
	  <a href={aboutLink}>About</a>
	</div>
  </header>
  
  <style>
	.header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  height: 80px;
	  padding: 0 20px;
	  background-color: #fff;
	  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
  
	.logo img {
	  height: 50px;
	}
  
	.title h1 {
	  font-size: 24px;
	  font-weight: bold;
	  text-align: center;
	}
  
	.about-link a {
	  font-size: 16px;
	  text-decoration: none;
	  color: #333;
	}
  </style>