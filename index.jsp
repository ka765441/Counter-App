<%-- 
    Document   : index
    Created on : Jun 14, 2019, 1:43:39 PM
    Author     : Ron
--%>

<html>
  <head>
    <link rel="icon" href="logo.ico"/>
    <link rel ="stylesheet" type="text/css" href="style.css" />
    <title>Counter App</title>
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="calc.js">
    </script>
  </head>
  <body>
      <div class="header">
          <img name="icon" src="logo.ico"/>
          <h1>Counter App</h1>
      </div>
      <br><br><br><br><br><br>
      <div class="body">
          <input type="button" onclick="badd()" name="inc" value="Increment"/>
          <input type="button" onclick="bsub()" name="dec" value="Decrement"/>
          <input type="button" onclick="popupadd()"  name="add" value="Add value based on Input"/>
          <input type="button" onclick="popupsub()" name="sub" value="Substract value based on Input"/>
      </div>
      <br><br>
      <div class="footer">
          <output id="rprint">The value now is : 0</output>
      </div>
  </body>
</html>