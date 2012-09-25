<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
    <link rel="stylesheet" type="text/css" href="assets/styles.css" media="screen" />
    <script language="JavaScript" src="assets/jquery-1.8.2.min.js"></script>
    <script language="JavaScript" src="assets/scripts.js"></script>
    <title>http://nissanparismotorshow.me/</title>

</head>
<body>
<div class="container">
    <h1><?php if (isset($_REQUEST['colour'])) echo $_REQUEST['colour'] . ' '; ?>Gallery</h1>
    <div class="main">
        <?php for ($i=0; $i<100; $i++): ?>
            <div class="image<?php if (isset($_REQUEST['colour'])) echo ' ' . $_REQUEST['colour']; ?>">
                <div class="number"><?php echo $i+1; ?></div>
            </div>
        <?php endfor; ?>
    </div>
</div>
</body>
</html>
