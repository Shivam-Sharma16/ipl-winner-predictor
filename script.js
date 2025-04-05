let btn=document.querySelector('button')
let text=document.querySelector('#box h1')
let box=document.querySelector('#box ')
let arr=[{
    team:'csk',
    primary:'yellow',
    secondary:'green'
},
{
    team:'PBKS',
    primary:'red',
    secondary:'black'
},
{
    team:'RCB',
    primary:'green',
    secondary:'red'
},
{
    team:'MI',
    primary:'blue',
    secondary:'golden'
},
{
    team:'KKR',
    primary:'purple',
    secondary:'golden'
},
{
    team:'LSG',
    primary:'blue',
    secondary:'red'
},
{
    team:'DC',
    primary:'blue',
    secondary:'pink'
},
{
    team:'GT',
    primary:'pink',
    secondary:'green'
},
{
    team:'RR',
    primary:'black',
    secondary:'pink'
},
{
    team:'SRH',
    primary:'orange',
    secondary:'black'
}
]





btn.addEventListener('click',function(){
    let r1=Math.floor(Math.random()*10)
    let winner=arr[r1]
    text.innerHTML=`${winner.team}`
    text.style.color=`${winner.primary}`
    box.style.backgroundColor=`${winner.secondary}`
    
})