var persons = [{
    name:'John',
    surname:'Doe',
    gender:"male",
    age: 25,
    image:"imag/per.jpg",
    inRell:false,
    likes: 5 

    },{
    name:'Jane',
    surname:'Doe',
    gender:"female",
    age: 25,
    image:"imag/jane.jpg",
    inRell:false,
    likes: 5       
    
},{
    name:'Max',
    surname:'Musterman',
    gender:"male",
    age: 25,
    image:"imag/max.jpg",
    inRell:false,
    likes: 5       
    
},{
    name:'Maxina',
    surname:'Musterman',
    gender:"female",
    age: 25,
    image:"imag/maxina.jpg",
    inRell:false,
    likes: 5        
    
},{
    name:'Eli',
    surname:'Doberov',
    gender:"female",
    age: 26,
    image:"imag/per5.jpg",
    inRell:true,
    likes: 5       
    
},{
    name:'angy',
    surname:'parker',
    gender:"female",
    age: 21,
    image:"imag/per6.jpg",
    inRell:false ,
    likes: 5       
    
},{
    name:'Martin',
    surname:'Mow',
    gender:"male",
    age: 29,
    image:"imag/per7.jpg",
    inRell:false,
    likes: 5        
    
},{
    name:'Mersad',
    surname:'Jek',
    gender:"male",
    age: 32,
    image:"imag/per8.jpg",
    inRell:false ,
    likes: 5      
    
},{
    name:'Maria',
    surname:'Nik',
    gender:"female",
    age: 27,
    image:"imag/per9.jpg",
    inRell:true ,
    likes: 5       
    
},{
    name:'Jo',
    surname:'kim',
    gender:"male",
    age: 31,
    image:"imag/per10.jpg",
    inRell:false ,
    likes: 5       
    
},{
    name:'Kimiya',
    surname:'Ned',
    gender:"female",
    age: 18,
    image:"imag/per11.jpg",
    inRell:false,
    likes: 5        
    
},{
    name:'Yashar',
    surname:'Wener',
    gender:"male",
    age: 34,
    image:"imag/per12.jpg",
    inRell:false,
    likes: 5        
    
},{
    name:'Jenny',
    surname:'Gerenjer',
    gender:"female",
    age: 24,
    image:"imag/per13.jpg",
    inRell:false,
    likes: 5        
    
},{
    name:'Harry',
    surname:'Potter',
    gender:"male",
    age: 19,
    image:"imag/per14.jpg",
    inRell:false,
    likes: 5        
    
},{
    name:'Heimal',
    surname:'Zi',
    gender:"male",
    age: 17,
    image:"imag/per15.jpg",
    inRell:false,
    likes: 5        
    
},{
    name:'Alexandra',
    surname:'Lipovic',
    gender:"female",
    age: 30,
    image:"imag/per16.png",
    inRell:false,
    likes: 5        
    
},{
    name:'Alex',
    surname:'Lipovic',
    gender:"male",
    age: 35,
    image:"imag/per17.jpg",
    inRell:false,
    likes: 5        
    
},{
    name:'Klaus',
    surname:'Din',
    gender:"male",
    age: 19,
    image:"imag/per18.png",
    inRell:false,
    likes: 5        
    
},{
    name:'Anna',
    surname:'Beits',
    gender:"female",
    age: 41,
    image:"imag/per19.jpg",
    inRell:false,
    likes: 5        
    
},{
    name:'Sofia',
    surname:'Kelash',
    gender:"female",
    age: 29,
    image:"imag/per20.jpg",
    inRell:false,
    likes: 5        
    
}];
for(var i=0; i< persons.length; i++){
document.getElementById('per').innerHTML += ('<div class="col-lg-3 col-md-6 col-xs-12"> <img  style="border-bottom: 5px solid lightgray;width:200px;height:200px;border-radius: 25%;" src=" '+ persons[i].image +' " class="img-fluid alt="Responsive image"> <h2>'+ persons[i].name +'</h2> <p> Surname:  ' +persons[i].surname + ' </p> <p> Genders : '+ persons[i].gender +' </p> <P> Age : ' + persons[i].age + '</P> <button onclick="likes('+i+')">Like</button><span id="like"</span>'+persons[i].likes+'</a><hr></div> '
    ); 
};

function showOnlyfemale() {
  
  for (let i = 0; i < persons.length; i++) {

    if (persons[i].gender == "female") {
    document.getElementById('per1').innerHTML += ('<div class="col-lg-3 col-md-6 col-xs-12"> <img  style="border-bottom: 5px solid lightgray;width:200px;height:200px;border-radius: 25%;"  src=" '+ persons[i].image +' " class="img-fluid alt="Responsive image"> <h2>'+ persons[i].name +'</h2> <p> Surname:  ' +persons[i].surname + ' </p> <p> Genders : '+ persons[i].gender +' </p> <P> Age : ' + persons[i].age + '</P> <button id="clickme">Lik: 0</button></a> <hr></div>'); 

    }
  }
}

function showOnlymale() {
  
  for (let i = 0; i < persons.length; i++) {

    if (persons[i].gender == "male") {
    document.getElementById('per2').innerHTML += ('<div class="col-lg-3 col-md-6  col-xs-12"> <img  style="border-bottom: 5px solid lightgray;width:200px;height:200px;border-radius: 25%;" src=" '+ persons[i].image +' " class="img-fluid alt="Responsive image"> <h2>'+ persons[i].name +'</h2> <p> Surname:  ' +persons[i].surname + ' </p> <p> Genders : '+ persons[i].gender +' </p> <P> Age : ' + persons[i].age + '</P> <button id="clickme">Like 0</button></a> <hr></div>'); 

    }
  }
}
function findmatch(){
    for (let i = 0; i < persons.length; i++) {

    if ( persons[i].inRell==false) {
         document.getElementById('search1').innerHTML += ('<div class="col-lg-3 col-md-6  col-xs-12"> <img  style=width="200px" height="200px" src=" '+ persons[i].image +' " class="img-fluid alt="Responsive image"> <h2>'+ persons[i].name +'</h2> <p> Surname:  ' +persons[i].surname + ' </p> <p> Genders : '+ persons[i].gender +' </p> <P> Age : ' + persons[i].age + '</P> <button id="clickme">Like 0</button></a> <hr>'+'<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">50% mathch</div>'); 
        
    }

  }

     
}
for (var i = 0; i < persons.length; i++) {
    function likes(i){
    persons[i].likes+=1;
  document.getElementById('like').innerHTML=persons[i].likes;}
}

function search() {
        b = document.getElementById('age').value;
    for (let i = 0; i < persons.length; i++) {

    if (b<30 && b>20 ) {
        if(persons[i].age<30 & persons[i].age>20){
         document.getElementById('result').innerHTML += ('<div class="col-lg-3 col-md-6  col-xs-12"> <img  style=width="200px" height="200px" src=" '+ persons[i].image +' " class="img-fluid alt="Responsive image"> <h2>'+ persons[i].name +'</h2> <p> Surname:  ' +persons[i].surname + ' </p> <p> Genders : '+ persons[i].gender +' </p> <P> Age : ' + persons[i].age + '</P> <button id="clickme">Like 0</button></a> <hr>'+'<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">50% mathch</div>'); 
        }
        
    }
     if (b>30  ) {
        if(persons[i].age>30 ){
         document.getElementById('result').innerHTML += ('<div class="col-lg-3 col-md-6  col-xs-12"> <img  style=width="200px" height="200px" src=" '+ persons[i].image +' " class="img-fluid alt="Responsive image"> <h2>'+ persons[i].name +'</h2> <p> Surname:  ' +persons[i].surname + ' </p> <p> Genders : '+ persons[i].gender +' </p> <P> Age : ' + persons[i].age + '</P> <button id="clickme">Like 0</button></a> <hr>'+'<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">50% mathch</div>'); 
        }
        
    }
     if (b<20 ) {
        if(persons[i].age<20){
         document.getElementById('result').innerHTML += ('<div class="col-lg-3 col-md-6  col-xs-12"> <img  style=width="200px" height="200px" src=" '+ persons[i].image +' " class="img-fluid alt="Responsive image"> <h2>'+ persons[i].name +'</h2> <p> Surname:  ' +persons[i].surname + ' </p> <p> Genders : '+ persons[i].gender +' </p> <P> Age : ' + persons[i].age + '</P> <button id="clickme">Like 0</button></a> <hr>'+'<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">50% mathch</div>'); 
        }
        
    }
}

}
