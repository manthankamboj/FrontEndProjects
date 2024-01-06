
    let y, yc='', cc='';
    function choice(y){
      if(y==1){
        yc = 'Rock';
        console.log('You have choosen Rock');
        document.getElementById("user").innerHTML = 'You choose Rock';
      }else if(y==2){
        let yc = 'Paper'
        console.log('You have choosen Paper');
        document.getElementById("user").innerHTML = 'You choose Paper';
      }else{
        let yc = 'Scissors';
        console.log('You have choosen Scissors')
        document.getElementById("user").innerHTML = 'You choose Scissors';;
      }

      let r = Math.random()*3;
      if(r>0 && r<=1){
        cc = 1;
        console.log('Comp have choosen Rock');
        document.getElementById("comp").innerHTML = 'Computer chooses Rock';
      }else if(r>1 && r<=2){
        cc = 2;
        console.log('Comp have choosen Paper');
        document.getElementById("comp").innerHTML = 'Computer chooses Paper';
      }
      else{
        cc = 3;
        console.log('Comp have choosen Scissors');
        document.getElementById("comp").innerHTML = 'Computer chooses Scissors';
      }

      if(y==1){
        if(cc==2){document.getElementById("result").innerHTML='COMPUTER WON';}
        else if(cc==3){document.getElementById("result").innerHTML='YOU WON';}
        else{document.getElementById("result").innerHTML=`IT'S A DRAW`;}
      }
      else if(y==2){
        if(cc==1){document.getElementById("result").innerHTML='YOU WON';}
        else if(cc==3){document.getElementById("result").innerHTML='COMPUTER WON';}
        else{document.getElementById("result").innerHTML=`IT'S A DRAW`;}
      }
      else{
        if(cc==1){document.getElementById("result").innerHTML='COMPUTER WON';}
        else if(cc==2){document.getElementById("result").innerHTML='YOU WON';}
        else{document.getElementById("result").innerHTML=`IT'S A DRAW`;}
      }
    }