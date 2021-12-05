<?php 
session_start();

	include("connection.php");
	include("functions.php");

	$user_data = check_login($con);

?>

<!DOCTYPE html>
<html>
<head>
 <script defer 
        src="https://code.jquery.com/jquery-3.4.1.min.js"  
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="    
        crossorigin="anonymous">
        </script>
        <!--Bootstrap JS--> 
        <script defer    
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"    
                integrity="sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm"    
                crossorigin="anonymous">
                    
        </script>
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <link rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"    
              integrity=        "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
              crossorigin="anonymous">
        <link rel="stylesheet" href="css/main.css">
        <link rel ="stylesheet" href ="css/lightbox.min.css">
        <script src ="js/lightbox-plus-jquery.min.js "/>
 <script defer src ="js/main.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
 <?php include 'head1.php' ?>
	<title>Project: Car</title>
</head>
<body style ="background-color: lightblue">
<?php include "nav1.inc.php" ?>

	
 <header class = "jumbotron text-center jumbotron-fluid" style ="');">
            <div class ="container-banner">
                <h1 class ="display-1"><em>Project: Car</em></h1>
<h1>Welcome to the challenge, <?php echo $user_data['user_name']; ?>! </h1>
            </div>
        </header>

<main class ="container-fluid">
        
        <section id ="Car">
            <div class ="row ">
               
            <article class ="col-sm-4" >
               
                 <figure class = "center">
                
                    <img  class = "center" src ="loading.gif"  
                          alt ='level1'
                          title ="View larger image..."/></a>  
                    <a href= "control.html"</a>
                    
                    
                
                
                    <figcaption style ="font-family: cursive;text-align: center;" ><strong>Beginner Level!</strong></figcaption>
                </figure>
                
               
            </article>
          
            <article class ="col-sm-4" >
               
                 <figure class = "center">
                
                    <img  class = "center" src ="loading.gif"  
                          alt ='level1'
                          title ="View larger image..."/></a>  
                    <a href= "control2.html"</a>
                    
                    
                
                
                    <figcaption style ="font-family: cursive;text-align: center;" ><strong>Intermediate Level!</strong></figcaption>
                </figure>
                
               
            </article>
            <article class ="col-sm-4" >
               
                 <figure class = "center">
                
                    <img  class = "center" src ="loading.gif"  
                          alt ='level1'
                          title ="View larger image..."/></a>  
                    <a href= "control3.html"</a>
                    
                    
                
                
                    <figcaption style ="font-family: cursive;text-align: center;" ><strong>Veteran Level!</strong></figcaption>
                </figure>
                
               
            </article>
        </div>
        </section>
        </main>

	<br>

</body>
<?php    
  include "footer.inc.php"  
  ?>
</html>