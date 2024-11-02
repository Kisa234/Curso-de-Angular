const skills:string[] =['Bash','Counter','Healing'];

interface Character{
    name:string;
    hp:number;
    skills:string[];
    hometown?:string;
}


const renzo:Character ={
    name: 'Renzo',
    hp :100,
    skills:['Bash','Counter']
}


renzo.hometown= 'Rivendell';

console.table(renzo,skills)


export{};