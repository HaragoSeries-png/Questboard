<template>
<div>



<h1 style="text-align:center;margin-top:3%;margin-bottom:2%;">Our Team</h1>

   <v-img
      :aspect-ratio="16/9"
      :width="width"
      src="about_paper.png"
      style="height:90vh"
    ></v-img>
  <div class="welcome">
        <div class="header-welcome">
          <center>" It does matter who we are . . .<br>
            <span style="padding-left:10%;">buts we will be a <span style="text-decoration:underline;">Hokange</span>"</span>
             </center>
        </div>
    
      </div>
   


 <div class="body">
   
    <div class="container"> 
       

        <div class="card">
            <div class="imgBx">
                <img src="f.png">
            </div>
            <div class="contentBx">
                <div class="content">
                    <h2>Waris Tornsathien</h2>
                    <p><span style="font-size:3rem;color:red;">P</span>roject Manager</p>
                    <a href="https://www.facebook.com/fray.siraw"> <img src="facebook1.png" class="icon_profile">  </a>
                    <a href="https://www.linkedin.com/in/waris-tornsathien/"> <img src="linkedin1.png" class="icon_profile"> </a>
                    <a href="https://github.com/Siraw1998" > <img src="github1.png" class="icon_profile"></a>
                    <a href="https://www.instagram.com/siraw1998/" > <img src="ig1.png" class="icon_profile"></a>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
                <img src="j.png">
            </div>
            <div class="contentBx">
                <div class="content">
                    <h2>Jiraphat Sae-heng</h2>
                    <p><span style="font-size:3rem;color:red;">B</span>usiness Analyze</p>
                    <a href="https://www.facebook.com/jiraphat.saeheng"><img src="facebook1.png" class="icon_profile"> </a>
                    <a href="#">          <img src="linkedin1.png" class="icon_profile"> </a>
                    <a href="https://github.com/juniorjiraphat1143"> <img src="github1.png" class="icon_profile"></a>
                    <a href="https://www.instagram.com/junior_jpz/" ><img src="ig1.png" class="icon_profile"></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
                <img src="atom.png.png">
            </div>
            <div class="contentBx">
               <div class="content">
                    <h2>Chanon Likitsarwit</h2>
                     <p><span style="font-size:3rem;color:red;">D</span>eveloper </p>
                    <a href="https://www.facebook.com/atom3.14" >  <img src="facebook1.png" class="icon_profile"> </a>
                    <a href="#" class="fab fa-linkedin-in"><img src="linkedin1.png" class="icon_profile"></a>
                    <a href="https://github.com/HaragoSeries-png"><img src="github1.png" class="icon_profile"></a>
                    <a href="https://www.instagram.com/atomtofu/" ><img src="ig1.png" class="icon_profile"></a>
                </div>
            </div>
        </div><div class="card">
            <div class="imgBx">
                <img src="t.png">
            </div>
            <div class="contentBx">
               <div class="content">
                    <h2>Sutisak Sompong</h2>
               
                    <p><span style="font-size:3rem;color:red;">U</span>X/UI Designer </p>
                    <a href="https://www.facebook.com/profile.php?id=100004565280118"><img src="facebook1.png" class="icon_profile"></a>
                    <a href="https://www.linkedin.com/in/sutisak-sompong-072155204/" ><img src="linkedin1.png" class="icon_profile"></a>
                    <a href="https://github.com/61090500454" > <img src="github1.png" class="icon_profile"></a>
                    <a href="https://www.instagram.com/sutisaksompong/"><img src="ig1.png" class="icon_profile"></a>
                </div>
            </div>
        </div><div class="card">
            <div class="imgBx">
                <img src="b.png">
            </div>
            <div class="contentBx">
              <div class="content">
                    <h2>Kittisak Sangkarak</h2>
                     <p><span style="font-size:3rem;color:red;">T</span>ester </p>
                    <a href="https://www.facebook.com/bboykungg"><img src="facebook1.png" class="icon_profile"></a>
                    <a href="#" ><img src="linkedin1.png" class="icon_profile"></a>
                    <a href="https://github.com/o-AI-o" > <img src="github1.png" class="icon_profile"></a>
                    <a href="https://www.instagram.com/bboykungg.2/"><img src="ig1.png" class="icon_profile"></a>
                </div>
            </div>
        </div>

    </div>
 </div>
     
</div>
</template>

<script>
export default {
name:'aboutUs'
}
</script>

<style scoped>
*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins',sans-serif;
}
.body
{
    width: 100%;
    min-height:100vh;
    display: flex;
    justify-content:center;
    align-items:center;
}
.icon_profile{
    width:10%;
}
.icon_profile:hover{
    width: 20%;
    transition: .5s;
}
.container
{
    
    position:relative;
    width: 1000px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
}
.container h1{ font-size:50px;
margin: 100px 0;}

.container .card
{
    position: relative;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    margin: 100px 0;
}
.container .card:nth-child(odd)
{
    flex-direction: row;
}
.container .card:nth-child(even)
{
    flex-direction: row-reverse;
    text-align: right;
}
.container .card .imgBx
{
    position: relative;
   
    width: 500px;
    height:400px;
    z-index: 1;
    
    
}

.container .card .imgBx img
{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
.container .card .contentBx
{
    position: relative;
   
    width:500px;
    height: 400px;
    background: #000;
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 20px 60px 20px 100px;
}
.container .card:nth-child(even) .contentBx
{

     padding: 20px 100px 20px 60px;
}
.container .card .contentBx:before
{
    content: '';
    position: absolute;
    top: -50px;
    bottom: -50px;
    
    right:0;
    background:#000;
    z-index: -1;
}
.container .card .contentBx h2
{
    font-size: 30px;
    color: #fff;
}
.welcome {
    margin-top:5%;
  width: 100%;
  height: 30vh;
}
.header-welcome {
  margin-top: 5%;
  display: flex;
  justify-content: center;
  font-size: 4rem;
  width: 100%;
}
.container .card .contentBx p
{
    margin-top: 10px;
    color: #fff;
}
.container .card .contentBx a
{
color: #f2f2f2;
width: 56px;
font-size: 22px;
transition: .3s linear;
margin-top: 15px;
}
.container .card .contentBx a:hover
{
    color: #e66767;
}
@media (max-width: 1000px)
{
    
    .container .card
    {flex-direction: column;
    width: 350px;
    margin: 25px 25px;}
    .container .card .imgBx
    {width: 100%;
    height:250px;
    left:0;}
    .container .card .contentBx
    {width:100%;
    height:auto;
    right: 0;
    padding: 30px;
    text-align: center}
    .container .card .contentBx:before
    {top: 0;
    bottom: 0;}
    .container .card:nth-child(even) .imgBx
    {left:0px;}
    .container .card:nth-child(even) .contentBx
    {right: 0px;
     padding: 30px;}
}



</style>