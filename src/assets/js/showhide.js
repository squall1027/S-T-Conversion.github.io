function HideContent(d) { 
document.getElementById(d).style.display = "none"; 
} 
function ShowContent(d) { 
document.getElementById(d).style.display = "block"; 
} 
function ReverseDisplay(d) { 
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; } 
else { document.getElementById(d).style.display = "none"; } 
} 

/*
璅  譍 儭  
<a href="javascript:ShowContent('uniquename')">
暺姢 𦠜迨憿舐內 批
捆綁
</a>璅  譍 䕘萼
<a href="javascript:HideContent('uniquename')">
暺墧 𦠜迨 黸  誩 批捆包
</a>
暺墧�𦠜迨憿舐內/�黸��誩�批捆
</a>
�批捆儭�
<div id="uniquename" style="display:none;">
閬��黸���/憿舐內���批捆�𦆮�銁�躰ㄐ
</div>
*/