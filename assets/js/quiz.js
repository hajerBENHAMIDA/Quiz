//recupation splashscreen
let home =document.getElementById('home');
    //recup intro
    let intro = document.getElementsByClassName('intro');
        //recup text et titre
        let title = document.getElementById('title');
        let texte =document.getElementById('texte');
//recup les slides de jeu
let questions = document.getElementById('questions');

    // recuperation vrai ou faux
    let responseHTML = document.getElementById("response");
    let response_text = document.getElementById("response_text");
    let referance = document.getElementById("referance");
    // recuperation question et choix 
        // recup question
        let questionHTML = document.getElementById("question");
        //recup choix
        let answerHTML = document.getElementById("answer");
        let grid = document.getElementsByClassName("grid");
        
        //recupreation de checkbox
        let labels = document.querySelectorAll("input[type='checkbox']+label");
        let answers = document.querySelectorAll("input[type='checkbox']");

// recuperation des boutton 
let button_next = document.getElementById("btn_suivant_next");
let button_pass = document.getElementById("btn_suivant_pass");
let button_lancer = document.getElementById("btn_lancer");

//recupation score et resultat 
let score =document.getElementById('score');
let resultat =document.getElementById('resultat');

// recuperation men
let men = document.getElementById("men");
let menA = document.getElementsByClassName("men");

// recuperation de flamme 
let flamme = document.getElementById("flamme");
//recupreation de numero de question
let bar = document.getElementById("num");


// let img_question = document.getElementById("img-question");
// let src_question_img = "" ;

let quiz = {
    // alternate:function(){
    //     if(grid[0].style.display === "grid"){
    //         this.next();
    //     }else{
    //         this.pass();
    //     }
    // },
    pass:function(){
        // button.src ="../assets/media/boutons/3.png";
        // button_next.style.display = "block" ;
        // button_pass.style.display = "none" ;

        if(this.check()){
            response_text.innerHTML =  "<h1 style='color :11532A;'>Excellent ! Bonne réponse ! </h1>  <span>" + this.question[this.index].response +"</span>";
            men.src = "assets/men_vert.png";
            flamme.src = "assets/vert.png";
            flamme.style.display="block";
            this.score += 1 ;
        }else{
            response_text.innerHTML ="<h1 style='color :801417;'>Oups ... ce n'est pas la bonne réponse !</h1> <span> \n  " + this.question[this.index].response +"</span>"  ;
            flamme.style.display="block";
            men.src = "assets/men_rouge.png";       

        } 
            this.ref();
            responseHTML.style.display = "grid";
            answerHTML.style.display = "none";
    },

    check : function(){
        let c  = this.question[this.index].correct ;  
        let ans = document.querySelectorAll("input[type='checkbox']");  
        for(let i=0; i< ans.length ; i++)
            if( c.indexOf(ans[i].value)>=0){
                if(!ans[i].checked)
                    return false ;
            }else{
                if(ans[i].checked)
                    return false ;

            }
               return true ;     
                 
    },
    ref : function(){
        referance.innerHTML = "";
        let r=this.question[this.index].ref;
        for(let i=0; i< r.length ; i++){
            referance.innerHTML = referance.innerHTML + r[i] + "<br>"
        }

    },

    next : function(){
        //  button_next.style.display = "" ;
        //  button_pass.style.display = "" ;
        flamme.src = "assets/rouge.png";
        if ( this.index < this.question.length -1 ){
            men.src = "assets/men_orange.png";
            // button.src ="../assets/media/boutons/2.png";

            this.index += 1 ;
            this.updateHtml();
            responseHTML.style.display = "none";
            answerHTML.style.display = "grid";
            flamme.style.display="none";

        }else{

            // home.style.display = "none";
            // console.log(this.score);
            resultat.innerHTML="Vous avez " + this.score +" bonne(s) réponse(s) ";
            score.style.display="block";

            quiz.index = 0 ;
            quiz.score = 0 ;
            this.updateHtml();  
            questions.style.display = "none";
            // button_next.style.display = "none" ;
            // button_pass.style.display = "none" ;
            // pilule.style.display = "none" ;
            // response.innerText = "game over";
            // questionHTML.innerText = "" ;
            // bar.style.width = 100+"%";
        }
        
          
    },
    updateHtml : function(){
        let a = this.question[this.index].answer ;
        questionHTML.innerHTML = this.question[this.index].title ;
        // img_question.src = "assets/media/questions/question-"+this.index +".png" ;
        for(let i=0; i<4 ;i++){
            let p = document.createElement("p"); 
            p.innerText = a[i] ; 
            labels[i].innerHTML = "" ;
            labels[i].appendChild(p);
            answers[i].value = a[i];
            answers[i].checked = false ;
        }
        // bar.style.width = ((this.index) * 100 / this.question.length )   + "%"; 
        bar.innerText = this.index + 1 + "/" +  this.question.length ;
    },
    lancer:function(){
        quiz.index=0;
        quiz.score=0;
        this.updateHtml();
        home.style.display="none";
         questions.style.display="block";
        answerHTML.style.display = "grid";
        responseHTML.style.display = "none";


    },
    relancer:function(){
        quiz.index=0;
        quiz.score=0;
        this.updateHtml();
        score.style.display="none";
        flamme.style.display="none";
        questions.style.display="block";
        answerHTML.style.display = "grid";
        responseHTML.style.display = "none";
        men.src = "assets/men_orange.png";
        //  home.style.display="block";
    }

} ;


quiz.index = 0 ;
quiz.score = 0 ;
quiz.question = [{
	//question 1
	title : "Parmi ces antibiotiques, lesquels agissent sur la synthèse du peptidoglycane ?",
    answer : ["β-lactamines","Glycopeptides","Tétracyclines","Acide fusidique"] ,
    correct : ["β-lactamines","Glycopeptides"],
    response : ["Les antibiotiques qui agissent sur la synthèse du peptidoglycane sont les β-lactamines et les Glycopeptides. La fosfomycine fait également partie de cette catégorie.<sup>1</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64"]

},{
	//question 2
	title : "Quelle protéine est inhibée par les β-lactamines ?",
    answer : ["Peptidyl-transférase","Topoisomérases","L’ARN polymérase","PLP"] ,
    correct : ["PLP"],
    response : ["Les β-lactamines inhibent les PLP (Protéines de liaison à la pénicilline) impliquées dans la synthèse du peptidoglycane par fixation covalente. <sup>1</sup> Une bactérie contient plusieurs variétés de PLP. L’affinité des β-lactamines pour les PLP peut varier selon les β-lactamines et selon les PLP. <sup>1</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64"]

},{
	//question 3
	title : "Parmi ces antibiotiques, lesquels inhibent la synthèse protéique ?",
    answer : ["Aminosides","Tétracyclines","Phénicolés","Quinolones"] ,
    correct : ["Aminosides","Tétracyclines","Phénicolés"],
    response : ["Les aminosides, les tétracyclines et les Phénicolés inhibent la synthèse protéique de même que les macrolides et l’acide fusidique.<sup>1</sup> Les aminosides et les tétracyclines se fixent sur les sous-unités 30 S du ribosome bactérien.<sup>1,2,3</sup> Les Phénicolés quant à eux sur la sous-unité 50 S.<sup>1,4</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64","2.Vaubourdolle M. Infectiologie. Paris : Le Moniteur de l'Internat ; 3ème édition; 2007. p. 749","3.Vaubourdolle M. Infectiologie. Paris : Le Moniteur de l'Internat ; 3ème édition; 2007. p. 862","4.P. Bustany, Ph. D. Chaumet-Riffaud. Internat, Nouveau Programme, Pharmacologie. Thoiry : Heures de France ; 1993. p.68-75"]

},{
	//question 4
	title : "Quels antibiotiques inhibent la synthèse protéique en se fixant sur la sous-unité 50 S du ribosome bactérien ?",
    answer : ["Aminosides","Tétracyclines","Macrolides","Acide fusidique"] ,
    correct : ["Macrolides"],
    response : ["Les Macrolides se fixent sur la sous-unité 50S et inhibent l’action de la peptidyl-transférase.<sup >1,5</sup> Les acides aminés apportés par l’ARN de transfert ne peuvent plus s’incorporer aux chaines polypeptidiques, et la synthèse protéique essentielle à la survie de la bactérie s’arrête.<sup>5</sup> Les macrolides sont essentiellement bactériostatiques.<sup>1,5</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64","2.Vaubourdolle M. Infectiologie. Paris : Le Moniteur de l'Internat ; 3ème édition; 2007. p. 749"]

},{
	//question 5
	title : "Comment les sulfamides inhibent-ils la croissance d’une souche bactérienne ?",
    answer : ["Ils libèrent des dérivés réactifs provoquant des coupures de l’ADN","Ils inhibent l’ARN polymérase","Ils inhibent la synthèse des folates","Ils inhibent le facteur d’élongation G"] ,
    correct : ["Ils inhibent la synthèse des folates"],
    response : ["Les sulfamides inhibent par antagonisme compétitif la synthèse des folates en inhibant la dihydroptérate synthétase.<sup>1,6</sup> Ce sont des agents bactériostatiques aux doses thérapeutiques.<sup>6</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64","6.Vaubourdolle M. Infectiologie. Paris : Le Moniteur de l'Internat ; 3ème édition; 2007. p. 847"]

},{
	//question 6
	title : "Quelles affirmations sont justes à propos des Sulfamides et du triméthoprime ?",
    answer : ["Ils agissent à deux niveaux différents de la synthèse des folates","L’association des deux assure un effet synergique","Ils inhibent la même enzyme","L’association des deux assure un effet antagoniste"] ,
    correct : ["Ils agissent à deux niveaux différents de la synthèse des folates","L’association des deux assure un effet synergique"],
    response : ["Les sulfamides et le triméthoprime agissent à deux niveaux différents de la synthèse des folates ce qui leur assure un effet synergique. Les sulfamides inhibent la dihydroptérate synthétase et le triméthoprime inhibe la dihydrofolate réductase.<sup>1</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64"]

},{
	//question 7
	title : "Parmi ces antibiotiques, lesquels agissent au niveau de la membrane bactérienne ?",
    answer : ["Quinolones","Rifamycines","Polymyxines","Fosfomycine"] ,
    correct : ["Fosfomycine"],
    response : ["Les Polymyxines se fixent sur les membranes bactériennes (en particulier la membrane externe des bactéries gram négatif) et les désorganisent. L’antibiotique le plus utilisé est la colistine.<sup>1</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64"]

},{
	//question 8
	title : "De quelle manière les tétracyclines inhibent-ils la synthèse protéique ?",
    answer : ["Ils se fixent sur la sous-unité 30 S","Ils Inhibent la fixation de l’ARNt sur le complexe ARNm-ribosome","Ils Inhibent l’action de la peptidyl-transférase","Ils se fixent sur la sous-unité 50 S"] ,
    correct : ["Ils se fixent sur la sous-unité 30 S","Ils Inhibent la fixation de l’ARNt sur le complexe ARNm-ribosome"],
    response : ["Les tétracyclines se fixent sur la sous-unité 30 S et inhibent la fixation du complexe aminoacide ARNt sur le complexe ARNm-ribosome.<sup>3</sup> Les tétracyclines sont des antibiotiques bactériostatiques.<sup>3</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64","3.Vaubourdolle M. Infectiologie. Paris : Le Moniteur de l'Internat ; 3ème édition; 2007. p. 862"]

},{
	//question 9
	title : "Quelles affirmations sont justes à propos des β-lactamines ?",
    answer : ["Elles se fixent de manières covalentes au PLP","Leur association avec un aminoside est synergique","Leur association avec un antibiotique bactériostatique peut avoir un effet antagoniste","Elles sont bactéricides"] ,
    correct : ["Elles se fixent de manières covalentes au PLP","Leur association avec un aminoside est synergique","Leur association avec un antibiotique bactériostatique peut avoir un effet antagoniste","Elles sont bactéricides"],
    response : ["Les β-lactamines se fixent de manière covalente sur les PLP. Leur association avec un aminoside est en règle synergique. Par contre leur association avec des antibiotiques bactériostatiques tels que le chloramphénicol ou les tétracyclines peut avoir un effet antagoniste.<sup>1</sup> Les β-lactamines sont bactéricides.<sup>1</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64"]

},{
	//question 10
	title : "Quelle affirmation est juste à propos des glycopeptides ?",
    answer : ["Ils se fixent de manière covalente sur des peptides impliqués dans la phase de polymérisation du peptidoglycane","Ils sont bactériostatiques","Ils se fixent de manière non covalente sur des peptides impliqués dans la phase de polymérisation du peptidoglycane","Ils inhibent par antagonisme compétitif des peptides impliqués dans la phase de polymérisation du peptidoglycane"] ,
    correct : ["Ils se fixent de manière non covalente sur des peptides impliqués dans la phase de polymérisation du peptidoglycane"],
    response : ["Les glycopeptides se fixent de manière non covalente sur la partie D-Ala-D-Ala terminale des peptides impliqués dans la phase de polymérisation du peptidoglycane. La vancomycine et la teicoplamine qui appartiennent à ce groupe sont bactéricides.<sup>1</sup>"],
    ref:["1.C.Nauciel. Bactériologie médicale. Paris : Masson ; 2000. p.55-64"]

}

];
