$(document).ready(function(){

$(".food tr").mouseover(function()
{
	$this = $(this);
	if($this.contents().length >2)
	{
		if($this.contents()[1].childNodes.length > 2)
		{
			if($this.contents()[1].childNodes[1])
			{	
				var p = $this.contents()[1].childNodes[1];
				p.removeAttribute('class')
				$this.contents()[1].childNodes[1].removeAttribute('class');
				$(p).addClass('helpText');
			}
		}
	}
});

$(".food tr").mouseout(function()
{
	$this = $(this);
	if($this.contents().length > 2)
	{
		if($this.contents()[1].childNodes.length > 2){
			var p = $this.contents()[1].childNodes[1];
			$(p).addClass('hidden');
		}
	}
});

});


