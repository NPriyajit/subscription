export function dateDiff(d1,d2){
    if(d1.includes(d2)) return 0;
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    return  date2.getDate() - date1.getDate(); 
}
