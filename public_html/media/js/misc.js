$.fn.hasAttr = function(name)
{
	return this.attr(name) !== undefined;
};

$(function()
{
	// scroll scrollable elements
	//$('.scrollable').jScrollPane({horizontalDragMaxWidth: 0, autoReinitialise: true});
	// focus user search field
	if ($('input:focus').length == 0)
	{
		$('#header input').focus();
	}
	$('.search').submit(function(event)
	{
		var userName = $(this).find('[name=user-name]').val();
		if (userName.replace(/^\s+|\s+$/, '') == '')
		{
			$(this).find('[name=user-name]').val('');
			event.preventDefault();
			event.stopPropagation();
		}
	});
});
