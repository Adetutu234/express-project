module.exports = (req,res,next)=>{
    const now = new Date();
    const day = now.getDay();
    const hour =  now.getHours();

    
  console.log(`Day: ${day}, Hour: ${hour}`); 

    if(day >= 1 && day <= 5 && hour >= 9 && hour < 17){
        next(); 
    }else{
        res.send("<h1>Sorry, the website is only available during working hours (Mon–Fri, 9–17)</h1>")
    }
}