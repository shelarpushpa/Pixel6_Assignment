//Validate from
function validation() {
                var name = 
                    document.forms["RegForm"]["name"];
                var email = 
                    document.forms["RegForm"]["email"];
                var phone = 
                    document.forms["RegForm"]["phone"];
  
                if (check_name(name.value)) 
                  {
                     if(check_email(email.value))
                          {    
                             if(check_phone())
                                    {  
                                        if(Replace(name.value,phone.value))
                                                {
                                                     alert("Are you sure for submit from");
                                                 }
                                      //alert("all fields are valid");
                                      //console.log(email.value);
                                    } 
                          }
         
                  }
              else
                {
                    alert("not good");
                 }
 
            }
function check_name(fname)
{ 
   var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
   var ar=fname.split(' ');
   if(ar.length>=2 && regName.test(fname))
     {    var flag = true;
         for(i=0;i<ar.length;i++)
          {
              if(ar[i].length>=4)
                 {
                     flag = true;
             
                 }
              else
                {
                  var flag=false;
                }
            
           }
       if(flag==true)
         {
             return true;
        }
     }
 
    else
    {
      return false;
    } 
}
function check_email(email)
{
   var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(email)) {
		return true;
	}
   else
    {
      alert("please enter valid email");
    }
}
function isNumber(evt)
{
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
             alert("Only numbers to be allowed to type");
 
         return true;
}
function check_phone()
{
   //the user is not allowed to add spaces/brackets/hyphens, that should be handled by the script and it should happen in real time and not after all the 10 digits are typed in
   var phone = document.getElementById("phone").value;
   if(phone.length==10)
   {
  
     

       //make the number appear like (123) - 456 - 7890
       var cleaned = ('' + phone).replace(/\D/g, '');
       var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
       if (match) 
        {
           /*The next 3 digits represent the state in India. 
               only 36 valid number tey are put in arrray arr,in the from of key,value pair,key is 3 digit number and value is state if input number match with keys then

show the state name beside the mobile provider beside the box, eg Jio, Maharashtra.

everything else is an invalid number

*/
           const digit = [match[1],match[2],match[3]];
           var arr={901: "Andhra Pradesh", 902: "Arunachal Pradesh", 903: "Assam", 904: "Bihar", 905: "Chhattisgarh", 906: "Goa", 907: "Gujarat", 908: "Haryana", 909: "Himachal Pradesh", 910: "Jharkhand", 911: "Karnataka", 912: "Kerala", 913: "Madhya Pradesh", 914: "Maharashtra", 915: "Manipur", 916: "Meghalaya", 917: "Mizoram", 918: "Nagaland", 919: "Odisha", 920: "Punjab", 921: "Rajasthan", 922: "Sikkim", 923: "Tamil Nadu", 924: "Tamil Nadu", 925: "Telangana", 926: "Tripura", 927: "Uttar Pradesh", 928: "Uttarakhand", 929: "West Bengal", 930: "Andaman and Nicobar Island", 931: "Chandigarh", 932: "Dadra and Nagar Haveli and Daman and Diu", 933: "Delhi", 934: "Ladakh", 935: "Lakshadweep", 936: "Jammu and Kashmir"}
             
               var flag=true;
               for (var key in arr) 
                   {
                   if(key==digit[1])
                       {
                            flag=true;
                            console.log(key);
                       /*The first 3 digits represent the mobile provider and its logo should appear beside the box, based on following conditions

if the 3 digits fall between 621 - 799, then its Reliance Jio

if the 3 digits fall between 801 - 920, then its Idea

if the 3 digits fall between 921 - 999 then its Vodafone

everything else is an invalid number. */
                       if(digit[0]>621 && digit[0]<799)
                            {
                 //document.getElementById("demo").innerHTML = "You wrote: " +digit[0] ;
                                     document.getElementById("demo").innerHTML = " Reliance Jio ," +arr[key];
                              return true;
                             }
                       else if(digit[0]>801 && digit[0]<920)
                             {
                                   document.getElementById("demo").innerHTML = " Idea, "+arr[key] ;
                            return true;
                             }
                       else if(digit[0]>921 && digit[0]<999)
                            {
                                  document.getElementById("demo").innerHTML = " Vodafone, " +arr[key];
                           return true;
                            }  
                      else
                           {
                              alert("invalid number");
                           }  
                         
                    }
                   else
                       {
                          flag=false;
                       }
                  
                  }
             if(flag==true)
               {
                return true;
               }
           else
             {
               alert("invalid staecode");
             } 
                              
     }
    
   }
}

 function Replace(name,phone) {
                        var ar=name.split(' ');
                              document.write("Dear  "+ar[0]+" Thank you for your inquiry. A 4 digit verification number has been sent to your phone number: "+phone);
                                                  
                                         return true;
                                              }

