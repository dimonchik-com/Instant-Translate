/*
Instant Translit

Created by Dima Kuprijanov
www.ageent.ru

Visit http://ageent.ru/ for more information.
*/
var ageent_time_stamp=new String();var ageent_max_key=0;function translate_letter(evnt,obect,rules){if(rules==1){en_to_ru={"YE":"�","I":"�","G":"�","i":"�","#":"�","ye":"�","g":"�","A":"�","B":"�","V":"�","G":"�","D":"�","E":"�","YO":"�","ZH":"�","Z":"�","I":"�","J":"�","K":"�","L":"�","M":"�","N":"�","O":"�","P":"�","R":"�","S":"�","T":"�","U":"�","F":"�","X":"�","C":"�","CH":"�","SH":"�","SHH":"�","\'":"�","Y":"�","":"�","E":"�","YU":"�","YA":"�","a":"�","b":"�","v":"�","g":"�","d":"�","e":"�","yo":"�","zh":"�","z":"�","i":"�","j":"�","k":"�","l":"�","m":"�","n":"�","o":"�","p":"�","r":"�","s":"�","t":"�","u":"�","f":"�","x":"�","c":"�","ch":"�","sh":"�","shh":"�","":"�","y":"�","":"�","e":"�","yu":"�","ya":"�","":"�","":"�","-":"�"};}else if(rules==2){en_to_ru={"EH":"�","I":"�","i":"�","#":"�","eh":"�","A":"�","B":"�","V":"�","G":"�","D":"�","E":"�","JO":"�","ZH":"�","Z":"�","I":"�","JJ":"�","K":"�","L":"�","M":"�","N":"�","O":"�","P":"�","R":"�","S":"�","T":"�","U":"�","F":"�","KH":"�","C":"�","CH":"�","SH":"�","SHH":"�","'":"�","Y":"�","":"�","EH":"�","YU":"�","YA":"�","a":"�","b":"�","v":"�","g":"�","d":"�","e":"�","jo":"�","zh":"�","z":"�","i":"�","jj":"�","k":"�","l":"�","m":"�","n":"�","o":"�","p":"�","r":"�","s":"�","t":"�","u":"�","f":"�","kh":"�","c":"�","ch":"�","sh":"�","shh":"�","":"�","y":"�","":"�","eh":"�","yu":"�","ya":"�","":"�","":"�","-":"�"};}
if(ageent_max_key==0){for(x in en_to_ru){if(ageent_max_key<x.length){ageent_max_key=x.length;}}}
get_translate(evnt,en_to_ru,obect);function get_translate(evnt,en_to_ru,obect){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){txt=String.fromCharCode(evnt.keyCode)
event_to(txt,en_to_ru,obect);}else{var code=evnt.keyCode?evnt.keyCode:evnt.charCode?evnt.charCode:evnt.which?evnt.which:void 0;if(!evnt.which){return true;}
txt=String.fromCharCode(code);if(code&&code>33&&(!(evnt.ctrlKey||evnt.altKey))){ageent_time_stamp+=txt;if(ageent_time_stamp.length>ageent_max_key){ageent_time_stamp=ageent_time_stamp.substring(1);}
if(evnt.preventDefault){evnt.preventDefault();}
pretxt=obect.value.substring(0,obect.selectionStart);therest=obect.value.substr(obect.selectionEnd);for(i=0;i<ageent_time_stamp.length;i++){if(ageent_time_stamp.length==i+1){if(array_key_exists(ageent_time_stamp.substring(i),en_to_ru)){if((therest.length+pretxt.length)==0){obect.value=en_to_ru[ageent_time_stamp.substring(i)];return false;}
txt=en_to_ru[ageent_time_stamp.substring(i)];get_current_position=getCaretPos(obect);obect.value=pretxt+txt+therest;goTo(get_current_position+1,obect);}else{if((therest.length+pretxt.length)==0){obect.value=txt;return false;}
get_current_position=getCaretPos(obect);txt=txt;obect.value=pretxt+txt+therest;goTo(get_current_position+1,obect)}}else{if(array_key_exists(ageent_time_stamp.substring(i),en_to_ru)){get_current_position=getCaretPos(obect);txt=en_to_ru[ageent_time_stamp.substring(i)];if(array_key_exists(ageent_time_stamp.substring(i-1),en_to_ru)){pretxt=pretxt.substring(0,pretxt.length-(ageent_time_stamp.substring(i).length)+ageent_time_stamp.substring(i-1).length-1);cursor=(get_current_position-ageent_time_stamp.substring(i).length)+ageent_time_stamp.substring(i-1).length;}else{pretxt=pretxt.substring(0,pretxt.length-(ageent_time_stamp.substring(i).length-1));cursor=(get_current_position-ageent_time_stamp.substring(i).length)+2;}
obect.value=pretxt+txt+therest;goTo(cursor,obect);break;}}}}
return false;}}
function event_to(txt,en_to_ru,obect){ageent_time_stamp+=txt;if(ageent_time_stamp.length>ageent_max_key){ageent_time_stamp=ageent_time_stamp.substring(1);}
for(i=0;i<ageent_time_stamp.length;i++){if(ageent_time_stamp.length==i+1){if(array_key_exists(ageent_time_stamp.substring(i),en_to_ru)){txt=en_to_ru[ageent_time_stamp.substring(i)];event.keyCode=txt.charCodeAt();}else{event.keyCode=txt.charCodeAt();}}else{if(array_key_exists(ageent_time_stamp.substring(i),en_to_ru)){txt=en_to_ru[ageent_time_stamp.substring(i)];get_current_position=getCaretPos(obect);if(array_key_exists(ageent_time_stamp.substring(i-1),en_to_ru)){count_slice=(get_current_position-(ageent_time_stamp.substring(i).length)+ageent_time_stamp.substring(i-1).length-1);cursor=count_slice+1;}else{count_slice=(get_current_position-(ageent_time_stamp.substring(i).length-1));cursor=count_slice+1;}
first_text=obect.value.slice(0,count_slice);end_text=obect.value.slice(get_current_position,get_current_position+(obect.value.length-get_current_position));obect.value=first_text+txt+end_text;goTo(cursor,obect);event.keyCode="";break;}}}}
function getCaretPos(obj){obj.focus();if(obj.selectionStart)return obj.selectionStart;else if(document.selection)
{var sel=document.selection.createRange();var clone=sel.duplicate();sel.collapse(true);clone.moveToElementText(obj);clone.setEndPoint('EndToEnd',sel);return clone.text.length;}
return 0;}
function goTo(n,o){if(!document.all){var end=o.value.length;o.setSelectionRange(n,n);o.focus();}else{var r=o.createTextRange();r.collapse(true);r.moveStart("character",n);r.moveEnd("character",0);r.select();}}
function array_key_exists(key,search){if(!search||(search.constructor!==Array&&search.constructor!==Object)){return false;}
return search[key]!==undefined;}}