/// @description Insert description here
// You can write your code in this editor
var my_id = async_load[? "id"];
if (my_id=="getWalletAddress")
{
	global.user_address = async_load[? "address"];
	
	if (global.user_address=="0")
	{
		show_debug_message("Denied access to wallet");
	}
	else
	{
		show_debug_message("Got user address as"+string(global.user_address));
	}
}