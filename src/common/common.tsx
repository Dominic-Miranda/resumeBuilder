export function isLoggedin(){
    return true;
}

export function getUser(){
    let user = getLocalData('User');
    return user;
}

export function getUserName(){
    const user = getUser();
    return user.userName;
}

export function getLocalData(key:string){
    const data = localStorage.getItem(key);
    let parsedData = data ? JSON.parse(data) : null;
    return parsedData;
}

export function setLocalData(key:string,data:any){
    const localData = getLocalData(key);
    let dataToStore = {...localData,...data};
    localStorage.setItem(key,JSON.stringify(dataToStore));
}