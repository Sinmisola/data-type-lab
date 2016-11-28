app={

 dataTypes:function(value)
{
  if (typeof(value)=='string')
            {
              return value.length;
            }
  else if (typeof(value)=='undefined'||(typeof(value) =='object' &&value===null))
            {
              return "no value";
            }
  else if (typeof(value)=='boolean')
            {
              return value;
            }
  else if(typeof value == 'number')
      {
            if(value < 100)
            {
               return "less than 100";
               
            }
            else if(value > 100)
            {
              return "more than 100";
            }
            else
            {
              return "equal to 100";
            }
       
      }
else if (typeof value == 'object')
      {
           if (value instanceof Array )
           {
             return value[2];
             
           }
           else 
           {
             return "undefined";
           }
      }

  else if (typeof(value)=='function')
            {
              return value(true);
            }
  
  
}

}

module.exports=app;