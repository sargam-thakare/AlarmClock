# AlarmClock
This is Alarm Clock Application
![alarmRang](https://github.com/sargam-thakare/AlarmClock/assets/76519988/c8c627e4-3cbd-4665-b64f-69aa0d54fec2)
There are four main functionality in his app
1 To display the current time![home](https://github.com/sargam-thakare/AlarmClock/assets/76519988/31199661-5f60-4902-8816-ae2a702a3ff8)

2.User should be able to create the new alarm
3. All the created alarm should be listed here
4. User should be able to delete the alarm
5.If the current time matches with any of the alarm
popup should appear like alarm is ringing and that alarm
should be rmeove from the list

1. so for tthis alarm display I am using new date function in javascript and wrapper that function inside the setinterval timer for evry 1 second to modify the time

2. for user to create alarm i have created this input with type number with min and max values for hour 0 to 12 , 0-60 from min and Second and HTML select for am/pm vaues in dropdown
when user click on set alarm button there is onlick listener which will  take all the values from this input and create one array with 2 values 
1. is the time
2. second is the l
istitem which need to be added in list also one delete button is added on click of which it will remove the respective listitem from list
and this will add that list in DOM with the help of createElement and append child methods .so we are able to see this list there

4.Along with this setinterval timer for current time there is one more functionality this setinterval is taking care of checking any of the alarm isndie
alarm array with the current time it ccompares every itme with current time and if found it will remove that item from array with the help of index 
and from the dom with the help of remove child function and show a popup that alarm is ringing



