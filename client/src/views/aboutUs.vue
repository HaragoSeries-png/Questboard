<template>
  <div>
      <center>
        <div class="container"> 
        <h1>Our Team </h1>

        <div class="card">
            <div class="imgBx">
                <img src="f.png">
            </div>
            <div class="contentBx">
                <div class="content">
                    <h2>Waris Tornsathien</h2>
                    <p>project manager</p>
                    <a href="https://www.facebook.com/fray.siraw" class="fab fa-facebook-f"></a>
                    <a href="https://www.linkedin.com/in/waris-tornsathien/" class="fab fa-linkedin-in"></a>
                    <a href="https://github.com/Siraw1998" class="fab fa-github"></a>
                    <a href="https://www.instagram.com/siraw1998/" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
                <img src="j.png">
            </div>
            <div class="contentBx">
                <div class="content">
                    <h2>Jiraphat</h2>
                    <p>เป็นอะไรจำไม่ได้</p>
                    <a href="https://www.facebook.com/jiraphat.saeheng" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-linkedin-in"></a>
                    <a href="https://github.com/juniorjiraphat1143" class="fab fa-github"></a>
                    <a href="https://www.instagram.com/junior_jpz/" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="imgBx">
                <img src="a.png">
            </div>
            <div class="contentBx">
                <div class="content">
                    <h2>Chanon Likitsarwit</h2>
                    <p>Developer</p>
                    <a href="https://www.facebook.com/atom3.14" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-linkedin-in"></a>
                    <a href="https://github.com/HaragoSeries-png" class="fab fa-github"></a>
                    <a href="https://www.instagram.com/atomtofu/" class="fab fa-instagram"></a>
                </div>
            </div>
        </div><div class="card">
            <div class="imgBx">
                <img src="t.png">
            </div>
            <div class="contentBx">
                <div class="content">
                    <h2>Sutisak Sompong</h2>
                    <p>UX/UI Designer</p>
                    <a href="https://www.facebook.com/profile.php?id=100004565280118" class="fab fa-facebook-f"></a>
                    <a href="https://www.linkedin.com/in/sutisak-sompong-072155204/" class="fab fa-linkedin-in"></a>
                    <a href="https://github.com/61090500454" class="fab fa-github"></a>
                    <a href="https://www.instagram.com/sutisaksompong/" class="fab fa-instagram"></a>
                </div>
            </div>
        </div><div class="card">
            <div class="imgBx">
                <img src="b.png">
            </div>
            <div class="contentBx">
                <div class="content">
                    <h2>Kittisak Sangkarak</h2>
                    <p>Tester</p>
                    <a href="https://www.facebook.com/bboykungg" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-linkedin-in"></a>
                    <a href="https://github.com/o-AI-o" class="fab fa-github"></a>
                    <a href="https://www.instagram.com/bboykungg.2/" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>

    </div>
    </center>
  </div>
</template>

<script>
export default {
name:"aboutUs"
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins',sans-serif;
}
body
{
    width: 100%;
    min-height:100vh;
    display: flex;
    justify-content:center;
    align-items:center;
}
.container
{
    
    position:relative;
    max-width: 1000px;
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
    left:25px;
    width: 500px;
    height:400px;
    z-index: 1;
    
    
}
.container .card:nth-child(even) .imgBx
{
    left:-25px;
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
    right: 25px;
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
    right: -25px;
     padding: 20px 100px 20px 60px;
}
.container .card .contentBx:before
{
    content: '';
    position: absolute;
    top: -50px;
    bottom: -50px;
    left:0;
    right:0;
    background:#000;
    z-index: -1;
}
.container .card .contentBx h2
{
    font-size: 30px;
    color: #fff;
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
    max-width: 350px;
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