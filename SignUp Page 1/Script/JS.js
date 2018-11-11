function do_check()
{
  var str1 = $("#name1").val();
  var str2 = $("#password").val();
  var str3 = $("#mail").val();
  var str4 = str3.substr(0, str3.indexOf('@'));

  if (str2.includes(str1))
  {
    $(":text").removeClass("incorrect");
    alert("Name shouldn't be included in password!");
    return false;
  }

  if (str2.includes(str4))
  {
  	$(":text").removeClass("incorrect");
    alert("Email shouldn't be included in password!");
    return false;
  }
  return true;
}